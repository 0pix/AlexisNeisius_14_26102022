import React, {useEffect, useReducer, useState} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Table from "../../components/Table/Table";
import {useSelector} from "react-redux";
import TableHead from "../../components/Table/TableHead/TableHead";
import TableData from "../../components/Table/TableData/TableData";


const Employee = () => {
	// const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
	const employees = useSelector((state) => state.employees);
	const [employeesSort, setEmployeesSort] = useState(employees)
	const tableHead = [
		{
			name: 'First Name',
			props: 'firstName',
			type: 'string'
		},
		{
			name: 'Last Name',
			props: 'lastName',
			type: 'string'
		},
		{
			name: 'Start Date',
			props: 'startDate',
			type: 'date'
		},
		{
			name: 'Department',
			props: 'department',
			type: 'string'
		},
		{
			name: 'Date of Birth',
			props: 'dateOfBirth',
			type: 'date'
		},
		{
			name: 'Street',
			props: 'street',
			type: 'string'
		},
		{
			name: 'City',
			props: 'city',
			type: 'string'
		},
		{
			name: 'State',
			props: 'state',
			type: 'string'
		},
		{
			name: 'Zip Code',
			props: 'zipCode',
			type: 'string'
		}
	]


	return (
		<div className="container">
			<Helmet>
				<title>HRnet | Employee</title>
			</Helmet>
			<h1>Current Employees</h1>
			<table id="employee-table" className="display"></table>
			<Link to={'/'}>Home</Link>
			<Table data={employees}>
				{/*<tr>*/}
				{/*	{tableHead.map((item) =>*/}
				{/*		<TableHead key={item.name} data={employeesSort} setData={setEmployeesSort} props={item.props}*/}
				{/*							 type={item.type}>{item.name}</TableHead>)}*/}
				{/*</tr>*/}

				{/*{employeesSort.map((item) =>*/}
				{/*	<tr key={employeesSort.indexOf(item)}>*/}
				{/*		<TableData>{item.firstName}</TableData>*/}
				{/*		<TableData>{item.lastName}</TableData>*/}
				{/*		<TableData>{item.startDate}</TableData>*/}
				{/*		<TableData>{item.department}</TableData>*/}
				{/*		<TableData>{item.dateOfBirth}</TableData>*/}
				{/*		<TableData>{item.street}</TableData>*/}
				{/*		<TableData>{item.city}</TableData>*/}
				{/*		<TableData>{item.state}</TableData>*/}
				{/*		<TableData>{item.zipCode}</TableData>*/}
				{/*	</tr>)}*/}
			</Table>
		</div>
	);
};

export default Employee;
