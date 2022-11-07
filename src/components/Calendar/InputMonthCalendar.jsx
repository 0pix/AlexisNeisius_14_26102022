import React, {useState} from 'react';
import './InputCalendar.css'

const InputMonthCalendar = ({data, setData, language}) => {
	const [openInput, setOpenInput] = useState(false)

	const getMonths = () => {
		const tabler = []
		for (let x = 1; x <= 12; x++) {
			const date = new Date(`${x} 27 2017`)
			const month = date.toLocaleString(`${language}`, {month: 'long'})
			tabler.push(month)
		}
		return tabler
	}

	const months = getMonths()

	const handlerClick = (value) => {
		setData(months.indexOf(value) + 1)
		setOpenInput(!openInput)
	}
	

	return (
		<div className={'inputCalendar'}>
			<button onClick={() => setOpenInput(!openInput)}>{months[data - 1]}</button>
			{openInput && <ul>
				{months.map((el) => <li onClick={() => handlerClick(el)}>{el}</li>)}
			</ul>}
		</div>
	);
};

export default InputMonthCalendar;



