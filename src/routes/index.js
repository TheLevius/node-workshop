import {
	Router
} from 'express';
import rootController from '../controllers/root-controller.js';

const rootRouter = Router();

rootRouter.get('/', rootController.index);
rootRouter.get('/increment', rootController.increment);
rootRouter.post('/msg', rootController.save);
rootRouter.get('/msg', rootController.render);
rootRouter.delete('/msg', rootController.remove);

export default rootRouter;