import './Table.css'
import React, {useContext, useReducer, useState} from 'react';
import SearchContextProvider, {SearchContext} from "./Context/SearchContext";
import TableHead from "./TableHead/TableHead";
import tableHead from "./TableHead/TableHead";
import TableData from "./TableData/TableData";

function Table({data, noDataMessage}) {

	const collumnName = Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")
	const [employees, setEmployees] = useState(data)
	const [reverse, setReverse] = useState(true)

	//1 je parcours la tableau avec les employés
	//2 je boucle sur la length des catégoris (collumnName)
	//3 si un valeur est égual à l'input, je push l'employé dans le new tableau


	/**
	 * Function to filter the employees array with the value from search input
	 *
	 * @param data object, with data from the user profil (dataAverageSessions)
	 * @param img svg, about statistics
	 * @param bgColor color, for the icon
	 * @param category string, to know what extension return
	 *
	 * @return
	 * @author Alexis.N
	 * @version 1.0
	 */
	const handleChange = (e) => {
		const newArray = [];
		for (let i = 0; i < data.length; i++) {
			let skipLoop = false
			for (let x = 0; x < collumnName.length; x++) {
				if (data[i][collumnName[x]].toLowerCase().includes(e.target.value.toLowerCase())) {
					newArray.push(data[i])
					skipLoop = true
				}
				if (skipLoop) {
					break
				}
			}
		}
		setEmployees(newArray)
	}

	// const handleChange = (e) => {
	// 	setInput(e.target.value)
	// 	setEmployees(employees.map((item) => {
	//
	// 		Object.keys(item).forEach(function (key, index) {
	// 			if (item[key].toLowerCase().includes(e.target.value.toLowerCase())) {
	// 				console.log(item[key])
	//
	// 			}
	// 		});
	//
	// 		return item
	// 	}))
	// }

	console.log(employees.length)
	return (
		<div className={'table'}>
			<input onChange={(e) => handleChange(e)} type="search"/>
			<table>
				<tbody>
				<tr className={'tablerHead '}>
					{collumnName.map((item, index) =>
						<TableHead active={active} setActive={setActive} data={employees} setData={setEmployees}
											 key={`${item}-${index}`} props={item} reverse={reverse} setReverse={setReverse}
						>{item}</TableHead>)}
				</tr>

				{employees.length > 0 && employees.map((item) =>
					<tr key={data.indexOf(item)}>
						{collumnName.map((i) => <TableData key={collumnName.indexOf(i)}>{item[i]}</TableData>)}
					</tr>)}
				</tbody>
			</table>
			{employees.length === 0 &&
				<div>{noDataMessage}</div>
			}
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