import { getRepository, Repository } from 'typeorm';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
import CreateRotationDTO from '@modules/rotations/dtos/CreateRotationDTO';
import FindByIdDTO from '@modules/rotations/dtos/FindByIdDTO';
import IRotationsRepository from './IRotationsRepository';

class RotationsRepository implements IRotationsRepository {
  private ormRepository: Repository<Rotation>;

  constructor() {
    this.ormRepository = getRepository(Rotation);
  }

  public async findById({
    rotationId,
  }: FindByIdDTO): Promise<Rotation | undefined> {
    return this.ormRepository.findOne(rotationId);
  }

  public async create({
    subject,
    labNumber,
    initTime,
    endTime,
    professor,
    students,
  }: CreateRotationDTO): Promise<Rotation> {
    const rotation = this.ormRepository.create({
      subject,
      labNumber,
      initTime,
      endTime,
      professor,
      students,
    });

    await this.ormRepository.save(rotation);

    return rotation;
  }
}

export default RotationsRepository;
