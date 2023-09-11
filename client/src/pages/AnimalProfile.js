import { Globe, Mail, MapPin, PawPrint, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Dot } from "lucide-react";
import StepsBanner from "../components/StepsBanner";
import axios from "axios";
import { useParams } from "react-router-dom";

const AnimalProfile = () => {
	const [animalData, setAnimalData] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const config = {
				method: "get",
				url: `http://localhost:8000/account/animal-profile/${id}`,
				data: animalData,
			};

			try {
				const result = await axios(config);
				console.log(result);
				setAnimalData(result.data.animal);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	console.log(animalData);

	return (
		<>
			<Nav />
			<main className="px-4 md:px-20 lg:px-[140px] mb-20">
				<div className="flex gap-x-10">
					{/* LEFT SIDE BAR */}
					<div className="min-w-[440px] flex flex-col gap-y-10">
						<div className="bg-white p-5 rounded-lg">
							<img
								src={animalData.image}
								alt="Animal image"
								className="h-[400px] rounded-lg object-cover"
							/>
						</div>
						<div>
							<div className="mb-2 text-md font-semibold text-gray-600">
								Located At
							</div>
							<div className="p-6 rounded bg-white">
								<h2 className="font-xl font-semibold mb-5">
									{animalData.shelterName}
								</h2>
								<div className="flex flex-col gap-y-6">
									<div className="flex gap-x-5">
										<Phone color="#2563eb" />
										<div>{animalData.shelterPhone}</div>
									</div>
									<div className="flex gap-x-5">
										<Mail color="#2563eb" />
										<div>{animalData.shelterEmail}</div>
									</div>
									<div className="flex gap-x-5">
										<Globe color="#2563eb" />
										<a href={animalData.shelterWebsite}>
											{animalData.shelterWebsite}
										</a>
									</div>
									<div className="flex gap-x-5">
										<MapPin color="#2563eb" />
										<div>{animalData.shelterAddress}</div>
									</div>
								</div>
							</div>
						</div>

						<a
							href="/"
							className="w-full bg-primary-600 text-white font-semibold rounded-lg py-4 text-center"
						>
							Contact Shelter
						</a>
						<p className="text-center text-gray-600">
							Take the first step and express your interest in fostering Buddy
							today!{" "}
						</p>
					</div>

					{/* RIGHT SIDE INFO */}
					<div className="flex flex-col gap-y-10">
						<div>
							<h3 className="text-primary-600 font-semibold text-5xl mb-4">
								{animalData.name}
							</h3>
							<div className="flex items-center font-medium leading-6 text-lg capitalize">
								<p>{animalData.dob}</p>
								<Dot />
								<p>{animalData.breed}</p>
								<Dot />
								<p>{animalData.gender}</p>
							</div>
						</div>
						<div>
							<div className="mb-2">Description</div>
							<p className="text-gray-600 bg-white p-6 rounded-lg">
								{animalData.description}
							</p>
						</div>
						<div>
							<div className="mb-2">Personality</div>
							<p className="text-gray-600 bg-white p-6 rounded-lg leading-6">
								{animalData.personality}
							</p>
						</div>
						<div>
							<div className="mb-2">Special Requirements</div>
							<p className="text-gray-600 bg-white p-6 rounded-lg">
								{animalData.specialRequirements}
							</p>
						</div>
						<div className="flex gap-x-10">
							{/* <div>
								<div className="mb-2">Interests</div>
								<div className="flex gap-x-4 p-6 bg-white rounded-lg">
									<span className="bg-green-50 rounded-lg p-3 text-green-500 flex flex-col justify-center items-center">
										<Footprints color="#10B981" /> Walks
									</span>
									<span className="bg-purple-50 rounded-lg p-3 text-purple-500 flex flex-col justify-center items-center">
										<Circle color="#8B5CF6" /> Fetch
									</span>
									<span className="bg-pink-50 rounded-lg p-3 text-pink-500 flex flex-col justify-center items-center">
										<Bone color="#EC4899" /> Treats
									</span>
								</div>
							</div> */}
							<div className="min-h-full">
								<div className="mb-2">Activity Level</div>
								<div className="flex gap-x-4 p-6 bg-white rounded-lg">
									<span className="bg-primary-50 rounded-lg p-3 text-primary-600 flex flex-col justify-center items-center capitalize">
										<PawPrint color="#2563eb" /> {animalData.activityLevel}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<StepsBanner />
			<Footer />
		</>
	);
};

export default AnimalProfile;
