import React from "react";
import Logo from "../assets/fosterly.svg";

const Footer = () => {
	return (
		<footer className="px-4 md:px-20 lg:px-[140px] bg-white pt-[120px] flex justify-between items-end pb-[60px] text-gray-400">
			<div className="w-[290px]">
				<img src={Logo} alt="logo" className="w-20 mb-6" />
				<p>
					We bridge the connection between foster caregivers with shelter
					animals through match-making algorithm.
				</p>
			</div>
			© 2023 All rights reserved.
		</footer>
	);
};

export default Footer;
