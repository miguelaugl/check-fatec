import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExampleService from '@modules/examples/services/CreateExampleService';

export default class ExamplesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createExample = container.resolve(CreateExampleService);

    const example = await createExample.execute({
      title,
    });

    return response.status(201).json(example);
  }
}
