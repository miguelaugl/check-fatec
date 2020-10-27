import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import studentsRouter from '@modules/students/infra/http/routes/students.routes';

const routes = Router();

routes.get('/', ensureAuthenticated, (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/students', studentsRouter);

export default routes;
