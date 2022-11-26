import './Table.css'
import React, {useContext, useEffect, useReducer, useState} from 'react';
import SearchContextProvider, {SearchContext} from "./Context/SearchContext";
import TableHead from "./TableHead/TableHead";
import tableHead from "./TableHead/TableHead";
import TableData from "./TableData/TableData";
import arrowPage from '../../assets/svg/arrowPage.svg'

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
		// const handleChange = (e) => {
		// 	const newArray = [];
		// 	for (let i = 0; i < data.length; i++) {
		// 		for (let x = 0; x < collumnName.length; x++) {
		// 			if (data[i][collumnName[x]].toLowerCase().includes(e.target.value.toLowerCase())) {
		// 				newArray.push(data[i])
		// 				break
		// 			}
		//
		// 		}
		// 	}
		// 	setEmployees(newArray)
		// }

		// console.log(collumnName)

	const handleChange = (e) => {
			const newArray = data.reduce((array, currentValue) => {
				for (let x = 0; x < collumnName.length; x++) {
					if (currentValue[collumnName[x]].toLowerCase().includes(e.target.value.toLowerCase())) {
						array.push(currentValue)
						break
					}
				}
				return array
			}, [])
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
	console.log(sliceStart)

	const previousPage = () => {
		console.log(`sliceStart : ${sliceStart}`, `page.length : ${page.length}`, `currentPage : ${currentPage}`)
		if (currentPage === 1) {
			setSliceStart((sliceStart + employeeOnPage) * (page.length - 1))
			setCurrentPage(page.length)
		} else {
			setSliceStart(sliceStart - employeeOnPage)
			setCurrentPage(currentPage - 1)
		}
	}
	const nextPage = () => {

		console.log(`sliceStart : ${sliceStart}`, `page.length : ${page.length}`, `currentPage : ${currentPage}`)
		if (currentPage === page.length) {
			setSliceStart(0)
			setCurrentPage(1)
		} else {
			setSliceStart(sliceStart + employeeOnPage)
			setCurrentPage(currentPage + 1)
		}


		// setSliceStart(sliceStart + employeeOnPage)
		// setCurrentPage(currentPage + 1)
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
	}, [employeeOnPage, employees])

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

			<div className={"tableEntriesInput"}>
				<div className={'showEntries'}>
					<span>Show</span>
					<select onChange={(e) => setEmployeeOnPage(parseInt(e.target.value))} name="pets" id="pet-select">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
					<span>entries</span>
				</div>
				<input onChange={(e) => handleChange(e)} type="search"/>
			</div>


			{/*tableau*/}
			<table className={'tabler'}>
				<tbody>
				{/*catégorie*/}
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
				<button style={{
					backgroundImage: `url(${arrowPage})`
				}} className={'btnPage btnPageLeft '} onClick={previousPage}>
				</button>

				{page.map((item) =>
					<div className={`${currentPage === item ? 'pageBtnActive' : null} pageBtn`}
							 onClick={() => pagination(item)}>
						{item}
					</div>
				)}

				<button style={{
					backgroundImage: `url(${arrowPage})`
				}} className={'btnPage'} onClick={nextPage}>
				</button>


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