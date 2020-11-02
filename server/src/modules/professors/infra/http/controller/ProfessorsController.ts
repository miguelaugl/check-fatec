import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProfessorService from '@modules/professors/services/CreateProfessorService';

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
}
