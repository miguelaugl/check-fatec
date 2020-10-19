import Example from '@modules/examples/infra/typeorm/entities/Example';

import ICreateExampleDTO from '@modules/examples/dtos/ICreateExampleDTO';

export default interface IExamplesRepository {
  create(data: ICreateExampleDTO): Promise<Example>;
  findByTitle(title: string): Promise<Example | undefined>;
}
