import express from 'express';
import * as dotenv from 'dotenv'
import rootRouter from './routes/index.js';
dotenv.config();
const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(rootRouter);

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
}
start();