import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Employee = () => {
	return (
		<div className="container">
			<Helmet>
				<title>HRnet | Employee</title>
			</Helmet>
			<h1>Current Employees</h1>
			<table id="employee-table" className="display"></table>
			<Link  to={'/'}>Home</Link>
		</div>
	);
};

export default Employee;
