import React, {useState} from "react";
import "./selectDropDown.css";
import arrow from "../../assets/svg/arrowDropDown.svg";

const SelectDropDown = ({data, htmlFor, label}) => {
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);

	const handleClick = (event, state) => {
		setMessage(state);
		setOpen(!open);
	};

	const displayData = (state) => {
		// if (typeof state === "string") {
		// 	return <li onClick={(e) => handleClick(e, state)}>{state}</li>
		// }
		if (typeof state === "object") {
			const key = Object.keys(state)
			return <li className={'pute'} onClick={(e) => handleClick(e, state[key[1]])}>{state.name}</li>
		}
		return <li className={'pute'} onClick={(e) => handleClick(e, state)}>{state}</li>
	}

	return (
		<div className={"dropDown"}>
			{open && (
				<div
					onClick={() => setOpen(!open)}
					className={"backgroundDropDown"}
				></div>
			)}
			<label htmlFor={htmlFor}>{label}
				<div className={"selectDropDown"}>
					<img
						style={
							open ? {transform: "translate(-50%,-50%) rotate(180deg)"} : null
						}
						onClick={() => setOpen(!open)}
						className={"arrowDropDown"}
						src={arrow}
						alt={"arrow"}
					/>
					<input
						data-testid="selectDropDown"
						onClick={() => setOpen(!open)}
						autoComplete={"chrome-off"}
						placeholder={"chose option"}
						className={"stateInput"}
						type="text"
						id="state"
						value={message}
					/>
					{open &&
						<ul>
							{data.map((state) => (
								displayData(state)
							))}
						</ul>
					}
				</div>
			</label>

		</div>
	);
};

export default SelectDropDown;

//TODO: mettre deux paramètres, un pour le contenue afficher et l'autre pour la valeur
