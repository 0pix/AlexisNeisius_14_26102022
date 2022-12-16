import React, {useState} from "react";
import "./selectDropDown.css";
import arrow from "../../assets/svg/arrowDropDown.svg";

const SelectDropDown = ({data, htmlFor, label}) => {
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);

	const handleClick = (state) => {
		setMessage(state);
		setOpen(!open);
	};

	const displayData = (state) => {
		if (typeof state === "object") {
			const key = Object.keys(state);
			return (
				<li key={`${key}${state.name}`} className={"toto"} onClick={() => handleClick(state[key[1]])}>
					{state.name}
				</li>
			);
		}
		return (
			<li key={`${state}-noObject`} className={"toto"} onClick={() => handleClick(state)}>
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
					readOnly
						data-testid="selectDropDown"
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

//TODO: mettre deux paramètres, un pour le contenue afficher et l'autre pour la valeur
