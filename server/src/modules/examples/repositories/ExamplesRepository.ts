import { getRepository, Repository } from 'typeorm';

import Example from '@modules/examples/infra/typeorm/entities/Example';
import ICreateExampleDTO from '@modules/examples/dtos/ICreateExampleDTO';
import IExamplesRepository from './IExamplesRepository';

class ExamplesRepository implements IExamplesRepository {
  private ormRepository: Repository<Example>;

  constructor() {
    this.ormRepository = getRepository(Example);
  }

  public async create({ title }: ICreateExampleDTO): Promise<Example> {
    const example = this.ormRepository.create({ title });

    await this.ormRepository.save(example);

    return example;
  }

  public async findByTitle(title: string): Promise<Example | undefined> {
    const checkIfExampleAlreadyExists = this.ormRepository.findOne({ title });

    return checkIfExampleAlreadyExists;
  }
}

export default ExamplesRepository;
