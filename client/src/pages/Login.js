import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideImg from "../assets/main.jpg";

const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [login, setLogin] = useState(false);
	const [error, setError] = useState("");
	let navigate = useNavigate();

	const handleSubmit = useCallback(
		() => (e) => {
			e.preventDefault();

			const config = {
				method: "post",
				url: "http://localhost:8000/account/login",
				data: {
					email,
					password,
				},
			};

			axios(config)
				.then((result) => {
					setLogin(true);

					// cookies.set("TOKEN", result.data.token, {
					// 	path: "/",
					// });
					console.log(result);
					navigate(`/matches/${result.data.user._id}`);
				})
				.catch((err) => {
					setError(err.response.data.message);
					console.log(err);
				});
		},
		[email, password]
	);

	return (
		<>
			<section className="bg-gray-50 dark:bg-gray-900 flex">
				<img src={SideImg} alt="Side image" className="w-1/3 object-cover" />
				<div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-center text-xl leading-8 text-gray-900 md:text-2xl dark:text-white">
								Login
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit()}
							>
								<div>
									<label
										htmlFor="email"
										className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="john@email.com"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="uppercase block mb-2 text-xs font-medium text-gray-600 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Login
								</button>
								{error && (
									<p className="text-red-500 bg-red-100 border border-red-500 p-2.5 rounded-lg">
										{error}
									</p>
								)}
								{login && (
									<p className="text-green-500 bg-green-100 border border-green-500 p-2.5 rounded-lg">
										Log in successful
									</p>
								)}
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don't have an account yet?{" "}
									<a
										href="/signup"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Sign Up
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
