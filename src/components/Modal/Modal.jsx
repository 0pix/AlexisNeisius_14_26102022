// import React, {useState} from 'react';
import "./Modal.css";
import cross from "./../../assets/svg/cross.svg";

const Modal = ({ children, openModal, setOpenModal, functionCloseBtn }) => {
  return (
    <div>
      {openModal && (
        <div onClick={() => setOpenModal(false)} className={"backgroundModal"}>
          <div className={"modal"}>
            <button
              onClick={() => functionCloseBtn}
              className={"closeModalBtn"}
            >
              <img src={cross} alt="cross" />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
