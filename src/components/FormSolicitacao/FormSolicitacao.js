import React from "react";
import "./styleFormSolicitacao.css";
import { Button } from "@mui/material";
import exames from "../../json/db.json";
// import { useParams } from "react-router-dom";


const FormSolicitacao = (props) => {

  const n = parseInt(props.indice);
  const i = n - 1;
  console.log(i)

  return (
    <div className="form-solicitacao">
      <form>
        <div className="form-header">
          <div className="title">
            <h1>Ficha de Solicitação</h1>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <label for="registro">Registro</label>
            <input
              type="text"
              id="registro"
              name="registro"
              placeholder="2301-21005"
              required
            />
          </div>
          <div className="input-box">
            <label for="tipoExame">Tipo de Exame</label>
            <select name="tipoExame" id="tipoExame">
              <option value="ap">Anatomopatologico</option>
              <option value="cp1">Citopatologico Especial</option>
              <option value="cp2">Citopatologico Ginecologico</option>
              <option value="to">Transoperatorio</option>
              <option value="ih">Imunoistoquimica</option>
              <option value="if">Imunofluorescencia</option>
            </select>
          </div>
          <div className="input-box">
            <label for="topologia">Topologia da Amostra</label>
            <input
              type="text"
              id="topologia"
              name="name"
              value={exames[i].material}
              placeholder="Informe o tipo de amostra"
              required
            />
          </div>
          <div className="input-box">
            <label for="origem">Origem</label>
            <input
              type="text"
              id="origem"
              name="name"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-box-name">
            <label for="solicitante">Solicitante</label>
            <input
              type="text"
              id="solicitante"
              name="solicitante"
              placeholder=""
              required
            />
          </div>
          <div className="input-box">
            <label for="especialidade">Especialidade</label>
            <input
              type="text"
              id="especialidade"
              name="especialidade"
              placeholder=""
              required
            />
          </div>
          <div className="input-mediumbox">
            <label for="crm">CRM</label>
            <input type="text" id="crm" name="crm" placeholder="" required />
          </div>
        </div>
        <div className="input-group">
          <div className="input-box-name">
            <label for="paciente">Paciente</label>
            <input
              type="text"
              id="paciente"
              name="name"
              value={exames[i].nome} 
              placeholder=""
              required
            />
          </div>
          <div className="input-mediumbox">
            <label for="cpf">cpf</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={exames[i].cpf} 
              placeholder=""
              required
            />
          </div>
          <div className="input-mediumbox">
            <label for="idade">Idade</label>
            <input
              type="text"
              id="idade"
              name="idade"
              value={exames[i].data_nasc} 
              placeholder=""
              required
            />
          </div>
          <div className="input-mediumbox">
            <label for="idade">Data de Nascimento</label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={exames[i].genero} 
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="input-box">
          <label for="descricao">Descricao</label>
          <textarea rows="3" cols="100"></textarea>
        </div>
        <div className="input-box">
            <label for="prioridade">Prioridade</label>
          <div className="priority-group">
            <div className="input-priority">
              <input type="radio" id="red" name="prioridade" />
              <label for="red">Emergência</label>
              <input type="radio" id="orange" name="prioridade" />
              <label for="orange">Muito Urgente</label>
              <input type="radio" id="yellow" name="prioridade" />
              <label for="yellow">Urgente</label>
              <input type="radio" id="green" name="prioridade" />
              <label for="green">Pouco Urgente</label>
              <input type="radio" id="blue" name="prioridade" />
              <label for="blue">Não Urgente</label>
            </div>            
          </div>
          <div className="btnSolicita">
              <Button type="submit" variant="contained">
                Enviar Solicitação
              </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSolicitacao;
