import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentService from '@modules/students/services/CreateStudentService';

export default class StudentsService {
  // public async find(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, ra } = request.body;

    const createStudent = container.resolve(CreateStudentService);

    const student = await createStudent.execute({ name, email, password, ra });

    return response.status(201).json(student);
  }
}
