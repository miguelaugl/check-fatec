import { injectable, inject } from 'tsyringe';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
// import AppError from '@shared/errors/AppError';
import IRotationsRepository from '@modules/rotations/repositories/IRotationsRepository';
import CreateRotationDTO from '../dtos/CreateRotationDTO';

@injectable()
class CreateRotationService {
  constructor(
    @inject('RotationsRepository')
    private rotationsRepository: IRotationsRepository,
  ) {}

  public async execute({
    subject,
    labNumber,
    initTime,
    endTime,
    professor,
    course,
  }: CreateRotationDTO): Promise<Rotation> {
    const rotation = this.rotationsRepository.create({
      subject,
      labNumber,
      initTime,
      endTime,
      professor,
      course,
    });

    return rotation;
  }
}

export default CreateRotationService;
