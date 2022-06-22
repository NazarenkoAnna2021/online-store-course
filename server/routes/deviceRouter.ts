import { Router } from 'express';
const deviceRouter = Router();
import { deviceController } from '../controllers/deviceController';
import { tokenMiddleware } from '../middleware/tokenMiddleware';

deviceRouter.post('/',tokenMiddleware('ADMIN'), deviceController.create);
deviceRouter.get('/get', deviceController.getAll);
deviceRouter.get('/:id', deviceController.getOne);

export default deviceRouter;