import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import style from "./Filiere.module.css";
import Button from "../../Layout/Button/Button";
import Card from "../../Layout/Card/Card";
import filiere1 from "../../Assets/Pics/filiere1.jpg";
const Filiere = () => {
  const [filieres, setFiliere] = useState([]);
  let nav = useNavigate();

  useEffect(() => {
    basicAxios
      .get("/filiere/select")
      .then((res) => {
        setFiliere(res.data.filieres);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(filieres);
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
        {filieres.length &&
          filieres.map((element) => (
            <Card
              key={element.id_filiere}
              image={filiere1}
              title={element.nom_filiere}
              description={element.description_filiere}
              onClickButton={() => nav(`cour/${element.id_filiere}`)}
            />
          ))}
      </section>
    </div>
  );
};

export default Filiere;
