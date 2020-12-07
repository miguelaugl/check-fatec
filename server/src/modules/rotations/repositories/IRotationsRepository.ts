import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';

import CreateRotationDTO from '@modules/rotations/dtos/CreateRotationDTO';
import FindByIdDTO from '@modules/rotations/dtos/FindByIdDTO';

export default interface IRotationsRepository {
  create(data: CreateRotationDTO): Promise<Rotation>;
  findById(data: FindByIdDTO): Promise<Rotation | undefined>;
}
