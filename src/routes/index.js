import {
	Router
} from 'express';
import authRouter from './auth-router.js';
import sessionRouter from './session-router.js';
import rootController from '../controllers/index.js';

const rootRouter = Router();

rootRouter.get('/', rootController.index);
rootRouter.use('/session', sessionRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;