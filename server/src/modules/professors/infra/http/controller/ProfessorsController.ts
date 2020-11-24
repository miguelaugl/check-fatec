import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProfessorService from '@modules/professors/services/CreateProfessorService';
import AuthenticateProfessorService from '@modules/professors/services/AuthenticateProfessorService';

export default class ProfessorsController {
  // public async find(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password } = request.body;

    const createProfessor = container.resolve(CreateProfessorService);

    const professor = await createProfessor.execute({
      name,
      email,
      cpf,
      password,
    });

    return response.status(201).json(professor);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const login = container.resolve(AuthenticateProfessorService);

    const loginInfo = await login.execute({ email, password });

    return response.status(201).json(loginInfo);
  }
}
