const { User } = require("../model/user");

async function getalluser(req, res) {
	const data = await User.find({});
	res.json(data);
}

async function createuser(req, res) {
	User.create({
		name: req.body.name,
		IU: req.body.IU,
		email: req.body.email,
	})
		.then((data) => {
			console.log(data);
			res.json({ data });
		})
		.catch((err) => console.error(err));
}

async function findoneuser(req, res) {
	let id = req.params.id;

	let user = await User.findById({ _id: id });

	res.json(user);
}

async function deleteuser(req, res) {
	let id = req.params.id;

	let user = await User.findOneAndDelete({ _id: id });

	res.json(user);
}

async function updateuser(req, res) {
	let id = req.params.id;

	let user = await User.findByIdAndUpdate(id, { ...req.body });

	res.json(user);
}
module.exports = {
	getalluser,
	createuser,
	findoneuser,
	deleteuser,
	updateuser,
};
