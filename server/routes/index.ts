import { Router } from 'express';
import deviseRouter from './deviseRouter';
import userRouter from './userRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';
const router = Router();

router.use('/devise', deviseRouter);
router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

export default router;