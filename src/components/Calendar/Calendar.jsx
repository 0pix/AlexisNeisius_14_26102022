import React, {useEffect, useState} from 'react';
import './Calendar.css'
import inputCalendar from "./InputCalendar";
import InputCalendar from "./InputCalendar";

const Calendar = () => {
	// console.log(date); // Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
	function getDaysInMonth(year, month) {
		return new Date(year, month, 0).getDate();
	}

	// function getFirstDayInMonth(year, month) {
	// 	let test = new Date(2022, month - 1, 1)
	// 	return test.toLocaleDateString('en-GB', {weekday: 'long'})
	// }

	function getFirstDayInMonth(year, month) {
		return new Date(2022, month - 1, 1).getDay()
	}

	// function getDayName(dateStr, locale) {
	// 	var date = new Date(dateStr);
	// 	return date.toLocaleDateString(locale, {weekday: 'long'});
	// }

	const currentDate = new Date()
	const currentDay = currentDate.getDay() - 1
	const currentMonth = currentDate.getMonth() + 1
	const currentYear = currentDate.getFullYear()
	const [month, setMonth] = useState(currentMonth)
	const [year, setYear] = useState(currentYear)
	const [day, setDay] = useState(currentDay)
	const getPreviousMonth = getDaysInMonth(year, month - 1)
	const selectDate = new Date(`${month}/${currentDay}/${year}`)
	const daysInCurrentMonth = getDaysInMonth(year, month);
	const firstDayMonth = getFirstDayInMonth(year, month)
	const monthLetter = selectDate.toLocaleString('en-GB', {month: 'long'})
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"]


	const allDay = () => {
		const tabler = []

		for (let x = 1; x <= daysInCurrentMonth; x++) {
			tabler.push(x)
		}
		return tabler
	}
	const getPreviousDay = () => {
		const previousDays = []
		for (let x = getPreviousMonth; x > getPreviousMonth - firstDayMonth; x--) {

			previousDays.push(x)
		}
		return previousDays.reverse()
	}


	const previousDays = getPreviousDay()
	const allDays = allDay()

	const getNextDay = () => {
		const place = 49 - 7 - daysInCurrentMonth - firstDayMonth
		const nextDays = []
		for (let x = 1; x <= place; x++) {
			nextDays.push(x)
		}
		return nextDays
	}

	const nextDays = getNextDay()
//******************************* Functions Buttons  *******************************//
	const previousMonth = (number) => {
		setMonth(month - 1)
		if (month <= 1) {
			setMonth(12)
			setYear(year - 1)
		}
	}
	const today = () => {
		setMonth(currentMonth)
		setYear(currentYear)
		setDay(currentDay.toString())
	}
	const nextMonth = (number) => {
		setMonth(month + 1)
		if (month >= 12) {
			setMonth(1)
			setYear(year + 1)
		}
	}

	useEffect(() => {
		console.log(day)
	}, [day])

	console.log('test')
	return (<div className={'calendar'}>
		<div className={'titleDate'}>
			<button
				onClick={previousMonth}>-
			</button>
			<div>{monthLetter}</div>
			<div>{year}</div>
			<button
				onClick={nextMonth}>+
			</button>
		</div>
		<InputCalendar data={year} setData={setYear}/>
		<div className={'parent'}>
			{days.map((el) => <div className={'days'}>{el}</div>)}
			{previousDays.map((el) => <div className={'previousNextDays'}>{el}</div>)}
			{allDays.map((el) => <div className={el.toString() === day ? 'today' : null}
																onClick={(e) => setDay(e.target.innerHTML)}
			>{el}</div>)}
			{nextDays.map((el) => <div className={'previousNextDays'}>{el}</div>)}
		</div>
		<button className={'todayBtn'} onClick={today}>today</button>
		<div>

		</div>
	</div>);
};

export default Calendar;
