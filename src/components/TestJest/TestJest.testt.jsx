import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import TestJest from "./TestJest";


// test('Test Jest', function () {
//   const handleClick = jest.fn()
// 	render(
// 		<TestJest TheFunction={handleClick}  />
// 	)
// 	const btn = screen.getByTestId('btnTest')
//   fireEvent.click(btn)
// 	expect(handleClick).toHaveBeenCalled()
// })


// test('Test Jest', function () {
//   const handleClick = jest.fn()
//   const app = shallow(<TestJest/>)
//   const instance = app.instance()
// 	const btn = screen.getByTestId('btnTest')
//   fireEvent.click(btn)
// 	expect(handleClick).toHaveBeenCalled()
// })