import {
	Router
} from 'express';
import authController from '../controllers/auth-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);
authRouter.get('/', authMiddleware, authController.check);

export default authRouter;