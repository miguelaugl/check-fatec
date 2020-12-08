import { Request, Response } from 'express';
import { container } from 'tsyringe';
import * as fs from 'fs';
import * as path from 'path';
import { multerConfig } from '@config/multer';

import CreateProfessorService from '@modules/professors/services/CreateProfessorService';
import AuthenticateProfessorService from '@modules/professors/services/AuthenticateProfessorService';
import { getRepository } from 'typeorm';
import Professor from '../../typeorm/entities/Professor';

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

  public async upload(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const professorsRepository = getRepository(Professor);
    const user = await professorsRepository.findOne(userId);

    if (!user) {
      return response.status(404).json({ message: 'An error ocurred' });
    }

    if (request.file) {
      if (user?.avatar) {
        const userAvatarFilePath = path.join(
          multerConfig.directory,
          user.avatar,
        );

        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

        if (userAvatarFileExists) {
          await fs.promises.unlink(userAvatarFilePath);
        }
      }
    }

    const { filename } = request.file;

    user.avatar = filename;

    await professorsRepository.save(user);

    return response.status(200).json(user);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const login = container.resolve(AuthenticateProfessorService);

    const loginInfo = await login.execute({ email, password });

    return response.status(201).json(loginInfo);
  }
}
