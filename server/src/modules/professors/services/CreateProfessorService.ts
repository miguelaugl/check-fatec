import { injectable, inject } from 'tsyringe';

import Professor from '@modules/professors/infra/typeorm/entities/Professor';
// import AppError from '@shared/errors/AppError';
import IProfessorsRepository from '@modules/professors/repositories/IProfessorsRepository';
import hashPassword from '@shared/utils/hashPassword';
import CreateProfessorDTO from '../dtos/CreateProfessorDTO';

@injectable()
class CreateProfessorService {
  constructor(
    @inject('ProfessorsRepository')
    private professorsRepository: IProfessorsRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: CreateProfessorDTO): Promise<Professor> {
    const hashedPassword = hashPassword(password);

    const professor = this.professorsRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return professor;
  }
}

export default CreateProfessorService;
