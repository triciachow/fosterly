const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formateDate = require("../utils/formateDate");
const { v4: uuidv4 } = require("uuid");
const {
	GENDER,
	YESNO,
	ANIMAL_TYPE,
	ANIMAL_AGE,
	ACTIVITY_LEVEL,
} = require("../utils/constants");

const caregiverSchema = new Schema({
	_id: {
		type: String,
		default: () => uuidv4(),
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		required: true,
	},
	password: {
		type: String,
		unique: false,
		required: true,
	},
	firstName: {
		type: String,
		unique: false,
	},
	lastName: {
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
	petOwner: {
		type: String,
		enum: YESNO,
	},
	fosterExperience: {
		type: String,
		enum: YESNO,
	},
	preferredAnimal: {
		type: String,
		enum: ANIMAL_TYPE,
	},
	animalAge: {
		type: String,
		enum: ANIMAL_AGE,
	},
	activityLevel: {
		type: String,
		enum: ACTIVITY_LEVEL,
	},
	matches: [
		{
			type: Schema.Types.ObjectId,
			ref: "Animal",
		},
	],
	createdAt: {
		type: String,
		default: formateDate,
		immutable: true,
		required: true,
	},
});

// Solidify this schema as a data model with mongoose
const Caregiver = mongoose.model("Caregiver", caregiverSchema);
module.exports = Caregiver;
