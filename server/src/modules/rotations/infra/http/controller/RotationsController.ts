import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRotationService from '@modules/rotations/services/CreateRotationService';
import StudentCheckInService from '@modules/rotations/services/StudentCheckInService';

export default class RotationsController {
  public async studentCheckIn(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { rotationId } = request.body;
    const { id: studentId } = request.user;

    const studentCheckIn = container.resolve(StudentCheckInService);

    const rotation = await studentCheckIn.execute({ rotationId, studentId });

    return response.json(rotation);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, labNumber, initTime, endTime } = request.body;

    const { id } = request.user;

    const createRotation = container.resolve(CreateRotationService);

    const rotation = await createRotation.execute({
      subject,
      labNumber,
      initTime,
      endTime,
      professor: id,
    });

    return response.status(201).json(rotation);
  }
}
