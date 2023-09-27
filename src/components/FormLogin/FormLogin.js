import React, { useContext, useState } from "react";
import "./styleFormLogin.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import logo from "../../assets/LogoExactapatho2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const FormLogin = () => {

  const [inputValues, setInputValues] = useState({
    email: "",
    senha: "",
  });

  //const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  //console.log(loginUser)

  const handleChangeValues = (event) => {   
    
    // console.log(event.target.name);
    // console.log(event.target.value);

    setInputValues({
          ...inputValues,
          [event.target.name]: event.target.value,
        });
        console.log(inputValues);
  }

    // const handleChangeValues = (event) => {
    //   setInputValues({
    //     ...inputValues,
    //     [event.target.name]: event.target.value,
    //   });
    //   console.log(inputValues);

    //console.log(event.target.name);
  // };

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   alert(` Usuario ${inputValues.email} logado com sucesso!`);
  //   navigate ('/hometeste');
  //   loginUser(inputValues);
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
      loginUser(inputValues);
       
  };

  return (
    <Container className="container">
      <img src={logo} alt='logo' width="100%"/>
      <Link to="/">Voltar</Link>
      <h1>Login</h1>

      <form className="login_form" onSubmit={handleLogin}>
        <div className="inputsForm">
          <TextField
            id="email"
            name="email"
            label="E-mail"
            margin="normal"
            variant="outlined"
            type="email"
            required
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            id="senha"
            name="senha"
            label="Senha"
            margin="normal"
            variant="outlined"
            type="password"
            required
            fullWidth
            onChange={handleChangeValues}
          />
        </div>

        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default FormLogin;
