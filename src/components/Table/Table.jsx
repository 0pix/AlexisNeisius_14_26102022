import './Table.css'
import React, {useContext, useEffect, useReducer, useState} from 'react';
import SearchContextProvider, {SearchContext} from "./Context/SearchContext";
import TableHead from "./TableHead/TableHead";
import tableHead from "./TableHead/TableHead";
import TableData from "./TableData/TableData";

function Table({data, noDataMessage}) {

	const collumnName = Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")
	const [employees, setEmployees] = useState(data)
	const [reverse, setReverse] = useState(true)
	const [employeeOnPage, setEmployeeOnPage] = useState(10)
	// const [sliceEnd, setSliceEnd] = useState(employeeOnPage)
	const [sliceStart, setSliceStart] = useState(0)
	const [page, setPage] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	//1 je parcours la tableau avec les employés
	//2 je boucle sur la length des catégoris (collumnName)
	//3 si un valeur est égual à l'input, je push l'employé dans le new tableau


	/**
	 * Function to filter the employees array with the value from search input
	 *
	 * @param e
	 *
	 * @return setEmployees(newArray)
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

	const howManyPage = () => {
		const page = []
		const totalPage = Math.ceil(employees.length / employeeOnPage)
		for (let i = 1; i <= totalPage; i++) {
			page.push(i)
		}
		setPage(page)
	}

	const previousPage = () => {
		setSliceStart(sliceStart - employeeOnPage)
		setCurrentPage(currentPage - 1)
	}
	const nextPage = () => {
		setSliceStart(sliceStart + employeeOnPage)
		setCurrentPage(currentPage + 1)
	}

	const pagination = (currentPage) => {
		if (currentPage === 1) {
			setSliceStart(0)
		} else {
			const test = currentPage - 1

			setSliceStart(employeeOnPage * test)
		}
		setCurrentPage(currentPage)
	}

	useEffect(() => {
		howManyPage()
	}, [employeeOnPage])

	// useEffect(() => {
	// }, [employeeOnPage])

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

	return (
		<div className={'table'}>
			<span>Show</span>
			<select onChange={(e) => setEmployeeOnPage(parseInt(e.target.value))} name="pets" id="pet-select">
				<option value="10">10</option>
				<option value="25">25</option>
				<option value="50">50</option>
			</select>
			<span>entries</span>

			<input onChange={(e) => handleChange(e)} type="search"/>
			<table className={'tabler'}>
				<tbody>
				<tr className={'tablerHead '}>
					{collumnName.map((item, index) =>
						<TableHead active={active} setActive={setActive} data={employees} setData={setEmployees}
											 key={`${item}-${index}`} props={item} reverse={reverse} setReverse={setReverse}
						>{item}</TableHead>)}
				</tr>

				{employees.length > 0 && employees.slice(sliceStart, (sliceStart + employeeOnPage)).map((item, index) =>
					<tr className={`${index % 2 === 0 ? 'tablePair' : 'tableUnPair'} tableData`} key={data.indexOf(item)}>
						{collumnName.map((i) => <td
							key={collumnName.indexOf(i)}>{item[i]}</td>)}
					</tr>)}
				</tbody>
			</table>

			{employees.length === 0 &&
				<div>{noDataMessage}</div>
			}

			<div className={'pagination'}>
				<button onClick={previousPage}>previous</button>

				{page.map((item) =>
					<div className={`${currentPage === item ? 'pageBtnActive' : null} pageBtn`}
							 onClick={() => pagination(item)}>
						{item}
					</div>
				)}

				<button onClick={nextPage}>next</button>


			</div>
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