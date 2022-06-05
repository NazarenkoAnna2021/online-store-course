import { Router } from 'express';
const typeRouter = Router();
import { typeController } from '../controllers/typeController';


typeRouter.post('/', typeController.create);
typeRouter.get('/get', typeController.getAll);

export default typeRouter;