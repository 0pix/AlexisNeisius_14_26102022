import React, {useEffect, useState} from 'react';
import './Home.css'
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Modal from "../../components/Modal/Modal";

const Home = () => {
	const [openModal,setOpenModal] = useState(false)
	const handlerSubmit = (e) =>{
		e.preventDefault();
		const employee = {
			firstName : e.target[0].value || '',
			lastName  : e.target[1].value || '',
			dateOfBirth: e.target[2].value || '',
			startDate : e.target[3].value || '',
			street : e.target[5].value || '',
			city: e.target[6].value || '',
			state: e.target[7].value || '',
			zipCode: e.target[8].value || '',
			department: e.target[9].value || ''
		}
		if (employee.firstName === '' || employee.lastName === '' || employee.dateOfBirth === '' || employee.startDate === '' || employee.street === '' || employee.city === ''|| employee.state === '' || employee.zipCode === '' || employee.department === '') {
			alert('c\'est mort')
		}else {
			// alert('ouiiiiiiiiiiiiii ça part')
			setOpenModal(true)
			console.log(employee)
		}
	}
	return (
		<div>
			<Helmet>
				<title>HRnet | Home</title>
			</Helmet>
			 <Modal openModal={openModal} setOpenModal={setOpenModal}>Employé enregistré</Modal>
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link  to={'/Employee'} >View Current Employees</Link>
				<h2>Create Employee</h2>
				<form onSubmit={(e) => handlerSubmit(e)} action="#" id="create-employee">
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name"/>

					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name"/>

					<label htmlFor="date-of-birth">Date of Birth</label>
					<input id="date-of-birth" type="text"/>

						<label htmlFor="start-date">Start Date</label>
						<input id="start-date" type="text"/>

							<fieldset className="address">
								<legend>Address</legend>

								<label htmlFor="street">Street</label>
								<input id="street" type="text"/>

								<label htmlFor="city">City</label>
								<input id="city" type="text"/>

								<label htmlFor="state">State</label>
								<select name="state"  id="state">
									<option value="">--Please choose an option--</option>
									<option value="dog">Dog</option>
									<option value="cat">Cat</option>
									<option value="hamster">Hamster</option>
									<option value="parrot">Parrot</option>
									<option value="spider">Spider</option>
									<option value="goldfish">Goldfish</option>
								</select>

								<label htmlFor="zip-code">Zip Code</label>
								<input id="zip-code" type="number"/>
							</fieldset>

							<label htmlFor="department">Department</label>
					<select name="department" id="department">
						<option>Sales</option>
						<option>Marketing</option>
						<option>Engineering</option>
						<option>Human Resources</option>
						<option>Legal</option>
					</select>

				<button>Save</button>
				</form>
			</div>
			{/*<div id="confirmation" className="modal">Employee Created!</div>*/}
		</div>);
};

export default Home;
