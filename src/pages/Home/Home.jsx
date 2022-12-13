import React, {useEffect, useState} from "react";
import "./Home.css";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import SelectDropDown from "../../components/SelectDropDown/SelectDropDown";
import Calendar from "../../components/Calendar/Calendar";
import {saveEmployee} from "../../store/employee/employeeSlice";
import {Link} from "react-router-dom";

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
			'Department': e.target[8].value || "",
			'Date of Birth': e.target[2].value || "",
			'Street': e.target[4].value || "",
			'City': e.target[5].value || "",
			'State': e.target[6].value || "",
			'Zip Code': e.target[7].value || "",
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
		<div className={'home'}>
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
				functionCloseBtn={functionCloseBtn}
			>
				Employé enregistré
			</Modal>
			<div className={"page-left"}>
				<div className="container">
					<form
						onSubmit={(e) => handlerSubmit(e)}
						action="#"
						id="create-employee"
					>
						<h2>Create Employee</h2>
						<label htmlFor="first-name">First Name
							<input type="text" id="first-name"/>
						</label>

						<label htmlFor="last-name">Last Name
							<input type="text" id="last-name"/>
						</label>

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

						<label htmlFor="street">Street
							<input id="street" type="text"/>
						</label>

						<label htmlFor="city">City
							<input id="city" type="text"/>
						</label>

						<SelectDropDown
							data={states}
							htmlFor={"states"}
							label={"State"}
						/>

						<label htmlFor="zip-code">Zip Code
							<input id="zip-code" type="number"/>
						</label>

						<SelectDropDown
							data={department}
							htmlFor={"department"}
							label={"Department"}
						/>
						<div className={"containerBtn"}>
							<button style={{margin: "auto"}}>Save</button>
						</div>
						<Link to={"/Employee"}> see employees</Link>
					</form>
				</div>
			</div>
		</div>

	);
};
export default Home;
