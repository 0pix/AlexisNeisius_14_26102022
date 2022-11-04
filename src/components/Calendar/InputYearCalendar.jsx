import React, {useState} from 'react';
import './InputCalendar.css'

const InputYearCalendar = ({data, setData, minValue, maxValue}) => {
	const [openInput, setOpenInput] = useState(false)
	const stringToNumber = (string) => {
		setData(Number(string))
	}

	const years = () => {
		const years = [minValue]
		for (let x = minValue; x < maxValue; x++) {
			years.push(x + 1)
		}
		return years
	}

	const yearsInput = years().reverse()

	return (
		<div className={'inputCalendar'}>
			<button onClick={() => setOpenInput(!openInput)}>{data}</button>
			{openInput && <ul>
				{yearsInput.map((e) => <li onClick={(e) => stringToNumber(e.target.innerHTML)}>{e}</li>)}
			</ul>}
		</div>
	);
}


export default InputYearCalendar;
