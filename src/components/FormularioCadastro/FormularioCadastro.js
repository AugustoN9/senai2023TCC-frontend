import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const FormularioCadastro = () => {
    const [inputValues, setInputValues] = useState({
      nome: '',
      cpf: '',
      tipo: '',
      email: '',
      senha: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(inputValues);
      const response = await registerUser(inputValues);
      if(response.data){
        alert(`Usuario ${response.data.id} cadastrado com sucesso!`);
        navigate('/login');
      }
    }

    const handleChangeValues = (event ) => {
        setInputValues({
          ...inputValues,
          [event.target.name]:event.target.value
        })
        console.log(inputValues);
      };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
            id='nome'
            name='nome'
            label='Nome Completo'
            type='text'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={handleChangeValues}
        />      
        <TextField 
            id='cpf'
            name='cpf'
            label='CPF'
            type='number'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={handleChangeValues}
        />  
      {/* <InputLabel id="categoriaUsuario">Categoria de Usuario</InputLabel>
      <Select
        labelId="categoriaUsuario"
        id="categoria"
        name='tipo'
        //value={categoria}
        label="Categoria"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Usuario Externo</MenuItem>
        <MenuItem value={20}>Usuario Interno - Patologista</MenuItem>
        <MenuItem value={30}>
          Usuario Interno - Tecnico em Histopatologia
        </MenuItem>
        <MenuItem value={40}>
          Usuario Interno - Auxiliar Administrativo
        </MenuItem>
      </Select> */}
      <TextField
        id="email"
        name='email'
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChangeValues}
      />
      <TextField
        id="senha"
        name='senha'
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
