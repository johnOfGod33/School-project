import React from "react";
import style from "./Button.module.css";
const Button = ({ title, onClick, type }) => {
  return (
    <div>
      <button type={type} className={style.button} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
