import React from "react";
import "./styleRegistroLinha.css";
//import '../Tabela2/styleTabela2.css';

import { Link } from 'react-router-dom';
import { BiLinkExternal } from "react-icons/bi";

const RegistroLinha = ({ id, nome, material, quantidade, data_procedimento, cpf, data_nasc, genero }) => {
  return (
   <>
        <tbody className="linhasListaExames">          
          <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{material}</td>
            <td>{quantidade}</td>
            <td>{data_procedimento}</td>
            <td>{cpf}</td>
            <td>{data_nasc}</td>
            <td>{genero}</td>
            <td>
              <Link to={`/solicitacao/${id}`}>
                <BiLinkExternal />
              </Link>
            </td>
          </tr>
        </tbody>
    </>
  );
};

export default RegistroLinha;
