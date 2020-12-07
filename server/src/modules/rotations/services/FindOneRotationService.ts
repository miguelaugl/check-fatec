import { injectable, inject } from 'tsyringe';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
// import AppError from '@shared/errors/AppError';
import IRotationsRepository from '@modules/rotations/repositories/IRotationsRepository';
import FindByIdDTO from '../dtos/FindByIdDTO';

@injectable()
class FindOneRotationService {
  constructor(
    @inject('RotationsRepository')
    private rotationsRepository: IRotationsRepository,
  ) {}

  public async execute({
    rotationId,
  }: FindByIdDTO): Promise<Rotation | undefined> {
    const rotation = this.rotationsRepository.findById({
      rotationId,
    });

    return rotation;
  }
}

export default FindOneRotationService;
