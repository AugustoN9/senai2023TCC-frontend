import React, { useContext, useState } from "react";
import "./styleFormSolicitacao.css";
import { Button } from "@mui/material";
import exames from "../../json/db.json";
import { AuthContext } from "../../context/AuthContext";
// import { useParams } from "react-router-dom";


const FormSolicitacao = (props) => {

  const { userFull } = useContext(AuthContext);
  const n = parseInt(props.indice);
  const i = n - 1;
  console.log(i)

    const [selectedOption, setSelectedOption] = useState('01');    
    const handleChangeSelected = (event) => {
      selectedOption(event.target.value);
     
    }

    console.log(selectedOption);

    let ano = new Date().getFullYear().toString().substr(-2);
    console.log(ano);

    let op = '01';

    function calculaIdade(dataNasc) {
      var dataAtual = new Date();
      var anoAtual = dataAtual.getFullYear();
      var anoNascParts = dataNasc.split('/');
      var diaNasc = anoNascParts[0];
      var mesNasc = anoNascParts[1];
      var anoNasc = anoNascParts[2];
      var idade = anoAtual - anoNasc;
      var mesAtual = dataAtual.getMonth() + 1;
      //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
      if (mesAtual < mesNasc) {
          idade--;
      } else {
          //Se estiver no mes do nascimento, verificar o dia
          if (mesAtual == mesNasc) {
              if (new Date().getDate() < diaNasc) {
                  //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                  idade--;
              }
          }
      }
      return idade;
  }
  //console.log(calculaIdade('6/4/2015'));

  const [inputValues, setInputValues] = useState({
    numeroSolicitacao: "",
    tipoExame: "",
    amostra: "",
    origem: "",
    solicitante: "",
    especialidade: "",
    crm: "",
    paciente: "",
    cpf: "",
    genero: "",
    pacienteDataNasc: "",
    historicoPaciente: ""
  });

  const handleValues = (event) => {   

    setInputValues({
          ...inputValues,
          [event.target.name]: event.target.value,
        });
        console.log(inputValues);
  }


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
            <label for="numeroSolicitacao">Registro</label>
            <input
              type="text"
              id="numeroSolicitacao"
              name="numeroSolicitacao"
              value={ano+op+'000'+exames[i].id}
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-box">
            <label for="tipoExame">Tipo de Exame</label>
            <select name="tipoExame" id="tipoExame" value={selectedOption} >
              <option value="01">Anatomopatologico</option>
              <option value="02">Citopatologico Especial</option>
              <option value="03">Citopatologico Ginecologico</option>
              <option value="04">Transoperatorio</option>
              <option value="05">Imunoistoquimica</option>
              <option value="06">Imunofluorescencia</option>
            </select>
          </div>
          <div className="input-box">
            <label for="amostra">Topologia da Amostra</label>
            <input
              type="text"
              id="amostra"
              name="amostra"
              value={exames[i].material}
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-box">
            <label for="origem">Origem</label>
            <input
              type="text"
              id="origem"
              name="origem"
              value={exames[i].origem}
              required
              onChange={handleValues}
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
              value={userFull.nome}
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-box">
            <label for="especialidade">Especialidade</label>
            <input
              type="text"
              id="especialidade"
              name="especialidade"
              value={userFull.especializacao}
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-mediumbox">
            <label for="crm">CRM</label>
            <input type="text" id="crm" name="crm" value={userFull.numeroDoc} required 
            onChange={handleValues}
            />
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
              onChange={handleValues}
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
              onChange={handleValues}
            />
          </div>
          <div className="input-mediumbox">
            <label for="idade">Genero</label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={exames[i].genero} 
              placeholder=""
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-box">
            <label for="idade">Data de Nascimento</label>
            <input
              type="text"
              id="idade"
              name="idade"
              value={exames[i].data_nasc} 
              placeholder=""
              required
              onChange={handleValues}
            />
          </div>
          <div className="input-mediumbox">
            <label for="idade">Idade</label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={calculaIdade(exames[i].data_nasc)} 
              placeholder=""
              required
              onChange={handleValues}
            />
          </div>
          
        </div>
        <div className="input-box">
          <label for="descricao">Descricao</label>
          <textarea rows="3" cols="100" value={exames[i].descricao} ></textarea>
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
