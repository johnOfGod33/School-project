import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Filiere.module.css";
import Button from "../../Layout/Button/Button";
import Card from "../../Layout/Card/Card";
import filiere1 from "../../Assets/Pics/filiere1.jpg";
const Filiere = () => {
  let nav = useNavigate();
  const filiere = [
    "FRONT-END",
    "BACK-END",
    "FULL STACK",
    "UX/UI DESIGN",
    "CYBERSECURITE",
  ];
  return (
    <div>
      <section className={style.filiere}>
        <h2>FILIERES</h2>
      </section>
      <section className={style.search}>
        <h2>CHERCHER UNE FILIERE</h2>
        <div>
          <input type="text" placeholder="rechercher" />
          <Button title={"rechercher"} />
        </div>
      </section>
      <section className={style.cour}>
        {filiere.map((element) => (
          <Card
            image={filiere1}
            title={element}
            onClickButton={() => nav("cours")}
          />
        ))}
      </section>
    </div>
  );
};

export default Filiere;
