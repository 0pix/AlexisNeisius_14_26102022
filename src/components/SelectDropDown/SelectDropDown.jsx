import React, {useState} from 'react';
import './selectDropDown.css'
import arrow from '../../assets/svg/arrowDropDown.svg'

const SelectDropDown = () => {
	const [message, setMessage] = useState('chose option');
	const [open, setOpen] = useState(false);

	const handleClick = (event) => {
		event.preventDefault();
		setMessage(event.target.innerHTML
		);
	};

	return (
		<div >
			<label htmlFor="first-name">State</label>
			<div className={'selectDropDown'}>
			<img onClick={() => setOpen(!open)} className={'arrowDropDown'} src={arrow} alt={'arrow'}/>
				<input type="text" id="state" value={message}/>
				{ open && <ul>
					<li onClick={handleClick}>coucou toi</li>
					<li onClick={handleClick}>tu es beau</li>
					<li onClick={handleClick}>amoumou</li>
					<li onClick={handleClick}>chat</li>
					<li onClick={handleClick}>chien</li>
					<li onClick={handleClick}>toutou</li>
					<li onClick={handleClick}>ow</li>
					<li onClick={handleClick}>le fdp</li>
					<li onClick={handleClick}>sur mes morts</li>
					<li onClick={handleClick}>Kiriko</li>
					<li onClick={handleClick}>nerf la pute</li>
				</ul>}
			</div>

		</div>
	);
};

export default SelectDropDown;
