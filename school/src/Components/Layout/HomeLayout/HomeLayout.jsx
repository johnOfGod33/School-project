import React from "react";
import { Outlet } from "react-router-dom";
import style from "./HomeLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
const HomeLayout = () => {
  return (
    <div>
      <section className={style.home_image}>
        <Header />
        <section className={style.home_description}>
          <h2>Lorem ipsum !</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id
            aliquam laudantium quia corrupti eaque at iste quidem.
          </p>
          <Button title={"Learn more"} />
        </section>
      </section>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
