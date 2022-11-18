import './Table.css'
import React, {useContext, useReducer, useState} from 'react';
import SearchContextProvider, {SearchContext} from "./Context/SearchContext";
import TableHead from "./TableHead/TableHead";
import tableHead from "./TableHead/TableHead";
import TableData from "./TableData/TableData";

function Table({data}) {

	const collumnName = Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")
	const [employees, setEmployees] = useState(data)
	const [reverse, setReverse] = useState(true)
	const [input, setInput] = useState('')

	function checkWord(word) {
		if (word.includes(input)) {
			return
		}

	}

	const handleChange = (e) => {
		setInput(e.target.value)
		setEmployees(employees.find(checkWord))
	}


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


				{employees.map((item) =>
					<tr key={data.indexOf(item)}>
						{collumnName.map((i) => <TableData key={collumnName.indexOf(i)}>{item[i]}</TableData>)}
						{/*<TableData>{item['First Name']}</TableData>*/}
						{/*<TableData>{item['First Name']}</TableData>*/}
						{/*<TableData>{item['Last Name']}</TableData>*/}
						{/*<TableData>{item['Start Date']}</TableData>*/}
						{/*<TableData>{item['Department']}</TableData>*/}
						{/*<TableData>{item['Date of Birth']}</TableData>*/}
						{/*<TableData>{item['Street']}</TableData>*/}
						{/*<TableData>{item['City']}</TableData>*/}
						{/*<TableData>{item['State']}</TableData>*/}
						{/*<TableData>{item['Zip Code']}</TableData>*/}
					</tr>)}
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