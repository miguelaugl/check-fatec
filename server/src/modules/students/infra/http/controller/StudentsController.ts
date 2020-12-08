import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentService from '@modules/students/services/CreateStudentService';
import AuthenticateStudentService from '@modules/students/services/AuthenticateStudentService';

export default class StudentsController {
  // public async find(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, ra } = request.body;
    const avatar = request.file?.originalname;

    const createStudent = container.resolve(CreateStudentService);

    const student = await createStudent.execute({ name, email, password, ra, avatar });

    return response.status(201).json(student);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const login = container.resolve(AuthenticateStudentService);

    const loginInfo = await login.execute({ email, password });

    return response.status(201).json(loginInfo);
  }
}
