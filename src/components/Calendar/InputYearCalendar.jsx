import React, {useState} from 'react';
import './InputCalendar.css'

const InputMonthCalendar = ({data, setData, minMonth, maxMonth, minValueYear, maxValueYear}) => {
	const [openInput, setOpenInput] = useState(false)
	const stringToNumber = (string) => {
		setData(Number(string))
	}

	// const month = () => {
	// 	const startMonth = new Date(`${minMonth}/1/1`).getMonth() + 1
	// 	const endMonth = new Date(`${maxMonth}/1/1`).getMonth() + 1
	// 	console.log(minMonth)
	// 	const years = []
	// 	for (let x = startMonth; x <= endMonth; x++) {
	// 		const test = x.toLocaleString('en-GB', {month: 'long'})
	// 		years.push(test)
	// 	}
	// 	return years
	// }

	const months = [
		{
			letter: 'January',
			number: 1
		},
		{
			letter: 'February',
			number: 2
		},
		{
			letter: 'March',
			number: 3
		},
		{
			letter: 'April',
			number: 4
		},
		{
			letter: 'May',
			number: 5
		},
		{
			letter: 'June',
			number: 6
		},
		{
			letter: 'July',
			number: 7
		},
		{
			letter: 'August',
			number: 8
		},
		{
			letter: 'September',
			number: 9
		},
		{
			letter: 'October',
			number: 10
		},
		{
			letter: 'November',
			number: 11
		},
		{
			letter: 'December',
			number: 12
		},
	]


	const years = () => {
		if (minValueYear) {
			const years = [minValueYear]
			for (let x = minValueYear; x < maxValueYear; x++) {
				years.push(x + 1)
			}
			return years
		}

	}

	const yearsInput = years().reverse() || []

	const map = () => {
		if (minMonth) {
			return yearsInput.map((el) => <li onClick={(e) => stringToNumber(el.target.innerHTML)}>{el}</li>)
		}
		if (minValueYear) {
			return months.map((el) => <li onClick={() => stringToNumber(el.number)}>{el.letter}</li>)
		}
	}


	console.log(yearsInput)

	return (
		<div className={'inputCalendar'}>
			<input onClick={() => setOpenInput(!openInput)} type={'text'} value={data}/>
			{openInput && <ul>
				{map()}
			</ul>}
		</div>
	);
};

export default InputMonthCalendar;
//
//
//
// const InputMonthCalendar = ({data, setData, minValue, maxValue}) => {
// 	const [openInput, setOpenInput] = useState(false)
// 	const stringToNumber = (string) => {
// 		setData(Number(string))
// 	}
//
// 	const years = () => {
// 		const years = [minValue]
// 		for (let x = minValue; x < maxValue; x++) {
// 			years.push(x + 1)
// 		}
// 		return years
// 	}
//
// 	const yearsInput = years().reverse()
//
// 	return (
// 		<div className={'inputCalendar'}>
// 			<input onClick={() => setOpenInput(!openInput)} type={'text'} value={data}/>
// 			{openInput && <ul>
// 				{yearsInput.map((e) => <li onClick={(e) => stringToNumber(e.target.innerHTML)}>{e}</li>)}
// 			</ul>}
// 		</div>
// 	);
// };
//
// export default InputMonthCalendar;
