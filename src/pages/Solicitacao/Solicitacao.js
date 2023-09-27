import React from "react";
import Menu_UserExterno from "../../components/Menu_UserExterno/Menu_UserExterno";
import "./styleSolicitacao.css";
//import FormSolicitacao from "../../components/FormSolicitacao/FormSolicitacao";
//import CampoTexto from "../../components/CampoTexto/CampoTexto";
import FormSolicitacao from "../../components/FormSolicitacao/FormSolicitacao";
import { useParams } from "react-router-dom";


const Solicitacao = () => {

  const {id} = useParams();
  console.log(id);

  return (
    <div className="solicitacaoTela">
      
      <Menu_UserExterno />
      <FormSolicitacao indice={id} />
       <p>Id da solicitaçao {id} </p>
    </div>
  );
};

export default Solicitacao;
