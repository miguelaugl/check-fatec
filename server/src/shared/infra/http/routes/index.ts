import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import examplesRouter from '@modules/examples/infra/http/routes/examples.routes';

const routes = Router();

routes.get('/', ensureAuthenticated, (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/examples', examplesRouter);

export default routes;
