// import React, {useState} from 'react';
import './Modal.css'

const Modal = ({children, openModal, setOpenModal, functionCloseBtn}) => {

	return (
		<div>
			{openModal && <div onClick={() => setOpenModal(false)} className={'backgroundModal'}>
				<div className={'modal'}>
					<button onClick={() => functionCloseBtn} className={'closeModalBtn'}>c</button>
					{children}
				</div>
			</div>}
		</div>
	);
};

export default Modal;
