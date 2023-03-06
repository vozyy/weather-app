import express from 'express';
import { userController } from '../controllers';

const userRouter = express.Router();
userRouter.post('/', userController.post);

export default userRouter;
