import {
	Router
} from 'express';
import sessionController from '../controllers/session-controller.js';
const sessionRouter = Router();

sessionRouter.get('/increment', sessionController.increment);
sessionRouter.post('/msg', sessionController.save);
sessionRouter.get('/msg', sessionController.render);
sessionRouter.delete('/msg', sessionController.remove);

export default sessionRouter;