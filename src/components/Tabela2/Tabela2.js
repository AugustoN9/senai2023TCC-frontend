import React from "react";
import "./styleTabela2.css";
//import { BiLinkExternal } from "react-icons/bi";
//import { Link } from "react-router-dom";
import exames from "../../json/db.json";
import RegistroLinha from "../LinhaTabelaReg/RegistroLinha";

const Tabela2 = () => {
  console.log(`Valores do arquivo db.json`, exames);
 
  return (
    <>
      <table className="tabelaListaExames">
        <caption className="">
          <h1>Exames aguardando Solicitacao</h1>
        </caption>
        <thead className="cabecalhoListaExames">
          <tr>
            <th>Id</th>
            <th>Paciente</th>
            <th>Material</th>
            <th>Recipiente(s)</th>
            <th>Origem</th>
            <th>Realizado</th>
            <th>cpf</th>
            <th>Data de Nascimento</th>
            <th>Genero</th>
            <th>Descrição</th>
            <th>Solicitar</th>
          </tr>
        </thead>
          {exames.map((exame) => {
            return <RegistroLinha {...exame} key={exame.id} />;
          })}          
      </table>
    </>
  );
};

export default Tabela2;
