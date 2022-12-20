import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Header from './Header';
import Home from "../../pages/Home/Home";
import Employee from "../../pages/Employee/Employee";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";



test('Header on screen', function () {
  render(
    <Provider store={store}>
      <Router>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="employee" element={<Employee/>}/>
			</Routes>
		</Router>
    </Provider>
    
  )
  const header = screen.getByTestId('header')
  expect(header).toHaveTextContent('Home')
})