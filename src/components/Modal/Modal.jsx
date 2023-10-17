// import React from 'react'
import ReactDom from "react-dom"
import PropTypes from "prop-types";
import {AiOutlineCloseCircle} from "react-icons/ai"
import "./Modal.css";
function Modal({ open, children, onClose }) {
  if(!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}/>
      <div className="modal-container">
        <button className="modal-btnClose" onClick={onClose}>
          <AiOutlineCloseCircle size={30} fill="var(--neon-red)"/>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default Modal;
