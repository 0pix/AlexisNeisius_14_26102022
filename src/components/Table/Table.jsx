import './Table.css'
import React, {useContext, useReducer, useState} from 'react';
import SearchContextProvider, {SearchContext} from "./Context/SearchContext";
import TableHead from "./TableHead/TableHead";
import tableHead from "./TableHead/TableHead";

function Table({data}) {

	const collumnName = Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")

	// console.log(collumnName)


	return (
		<div className={'table'}>
			<input type="search"/>
			<table>
				<tbody>
				{collumnName.map((item, index) =>
					<TableHead active={active} setActive={setActive} data={data} key={`${item}-${index}`} props={item}
					>{item}</TableHead>)}
				</tbody>
			</table>
		</div>
	);
}

export default Table;


// <tr>
// 	<th onClick={() => sortArrayString(data, 'firstName')}>First Name</th>
// 	<th onClick={() => sortArrayString(data, 'lastName')}>Last Name</th>
// 	<th onClick={() => sortArrayDate(data, 'startDate')}>Start Date</th>
// 	<th onClick={() => sortArrayDate(data, 'department')}>Department</th>
// 	<th onClick={() => sortArrayDate(data, 'dateOfBirth')}>Date of Birth</th>
// 	<th>Street</th>
// 	<th>City</th>
// 	<th>State</th>
// 	<th>Zip Code</th>
// </tr>
// {data.map((item) =>
// 	<tr key={data.indexOf(item)}>
// 		<td>{item.firstName}</td>
// 		<td>{item.lastName}</td>
// 		<td>{item.startDate}</td>
// 		<td>{item.department}</td>
// 		<td>{item.dateOfBirth}</td>
// 		<td>{item.street}</td>
// 		<td>{item.city}</td>
// 		<td>{item.state}</td>
// 		<td>{item.zipCode}</td>
// 	</tr>)}