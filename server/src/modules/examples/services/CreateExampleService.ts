import { injectable, inject } from 'tsyringe';

import Example from '@modules/examples/infra/typeorm/entities/Example';
import AppError from '@shared/errors/AppError';
import IExamplesRepository from '@modules/examples/repositories/IExamplesRepository';
import ICreateExampleDTO from '../dtos/ICreateExampleDTO';

@injectable()
class CreateExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute({ title }: ICreateExampleDTO): Promise<Example> {
    const checkIfTitleAlreadyExists = await this.examplesRepository.findByTitle(
      title,
    );

    if (checkIfTitleAlreadyExists) {
      throw new AppError('This title is already used.', 404);
    }

    const example = this.examplesRepository.create({ title });

    return example;
  }
}

export default CreateExampleService;
