import React from "react";
import Logo from "../assets/fosterly.svg";

const Nav = () => {
	return (
		<nav className="shadow-sm bg-white flex flex-row justify-between w-full h-20 items-center px-[140px] mb-12">
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
