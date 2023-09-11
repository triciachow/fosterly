import { Dot } from "lucide-react";
import React from "react";

const AnimalCard = ({ data }) => {
	return (
		<>
			<a
				href={`/animal-profile/${data._id}`}
				className="hover:shadow-md rounded-lg"
			>
				<div className="shadow-sm rounded-b-xl ">
					<img
						className="w-full h-auto rounded-t-xl"
						src={data.image}
						alt="Animal image"
					/>
					<div className="bg-white p-6 flex flex-col gap-y-2 rounded-b-xl ">
						<h3 className="text-primary-600 font-semibold text-xl">
							{data.name}
						</h3>
						<div className="flex items-center font-medium text-xs">
							<p>{data.dob}</p>
							<Dot />
							<p>{data.breed}</p>
							<Dot />
							<p className="capitalize">{data.gender}</p>
						</div>
						<p className="text-gray-600">{data.description}</p>
					</div>
				</div>
			</a>
		</>
	);
};

export default AnimalCard;
