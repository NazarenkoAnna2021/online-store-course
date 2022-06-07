import { Router } from 'express';
const typeRouter = Router();
import { typeController } from '../controllers/typeController';
import { tokenMiddleware } from '../middleware/tokenMiddleware';


typeRouter.post('/', tokenMiddleware('ADMIN'), typeController.create);
typeRouter.get('/get', typeController.getAll);

export default typeRouter;