import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {
	HASH_KEY
} from '../index.js';

export const generateHash = (password) => {
	return crypto.createHash('sha512').update(password).digest('hex');
};

export const generateJwt = (id, email, role) => {
	const signedToken = jwt.sign({
		id,
		email,
		role
	}, HASH_KEY, {
		expiresIn: '24h'
	})
	return signedToken
}