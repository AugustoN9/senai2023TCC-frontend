import React from "react";
import logo from "../../assets/LogoExactapatho2.png";
import "./styleFormCadastro.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import ButtonBack from "../BotaoVoltar/ButtonBack";

const FormCadastro = () => {
  return (
    <Container className="container">
      <img src={logo} alt="logo" width="100%" />
      <h1>Cadastro</h1>

      <form className="cadastro_form " onSubmit="">
        <div className="inputsForm">
          <TextField
            id="usuario"
            label="Usuário"
            margin="normal"
            variant="outlined"
            type="text"
            required
            fullWidth
          />
          <TextField
            id="email"
            label="E-mail"
            margin="normal"
            variant="outlined"
            type="email"
            required
            fullWidth
          />
          <TextField
            id="senha"
            label="Senha"
            margin="normal"
            variant="outlined"
            type="password"
            required
            fullWidth
          />
          <TextField
            id="cpf"
            label="cpf"
            margin="normal"
            variant="outlined"
            type="number"
            required
            fullWidth
          />
          <TextField
            id="avatar"
            label="Caminho da imagem"
            margin="normal"
            variant="outlined"
            type="text"
            required
            fullWidth
          />
        </div>

        <div className="inputRadio">
          <legend>Qual tipo de Usuario</legend>
          <input type="radio" name="tipo" id="externo"/>
          <label for="externo">Externo</label>
          <input type="radio" name="tipo" id="interno"/>
          <label for="interno">Interno</label>
          <input type="radio" name="tipo" id="admin"/>
          <label for="admin">Admin</label>
        </div>

        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
        <ButtonBack />
      </form>
    </Container>
  );
};

export default FormCadastro;
