import React from "react";
import style from "./Footer.module.css";
const icon = {
  twitter: require("../../Assets/Icon/twitter.png"),
  facebook: require("../../Assets/Icon/facebook.png"),
  insta: require("../../Assets/Icon/insta.png"),
};
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.icon}>
        <img src={icon.insta} />
        <img src={icon.facebook} />
        <img src={icon.twitter} />
      </div>
    </footer>
  );
};

export default Footer;
