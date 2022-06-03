import { Router } from 'express';
const brandRouter = Router();
import { brandController } from '../controllers/brandController';

brandRouter.post('/create', brandController.create);
brandRouter.get('/get', brandController.getAll);

export default brandRouter;