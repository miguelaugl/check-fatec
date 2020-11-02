import { getRepository, Repository } from 'typeorm';

import Professor from '@modules/professors/infra/typeorm/entities/Professor';
import CreateProfessorDTO from '@modules/professors/dtos/CreateProfessorDTO';
import IProfessorsRepository from './IProfessorsRepository';

class ProfessorsRepository implements IProfessorsRepository {
  private ormRepository: Repository<Professor>;

  constructor() {
    this.ormRepository = getRepository(Professor);
  }

  // public async find(): Promise<Professor[]> {
  //   const students = this.ormRepository.find();

  //   return students;
  // }

  public async create({
    email,
    cpf,
    name,
    password,
  }: CreateProfessorDTO): Promise<Professor> {
    const professor = this.ormRepository.create({ email, cpf, name, password });

    await this.ormRepository.save(professor);

    delete professor.password;

    return professor;
  }
}

export default ProfessorsRepository;
