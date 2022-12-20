import React, { useEffect, useState } from "react"
import "./Home.css"
import Modal from "../../components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import SelectDropDown from "../../components/SelectDropDown/SelectDropDown"
import { saveEmployee } from "../../store/employee/employeeSlice"
import { Link } from "react-router-dom"
import Calendar from "../../components/Calendar/Calendar"

const Home = () => {
	const [openModal, setOpenModal] = useState(false)
	const employees = useSelector((state) => state.employees.employees || '')
	const states = useSelector((state) => state.employees.states || '')
	const department = useSelector((state) => state.employees.department || '')
	const dispatch = useDispatch()
	const test = [
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Alexis",
			"Last Name": "Zozo",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "22/02/1996",
			"Street": "1 rue de la fête",
			"City": "paris",
			"State": "AL",
			"Zip Code": "10000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "Zoro",
			"Last Name": "ayio",
			"Start Date": "01/11/2022",
			"Department": "Engineering",
			"Date of Birth": "01/02/1978",
			"Street": "56 rue du bout du pont",
			"City": "amiens",
			"State": "NY",
			"Zip Code": "57000"
		},
		{
			"First Name": "louis ",
			"Last Name": "wager",
			"Start Date": "10/11/2022",
			"Department": "Legal",
			"Date of Birth": "10/11/1993",
			"Street": "6 rue place du fromage ",
			"City": "lyon",
			"State": "RI",
			"Zip Code": "78000"
		},
		{
			"First Name": "toto",
			"Last Name": "gjhghjghj",
			"Start Date": "07/12/2022",
			"Department": "Marketing",
			"Date of Birth": "06/12/2022",
			"Street": "ghjghjghjgjhghjg",
			"City": "jhghjghjgjhg",
			"State": "AZ",
			"Zip Code": "65456465"
		},
		{
			"First Name": "Julia ",
			"Last Name": "Hiro",
			"Start Date": "16/11/2022",
			"Department": "Human Resources",
			"Date of Birth": "01/12/2022",
			"Street": "30 rue Higo",
			"City": "Nice",
			"State": "CA",
			"Zip Code": "15"
		}

	]

	const functionCloseBtn = () => {
		setOpenModal(false)
	}

	useEffect(() => {
		document.title = "HRnet | Home"
	}, [])

	const handlerSubmit = (e) => {
		e.preventDefault()
		const employee = {
			"First Name": e.target[0].value || "",
			"Last Name": e.target[1].value || "",
			"Start Date": e.target[3].value || "",
			"Department": e.target[8].value || "",
			"Date of Birth": e.target[2].value || "",
			"Street": e.target[4].value || "",
			"City": e.target[5].value || "",
			"State": e.target[6].value || "",
			"Zip Code": e.target[7].value || "",
		}

		if (
			employee["First Name"] === "" ||
			employee["Last Name"] === "" ||
			employee["Start Date"] === "" ||
			employee["Department"] === "" ||
			employee["Date of Birth"] === "" ||
			employee["Street"] === "" ||
			employee["City"] === "" ||
			employee["State"] === "" ||
			employee["Zip Code"] === ""
		) {
			alert("un ou plusieurs champs ne sont pas remplis")
		} else {
			e.preventDefault()
			// alert('oui ça part')
			setOpenModal(true)
			dispatch(saveEmployee(employee))
		}
	}

	useEffect(() => {
		localStorage.setItem("employees", JSON.stringify(employees))
	}, [employees])
	console.log("test: ", employees)

	return (
		<div data-testid={'home'}>
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
				functionCloseBtn={functionCloseBtn}
			>
				Employé enregistré
			</Modal>
			<div className={"home page-left"}>
				<div className="container">
					<form
						onSubmit={(e) => handlerSubmit(e)}
						action="#"
						id="create-employee"
					>
						<h2>Create Employee</h2>
						<label htmlFor="first-name">
							First Name
							<input data-testid={'first-name'} type="text" id="first-name" />
						</label>

						<label htmlFor="last-name">
							Last Name
							<input data-testid={'last-name'} type="text" id="last-name" />
						</label>

						<Calendar
							language={"en-US"}
							label={"Date of Birth"}
							htmlFor={"birth-date"}
						/>

						<Calendar
							language={"en-US"}
							label={"Start Date"}
							htmlFor={"start-date"}
						/>

						<label htmlFor="street">
							Street
							<input data-testid={'street'} id="street" type="text" />
						</label>

						<label htmlFor="city">
							City
							<input data-testid={'city'} id="city" type="text" />
						</label>

						<SelectDropDown data={states} htmlFor={"state"} label={"State"} />

						<label htmlFor="zip-code">
							Zip Code
							<input data-testid={'zipCode'} id="zip-code" type="number" />
						</label>

						<SelectDropDown
							data={department}
							htmlFor={"department"}
							label={"Department"}
						/>

						<div className={"containerBtn"}>
							<button data-testid={'submit'} style={{ margin: "auto" }}>Save</button>
						</div>
						<Link to={"/Employee"}> see employees</Link>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Home
