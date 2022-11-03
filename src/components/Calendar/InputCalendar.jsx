import React from 'react';
import './InputCalendar.css'

const inputCalendar = ({data, setData}) => {
	const stringToNumber = (string) => {
		setData(Number(string))
	}

	return (
		<div className={'inputCalendar'}>
			<input type={'text'} value={data}/>

			<ul>
				<li onClick={(e) => stringToNumber(e.target.innerHTML)}>1990</li>
				<li onClick={(e) => stringToNumber(e.target.innerHTML)}>1996</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
				<li>a</li>
			</ul>
		</div>
	);
};

export default inputCalendar;
