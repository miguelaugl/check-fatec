import { Router } from 'express';

import RotationsController from '@modules/rotations/infra/http/controller/RotationsController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const rotationsRouter = Router();
const rotationsController = new RotationsController();

rotationsRouter.get(
  '/:id',
  ensureAuthenticated,
  rotationsController.studentCheckIn,
);
rotationsRouter.post('/', rotationsController.create);

export default rotationsRouter;
