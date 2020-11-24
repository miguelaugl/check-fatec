import { getRepository, Repository } from 'typeorm';

import Student from '@modules/students/infra/typeorm/entities/Student';
import CreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';
import FindOneStudentDTO from '@modules/students/dtos/FindOneStudentDTO';
import IStudentsRepository from './IStudentsRepository';

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authconfig from '../../../config/auth';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async findOne({
    email,
    password,
  }: FindOneStudentDTO): Promise<Student | undefined> {
    return this.ormRepository.findOne({
      where: [{ email }, { password }],
    });
  }

  public async create({
    email,
    name,
    password,
    ra,
  }: CreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({ email, name, password, ra });

    await this.ormRepository.save(student);

    delete student.password;

    return student;
  }
}

export default StudentsRepository;
