import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`w-fit mx-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold text-[1rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
