import Professor from '@modules/professors/infra/typeorm/entities/Professor';

import CreateProfessorDTO from '@modules/professors/dtos/CreateProfessorDTO';

export default interface IProfessorsRepository {
  create(data: CreateProfessorDTO): Promise<Professor>;
}
