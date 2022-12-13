import React from 'react';
import "./Modal.css";
import cross from "./assets/svg/cross.svg"

const Modal = ({children, openModal, setOpenModal, functionCloseBtn}) => {
	if (openModal) {
		return (
			<div onClick={() => setOpenModal(false)} data-testid={"backgroundModal"} className={"backgroundModal"}>
				<div data-testid={"modal"} className={"modal"}>
					<button
						onClick={functionCloseBtn}
						className={"closeModalBtn"}
						data-testid={"closeModalBtn"}
					>
						<img src={cross} alt="cross"/>
					</button>
					{children}
				</div>
			</div>
		)
	}
}
export default Modal;
