const express = require("express");
const PORT = 8000;
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const database = mongoose.connection;
require("dotenv").config();

// Ensure you have a .env file at the root and add this line:
// MONGODB_URI=mongodb+srv://admin:0NavoaG80rI5oRsh@Cluster0.pyganty.mongodb.net/?retryWrites=true&w=majority
const mongoString = process.env.MONGODB_URI;

const accountRoutes = require("./routes/accountRoutes");
const adminRoutes = require("./routes/adminRoutes");

const whitelist = ["http://localhost:8000"];

// Connection to mongoDB
mongoose.connect(mongoString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// Connect to DB and throw any error if connection fails
database.on("error", (err) => {
	console.log(`Unable to connect to database. ${err}`);
});
// .once will only run one time
database.once("connected", () => {
	console.log("Database connected!");
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json("Server is live!");
});

app.use("/account", accountRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
