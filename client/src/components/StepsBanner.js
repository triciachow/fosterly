import React from "react";
import StepOne from "../assets/step-one.jpeg";
import StepTwo from "../assets/step-two.jpeg";
import StepThree from "../assets/step-three.jpeg";
import PawPrint from "../assets/paw-print.jpg";

const StepsBanner = () => {
	return (
		<>
			<section className="px-4 md:px-20 py-[60px] bg-paw-print bg-cover bg-center">
				<div className="mb-[60px] text-center">
					<h1 className="text-2xl font-bold mb-4">
						3 Steps To Make A Lasting Impact
					</h1>
					<p className="text-gray-600">
						Don't miss this opportunity to be a part of their incredible
						transformation.
					</p>
				</div>
				{/* STEPS CARD */}
				<div className="flex gap-x-10 justify-center">
					{stepsCard.map((step) => (
						<div key={step.id} className="min-h-full w-[360px]">
							<img
								src={step.src}
								alt={step.title}
								className="rounded-t-lg h-[230px] w-full"
							/>
							<div className="bg-white p-4 rounded-b-lg h-[148px]">
								<h4 className="font-semibold leading-7 mb-4">{step.title}</h4>
								<p className="text-gray-600">{step.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

const stepsCard = [
	{
		id: 1,
		src: StepOne,
		title: "1. Contact shelter",
		text: "You can reach them via the “Contact Shelter” button or email/call them directly to apply for fostering.",
	},
	{
		id: 2,
		src: StepTwo,
		title: "2. Wait for approval",
		text: "The shelter will review your application within 3 working days.",
	},
	{
		id: 3,
		src: StepThree,
		title: "3. Visit shelter",
		text: "Upon confirmation, head down to the shelter to meet your new furry friend!",
	},
];

export default StepsBanner;
