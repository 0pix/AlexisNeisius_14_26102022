// import React, {useState} from 'react';
import './Modal.css'

const Modal = ({children, openModal, setOpenModal}) => {
	
	return (
		<div>
			{openModal && <div onClick={() => setOpenModal(false)} className={'backgroundModal'}>
				<div className={'modal'}>
					<button onClick={() => setOpenModal(false)} className={'closeModalBtn'}>c</button>
					{children}
				</div>
			</div>}
		</div>
	);
};

export default Modal;
