import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminAddForm = () => {
	let navigate = useNavigate();
	const [formData, setFormData] = useState({
		image: "",
		name: "",
		dob: "",
		gender: "",
		animalType: "",
		breed: "",
		animalAge: "",
		activityLevel: "",
		description: "",
		personality: "",
		specialRequirements: "",
		shelterName: "",
		shelterPhone: "",
		shelterEmail: "",
		shelterWebsite: "",
		shelterAddress: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const config = {
				method: "post",
				url: "http://localhost:8000/admin/add-new",
				data: formData,
			};
			const result = await axios(config);
			console.log(result);
			navigate("/admin/dashboard");
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e) => {
		// console.log("e: ", e);
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	console.log(formData);

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="bg-white rounded-lg p-10 flex flex-col gap-y-4 w-full"
			>
				<div>
					<label
						htmlFor="image"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Profile Photo
					</label>
					<input
						type="text"
						name="image"
						id="image"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Link to your image"
						value={formData.image}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label
						htmlFor="name"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Mylo"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex justify-between gap-x-5">
					<div className="w-full">
						<label
							htmlFor="animalType"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Animal Type
						</label>
						<select
							name="animalType"
							id="animalType"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={formData.animalType}
							onChange={handleChange}
						>
							<option value="dog">Dog</option>
							<option value="cat">Cat</option>
						</select>
					</div>
					<div className="w-full">
						<label
							htmlFor="animalAge"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Animal Age
						</label>
						<select
							name="animalAge"
							id="animalAge"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={formData.animalAge}
							onChange={handleChange}
						>
							<option value="young">Young</option>
							<option value="adult">Adult</option>
						</select>
					</div>
					<div className="w-full">
						<label
							htmlFor="gender"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Gender
						</label>
						<select
							name="gender"
							id="gender"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={formData.gender}
							onChange={handleChange}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="breed"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Breed
					</label>
					<input
						type="text"
						name="breed"
						id="breed"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Breed name"
						value={formData.breed}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex justify-between gap-x-5">
					<div className="w-full">
						<label
							htmlFor="dob"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Date of Birth
						</label>
						<input
							datepicker="true"
							type="date"
							name="dob"
							id="dob"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={formData.dob}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="activityLevel"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Activity Level
						</label>
						<select
							name="activityLevel"
							id="activityLevel"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={formData.activityLevel}
							onChange={handleChange}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="description"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Description
					</label>
					<textarea
						type="text"
						name="description"
						id="description"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						rows={4}
						placeholder="Enter text here..."
						value={formData.description}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label
						htmlFor="personality"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Personality
					</label>
					<textarea
						type="text"
						name="personality"
						id="personality"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						rows={4}
						placeholder="Enter text here..."
						value={formData.personality}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label
						htmlFor="specialRequirements"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Special Requirement
					</label>
					<textarea
						type="text"
						name="specialRequirements"
						id="specialRequirements"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						rows={4}
						placeholder="Enter text here..."
						value={formData.specialRequirements}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<h1 className="uppercase font-medium text-gray-600">
						Shelter Information
					</h1>
				</div>
				<div className="w-full">
					<label
						htmlFor="shelterName"
						className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
					>
						Shelter Name
					</label>
					<input
						type="text"
						name="shelterName"
						id="shelterName"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="SPCA"
						value={formData.shelterName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex justify-between gap-x-5">
					<div className="w-full">
						<label
							htmlFor="shelterPhone"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Contact Number
						</label>
						<input
							type="tel"
							name="shelterPhone"
							id="shelterPhone"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="+65 98765432"
							value={formData.shelterPhone}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="shelterEmail"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Email Address
						</label>
						<input
							type="email"
							name="shelterEmail"
							id="shelterEmail"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="spca@email.com"
							value={formData.shelterEmail}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="flex justify-between gap-x-5">
					<div className="w-full">
						<label
							htmlFor="shelterWebsite"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Website
						</label>
						<input
							type="text"
							name="shelterWebsite"
							id="shelterWebsite"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="https://spca.org.sg/"
							value={formData.shelterWebsite}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="shelterAddress"
							className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
						>
							Address
						</label>
						<input
							type="text"
							name="shelterAddress"
							id="shelterAddress"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="50 Sungei Tengah Rd, Singapore 699012"
							value={formData.shelterAddress}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-1/4 mx-auto mt-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default AdminAddForm;
