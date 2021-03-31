import React from "react";
import "./Button.css";

function Button({ value, handleClick }) {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=" || val === "Clear";
  };

  return (
    <div
      className={`btn 
      ${!isOperator(value) && "operator"} 
      ${value === "Clear" && "clear"}
      `}
      onClick={() => handleClick(value)}
    >
      {value}
    </div>
  );
}

export default Button;
