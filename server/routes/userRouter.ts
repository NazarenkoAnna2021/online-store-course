import { Router } from 'express';
const userRouter = Router();
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';


userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', authMiddleware, userController.check);

export default userRouter; 