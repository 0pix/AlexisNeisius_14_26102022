import React, {useEffect, useState} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import SelectDropDown from "../../components/SelectDropDown/SelectDropDown";
import Calendar from "../../components/Calendar/Calendar";
import {saveEmployee} from "../../features/employee/employeeSlice";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const employees = useSelector((state) => state.employees.employees);
	const states = useSelector((state) => state.employees.states);
	const department = useSelector((state) => state.employees.department);
	const dispatch = useDispatch();


	const functionCloseBtn = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		document.title = 'HRnet | Home';
	}, []);

	const handlerSubmit = (e) => {
		e.preventDefault();
		const employee = {
			'First Name': e.target[0].value || "",
			'Last Name': e.target[1].value || "",
			'Start Date': e.target[3].value || "",
			'Department': e.target[9].value || "",
			'Date of Birth': e.target[2].value || "",
			'Street': e.target[5].value || "",
			'City': e.target[6].value || "",
			'State': e.target[7].value || "",
			'Zip Code': e.target[8].value || "",
		};
		if (
			employee['First Name'] === "" ||
			employee['Last Name'] === "" ||
			employee['Start Date'] === "" ||
			employee['Department'] === "" ||
			employee['Date of Birth'] === "" ||
			employee['Street'] === "" ||
			employee['City'] === "" ||
			employee['State'] === "" ||
			employee['Zip Code'] === ""
		) {
			alert("un ou plusieurs champs ne sont pas remplis");
		} else {
			e.preventDefault();
			// alert('ouiiiiiiiiiiiiii ça part')
			setOpenModal(true);
			// console.log(employee)
			dispatch(saveEmployee(employee))

		}
	};

	useEffect(() => {
		localStorage.setItem("employees", JSON.stringify(employees));
	}, [employees])
	console.log('test: ', employees)
	return (
		<div className={"home"}>
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
				functionCloseBtn={functionCloseBtn}
			>
				Employé enregistré
			</Modal>
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link to={"/Employee"}>View Current Employees</Link>
				<h2>Create Employee</h2>
				<form
					onSubmit={(e) => handlerSubmit(e)}
					action="#"
					id="create-employee"
				>
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name"/>

					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name"/>

					<Calendar
						language={"fr-FR"}
						label={"Date of Birth"}
						htmlFor={"start-date"}
					/>

					<Calendar
						language={"en-US"}
						label={"Start Date"}
						htmlFor={"start-date"}
					/>

					<fieldset className="address">
						<legend>Address</legend>

						<label htmlFor="street">Street</label>
						<input id="street" type="text"/>

						<label htmlFor="city">City</label>
						<input id="city" type="text"/>

						<SelectDropDown
							data={states}
							htmlFor={"state"}
							label={"State"}
						/>

						<label htmlFor="zip-code">Zip Code</label>
						<input id="zip-code" type="number"/>
					</fieldset>
					<SelectDropDown
						data={department}
						htmlFor={"department"}
						label={"Department"}
					/>
					<div className={"containerBtn"}>
						<button style={{margin: "auto"}}>Save</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
