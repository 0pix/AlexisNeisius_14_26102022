import React, {useState} from 'react';
import './InputCalendar.css'

const InputYearCalendar = ({data, setData, minValue, maxValue}) => {
	const [openInput, setOpenInput] = useState(false)


	const years = () => {
		const years = [minValue]
		for (let x = minValue; x < maxValue; x++) {
			years.push(x + 1)
		}
		return years
	}

	const handlerClick = (value) => {
		setData(parseInt(value))
		setOpenInput(!openInput)
	}
	const yearsInput = years().reverse()

	return (
		<div className={'inputCalendar'}>
			<button onClick={() => setOpenInput(!openInput)}>{data}</button>
			{openInput && <ul>
				{yearsInput.map((el) => <li onClick={(e) => handlerClick(e.target.innerHTML)}>{el}</li>)}
			</ul>}
		</div>
	);
}


export default InputYearCalendar;
