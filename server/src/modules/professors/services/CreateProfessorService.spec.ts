import FakeProfessorsRepository from '@modules/professors/repositories/fakes/FakeProfessorsRepository';
import CreateProfessorService from '@modules/professors/services/CreateProfessorService';
import * as faker from 'faker';

const professorData = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe('Professor', () => {
  it('should be able to create a new professor', async () => {
    const fakeProfessorsRepository = new FakeProfessorsRepository();
    const createProfessor = new CreateProfessorService(
      fakeProfessorsRepository,
    );

    const professor = await createProfessor.execute(professorData);

    expect(professor).toHaveProperty('id');
  });
});
