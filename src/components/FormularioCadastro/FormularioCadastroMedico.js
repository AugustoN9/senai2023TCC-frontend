import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import "./styleFormularioCadastro.css"

const FormularioCadastroMedico = () => {
    const [inputValues, setInputValues] = useState({
      nome: '',      
      cpf: '',
      profissao: 'medico',
      nomeDoc: 'CRM',
      numeroDoc: '',
      especializacao: '',
      email: '',
      senha: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(inputValues);
      const response = await registerUser(inputValues);
      if(response.data){
        alert(`Usuario ${response.data.nome} cadastrado com sucesso!`);
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
    <form onSubmit={handleSubmit} className='formCadastro'>
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
        <TextField 
            id='numeroDoc'
            name='numeroDoc'
            label='CRM'
            type='number'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={handleChangeValues}
        />  
        <TextField 
            id='especializacao'
            name='especializacao'
            label='especializacao'
            type='text'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={handleChangeValues}
        />  
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

export default FormularioCadastroMedico;
