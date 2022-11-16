import {
	Router
} from 'express'

const rootRouter = Router();

rootRouter.use('/', (req, res) => {
	res.send('Welcome!');
})

export default rootRouter