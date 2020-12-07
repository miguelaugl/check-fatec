import { Router } from 'express';

import RotationsController from '@modules/rotations/infra/http/controller/RotationsController';

const rotationsRouter = Router();
const rotationsController = new RotationsController();

rotationsRouter.get('/:id', rotationsController.findOne);
rotationsRouter.post('/', rotationsController.create);

export default rotationsRouter;
