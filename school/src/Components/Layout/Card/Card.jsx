import React from "react";
import style from "./Card.module.css";
import Button from "../Button/Button";
const Card = ({ image, title, onClickButton, description }) => {
  return (
    <div className={style.card}>
      <img src={image} className={style.img} />
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {description
          ? description
          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis reprehenderit voluptas, explicabo voluptatum"}
      </div>
      <Button title={"Voir plus"} onClick={onClickButton} />
    </div>
  );
};

export default Card;
