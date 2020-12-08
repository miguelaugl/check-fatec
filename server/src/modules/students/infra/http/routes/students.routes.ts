import { Router } from 'express';
import { uploads } from '@config/multer';

import StudentsController from '@modules/students/infra/http/controller/StudentsController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const studentsRouter = Router();
const studentsController = new StudentsController();

// studentsRouter.get('/', studentsController.find);
studentsRouter.post('/', studentsController.create);
studentsRouter.post('/login', studentsController.login);

studentsRouter.patch(
  '/',
  ensureAuthenticated,
  uploads.single('file'),
  studentsController.upload,
);

export default studentsRouter;
