import { Dog, LayoutDashboard, LogOut } from "lucide-react";
import React from "react";

const AdminSideBar = () => {
	return (
		<>
			<div className="min-w-[250px] h-[700px] p-4 bg-white rounded-lg flex flex-col justify-between">
				<div className="flex flex-col gap-y-5">
					<a href="/admin/dashboard">
						<div className="p-4 rounded-lg bg-blue-50 text-primary-600 font-semibold flex gap-x-4">
							<LayoutDashboard color="#2563EB" />
							<span>Dashboard</span>
						</div>
					</a>
					<a href="/admin/add-new">
						<div className="p-4 rounded-lg bg-blue-50 text-primary-600 font-semibold flex gap-x-4">
							<Dog color="#2563EB" />
							<span>Add Animal Profile</span>
						</div>
					</a>
				</div>
				<a href="/admin/logout">
					<div className="p-4 rounded-lg bg-blue-50 text-primary-600 font-semibold flex gap-x-4">
						<LogOut color="#2563EB" />
						<span>Logout</span>
					</div>
				</a>
			</div>
		</>
	);
};

export default AdminSideBar;
