import { Router } from 'express';
const deviseRouter = Router();
import { deviseController } from '../controllers/deviseController';


deviseRouter.post('/create', deviseController.create);
deviseRouter.get('/get', deviseController.getAll);
deviseRouter.get('/:id', deviseController.getOne);

export default deviseRouter;