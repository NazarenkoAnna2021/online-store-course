import { Router } from 'express';
import { deviceController } from '../controllers/deviceController';
import { tokenMiddleware } from '../middleware/tokenMiddleware';

const deviceRouter = Router();


deviceRouter.post('/', deviceController.create);
deviceRouter.get('/get', deviceController.getAll);
deviceRouter.get('/:id', deviceController.getOne);

export default deviceRouter;