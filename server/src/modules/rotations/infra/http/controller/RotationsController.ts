import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRotationService from '@modules/rotations/services/CreateRotationService';
import StudentCheckInService from '@modules/rotations/services/StudentCheckInService';
import { getRepository } from 'typeorm';
import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
import Professor from '@modules/professors/infra/typeorm/entities/Professor';

export default class RotationsController {
  public async studentCheckIn(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { rotationId } = request.params;
    const { id: studentId } = request.user;

    const studentCheckIn = container.resolve(StudentCheckInService);

    console.log(rotationId);

    const rotation = await studentCheckIn.execute({ rotationId, studentId });

    return response.json(rotation);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, labNumber, initTime, endTime, course } = request.body;

    const { id } = request.user;

    const createRotation = container.resolve(CreateRotationService);

    const rotation = await createRotation.execute({
      subject,
      labNumber,
      initTime,
      endTime,
      professor: id,
      course,
    });

    return response.status(201).json(rotation);
  }

  public async getRotationsProfessor(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const professorId = request.user.id;

    const professorsRepository = getRepository(Professor);
    const rotationsRepository = getRepository(Rotation);

    const professor = await professorsRepository.findOne(professorId);

    const rotations = await rotationsRepository.find({
      relations: ['students'],
      where: {
        professor,
      },
    });

    return response.status(200).json(rotations);
  }
}
