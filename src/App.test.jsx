import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from './app'
import {store} from "./store/store";
import {Provider} from "react-redux";

test('App', function () {
	render(
		<Provider store={store}>
			<App/>
		</Provider>
	)

	const home = screen.getByTestId('home')
	expect(home).toHaveTextContent('First Name')
})