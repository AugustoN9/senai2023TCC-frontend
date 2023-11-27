import React from "react";
import "./styleBanner2.css";
import logo2 from "../../assets/LogoExactapathoTransparent2.png";

const Banner = () => {
  return (
    <div className="principal">
      <div className="textoLogo">
        <div className="texto">
          <p>
            Transformando <br />
            Pesquisa e Tecnologia <br />
            para cuidar da Saúde:
          </p>
          <p>
            Seu Laboratório, <br />
            Seu Futuro Saudável!
          </p>
        </div>

        <img className="logomarca" src={logo2} alt="logo" height="20%" />
      </div>
    </div>
  );
};

export default Banner;
