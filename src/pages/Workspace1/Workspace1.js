import React from "react";
import "./styleWorkspace.css";
import Tabela2 from "../../components/Tabela2/Tabela2";
import Tabela from "../../components/Tabela/Tabela";
import Navbar from "../../components/Navbar/Navbar";

const Workspace1 = () => {

  return (
    <div>
      <Navbar />
      <Tabela />
      <Tabela2 />
    </div>
  );
};

export default Workspace1;
