import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
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
	const currentMonth = monthBtn.textContent || monthBtn.innerText;
	expect(monthBtn).toHaveTextContent(currentMonth)

	const allMonths = screen.getAllByTestId('monthsBtn')

	if (allMonths[0] !== currentMonth) {
		fireEvent.click(allMonths[0])
	} else {
		fireEvent.click(allMonths[1])
	}
	expect(inputCalendar).not.toHaveTextContent(currentMonth)
})


test('choose different year', function () {
	render(<form action="">
		<Calendar language={"en-US"}
			label={"Start Date"}
			htmlFor={"start-date"}>
		</Calendar>
	</form>)
	const input = screen.getByTestId('start-date')
	fireEvent.click(input)
	const inputCalendar = screen.getByTestId('Calendar')
	const yearBtn = screen.getByTestId('maintBtnYears')
	fireEvent.click(yearBtn)
	const currentYear = yearBtn.textContent || yearBtn.innerText;
	expect(yearBtn).toHaveTextContent(currentYear)

	const allYears = screen.getAllByTestId('yearsBtn')

	fireEvent.click(allYears[1])

	expect(inputCalendar).not.toHaveTextContent(currentYear)
})

test('click on the nextMonthBtn', function () {
	render(<form action="">
		<Calendar language={"en-US"}
			label={"Start Date"}
			htmlFor={"start-date"}>
		</Calendar>
	</form>)
	const input = screen.getByTestId('start-date')
	fireEvent.click(input)
	const inputCalendar = screen.getByTestId('Calendar')
	const nextMonthBtn = screen.getByTestId('nextMonth')
	const monthBtn = screen.getByTestId('maintBtnMonths')
	const currentMonth = monthBtn.textContent || monthBtn.innerText;
	expect(monthBtn).toHaveTextContent(currentMonth)
	fireEvent.click(nextMonthBtn)

	expect(inputCalendar).not.toHaveTextContent(currentMonth)
})

test('back on today', function () {
	render(<form action="">
		<Calendar language={"en-US"}
			label={"Start Date"}
			htmlFor={"start-date"}>
		</Calendar>
	</form>)
	const input = screen.getByTestId('start-date')
	fireEvent.click(input)
	const dayBtn = screen.getByTestId('today')
	const currentDay = dayBtn.textContent || dayBtn.innerText;
	const allDaysBtn = screen.getAllByTestId('day')
	let otherDay = ''
	if (currentDay === "1") {
		fireEvent.click(allDaysBtn[1])
		otherDay = allDaysBtn[1].textContent || allDaysBtn[1].innerText;
	} else {
		fireEvent.click(allDaysBtn[0])
		otherDay = allDaysBtn[0].textContent || allDaysBtn[0].innerText;
	}
	expect(currentDay).not.toEqual(otherDay)
	const todayBtn = screen.getByTestId('todayBtn')
	fireEvent.click(todayBtn)
	otherDay = screen.getByTestId('today').textContent || screen.getByTestId('today').innerText
	expect(currentDay).toEqual(otherDay)
})



