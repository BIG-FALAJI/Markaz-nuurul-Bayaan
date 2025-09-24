import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div
      data-aos="flip-right"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 relative max-w-3xl w-[90%] cursor-pointer "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
