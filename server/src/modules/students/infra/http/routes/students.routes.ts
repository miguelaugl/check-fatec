import { Router } from 'express';

import StudentsController from '@modules/students/infra/http/controller/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

// studentsRouter.get('/', studentsController.find);
studentsRouter.post('/', studentsController.create);
studentsRouter.post('/login', studentsController.login);

export default studentsRouter;
