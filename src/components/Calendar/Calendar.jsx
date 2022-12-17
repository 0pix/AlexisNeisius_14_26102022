import React, { useState } from "react";
import "./Calendar.css";
import InputMonthCalendar from "./InputMonthCalendar";
import InputYearCalendar from "./InputYearCalendar";

const Calendar = ({ language, label, htmlFor }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear(0);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [day, setDay] = useState(currentDay);
  const getPreviousMonth = getDaysInMonth(year, month - 1);
  const daysInCurrentMonth = getDaysInMonth(year, month);
  const firstDayMonth = getFirstDayInMonth(year, month);
  const days = getDays();
  const [openCalendar, setOpenCalendar] = useState(false);
  const previousDays = getPreviousDay('');
  const allDays = allDay();
  const nextDays = getNextDay();
  const [dateInput, setDateInput] = useState(false);

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function getFirstDayInMonth(year, month) {
    const firstDay = new Date(`${month}/1/${year}`).getDay();
    if (firstDay === 0) {
      return 6;
    }
    return firstDay - 1;
  }

  function getDays() {
    const tabler = [];
    for (let x = 1; x <= 7; x++) {
      const date = new Date(`8 ${x} 2022`);
      const day = date.toLocaleString(language, { weekday: "short" });
      if (day[day.length - 1] === ".") {
        tabler.push(day.slice(0, -1));
      } else {
        tabler.push(day);
      }
    }
    return tabler;
  }

  function allDay() {
    const tabler = [];

    for (let x = 1; x <= daysInCurrentMonth; x++) {
      tabler.push(x);
    }
    return tabler;
  }

  function getPreviousDay() {
    const previousDays = [];
    for (let x = getPreviousMonth; x > getPreviousMonth - firstDayMonth; x--) {
      previousDays.push(x);
    }
    return previousDays.reverse();
  }

  function getNextDay() {
    const place = 49 - 7 - daysInCurrentMonth - firstDayMonth;
    const nextDays = [];
    for (let x = 1; x <= place; x++) {
      nextDays.push(x);
    }
    return nextDays;
  }

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

  function dayHandler(day) {
    setDay(day);
    setDateInput(true);
  }

  //******************************* Functions Buttons  *******************************//
  const previousMonth = (number) => {
    setMonth(month - 1);
    if (month <= 1) {
      setMonth(12);
      setYear(year - 1);
    }
  };
  const today = () => {
    setMonth(currentMonth);
    setYear(currentYear);
    setDay(currentDay);
  };
  const nextMonth = (number) => {
    setMonth(month + 1);
    if (month >= 12) {
      setMonth(1);
      setYear(year + 1);
    }
  };

  console.log("text");

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
            <div data-testid={'Calendar'}   className={"calendar"}>
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
                    data-testid={el === day ? "today" : null}
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
              <button type={"button"} className={"todayBtn"} onClick={today}>
                today
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Calendar;
