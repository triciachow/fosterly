// The account setup page
import React, { useState } from "react";
import Nav from "../components/Nav";
import { Bone, Contact } from "lucide-react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Onboarding = () => {
	// Current date format: YYYY-MM-DD
	const [cookies, setCookie, removeCookie] = useCookies(null);
	let navigate = useNavigate();
	let { id } = useParams();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dob: "",
		gender: "",
		petOwner: "",
		fosterExperience: "",
		preferredAnimal: "",
		animalAge: "",
		activityLevel: "",
		matches: [],
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const config = {
				method: "put",
				url: `http://localhost:8000/account/onboarding/${id}`,
				data: formData,
			};

			const result = await axios(config);
			console.log(result);
			navigate(`/matches/${result.data.updateUser._id}`);
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
			<Nav />
			<div className="bg-white p-10 rounded shadow-sm flex flex-col gap-y-10 border max-w-[680px] mx-auto">
				<div>
					<h2 className="text-xl font-semibold leading-7 mb-1">
						Account Setup
					</h2>
					<p className="text-lg leading-7 text-gray-400">
						Complete your profile to get started.
					</p>
				</div>
				{/* FORM */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-y-4  border border-gray-200 rounded p-5 w-full"
				>
					<div className="mb-5 flex items-center justify-between gap-x-10">
						<div>
							<h2 className="text-lg font-semibold leading-7">
								Personal Information
							</h2>
							<p className="text-sm leading-7 text-gray-400">
								Please complete your profile
							</p>
						</div>
						<div className="bg-teal-50 rounded-full p-2">
							<Contact color="#0D9488" />
						</div>
					</div>

					<div className="w-full flex justify-between">
						<label
							htmlFor="firstName"
							className="capitalize font-semibold leading-7"
						>
							First Name
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							placeholder="John"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full flex justify-between">
						<label
							htmlFor="lastName"
							className="capitalize font-semibold leading-7"
						>
							Last Name
						</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							placeholder="Smith"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full flex justify-between">
						<label htmlFor="dob" className="capitalize font-semibold leading-7">
							Date of Birth
						</label>
						<input
							datepicker="true"
							type="date"
							name="dob"
							id="dob"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.dob}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-full flex justify-between mb-10">
						<label
							htmlFor="gender"
							className="capitalize font-semibold leading-7"
						>
							Gender
						</label>
						<select
							name="gender"
							id="gender"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.gender}
							onChange={handleChange}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="mb-5 flex items-center justify-between gap-x-10">
						<div>
							<h2 className="text-lg font-semibold leading-7">
								Animal Preferences
							</h2>
							<p className="text-sm leading-7 text-gray-400">
								Please indicate your preferences of foster animals.
							</p>
						</div>
						<div className="bg-purple-50 rounded-full p-2">
							<Bone color="#7C3AED" />
						</div>
					</div>

					<div className="w-full flex justify-between">
						<label
							htmlFor="petOwner"
							className="capitalize font-semibold leading-7"
						>
							Pet Owner
						</label>
						<select
							name="petOwner"
							id="petOwner"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.petOwner}
							onChange={handleChange}
						>
							<option default>Please select one</option>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</select>
					</div>
					<div className="w-full flex justify-between">
						<label
							htmlFor="fosterExperience"
							className="capitalize font-semibold leading-7"
						>
							Foster Experience
						</label>
						<select
							name="fosterExperience"
							id="fosterExperience"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.fosterExperience}
							onChange={handleChange}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</select>
					</div>
					<div className="w-full flex justify-between">
						<label
							htmlFor="preferredAnimal"
							className="capitalize font-semibold leading-7"
						>
							Preferred Animal
						</label>
						<select
							name="preferredAnimal"
							id="preferredAnimal"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.preferredAnimal}
							onChange={handleChange}
						>
							<option value="dog">Dog</option>
							<option value="cat">Cat</option>
						</select>
					</div>
					<div className="w-full flex justify-between">
						<label
							htmlFor="animalAge"
							className="capitalize font-semibold leading-7"
						>
							Animal Age
						</label>
						<select
							name="animalAge"
							id="animalAge"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.animalAge}
							onChange={handleChange}
						>
							<option value="young">Young</option>
							<option value="adult">Adult</option>
						</select>
					</div>
					<div className="w-full flex justify-between mb-4">
						<label
							htmlFor="activityLevel"
							className="capitalize font-semibold leading-7"
						>
							Activity Level
						</label>
						<select
							name="activityLevel"
							id="activityLevel"
							className="w-[340px] border border-gray-200 bg-white px-4 py-2 rounded-lg"
							value={formData.activityLevel}
							onChange={handleChange}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>
					<button
						className="bg-primary-600 text-white rounded-lg text-center font-semibold px-8 py-2"
						type="submit"
					>
						Proceed
					</button>
				</form>
			</div>
		</>
	);
};

export default Onboarding;
