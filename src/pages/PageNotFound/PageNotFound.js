import React from "react";
import "./stylePageNotFound.css";
import Figura from "../../assets/BackgroundPageNotFound.png";
import BannerNavbar from "../../components/BannerNavbar/BannerNavbar";

const PageNotFound = () => {
  return (
    <div>
        <BannerNavbar />
      <div className="fundo">        
        <img src={Figura} />
      </div>
    </div>
  );
};

export default PageNotFound;
