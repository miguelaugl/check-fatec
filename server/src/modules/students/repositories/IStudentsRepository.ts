import Student from '@modules/students/infra/typeorm/entities/Student';

import CreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';

export default interface IStudentsRepository {
  create(data: CreateStudentDTO): Promise<Student>;
}
