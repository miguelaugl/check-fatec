import { uuid } from 'uuidv4';

import Student from '@modules/students/infra/typeorm/entities/Student';
import CreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';

class FakeStudentsRepository {
  private students: Student[] = [];

  public async create({
    email,
    name,
    password,
    ra,
  }: CreateStudentDTO): Promise<Student> {
    const student = new Student();

    Object.assign(student, { id: uuid(), email, name, password, ra });

    this.students.push(student);

    return student;
  }
}

export default FakeStudentsRepository;
