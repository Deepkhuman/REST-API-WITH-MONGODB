const mongoose = require("mongoose");

async function connectDB() {
	try {
		await mongoose.connect("mongodb://localhost:27017/users");
		console.log(`Connected to MongoDB`);
	} catch (error) {
		console.log(`Error Occured While Connecting to Mongo`);
	}
}

module.exports = {
	connectDB,
};
