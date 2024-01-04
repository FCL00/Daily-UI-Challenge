import React from "react";

const Button = ({ className, value, action, type }) => {
  return (
    <button type={type} className={className} onClick={action}>
      {value}
    </button>
  );
};

export default Button;
