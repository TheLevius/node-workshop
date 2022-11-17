import {
	generateHash,
	generateJwt
} from '../utils/index.js';

class AuthController {
	async signup(req, res) {}
	async signin(req, res, next) {
		const authStub = {
			email: 'test@test.test',
			hashPassword: generateHash('qwer1234qwer'),
			password: 'qwer1234qwer',
		}

		const {
			email,
			password
		} = req.body

		if (email !== authStub.email) {
			res.status(403)
			next(new Error('403 Forbidden'))
			res.end()
			return
		}

		if (generateHash(password) !== authStub.hashPassword) {
			res.status(403)
			next(new Error('403 Forbidden'))
			res.end()
			return
		}

		const token = generateJwt(authStub.id, authStub.email)

		res.json({
			token
		})
	}

	async check(req, res) {
		const token = generateJwt(req.auth.id, req.auth.email)
		res.json({
			token
		})
		return;
	}
}

export default new AuthController;