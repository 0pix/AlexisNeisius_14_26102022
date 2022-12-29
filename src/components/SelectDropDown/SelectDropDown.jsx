import React, {useState} from "react";
import "./selectDropDown.css";
import arrow from "../../assets/svg/arrowDropDown.svg";

const SelectDropDown = ({data, htmlFor, label}) => {
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);

	/**
	 *  Function onClick to store select item in the variable
	 *  @param {string} state - the select state
	 *  @returns {string} - store item in the variable
	 */
	const handleClick = (state) => {
		setMessage(state);
		setOpen(!open);
	};

	/**
	 *  Function to map de data
	 *  @param {string} state - the state
	 *  @returns {div} - div <li> with item
	 */
	const displayData = (state) => {
		if (typeof state === "object") {
			const key = Object.keys(state);
			return (
				<li data-testid={`itemDropDown-${htmlFor}`} key={`${key}${state.name}`} className={"toto"}
						onClick={() => handleClick(state[key[1]])}>
					{state.name}
				</li>
			);
		}
		return (
			<li data-testid={`itemDropDown-${htmlFor}`} key={`${state}-noObject`} className={"toto"}
					onClick={() => handleClick(state)}>
				{state}
			</li>
		);
	};

	return (
		<div className={"dropDown"}>
			{open && (
				<div
					onClick={() => setOpen(!open)}
					className={"backgroundDropDown"}
				></div>
			)}
			<div onClick={() => setOpen(!open)} className={"selectDropDown"}>
				<label htmlFor={htmlFor}>
					{label}
					<input
						onClick={(e) => console.log('la valeur :', e.target.value)}
						readOnly
						// defaultValue={""}
						data-testid={htmlFor}
						autoComplete={"chrome-off"}
						placeholder={"chose option"}
						className={"stateInput"}
						type="text"
						id={htmlFor}
						value={message}
					/>
				</label>
				<img
					style={
						open ? {transform: "translate(-50%,-50%) rotate(180deg)"} : null
					}
					className={"arrowDropDown"}
					src={arrow}
					alt={"arrow"}
				/>
				{open && <ul>{data.map((state) => displayData(state))}</ul>}
			</div>
		</div>
	);
};

export default SelectDropDown;

