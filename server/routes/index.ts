import { Router } from 'express';
import deviceRouter from './deviceRouter';
import userRouter from './userRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';
const router = Router();

router.use('/device', deviceRouter);
router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

export default router;