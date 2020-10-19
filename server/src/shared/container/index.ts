import { container } from 'tsyringe';

import IExamplesRepository from '@modules/examples/repositories/IExamplesRepository';
import ExamplesRepository from '@modules/examples/repositories/ExamplesRepository';

container.registerSingleton<IExamplesRepository>(
  'ExamplesRepository',
  ExamplesRepository,
);
