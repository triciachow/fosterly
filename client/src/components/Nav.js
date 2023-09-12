import React from "react";
import Logo from "../assets/fosterly.svg";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Nav = () => {
	let navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<nav className="shadow-sm bg-white flex flex-row justify-between w-full h-20 items-center px-[140px] mb-12">
			<div
				onClick={goBack}
				className="cursor-pointer flex gap-x-2 text-sm justify-center items-center"
			>
				<ArrowLeft size={16} /> Back
			</div>
			<img src={Logo} alt="Logo" />

			<a
				href="/all"
				className="text-sm font-semibold text-primary-600 underline"
			>
				View all animals
			</a>
		</nav>
	);
};

export default Nav;
