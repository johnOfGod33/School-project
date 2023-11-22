import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import style from "./Actualite.module.css";
import imgactu from "../../Assets/Pics/news image1.jpg";
import Card from "../../Layout/Card/Card";
const Actualite = () => {
  const [actus, setActu] = useState([]);
  let nav = useNavigate();
  useEffect(() => {
    basicAxios
      .get("/actu/select")
      .then((res) => {
        setActu(res.data.actus);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const showActus = actus.map((actu) => (
    <Card
      key={actu.id_actu}
      image={imgactu}
      title={actu.titre_actu}
      onClickButton={() => nav(`actuDetail/${actu.id_actu}`)}
    />
  ));
  return (
    <div>
      <section className={style.actualite}>
        <h2>Actualite</h2>
      </section>
      <section className={style.container}>{actus && showActus}</section>
    </div>
  );
};

export default Actualite;
