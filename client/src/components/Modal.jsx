import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Avoid rendering when modal is closed

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose} // Close modal when backdrop is clicked
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Render outside the parent component
  );
};

export default Modal;
