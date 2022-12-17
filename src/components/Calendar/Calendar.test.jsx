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

test('choose different month', function () {
	render(<form action="">
	<Calendar language={"en-US"}
						label={"Start Date"}
						htmlFor={"start-date"}>
	</Calendar>
</form>)
const input = screen.getByTestId('start-date')
fireEvent.click(input)
const inputCalendar = screen.getByTestId('Calendar')
const monthBtn = screen.getByTestId('maintBtnMonths')
fireEvent.click(monthBtn)
const currentMonth =  monthBtn.textContent || monthBtn.innerText;
expect(monthBtn).toHaveTextContent(currentMonth)

const allMonths = screen.getAllByTestId('monthsBtn')

if(allMonths[0] !== currentMonth){
	fireEvent.click(allMonths[0])
}else{
	fireEvent.click(allMonths[1])
}
expect(inputCalendar).not.toHaveTextContent(currentMonth)
})

	


