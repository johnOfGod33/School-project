import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import style from "./Cours.module.css";
import cour_pic from "../../Assets/Pics/cour_pic.jpg";
const Cours = () => {
  const { id_filiere } = useParams();
  const [cours, setCour] = useState([]);

  useState(() => {
    basicAxios
      .get(`/cour/select/${id_filiere}`)
      .then((res) => {
        setCour(res.data.cours);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(cours);
  const showCours = cours.map((cour) => (
    <section key={cour.id_cour} className={style.container_cour}>
      <section>
        <img src={cour_pic} alt="cour_pic" className={style.cour_pic} />
        <div className={style.cour_info}>
          <div>
            <h5>{cour.nom_filiere}-COUR</h5>
          </div>
          <div>
            <h3> {cour.nom_cour} </h3>
          </div>
          <div>{cour.description_cour}</div>
        </div>
      </section>
    </section>
  ));
  return (
    <div>
      <section className={style.cours}>
        <h2>{`COUR/${id_filiere}`}</h2>
      </section>
      <section className={style.container}>{cours && showCours}</section>
    </div>
  );
};

export default Cours;
