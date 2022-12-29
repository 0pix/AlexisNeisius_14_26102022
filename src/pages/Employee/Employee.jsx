import React, {useEffect} from 'react';
import Table from "../../components/Table/Table";
import {useSelector} from "react-redux";
import './Employee.css'

const Employee = () => {
	const employees = useSelector((state) => state.employees.employees);

	useEffect(() => {
		document.title = 'HRnet | Employee';
	}, []);

	return (
		<div data-testid={'employee'} className={'employees-Page'}>
			<div className="containerEmployee page-right">
				<h2>Current Employees</h2>
				{/* <table id="employee-table" className="display"></table> */}
				<Table data={employees} noDataMessage={"pas d'employés correspondant"}>
				</Table>
			</div>
		</div>

	);
};

export default Employee;
