import { injectable, inject } from 'tsyringe';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
// import AppError from '@shared/errors/AppError';
import IRotationsRepository from '@modules/rotations/repositories/IRotationsRepository';
import StudentCheckInDTO from '../dtos/StudentCheckInDTO';

@injectable()
class StudentCheckInService {
  constructor(
    @inject('RotationsRepository')
    private rotationsRepository: IRotationsRepository,
  ) {}

  public async execute({
    rotationId,
    studentId,
  }: StudentCheckInDTO): Promise<Rotation | undefined> {
    console.log(rotationId);

    const rotation = await this.rotationsRepository.studentCheckIn({
      rotationId,
      studentId,
    });

    return rotation;
  }
}

export default StudentCheckInService;
