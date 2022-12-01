import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Table from "../../components/Table/Table";
import {useSelector} from "react-redux";


const Employee = () => {
	const employees = useSelector((state) => state.employees.employees);


	useEffect(() => {
		document.title = 'HRnet | Employee';
	}, []);

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<table id="employee-table" className="display"></table>
			<Link to={'/'}>Home</Link>
			<Table data={employees} noDataMessage={"pas d'employés correspondant"}>
			</Table>
		</div>
	);
};

export default Employee;
