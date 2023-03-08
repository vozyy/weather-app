import express from 'express';
const router = express.Router();
import baseRouter from './baseRouter';
import userRouter from './userRouter';

router.use(baseRouter);
router.use('/api/user', userRouter);

export default router;
