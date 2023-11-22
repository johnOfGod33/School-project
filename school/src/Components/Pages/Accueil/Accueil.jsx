import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Accueil.module.css";
import image1 from "../../Assets/Pics/news image1.jpg";
import image2 from "../../Assets/Pics/news image2.jpg";
import image3 from "../../Assets/Pics/news image3.jpg";
import welcomeimg from "../../Assets/Pics/welcome.jpg";
import Card from "../../Layout/Card/Card";
import Button from "../../Layout/Button/Button";
const Accueil = () => {
  let nav = useNavigate();
  const [news, setNew] = useState([
    { titre: "lorem 1", image: image1 },
    { titre: "lorem 2", image: image2 },
    { titre: "lorem 3", image: image3 },
  ]);
  return (
    <div>
      <section className={style.home_image}>
        <section className={style.home_description}>
          <h2>Lorem ipsum !</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id
            aliquam laudantium quia corrupti eaque at iste quidem.
          </p>
          <Button title={"Learn more"} />
        </section>
      </section>
      <section className={style.welcome}>
        <div>
          <h2>Welcome to MERN SCHOOL</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            voluptatibus eligendi veniam atque natus beatae blanditiis
            asperiores et voluptate reiciendis sint sed hic harum corrupti,
            neque sapiente, aperiam cum nesciunt laborum! Totam repellendus odio
            officia et reprehenderit? Est consequatur optio aliquid inventore
            vero corporis tempora mollitia molestiae voluptas perferendis
            nesciunt aspernatur atque natus harum sit dolore excepturi,
            voluptatum soluta vel consectetur tenetur. Eius natus porro iure
            illo quis magnam dolor libero veniam minus quam ipsa maxime.
          </p>
          <Button title={"Voir nos filieres"} onClick={() => nav("filiere")} />
        </div>
        <img src={welcomeimg} className={style.welcome_img} alt="welcome" />
      </section>
      <section className={style.container}>
        <h2>NEW</h2>
        <section>
          {news.map((elment, indice) => (
            <Card
              key={indice}
              image={elment.image}
              title={elment.titre}
              onClickButton={() => nav("actu")}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Accueil;
