import './Table.css'
import React, {useEffect, useState} from 'react';
import TableHead from "./TableHead/TableHead";
import arrowPage from '../../assets/svg/arrowPage.svg'

function Table({data, noDataMessage}) {

	const collumnName = data.length && Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")
	const [employees, setEmployees] = useState(data)
	const [reverse, setReverse] = useState(true)
	const [employeeOnPage, setEmployeeOnPage] = useState(10)
	const [input, setInput] = useState('')
	const [sliceStart, setSliceStart] = useState(0)
	const [page, setPage] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	/**
	 *
	 * @description to filter the employees in the array with the value from search input
	 *
	 * @param e
	 *
	 * @return void
	 */

	const searchEmployee = (e) => {
		setSliceStart(0)
		setCurrentPage(1)
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
		setInput(e.target.value.toLowerCase())
	}

	/**
	 * @description function to know how many page we need on the table
	 *
	 * @return void
	 */

	const howManyPage = () => {
		const page = []
		const totalPage = Math.ceil(employees.length / employeeOnPage)
		for (let i = 1; i <= totalPage; i++) {
			page.push(i)
		}
		setPage(page)
	}

	/**
	 * @description function to display the previous page
	 *
	 * @return void
	 */

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

	/**
	 * @description function to display the next page
	 *
	 * @return void
	 */

	const nextPage = () => {
		if (currentPage === page.length) {
			setSliceStart(0)
			setCurrentPage(1)
		} else {
			setSliceStart(sliceStart + employeeOnPage)
			setCurrentPage(currentPage + 1)
		}
	}

	/**
	 * @description function to change page with click on btn page
	 *
	 * @param currentPage the current page number
	 *
	 * @return void
	 */

	const paginationHandle = (currentPage) => {
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
	}, [employeeOnPage, employees, input])


	if (!data.length) {
		return <div>c'est vide</div>
	}

	return (
		<div data-testid={"table"} className={'table'}>

			<div className={"tableEntriesInput"}>
				{/*select how many employee in the table*/}
				<div className={'showEntries'}>
					<span>Show</span>
					<select onChange={(e) => setEmployeeOnPage(parseInt(e.target.value))} name="pets" id="pet-select">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
					<span>entries</span>
				</div>
				{/*search bar*/}
				<input data-testid={"inputTable"} placeholder={"Search"} onChange={(e) => searchEmployee(e)} type="search"/>
			</div>

			{/*table*/}
			<table className={'tabler'}>
				<tbody>
				{/*categorise header*/}
				<tr className={'tablerHead '}>
					{collumnName.map((item, index) =>
						<TableHead active={active} setActive={setActive} data={employees} setData={setEmployees}
											 key={`${item}-${index}`} props={item} reverse={reverse} setReverse={setReverse}
						>{item}</TableHead>)}
				</tr>
				{/*employees in the table*/}
				{employees.length > 0 && employees.slice(sliceStart, (sliceStart + employeeOnPage)).map((item, index) =>
					<tr className={`${index % 2 === 0 ? 'tablePair' : 'tableUnPair'} tableData swing-in-top-fwd `}
							key={data.indexOf(item)}>
						{collumnName.map((i) => <td
							key={collumnName.indexOf(i)}>{item[i]}</td>)}
					</tr>)}
				</tbody>
			</table>
			{/*message when no employees*/}
			{employees.length === 0 &&
				<div>{noDataMessage}</div>
			}
			{/*pagination btn*/}
			<div className={'pagination'}>
				{/*previous btn*/}
				{page.length >= 2 ? <button style={{
					backgroundImage: `url(${arrowPage})`
				}} className={'btnPage btnPageLeft '} onClick={previousPage}>
				</button> : null}
				{/*all pages as a btn*/}
				{page.map((item) =>
					<div className={`${currentPage === item ? 'pageBtnActive' : null} pageBtn`}
							 onClick={() => paginationHandle(item)}>
						{item}
					</div>
				)}
				{/*next btn*/}
				{page.length >= 2 ? <button style={{
					backgroundImage: `url(${arrowPage})`
				}} className={'btnPage'} onClick={nextPage}>
				</button> : null}
			</div>
		</div>
	);
}

export default Table;


//TODO: faire le responsive du tableau