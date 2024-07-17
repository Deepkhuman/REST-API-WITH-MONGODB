const express = require("express");
const router = express.Router();
const {
	getalluser,
	createuser,
	findoneuser,
	updateuser,
	deleteuser,
} = require("../controller/user");

router.get("/", getalluser);

router.post("/", createuser);

router.route("/:id").get(findoneuser).delete(deleteuser).patch(updateuser);

module.exports = {
	router,
};
