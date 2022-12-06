// import React, {useState} from 'react';
import "./Modal.css";
import cross from "./../../assets/svg/cross.svg";

const Modal = ({children, openModal, setOpenModal, functionCloseBtn}) => {
	return (
		<div>
			{openModal && (
				<div onClick={() => setOpenModal(false)} data-testid={"backgroundModal"} className={"backgroundModal"}>
					<div data-testid={"modal"} className={"modal"}>
						<button
							data-testid={"btn"}
							onClick={() => functionCloseBtn}
							className={"closeModalBtn"}
							data-testid={"closeModalBtn"}
						>
							<img src={cross} alt="cross"/>
						</button>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
