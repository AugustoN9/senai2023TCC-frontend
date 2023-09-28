import { TextField } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DadosUsuario = () => {
    const [categoria, setCategoria] = useState('');

    const handleChange = (event: SelectChangeEvent ) => {
        setCategoria(event.target.value);
      };

  return (
    <form>
      <InputLabel id="categoriaUsuario">Categoria de Usuario</InputLabel>
      <Select
        labelId="categoriaUsuario"
        id="categoria"
        value={categoria}
        label="Categoria"
        onChange={handleChange}
        margin="normal"
        fullWidth
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
      </Select>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
       <button type="submit" variant="contained">
          Cadastrar
        </button>
        
    </form>
  );
};

export default DadosUsuario;
