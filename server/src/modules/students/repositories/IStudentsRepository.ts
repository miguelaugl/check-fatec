import Student from '@modules/students/infra/typeorm/entities/Student';

import CreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';
import FindOneStudentDTO from '@modules/students/dtos/FindOneStudentDTO';

export default interface IStudentsRepository {
  create(data: CreateStudentDTO): Promise<Student>;
  findOne(data: FindOneStudentDTO): Promise<Student | undefined>;
}
