import React from "react";
import style from "./Card.module.css";
import Button from "../Button/Button";
const Card = ({ image, title }) => {
  return (
    <div className={style.card}>
      <img src={image} className={style.img} />
      <div>{title}</div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        facilis reprehenderit voluptas, explicabo voluptatum.
      </div>
      <Button title={"Voir plus"} />
    </div>
  );
};

export default Card;
