import { injectable, inject } from 'tsyringe';

import Student from '@modules/students/infra/typeorm/entities/Student';
// import AppError from '@shared/errors/AppError';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import hashPassword from '@shared/utils/hashPassword';
import CreateStudentDTO from '../dtos/CreateStudentDTO';

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    ra,
    avatar
  }: CreateStudentDTO): Promise<Student> {
    const hashedPassword = hashPassword(password);
    const student = this.studentsRepository.create({
      name,
      email,
      password: hashedPassword,
      ra,
      avatar
    });

    return student;
  }
}

export default CreateStudentService;
