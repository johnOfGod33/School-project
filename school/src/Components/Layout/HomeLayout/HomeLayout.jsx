import React from "react";
import { Outlet } from "react-router-dom";
import style from "./HomeLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
