import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="Employee" element={<Employee />} />
		</Routes>
	);
}

export default App;
