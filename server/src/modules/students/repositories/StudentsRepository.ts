import { getRepository, Repository } from 'typeorm';

import Student from '@modules/students/infra/typeorm/entities/Student';
import CreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';
import IStudentsRepository from './IStudentsRepository';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  // public async find(): Promise<Student[]> {
  //   const students = this.ormRepository.find();

  //   return students;
  // }

  public async create({
    email,
    name,
    password,
    ra,
  }: CreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({ email, name, password, ra });

    await this.ormRepository.save(student);

    return student;
  }
}

export default StudentsRepository;
