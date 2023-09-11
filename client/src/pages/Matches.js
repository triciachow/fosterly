import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import AnimalCard from "../components/AnimalCard";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Matches = () => {
	const [matchesArr, setMatchesArr] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const config = {
				method: "get",
				url: `http://localhost:8000/account/matches/${id}`,
			};

			try {
				const result = await axios(config);
				console.log(result);
				setMatchesArr(result.data.matchingAnimals);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	console.log(matchesArr);

	return (
		<>
			<Nav />
			<main className="px-4 md:px-20 lg:px-[140px] flex flex-col items-center mb-20">
				<div className="mb-[60px] text-center">
					<h1 className="text-2xl font-bold">
						We think these adorbs might be a match for you!
					</h1>
					<p className="text-gray-600 font-medium">
						Profiles are recommended based on your preferences.
					</p>
				</div>
				<div className="lg:w-4/5 w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
					{/* {matchesArr.length > 0} */}
					{matchesArr.map((match) => (
						<AnimalCard key={match._id} data={match} />
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Matches;
