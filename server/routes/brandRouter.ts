import { Router } from 'express';
const brandRouter = Router();
import { brandController } from '../controllers/brandController';
import { tokenMiddleware } from '../middleware/tokenMiddleware';

brandRouter.post('/', tokenMiddleware('ADMIN'), brandController.create);
brandRouter.get('/get', brandController.getAll);

export default brandRouter;