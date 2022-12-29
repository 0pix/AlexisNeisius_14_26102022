import React, {useState} from "react";
import "./Calendar.css";
import InputMonthCalendar from "./InputMonthCalendar";
import InputYearCalendar from "./InputYearCalendar";

const Calendar = ({language, label, htmlFor}) => {
	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear(0);
	const [month, setMonth] = useState(currentMonth);
	const [year, setYear] = useState(currentYear);
	const [day, setDay] = useState(currentDay);
	const getPreviousMonth = howManyDaysInTheMonth(year, month - 1);
	const howManyDaysInCurrentMonth = howManyDaysInTheMonth(year, month);
	const firstDayMonth = getFirstDayInMonth(year, month);
	const days = getDaysOfTheWeek();
	const [openCalendar, setOpenCalendar] = useState(false);
	const previousDays = getPreviousDay();
	const allDays = allDay();
	const nextDays = getNextDay();
	const [dateInput, setDateInput] = useState(false);

	/**
	 *  Function to know how many days we get in the select month of the select year
	 *  @param {number} year - year of your choice
	 *  @param {number} month - year of your choice
	 *  @returns {number} - How many days we get in the select month (exemple: 31)
	 */
	function howManyDaysInTheMonth(year, month) {
		return new Date(year, month, 0).getDate();
	}

	/**
	 *  Function to get the first day in string of the select month of the select year
	 *  @param {number} year - year of your choice
	 *  @param {number} month - year of your choice
	 *  @returns {string} - the first day (exemple: "Monday")
	 */
	function getFirstDayInMonth(year, month) {
		const firstDay = new Date(`${month}/1/${year}`).getDay();
		if (firstDay === 0) {
			return 6;
		}
		return firstDay - 1;
	}

	/**
	 *  Function to get all days in string
	 *  @returns {array} - array with all day in string (exemple: ["Monday","Tuesday",...)
	 */
	function getDaysOfTheWeek() {
		const tabler = [];
		for (let x = 1; x <= 7; x++) {
			const date = new Date(`8 ${x} 2022`);
			const day = date.toLocaleString(language, {weekday: "short"});
			if (day[day.length - 1] === ".") {
				tabler.push(day.slice(0, -1));
			} else {
				tabler.push(day);
			}
		}
		return tabler;
	}

	/**
	 *  Function to get all days in number
	 *  @returns {array} - array with all day in number (exemple: [1,2,3,4,...)
	 */
	function allDay() {
		const tabler = [];

		for (let x = 1; x <= howManyDaysInCurrentMonth; x++) {
			tabler.push(x);
		}
		return tabler;
	}

	/**
	 *  Function to get last days in number of the previous month
	 *  @returns {array} - array with all last days in number of the previous month (exemple: [1,2,3,4,...)
	 */
	function getPreviousDay() {
		const previousDays = [];
		for (let x = getPreviousMonth; x > getPreviousMonth - firstDayMonth; x--) {
			previousDays.push(x);
		}
		return previousDays.reverse();
	}

	/**
	 *  Function to get first days in number of the next month
	 *  @returns {array} - array with all first days in number of the next month (exemple: [1,2,3,4,...)
	 */
	function getNextDay() {
		const place = 49 - 7 - howManyDaysInCurrentMonth - firstDayMonth;
		const nextDays = [];
		for (let x = 1; x <= place; x++) {
			nextDays.push(x);
		}
		return nextDays;
	}

	/**
	 *  Function to send date in the main input
	 *  @returns {string} - select date
	 */
	function dateToInput() {
		let dayInput = day;
		let monthInput = month;

		if (dayInput.toString().length === 1) {
			dayInput = `0${day}`;
		}

		if (month.toString().length === 1) {
			monthInput = `0${month}`;
		}

		if (openCalendar && dateInput) {
			return `${dayInput}/${monthInput}/${year}`;
		}
	}

	/**
	 *  Function to convert string day in number day and store it in the variables
	 *  @param {string} day - the day in string from the button
	 *  @returns {number} - the date in string convert in number and store it in variable
	 */
	function dayHandler(day) {
		setDay(day);
		setDateInput(true);
	}

	//******************************* Functions Buttons  *******************************//

	/**
	 *  Function onClick to get previous month
	 *
	 *  @returns {number} - previous month
	 */
	const previousMonth = () => {
		setMonth(month - 1);
		if (month <= 1) {
			setMonth(12);
			setYear(year - 1);
		}
	};

	/**
	 *  Function onClick to get today
	 *
	 *  @returns {number} - today
	 */
	const today = () => {
		setMonth(currentMonth);
		setYear(currentYear);
		setDay(currentDay);
	};

	/**
	 *  Function onClick to get next month
	 *
	 *  @returns {number} - next month
	 */
	const nextMonth = () => {
		setMonth(month + 1);
		if (month >= 12) {
			setMonth(1);
			setYear(year + 1);
		}
	};

	// https://www.w3schools.com/jsref/jsref_tolocalestring.asp

	return (
		<div className={"test"}>
			{openCalendar && (
				<div
					onClick={() => setOpenCalendar(!openCalendar)}
					className={"backgroundCalendar"}
				></div>
			)}
			<div className={"calendarContainer"}>
				<label htmlFor={htmlFor}>
					{label}
					<input
						readOnly
						data-testid={htmlFor}
						onClick={() => setOpenCalendar(!openCalendar)}
						autoComplete={"chrome-off"}
						className={"stateInput"}
						type="text"
						id="state"
						value={dateToInput()}
					/>
				</label>
				{openCalendar && (
					<div data-testid={'Calendar'} className={"calendar"}>
						<div className={"titleDate"}>
							<button
								className={"titleDateBtn"}
								onClick={previousMonth}
								type={"button"}
							>
								-
							</button>
							<InputMonthCalendar
								data={month}
								setData={setMonth}
								language={language}
							/>
							<button
								data-testid={'nextMonth'}
								className={"titleDateBtn"}
								onClick={nextMonth}
								type={"button"}
							>
								+
							</button>
							<InputYearCalendar
								data={year}
								setData={setYear}
								minValue={1920}
								maxValue={currentYear}
							/>
						</div>
						<div className={"parent"}>
							{days.map((el) => (
								<div key={`${el}-days`} className={"days"}>{el.slice(".")}</div>
							))}
							{previousDays.map((el) => (
								<div key={`${el}-previousDays`} className={"previousNextDays"}>{el}</div>
							))}
							{allDays.map((el) => (
								<div
									key={`${el}-allDays`}
									data-testid={el === day ? "today" : "day"}
									className={el === day ? "today" : "allDays"}
									onClick={(e) => dayHandler(parseInt(e.target.innerHTML))}
								>
									{el}
								</div>
							))}
							{nextDays.map((el) => (
								<div key={`${el}-nexDays`} className={"previousNextDays"}>{el}</div>
							))}
						</div>
						<button data-testid={'todayBtn'} type={"button"} className={"todayBtn"} onClick={today}>
							today
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Calendar;
