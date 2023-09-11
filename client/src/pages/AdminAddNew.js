import React from "react";
import Nav from "../components/Nav";
import AdminSideBar from "../components/AdminSideBar";
import AdminAddForm from "../components/AdminAddForm";

const AdminAddNew = () => {
	return (
		<>
			<Nav />
			<div className="lg:px-32 md:px-10 px-4 flex md:flex-row flex-col gap-10 justify-center">
				<AdminSideBar />
				<AdminAddForm />
			</div>
		</>
	);
};

export default AdminAddNew;
