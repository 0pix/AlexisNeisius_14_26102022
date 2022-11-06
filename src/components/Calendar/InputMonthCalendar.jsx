import React, {useState} from 'react';
import './InputCalendar.css'

const InputMonthCalendar = ({data, setData}) => {
	const [openInput, setOpenInput] = useState(false)

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

	const handlerClick = (value) => {
		setData(parseInt(value))
		setOpenInput(!openInput)
	}


	return (
		<div className={'inputCalendar'}>
			<button onClick={() => setOpenInput(!openInput)}>{months[data - 1].letter}</button>
			{openInput && <ul>
				{months.reverse().map((el) => <li onClick={() => handlerClick(el.number)}>{el.letter}</li>)}
			</ul>}
		</div>
	);
};

export default InputMonthCalendar;



