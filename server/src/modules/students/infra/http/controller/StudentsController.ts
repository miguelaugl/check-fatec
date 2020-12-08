import { Request, Response } from 'express';
import { container } from 'tsyringe';
import * as fs from 'fs';
import * as path from 'path';
import { multerConfig } from '@config/multer';

import CreateStudentService from '@modules/students/services/CreateStudentService';
import AuthenticateStudentService from '@modules/students/services/AuthenticateStudentService';
import { getRepository } from 'typeorm';
import Student from '../../typeorm/entities/Student';

export default class StudentsController {
  // public async find(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, ra } = request.body;

    const createStudent = container.resolve(CreateStudentService);

    const student = await createStudent.execute({ name, email, password, ra });

    return response.status(201).json(student);
  }

  public async upload(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    console.log(request.file);

    const studentsRepository = getRepository(Student);
    const user = await studentsRepository.findOne(userId);

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

    console.log(request.file);

    const { filename } = request.file;

    user.avatar = filename;

    await studentsRepository.save(user);

    return response.status(200).json(user);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const login = container.resolve(AuthenticateStudentService);

    const loginInfo = await login.execute({ email, password });

    return response.status(201).json(loginInfo);
  }
}
