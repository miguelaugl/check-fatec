import { Router } from 'express';

import ProfessorsController from '@modules/professors/infra/http/controller/ProfessorsController';

const professorsRouter = Router();
const professorsController = new ProfessorsController();

// professorsRouter.get('/', professorsController.find);
professorsRouter.post('/', professorsController.create);

export default professorsRouter;
