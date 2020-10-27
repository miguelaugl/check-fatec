import { Router } from 'express';

import StudentsController from '@modules/students/infra/http/controller/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

// studentsRouter.get('/', studentsController.find);
studentsRouter.post('/', studentsController.create);

export default studentsRouter;
