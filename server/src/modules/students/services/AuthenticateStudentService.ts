import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import AuthenticateStudentDTO from '@modules/students/dtos/AuthenticateStudentDTO';

import AppError from '@shared/errors/AppError';
import authConfig from '../../../config/auth';

import Student from '../infra/typeorm/entities/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Student;
  token: string;
}

@injectable()
class AuthenticateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    email,
    password,
  }: AuthenticateStudentDTO): Promise<Response> {
    const user = await this.studentsRepository.findOne({ email, password });

    if (!user) {
      throw new AppError('Incorrect login combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect login combination.');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateStudentService;
