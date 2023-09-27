import React from "react";
import "./styleHome.css";
import Tabela2 from "../../components/Tabela2/Tabela2";
import Tabela from "../../components/Tabela/Tabela";
import Navbar from "../../components/Navbar/Navbar";

const HomeUsuarioExt = () => {

  return (
    <div>
      <Navbar />
      <Tabela />
      <Tabela2 />
    </div>
  );
};

export default HomeUsuarioExt;
