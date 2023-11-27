import React from "react";
import "./styleHome.css";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import Banner from "../../components/Banner/Banner";

const home = () => {

  return (
    <div>
      <NavbarHome />
      <Banner />
    </div>
  );
};

export default home;
