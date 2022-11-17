class RootController {
	constructor() {

	}
	async index(req, res) {
		res.json({
			auth: '/auth',
			increment: '/session/increment',
			msg: '/session/msg'
		})
	}
}

export default new RootController()