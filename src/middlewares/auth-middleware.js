import jwt from 'jsonwebtoken';
import {
	HASH_KEY
} from '../index.js';

const authMiddleware = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			res.status(401).json({
				message: 'Not authorized'
			})
		}
		const decoded = jwt.verify(token, HASH_KEY);
		req.auth = decoded;
		next();
	} catch (err) {
		res.status(403).json({
			message: 'Forbidden'
		})
	}
}
export default authMiddleware;