import { Router } from 'express';
const userRouter = Router();
import { userController } from '../controllers/userController';


userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', userController.check);

export default userRouter;