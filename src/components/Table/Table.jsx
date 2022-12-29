import "./Table.css"
import React, {useEffect, useState} from "react"
import TableHead from "./TableHead/TableHead"
import arrowPage from "../../assets/svg/arrowPage.svg"

function Table({data, noDataMessage}) {
	const collumnName = data.length && Object.keys(data.length ? data[0] : null)
	const [active, setActive] = useState("")
	const [employees, setEmployees] = useState(data || '')
	const [reverse, setReverse] = useState(true)
	const [employeeOnPage, setEmployeeOnPage] = useState(10)
	const [input, setInput] = useState("")
	const [sliceStart, setSliceStart] = useState(0)
	const [page, setPage] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	/**
	 *  Function to filter employees with the input value
	 *  @param {object} e - event
	 *  @returns {void} Set a new employees array to display him
	 */
	const searchEmployee = (e) => {
		setSliceStart(0)
		setCurrentPage(1)
		setActive('')
		const newArray = data.reduce((array, currentValue) => {
			for (let x = 0; x < collumnName.length; x++) {
				if (
					currentValue[collumnName[x]]
						.toLowerCase()
						.includes(e.target.value.toLowerCase())
				) {
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
	 *  Function to filter employees with the input value
	 *  @returns {void} - Set a variable with array of all pages number
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


	/**
	 *  Function to display the previous page
	 *  @returns {void} - set all variables to display the previous page
	 */

	const previousPage = () => {
		console.log(
			`sliceStart : ${sliceStart}`,
			`page.length : ${page.length}`,
			`currentPage : ${currentPage}`
		)
		if (currentPage === 1) {
			setSliceStart((sliceStart + employeeOnPage) * (page.length - 1))
			setCurrentPage(page.length)
		} else {
			setSliceStart(sliceStart - employeeOnPage)
			setCurrentPage(currentPage - 1)
		}
	}

	/**
	 *  Function to display the next page
	 *  @returns {void} - set all variables to display the next page
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

	/**
	 *  Function on click on btn number page to change page
	 *  @returns {void} - set all variables to display the previous or next page
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
		return <div data-testid="tableNoData">{noDataMessage}</div>
	}

	return (
		<div data-testid={"table"} className={"table"}>
			<div className={"tableEntriesInput"}>
				{/*select how many employee in the table*/}
				<div className={"showEntries"}>
					<span>Show</span>
					<select
						onChange={(e) => setEmployeeOnPage(parseInt(e.target.value))}
						name="pets"
						id="pet-select"
					>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
					<span>entries</span>
				</div>
				{/*search bar*/}
				<input
					data-testid={"inputTable"}
					placeholder={"Search"}
					onChange={(e) => searchEmployee(e)}
					type="search"
				/>
			</div>

			{/*table*/}
			<div className={"containerTabler"}>
				<table className={"tabler"}>
					<tbody>
					{/*categorise header*/}
					<tr className={"tablerHead "}>
						{collumnName.map((item, index) => (
							<TableHead
								active={active}
								setActive={setActive}
								data={employees}
								setData={setEmployees}
								key={`${item}-${index}`}
								props={item}
								reverse={reverse}
								setReverse={setReverse}
							>
								{item}
							</TableHead>
						))}
					</tr>
					{/*employees in the table*/}
					{employees.length > 0 &&
						employees
							.slice(sliceStart, sliceStart + employeeOnPage)
							.map((item, index) => (
								<tr key={`${item} ${index}`}
										className={`${
											index % 2 === 0 ? "tablePair" : "tableUnPair"
										} tableData swing-in-top-fwd `}
								>
									{collumnName.map((i) => (
										<td key={collumnName.indexOf(i)}>{item[i]}</td>
									))}
								</tr>
							))}
					</tbody>
				</table>
			</div>

			{/*message when no employees*/}
			{employees.length === 0 && <div data-testid="tableNoData">{noDataMessage}</div>}
			{/*pagination btn*/}
			<div className={"pagination"}>
				{/*previous btn*/}
				{page.length >= 2 ? (
					<button
						style={{
							backgroundImage: `url(${arrowPage})`,
						}}
						className={"btnPage btnPageLeft "}
						onClick={previousPage}
					></button>
				) : null}
				{/*all pages as a btn*/}
				{page.map((item) => (
					<div
						key={`${item}-page`}
						data-testid={'pageBtn'}
						className={`${
							currentPage === item ? "pageBtnActive" : null
						} pageBtn`}
						onClick={() => paginationHandle(item)}
					>
						{item}
					</div>
				))}
				{/*next btn*/}
				{page.length >= 2 ? (
					<button
						data-testid={'btnNextPage'}
						style={{
							backgroundImage: `url(${arrowPage})`,
						}}
						className={"btnPage"}
						onClick={nextPage}
					></button>
				) : null}
			</div>
		</div>
	)
}

export default Table

//TODO: faire le responsive du tableau
