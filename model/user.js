const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	IU: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

const User = mongoose.model("User", Userschema);

module.exports = {
	User,
};
