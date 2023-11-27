import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { basicAxios } from "../../Api/axios";
import UsePrivateAxios from "../../Hooks/UsePrivateAxios";
import style from "./ActuDetails.module.css";
import Button from "../../Layout/Button/Button";
import imgactu from "../../Assets/Pics/news image1.jpg";

const ActuDetails = () => {
  const { id_actu } = useParams();
  const privateAxios = UsePrivateAxios();
  const [details, setDetail] = useState([]);
  const [comment, setComment] = useState();
  useEffect(() => {
    basicAxios
      .get(`/actu/actuDetail/${id_actu}`)
      .then((res) => {
        setDetail(res.data.actus);
      })
      .catch((error) => console.log(error));
  }, []);
  const handlecomment = () => {
    privateAxios
      .post("/commentaire/insert", { commentaire: comment, id_actu: id_actu })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  const showDetail = details.map((actu) => (
    <section key={actu.id_actu} className={style.container_actu_details}>
      <img src={imgactu} alt="imgactudetails" className={style.imgactu} />
      <section>
        <div>
          <h3> {actu.titre_actu} </h3>
        </div>
        <div>{actu.text_actu}</div>
      </section>
    </section>
  ));
  return (
    <div>
      <section className={style.details}>
        <h2>Actualite/Details/{id_actu}</h2>
      </section>
      <section className={style.container}>
        {details && showDetail}
        <section className={style.container_actu_comment}>
          <div>
            <h3>COMMENTAIRES</h3>
          </div>
          <div className={style.comment_input}>
            <textarea
              type="text"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <Button
              type={"submit"}
              title={"commentez"}
              onClick={handlecomment}
            />
          </div>
          <div className={style.comments}>
            <div>
              <h5>Nom de l'etudiant</h5>
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              cum.
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ActuDetails;
