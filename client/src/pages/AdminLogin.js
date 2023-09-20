import Nav from "../components/Nav";

const AdminLogin = () => {
	return (
		<>
			<Nav />
			<div className="bg-admin-bg bg-cover bg-center bg-no-repeat h-[700px] w-auto mx-4 md:mx-20 mb-10 rounded-[20px]">
				<div className="p-10 bg-white rounded-lg w-[380px] absolute top-1/3 right-[10%]">
					<h1 className="text-center text-xl leading-8 text-gray-900 md:text-2xl">
						Admin Login
					</h1>
					<form className="space-y-4 md:space-y-6" action="#">
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
								value="admin@email.com"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="admin@email.com"
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
								value="123"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>

						<a
							href="/admin/dashboard"
							type="submit"
							className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Login
						</a>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Login{" "}
							<a href="/login" className="underline">
								here
							</a>{" "}
							if you're not an admin for
							<span className="text-primary-600 font-semibold mx-1">
								fosterly.
							</span>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminLogin;
