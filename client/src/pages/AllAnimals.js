import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import AnimalCard from "../components/AnimalCard";
import Footer from "../components/Footer";
import axios from "axios";

const AllAnimals = () => {
	const [animalsArr, setAnimalsArr] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const config = {
				method: "get",
				url: "http://localhost:8000/admin/fetch-all",
			};

			try {
				const result = await axios(config);
				// console.log(result);
				setAnimalsArr(result.data.findAll);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	// console.log(animalsArr);

	return (
		<>
			<Nav />
			<main className="px-4 md:px-20 lg:px-[140px] flex flex-col items-center mb-20">
				<div className="mb-[60px] text-center">
					<h1 className="text-2xl font-bold">
						Here are all our animals available for fostering
					</h1>
				</div>
				<div className="lg:w-4/5 w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
					{/* {matchesArr.length > 0} */}
					{animalsArr.map((match) => (
						<AnimalCard key={match._id} data={match} />
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default AllAnimals;
