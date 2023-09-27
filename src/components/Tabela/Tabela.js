import React from "react";
import './styleTabela.css';
import { BiFile } from "react-icons/bi";

const Tabela = () => {
  return (
    <div className="divTab">
      <table
        className="tabela"
      >
        <caption className="">
          <h1>Solicitacoes realizadas</h1>
        </caption>
        <thead className="cabecalhoTab">
          <tr>
            <th>Exame</th>
            <th>Categoria</th>
            <th>Prioridade</th>
            <th>Paciente</th>
            <th>Material</th>
            <th>Recipiente(s)</th>
            <th>Solicitacao</th>
            <th>cpf</th>
            <th>idade</th>
            <th>genero</th>
            <th>status</th>
            <th>Laudo</th>
          </tr>
        </thead>
        <tbody className="linhasTab">
          <tr>
            <td>1</td>
            <td>Anatomopatologico</td>
            <td>Pouco Urgente</td>
            <td>JOHN DOE</td>
            <td>PYTHON</td>
            <td>78</td>
            <td>10/08/2023</td>
            <td>886.805.330-68</td>
            <td>44</td>
            <td>masculino</td>
            <td>aguardando avaliacao</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Citopatologico</td>
            <td>Urgente</td>
            <td>SMITH</td>
            <td>JAVA</td>
            <td>48</td>
            <td>15/08/2023</td>
            <td>886.805.330-68</td>
            <td>44</td>
            <td>masculino</td>
            <td>aguardando avaliacao</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Anatomopatologico</td>
            <td>Muito Urgente</td>
            <td>JOHN DOE</td>
            <td>PYTHON</td>
            <td>78</td>
            <td>16/08/2023</td>
            <td>886.805.330-68</td>
            <td>44</td>
            <td>masculino</td>
            <td>aguardando avaliacao</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Citopatologico</td>
            <td>Pouco Urgente</td>
            <td>SMITH</td>
            <td>JAVA</td>
            <td>48</td>
            <td>17/08/2023</td>
            <td>886.805.330-68</td>
            <td>44</td>
            <td>masculino</td>
            <td>aguardando avaliacao</td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Anatomopatologico</td>
            <td>Emergencia</td>
            <td>SMITH</td>
            <td>JAVA</td>
            <td>48</td>
            <td>19/08/2023</td>
            <td>886.805.330-68</td>
            <td>44</td>
            <td>masculino</td>
            <td>aguardando avaliacao</td>
            <td><a><BiFile /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
