import { uuid } from 'uuidv4';

import Example from '@modules/examples/infra/typeorm/entities/Example';
import ICreateExampleDTO from '@modules/examples/dtos/ICreateExampleDTO';

class FakeExamplesRepository {
  private examples: Example[] = [];

  public async create({ title }: ICreateExampleDTO): Promise<Example> {
    const example = new Example();

    Object.assign(example, { id: uuid(), title });

    this.examples.push(example);

    return example;
  }

  public async findByTitle(title: string): Promise<Example | undefined> {
    const checkIfExampleAlreadyExists = this.examples.find(
      example => example.title === title,
    );

    return checkIfExampleAlreadyExists;
  }
}

export default FakeExamplesRepository;
