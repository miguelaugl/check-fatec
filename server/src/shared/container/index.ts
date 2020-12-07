import { container } from 'tsyringe';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import StudentsRepository from '@modules/students/repositories/StudentsRepository';
import IProfessorsRepository from '@modules/professors/repositories/IProfessorsRepository';
import ProfessorsRepository from '@modules/professors/repositories/ProfessorsRepository';
import IRotationsRepository from '@modules/rotations/repositories/IRotationsRepository';
import RotationsRepository from '@modules/rotations/repositories/RotationsRepository';

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);

container.registerSingleton<IProfessorsRepository>(
  'ProfessorsRepository',
  ProfessorsRepository,
);

container.registerSingleton<IRotationsRepository>(
  'RotationsRepository',
  RotationsRepository,
);
