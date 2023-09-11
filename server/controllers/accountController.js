const Caregiver = require("../models/caregiverModel.js");
const Animal = require("../models/animalModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
const signup = async (req, res) => {
	const inputPassword = req.body.password;

	try {
		// Hash password
		let hash = await bcrypt.hash(inputPassword, 10);
		let newUser = new Caregiver({ ...req.body, password: hash });
		// Save data in database
		await newUser.save();

		// Assign token
		const token = jwt.sign(
			{
				userId: newUser._id,
				userEmail: newUser.email,
			},
			"RANDOM-TOKEN",
			{ expiresIn: "24h" }
		);

		// Respond with a success message
		res
			.status(200)
			.send({ message: "Account created successfully", newUser, token });
	} catch (err) {
		if (err.code === 11000) {
			res.status(409).send({ message: "Email already exists", err });
		} else {
			res.status(500).send({ message: "Error creating account" });
		}
	}
};

// Login a user
const login = async (req, res) => {
	const inputEmail = req.body.email;
	const inputPassword = req.body.password;

	try {
		let user = await Caregiver.findOne({ email: inputEmail });
		let passwordCheck = await bcrypt.compare(inputPassword, user.password);

		if (!user) {
			return res.status(400).send({
				message: "User not found",
			});
		}

		if (!passwordCheck) {
			return res.status(400).send({
				message: "Password does not match",
			});
		}

		// If passwords match, create jwt token
		const token = jwt.sign(
			{
				userId: user._id,
				userEmail: user.email,
			},
			"RANDOM-TOKEN",
			{ expiresIn: "24h" }
		);

		// Send the success response
		res.status(200).send({
			message: "Login successful",
			user,
			token,
		});
	} catch (err) {
		res.status(500).send({
			message: "Error login",
		});
	}
};

// Update onboarding form
const onboarding = async (req, res) => {
	const formData = req.body;
	const user = req.params.id;
	const updateUser = {
		_id: user,
		firstName: formData?.firstName,
		lastName: formData?.lastName,
		dob: formData?.dob,
		gender: formData?.gender,
		petOwner: formData?.petOwner,
		fosterExperience: formData?.fosterExperience,
		preferredAnimal: formData?.preferredAnimal,
		animalAge: formData?.animalAge,
		activityLevel: formData?.activityLevel,
		matches: formData?.matches,
	};

	try {
		const updatedUser = await Caregiver.findByIdAndUpdate(user, updateUser, {
			new: true, // Return the updated document
		});

		// Send the success response
		res.status(200).send({
			message: "Onboarding successful",
			user,
			updateUser,
		});
	} catch (err) {
		res.status(500).send({
			message: "Error on onboarding",
		});
	}
};

// Matches page
const matches = async (req, res) => {
	const id = req.params.id;

	try {
		let user = await Caregiver.findById({ _id: id });

		const matchingAnimals = await Animal.find({
			animalType: user.preferredAnimal,
		});
		// console.log("matching animals", matchingAnimals);
		// console.log(user.preferredAnimal);

		if (!matchingAnimals || matchingAnimals.length === 0) {
			return res.status(404).json({ message: "No matching animals found." });
		}

		if (res.status(200)) {
			res.send({ message: "Data fetch successfully", matchingAnimals });
		}
	} catch (err) {
		res.send({
			message: "Error fetching data",
		});
	}
};

const profile = async (req, res) => {
	const animalId = req.params.id;

	try {
		const animal = await Animal.findById({ _id: animalId });

		if (res.status(200)) {
			res.send({ message: "Animal profile fetch successfully", animal });
		}
	} catch (err) {
		res.send({
			message: "Error fetching animal profile",
		});
	}
};

module.exports = {
	signup,
	login,
	onboarding,
	matches,
	profile,
};
