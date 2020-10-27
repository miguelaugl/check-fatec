import FakeStudentsRepository from '@modules/students/repositories/fakes/FakeStudentsRepository';
import CreateStudentService from '@modules/students/services/CreateStudentService';
import * as faker from 'faker';

const studentData = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  ra: String(faker.random.number(13)),
};

describe('Student', () => {
  it('should be able to create a new student', async () => {
    const fakeStudentsRepository = new FakeStudentsRepository();
    const createStudent = new CreateStudentService(fakeStudentsRepository);

    const student = await createStudent.execute(studentData);

    expect(student).toHaveProperty('id');
  });
});
