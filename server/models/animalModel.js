const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formateDate = require("../utils/formateDate");
const { v4: uuidv4 } = require("uuid");
const {
	GENDER,
	ANIMAL_TYPE,
	ANIMAL_AGE,
	ACTIVITY_LEVEL,
} = require("../utils/constants");

const animalSchema = new Schema({
	_id: {
		type: String,
		default: () => uuidv4(),
	},
	image: {
		type: String,
		unique: false,
	},
	name: {
		type: String,
		unique: false,
	},
	dob: {
		type: String,
		unique: false,
	},
	gender: {
		type: String,
		enum: GENDER,
	},
	animalType: {
		type: String,
		enum: ANIMAL_TYPE,
	},
	breed: {
		type: String,
	},
	animalAge: {
		type: String,
		enum: ANIMAL_AGE,
	},
	activityLevel: {
		type: String,
		enum: ACTIVITY_LEVEL,
	},
	description: {
		type: String,
	},
	personality: {
		type: String,
	},
	specialRequirements: {
		type: String,
	},
	shelterName: {
		type: String,
	},
	shelterPhone: {
		type: String,
	},
	shelterWebsite: {
		type: String,
	},
	shelterEmail: {
		type: String,
	},
	shelterAddress: {
		type: String,
	},
	createdAt: {
		type: String,
		default: formateDate,
		immutable: true,
		required: true,
	},
});

// Solidify this schema as a data model with mongoose
const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
