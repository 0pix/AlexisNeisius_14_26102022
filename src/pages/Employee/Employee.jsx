import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Table from "../../components/Table/Table";
import {useSelector} from "react-redux";


const Employee = () => {
	const employees = useSelector((state) => state.employees);
	return (
		<div className="container">
			<Helmet>
				<title>HRnet | Employee</title>
			</Helmet>
			<h1>Current Employees</h1>
			<table id="employee-table" className="display"></table>
			<Link to={'/'}>Home</Link>
			<Table data={employees}></Table>
		</div>
	);
};

export default Employee;
