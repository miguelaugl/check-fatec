import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import AuthenticateProfessorsDTO from '@modules/professors/dtos/AuthenticateProfessorsDTO';

import AppError from '@shared/errors/AppError';
import authConfig from '../../../config/auth';

import Professor from '../infra/typeorm/entities/Professor';
import IProfessorsRepository from '../repositories/IProfessorsRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Professor;
  token: string;
}

@injectable()
class AuthenticateProfessorService {
  constructor(
    @inject('ProfessorsRepository')
    private professorsRepository: IProfessorsRepository,
  ) {}

  public async execute({
    email,
    password,
  }: AuthenticateProfessorsDTO): Promise<Response> {
    const user = await this.professorsRepository.findOne({ email, password });

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

export default AuthenticateProfessorService;
