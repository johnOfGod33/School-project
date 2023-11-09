import React from "react";
import style from "./Button.module.css";
const Button = ({ title, onClick }) => {
  return (
    <div>
      <button className={style.button} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
