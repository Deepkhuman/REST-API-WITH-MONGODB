const express = require("express");
const app = express();
const { connectDB } = require("./connection");
const { router } = require("./routes/user");
//middleware to read body data as a json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connecting to mongodb
connectDB();

//
app.use("/user", router);

app.listen(3000, () => {
	console.log(`Running on port : 3000`);
});
