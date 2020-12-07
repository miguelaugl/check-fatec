import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRotationService from '@modules/rotations/services/CreateRotationService';
import FindOneRotationService from '@modules/rotations/services/FindOneRotationService';

export default class RotationsController {
  public async findOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { rotationId } = request.body;

    const findRotation = container.resolve(FindOneRotationService);

    const rotation = findRotation.execute({ rotationId });

    return response.status(201).json(rotation);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      subject,
      labNumber,
      initTime,
      endTime,
      professor,
      students,
    } = request.body;

    const createRotation = container.resolve(CreateRotationService);

    const rotation = await createRotation.execute({
      subject,
      labNumber,
      initTime,
      endTime,
      professor,
      students,
    });

    return response.status(201).json(rotation);
  }
}
