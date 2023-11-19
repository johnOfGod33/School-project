import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";

const OtherLayout = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default OtherLayout;
