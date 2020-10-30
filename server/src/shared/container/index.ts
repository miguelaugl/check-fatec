import { container } from 'tsyringe';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import StudentsRepository from '@modules/students/repositories/StudentsRepository';
import IProfessorsRepository from '@modules/professors/repositories/IProfessorsRepository';
import ProfessorsRepository from '@modules/professors/repositories/ProfessorsRepository';

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);

container.registerSingleton<IProfessorsRepository>(
  'ProfessorsRepository',
  ProfessorsRepository,
);
