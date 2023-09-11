const Animal = require("../models/animalModel");

const addNew = async (req, res) => {
	const formData = req.body;
	const newAnimal = {
		image: formData?.image,
		name: formData?.name,
		dob: formData?.dob,
		gender: formData?.gender,
		animalType: formData?.animalType,
		breed: formData?.breed,
		activityLevel: formData?.activityLevel,
		description: formData?.description,
		personality: formData?.personality,
		specialRequirements: formData?.specialRequirements,
		shelterName: formData?.shelterName,
		shelterPhone: formData?.shelterPhone,
		shelterEmail: formData?.shelterEmail,
		shelterWebsite: formData?.shelterWebsite,
		shelterAddress: formData?.shelterAddress,
	};
	// console.log("Received formData: ", formData);

	try {
		const addAnimal = new Animal(newAnimal);
		await addAnimal.save();
		// console.log("Creating newAnimal: ", newAnimal);

		// Respond with a success message
		res
			.status(200)
			.send({ message: "Animal profile added successfully", addAnimal });
	} catch (err) {
		console.error("Error creating profile:", err);
		res
			.status(500)
			.send({ message: "Error creating profile", error: err.message });
	}
};

const fetchAll = async (req, res) => {
	try {
		const findAll = await Animal.find();

		res
			.status(200)
			.send({ message: "Animal profile fetched successfully", findAll });
	} catch (err) {
		console.error("Error fetching: ", err);
		res.status(500).send({ message: "Error fetching: ", error: err.message });
	}
};

module.exports = { addNew, fetchAll };
