import Professor from '@modules/professors/infra/typeorm/entities/Professor';

import CreateProfessorDTO from '@modules/professors/dtos/CreateProfessorDTO';
import FindOneProfessorDTO from '@modules/professors/dtos/FindOneProfessorDTO';

export default interface IProfessorsRepository {
  create(data: CreateProfessorDTO): Promise<Professor>;
  findOne(data: FindOneProfessorDTO): Promise<Professor | undefined>;
}
