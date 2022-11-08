import React, {useState} from 'react';
import './selectDropDown.css'
import arrow from '../../assets/svg/arrowDropDown.svg'

const SelectDropDown = ({data, htmlFor, label}) => {
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);


	const handleClick = (event) => {
		event.preventDefault();
		setMessage(event.target.innerHTML
		);
		setOpen(!open)
	};


	return (
		<div className={'dropDown'}>
			{open && <div onClick={() => setOpen(!open)} className={'backgroundDropDown'}></div>}
			<label htmlFor={htmlFor}>{label}</label>
			<div className={'selectDropDown'}>
				<img style={open ? {transform: "translate(-50%,-50%) rotate(180deg)"} : null} onClick={() => setOpen(!open)}
						 className={'arrowDropDown'} src={arrow} alt={'arrow'}/>
				<input onClick={() => setOpen(!open)} autoComplete={"chrome-off"} placeholder={'chose option'}
							 className={'stateInput'} type="text" id="state" value={message}/>
				{open && <ul>
					{data.map((state) =>
						<li onClick={handleClick}>{state}</li>
					)}
				</ul>}
			</div>

		</div>
	);
};

export default SelectDropDown;
