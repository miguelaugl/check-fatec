import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';

import CreateRotationDTO from '@modules/rotations/dtos/CreateRotationDTO';
import StudentCheckInDTO from '@modules/rotations/dtos/StudentCheckInDTO';

export default interface IRotationsRepository {
  create(data: CreateRotationDTO): Promise<Rotation>;
  studentCheckIn(data: StudentCheckInDTO): Promise<Rotation | undefined>;
}
