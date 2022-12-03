import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";
import Header from "./components/layout/Header";

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="home" element={<Home/>}/>
				<Route path="employee" element={<Employee/>}/>
			</Routes>
		</Router>
	);
}

export default App;
