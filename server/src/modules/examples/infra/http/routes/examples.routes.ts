import { Router } from 'express';

import ExamplesController from '@modules/examples/infra/http/controller/ExamplesController';

const examplesRouter = Router();
const examplesController = new ExamplesController();

examplesRouter.post('/', examplesController.create);

export default examplesRouter;
