import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Matches from "./pages/Matches";
import AnimalProfile from "./pages/AnimalProfile";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddNew from "./pages/AdminAddNew";
import AllAnimals from "./pages/AllAnimals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/signup" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/onboarding/:id" element={<Onboarding />} />

				<Route path="/all" element={<AllAnimals />} />
				<Route path="/matches/:id" element={<Matches />} />
				<Route path="/animal-profile/:id" element={<AnimalProfile />} />

				{/* <Route path="/admin/login" element={<AdminLogin />} /> */}
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="/admin/add-new" element={<AdminAddNew />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
