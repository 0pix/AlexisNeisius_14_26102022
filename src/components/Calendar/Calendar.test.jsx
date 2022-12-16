import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Calendar from "./Calendar";
test('get value in input when we choose a day', function () {
	render(<form action="">
		<Calendar language={"en-US"}
							label={"Start Date"}
							htmlFor={"start-date"}>
		</Calendar>
	</form>)

	const inputNode = screen.getByTestId("start-date")
	fireEvent.click(inputNode)

	const btnToday = screen.getByTestId("today")
	fireEvent.click(btnToday)

	expect(inputNode.value)?.not.toBe('')
})