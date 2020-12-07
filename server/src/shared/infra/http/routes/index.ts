import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import studentsRouter from '@modules/students/infra/http/routes/students.routes';
import professorsRouter from '@modules/professors/infra/http/routes/professors.routes';
import rotationsRouter from '@modules/rotations/infra/http/routes/rotations.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/professors', professorsRouter);
routes.use('/rotations', ensureAuthenticated, rotationsRouter);

export default routes;
