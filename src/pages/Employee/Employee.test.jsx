import {render, screen} from "@testing-library/react";
import React from "react";
import {MemoryRouter} from 'react-router-dom'
import Employee from "./Employee";
import {store} from "../../store/store";
import {Provider} from "react-redux";

test('employee page on screen', function () {
	const route = "employee"
	render(
		<MemoryRouter initialEntries={[route]}>
			<Provider store={store}>
				<Employee/>
			</Provider>
		</MemoryRouter>,
	)
	const home = screen.getByTestId('employee')
})