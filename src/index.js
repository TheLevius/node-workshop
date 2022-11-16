import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import rootRouter from './routes/index.js';
dotenv.config();
const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}))
app.use(session({
	secret: process.env.SECRET_SESSION_KEY,
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