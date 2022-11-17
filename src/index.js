import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import rootRouter from './routes/index.js';
dotenv.config();
export const PORT = process.env.SERVER_PORT;
export const SESSION_KEY = process.env.SECRET_SESSION_KEY;
export const HASH_KEY = process.env.SECRET_HASH_KEY;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}))
app.use(session({
	secret: SESSION_KEY,
	resave: false,
	saveUninitialized: false,
}))

app.use(rootRouter);

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
}
start();