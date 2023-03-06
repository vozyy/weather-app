import express from 'express';
const router = express.Router();
import baseRouter from './baseRouter';
import userRouter from './userRouter';

router.use(baseRouter);
router.use(userRouter);

export default router;
