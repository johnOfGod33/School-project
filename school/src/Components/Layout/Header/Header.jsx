import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
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
