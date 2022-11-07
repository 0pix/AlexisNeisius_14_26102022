import React, {useEffect, useState} from 'react';
import './Calendar.css'
import InputMonthCalendar from "./InputMonthCalendar";
import InputYearCalendar from "./InputYearCalendar";

const Calendar = ({language}) => {
	// console.log(currentDay); // Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
	function getDaysInMonth(year, month) {
		return new Date(year, month, 0).getDate();
	}

	function getFirstDayInMonth(year, month) {
		const firstDay = new Date(`${month}/1/${year}`).getDay()
		if (firstDay === 0) {
			return 6
		}
		return firstDay - 1
	}

	const getDays = () => {
		const tabler = []
		for (let x = 1; x <= 7; x++) {
			const date = new Date(`8 ${x} 2022`)
			const day = date.toLocaleString(language, {weekday: 'short'})
			if (day[day.length - 1] === ".") {
				tabler.push(day.slice(0, -1))
			} else {
				tabler.push(day)
			}
		}
		return tabler
	}

	const currentDate = new Date()
	const currentDay = currentDate.getDate()
	const currentMonth = currentDate.getMonth() + 1
	const currentYear = currentDate.getFullYear()
	const [month, setMonth] = useState(currentMonth)
	const [year, setYear] = useState(currentYear)
	const [day, setDay] = useState(currentDay)
	const getPreviousMonth = getDaysInMonth(year, month - 1)
	const daysInCurrentMonth = getDaysInMonth(year, month);
	const firstDayMonth = getFirstDayInMonth(year, month)
	const days = getDays()


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
	const getNextDay = () => {
		const place = 49 - 7 - daysInCurrentMonth - firstDayMonth
		const nextDays = []
		for (let x = 1; x <= place; x++) {
			nextDays.push(x)
		}
		return nextDays
	}
	const previousDays = getPreviousDay()
	const allDays = allDay()
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
		setDay(currentDay)
	}
	const nextMonth = (number) => {
		setMonth(month + 1)
		if (month >= 12) {
			setMonth(1)
			setYear(year + 1)
		}
	}
	console.log(days)
	// console.log('test')
	// console.log(allDay())
	// console.log('day :', day)
	// https://www.w3schools.com/jsref/jsref_tolocalestring.asp

	return (<div className={'calendar'}>
		<div className={'titleDate'}>
			<button className={'titleDateBtn'}
							onClick={previousMonth}>-
			</button>
			<InputMonthCalendar data={month} setData={setMonth} language={language}/>
			<button className={'titleDateBtn'}
							onClick={nextMonth}>+
			</button>
			<InputYearCalendar data={year} setData={setYear} minValue={1920} maxValue={currentYear}/>
		</div>
		<div className={'parent'}>
			{days.map((el) => <div className={'days'}>{el.slice('.')}</div>)}
			{previousDays.map((el) => <div className={'previousNextDays'}>{el}</div>)}
			{allDays.map((el) => <div className={el === day ? 'today' : 'allDays'}
																onClick={(e) => setDay(parseInt(e.target.innerHTML))}
			>{el}</div>)}
			{nextDays.map((el) => <div className={'previousNextDays'}>{el}</div>)}
		</div>
		<button className={'todayBtn'} onClick={today}>today</button>
	</div>);
};

export default Calendar;
