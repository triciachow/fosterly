import { useState, useEffect } from "react";
import axios from "axios";

const AnimalTable = () => {
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const config = {
				method: "get",
				url: "http://localhost:8000/admin/fetch-all",
				data: animals,
			};

			try {
				const result = await axios(config);
				console.log(result);
				setAnimals(result.data.findAll);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="flex flex-col w-full">
				<h1 className="text-4xl font-bold mb-6">Animal Listings</h1>
				{animals.length > 0 ? (
					<table className="table-auto bg-white text-sm">
						<thead className="bg-blue-50">
							<tr>
								<th className="border border-primary-200 p-2 text-left">
									Animal ID
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Name
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Type
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Breed
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Gender
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Date of Birth
								</th>
								<th className="border border-primary-200 p-2 text-left w-2/12">
									Description
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Activity Level
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Personality
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Special Requirements
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Created At
								</th>
								<th className="border border-primary-200 p-2 text-left">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{/* loop this part with data */}
							{animals.map((animal) => (
								<tr key={animal._id}>
									<td className="border border-primary-200 p-2 text-left">
										{animal._id}
									</td>
									<td className="border border-primary-200 p-2 text-left capitalize">
										{animal.name}
									</td>
									<td className="border border-primary-200 p-2 text-left capitalize">
										{animal.animalType}
									</td>
									<td className="border border-primary-200 p-2 text-left capitalize">
										{animal.breed}
									</td>
									<td className="border border-primary-200 p-2 text-left capitalize">
										{animal.gender}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										{animal.dob}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										{animal.description}
									</td>
									<td className="border border-primary-200 p-2 text-left capitalize">
										{animal.activityLevel}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										{animal.personality}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										{animal.specialRequirements}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										{animal.createdAt}
									</td>
									<td className="border border-primary-200 p-2 text-left">
										<a href="/edit" className="text-primary-600 mr-4">
											Edit
										</a>
										<a href="/delete" className="text-red-500">
											Delete
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div className="border-2 border-dashed border-primary-600 rounded-lg bg-blue-50 flex flex-col justify-center items-center py-10 gap-y-5">
						<div>No listings found.</div>
						<a
							href="/admin/add-new"
							className="bg-primary-600 rounded-lg text-white font-semibold px-4 py-3"
						>
							Add Animal Listing
						</a>
					</div>
				)}
			</div>
		</>
	);
};

export default AnimalTable;
