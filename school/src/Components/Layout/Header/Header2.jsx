import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header2 = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <header
      className={
        scroll ? style.header_scroll : style.header2
      } /* onScroll={onScrollHandle} */
    >
      <section className={style.logo}>
        <div>LOGO</div>
        <div>School site</div>
      </section>
      <menu className={style.menu}>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"Filiere"}>Filiere</NavLink>
            </li>
            <li>
              <NavLink to={"actu"}>actu</NavLink>
            </li>
            <li>
              <NavLink to={"Signin"}>Sign in</NavLink>
            </li>
            <li>
              <NavLink to={"Signup"}>Sign up</NavLink>
            </li>
          </ul>
        </nav>
      </menu>
    </header>
  );
};

export default Header2;
