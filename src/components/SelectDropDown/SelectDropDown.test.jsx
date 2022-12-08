import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import SelectDropDown from "./SelectDropDown";
import React from "react";

test('selectDropDown', function () {
	const department = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]
	render(<form action="">
		<SelectDropDown
			data={department}
			htmlFor={"department"}
			label={"Department"}
		/>
	</form>)

	const inputNode = screen.getByTestId("selectDropDown")
	fireEvent.click(inputNode)

	const dep = screen.getByText("Sales")
	fireEvent.click(dep)

	expect(inputNode.value).not.toBe("")
})