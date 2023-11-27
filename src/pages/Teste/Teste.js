import React from "react";
import ListaUsuarios from "../../components/ListaUsuarios/ListaUsuarios";
import Sidebar from "../../components/Sidebar/Sidebar2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './styleTeste.css'

const Teste = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
      <h1>teste</h1>
      <ListaUsuarios />
    </>
  );
};

export default Teste;
