import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-2 md:p-4 max-w-3xl w-full cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
