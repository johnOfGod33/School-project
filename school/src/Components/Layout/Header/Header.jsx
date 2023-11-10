import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.css";
const Header = () => {
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
        scroll ? style.header_scroll : style.header
      } /* onScroll={onScrollHandle} */
    >
      <section className={style.logo}>
        <div>LOGO</div>
        <div>School site</div>
      </section>
      <menu className={style.menu}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Filiere</li>
            <li>Sign in</li>
            <li>Sign up</li>
          </ul>
        </nav>
      </menu>
    </header>
  );
};

export default Header;
