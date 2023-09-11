import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import Nav from "../components/Nav";
import AnimalTable from "../components/AnimalTable";

const AdminDashboard = () => {
	return (
		<>
			<Nav />
			<div className="px-10 flex gap-x-10">
				<AdminSideBar />
				<AnimalTable />
			</div>
		</>
	);
};

export default AdminDashboard;
