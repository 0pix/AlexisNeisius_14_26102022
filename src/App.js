import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";

function App() {
  return (
		<Router>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="Employee" element={<Employee />} />
			</Routes>
		</Router>
	);
}

export default App;
