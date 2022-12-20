import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Home from './Home';
import {store} from "../../store/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";


test('home page on screen', function () {
	const route = '/'
	render(
		<MemoryRouter initialEntries={[route]}>
			<Provider store={store}>
				<Home/>
			</Provider>
		</MemoryRouter>,
	)
	const home = screen.getByTestId('home')
	expect(home).toHaveTextContent('First Name')
})

test('submit form', function () {
	const route = '/'
	render(
		<MemoryRouter initialEntries={[route]}>
			<Provider store={store}>
				<Home/>
			</Provider>
		</MemoryRouter>,
	)
	const home = screen.getByTestId('home')

	const firstName = screen.getByTestId("first-name")
	fireEvent.change(firstName, {target: {value: 'Thomas'}})
	expect(firstName.value).toBe('Thomas')

	const lastName = screen.getByTestId("last-name")
	fireEvent.change(lastName, {target: {value: 'Thomas'}})
	expect(lastName.value).not.toBe('')

	const birthDate = screen.getByTestId("birth-date")
	fireEvent.change(birthDate, {target: {value: '14/12/2022'}})
	expect(birthDate.value).not.toBe('')

	const startDate = screen.getByTestId("start-date")
	fireEvent.change(startDate, {target: {value: '14/12/2022'}})
	expect(startDate.value).not.toBe('')

	const street = screen.getByTestId("street")
	fireEvent.change(street, {target: {value: 'Thomas'}})
	expect(street.value).not.toBe('')

	const city = screen.getByTestId("city")
	fireEvent.change(city, {target: {value: 'Thomas'}})
	expect(city.value).not.toBe('')

	const state = screen.getByTestId("state")
	fireEvent.click(state)
	const itemDropDownState = screen.getAllByTestId("itemDropDown-state")
	expect(itemDropDownState[0]).toBeInTheDocument()
	fireEvent.click(itemDropDownState[0])
	expect(state.value).not.toBe('')

	const zipCode = screen.getByTestId('zipCode')
	fireEvent.change(zipCode, {target: {value: 41000}})
	expect(zipCode.value).not.toBe('')

	const departement = screen.getByTestId("department")
	fireEvent.click(departement)
	const itemDropDownDepartement = screen.getAllByTestId("itemDropDown-department")
	fireEvent.click(itemDropDownDepartement[0])
	expect(departement.value).not.toBe('')

	const submitBtn = screen.getByTestId('submit')
})