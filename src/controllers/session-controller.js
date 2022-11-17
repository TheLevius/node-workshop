class SessionController {
	constructor() {

	}

	async increment(req, res) {
		req.session.counter = req.session?.counter || 0;
		req.session.counter += 1;
		res.json({
			counter: req.session.counter
		});
	}

	async save(req, res) {

		req.session.msg = req.body.msg;
		res.json({
			action: 'Save',
			status: req.session.msg ? `Message: "${req.body.msg || ''}" Saved successfully` : 'Failed to save',
			data: req.session.msg
		})
	}

	async render(req, res) {

		res.json({
			action: 'Output',
			status: req.session?.msg ? 'Ok' : 'Empty',
			output: req.session?.msg || 'Empty'
		})
	}

	async remove(req, res) {
		const deleted = req.session?.msg || 'empty';
		delete req.session.msg
		res.json({
			action: 'Delete',
			status: 'Deleted successfully',
			deleted
		})
	}
}

export default new SessionController()