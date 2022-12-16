import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Table from "./Table";

const data = [
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
	}, {
		"First Name": "Thomas",
		"Last Name": "Titi",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	}, {
		"First Name": "Théo",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	}, {
		"First Name": "Manu",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	}, {
		"First Name": "Jordan",
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
		"First Name": "Jordan",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},{
		"First Name": "Jordan",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},{
		"First Name": "Jordan",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},{
		"First Name": "Jordan",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},{
		"First Name": "Jordan",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},{
		"First Name": "eleven",
		"Last Name": "Zozo",
		"Start Date": "01/11/2022",
		"Department": "Engineering",
		"Date of Birth": "22/02/1996",
		"Street": "1 rue de la fête",
		"City": "paris",
		"State": "AL",
		"Zip Code": "10000"
	},
]


test('get message when no data', function () {
	render(
		<Table data={[]} noDataMessage={"pas d'employés correspondant"}
		/>
	)
	const tabler = screen.getByTestId('tableNoData')
	expect(tabler).toHaveTextContent('correspondant')
})


test('data table on screen', function () {

	render(
		<Table data={data}
		/>
	)
	const table = screen.getByTestId("table")
	expect(table).toHaveTextContent("Alexis", "Thomas", "Théo", "Manu", "Jordan")
	expect(table).toHaveTextContent("First Name", "Last Name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code")
})

test('search bar find one employee', function () {
	render(
		<Table data={data}
		/>
	)
	const input = screen.getByTestId("inputTable")
	const tabler = screen.getByTestId('table')
	fireEvent.change(input, {target: {value: 'thomas'}})

	expect(tabler).toHaveTextContent('Titi')
	expect(tabler).not.toHaveTextContent('Zozo')
})

test('search bar find nobody', function () {
	render(
		<Table data={data} noDataMessage={"pas d'employés correspondant"}
		/>
	)
	const input = screen.getByTestId("inputTable")
	const tabler = screen.getByTestId('table')
	fireEvent.change(input, {target: {value: 'Lucie'}})
	expect(tabler).toHaveTextContent('pas d\'employés correspondant')
})

test('next page btn', function () {
	render(
		<Table data={data} noDataMessage={"pas d'employés correspondant"}
		/>
	)
	const tabler = screen.getByTestId('table')
	const btnNextPage = screen.getByTestId('btnNextPage')
	fireEvent.click(btnNextPage)
	expect(tabler).toHaveTextContent('eleven')
})


test('click on btn page to get second page', function () {
	render(
		<Table data={data} noDataMessage={"pas d'employés correspondant"}
		/>
	)
	const tabler = screen.getByTestId('table')
	const allBtnPage = screen.getAllByTestId('pageBtn')
	fireEvent.click(allBtnPage[1])
	expect(tabler).toHaveTextContent('eleven')
})