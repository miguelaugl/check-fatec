import { uuid } from 'uuidv4';

import Professor from '@modules/professors/infra/typeorm/entities/Professor';
import CreateProfessorDTO from '@modules/professors/dtos/CreateProfessorDTO';

class FakeProfessorsRepository {
  private professors: Professor[] = [];

  public async create({
    email,
    cpf,
    name,
    password,
  }: CreateProfessorDTO): Promise<Professor> {
    const professor = new Professor();

    Object.assign(professor, { id: uuid(), email, cpf, name, password });

    this.professors.push(professor);

    return professor;
  }
}

export default FakeProfessorsRepository;
