import { TextField,  Button,  MenuItem } from "@mui/material";
import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const FormularioCadastro = () => {
  const [inputValues, setInputValues] = useState({
    nome: "",
    categoria: "",
    profissao: "",
    especializacao: "",
    tipoDoc: "",
    numeroDoc: "",
    email: "",
    senha: "",
  });

  const categoria = [
    {
      value: 'UE0 - Med. Solicitante',
      label: 'Usuario Externo',
    },
    {
      value: 'UI3 - Aux. Administrativo',
      label: 'Usuario Interno Nivel 1',
    },
    {
      value: 'UI2 - Tec. Histopatologia',
      label: 'Usuario Interno Nivel 2',
    },
    {
      value: 'UI1 - Med. Patologista',
      label: 'Usuario Interno Nivel 3',
    }
  ]

  const profissao = [
    {
      value: 'Medico',
      label: 'Medico',
    },
    {
      value: 'Auxiliar',
      label: 'Auxiliar',
    },
    {
      value: 'Tecnico',
      label: 'Tecnico',
    },
    {
      value: 'Patologista',
      label: 'Patologista',
    }
  ]

  const especializacao = [
    {
      value: 'Gastroenterologia',
      label: 'Gastroenterologia',
    },
    {
      value: 'Pneumologia',
      label: 'Pneumologia',
    },
    {
      value: 'Dermatologia',
      label: 'Dermatologia',
    },
    {
      value: 'Ginecologia',
      label: 'Ginecologia',
    }
  ]
 

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValues);
    const response = await registerUser(inputValues);
    if (response.data) {
      alert(`Usuario ${response.data.nome} cadastrado com sucesso!`);
      navigate("/login");
    }
  };

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="nome"
        name="nome"
        label="Nome Completo"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      />
      
      <TextField
          id="categoria"
          name="categoria"
          select
          //style={{minWidth: 230}}
          fullWidth
          label="Categoria"
          onChange={handleChangeValues}
        >
          {categoria.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="profissao"
          name="profissao"
          select
          //style={{minWidth: 230}}
          fullWidth
          label="Profissao"
          onChange={handleChangeValues}
        >
          {profissao.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="especializacao"
          name="especializacao"
          select
          //style={{minWidth: 230}}
          fullWidth
          label="Especializacao"
          onChange={handleChangeValues}
        >
          {especializacao.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      {
            
      
      
        // <InputLabel id="tipoDoc">Documento</InputLabel>
        // <Select
        //   labelId="tipoDoc"
        //   id="tipoDoc"
        //   value= ""
        //   label="TipoDoc"
        //   onChange={handleChangeValues}
        // >
        //   <MenuItem value={1}>CPF</MenuItem>
        //   <MenuItem value={2}>CRM</MenuItem>
        //   <MenuItem value={3}>CNH</MenuItem>
        // </Select>
}
      <TextField
        id="numeroDoc"
        name="numeroDoc"
        label="numeroDoc"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      />
      <TextField
        id="email"
        name="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      />
      <TextField
        id="senha"
        name="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
