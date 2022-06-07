import { Router } from 'express';
const userRouter = Router();
import { userController } from '../controllers/userController';
import { tokenMiddleware } from '../middleware/tokenMiddleware';


userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', tokenMiddleware(), userController.check);

export default userRouter; 