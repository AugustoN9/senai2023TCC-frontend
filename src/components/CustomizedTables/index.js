import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../../services/api';

const CustomizedTables = () => {

  const [usuarios, setUsuarios] = useState([]);   
  
  // useEffect(async () => {
  //   const response =  api.get('/authService/findAllUserApi');
  //   console.log("Resposta da api",response.data)
  //   setUsuarios("Valor do setUsuarioos", response.data)

  // }, []);

  console.log("Valor de Usuarios", usuarios)

  const pacientes = [
    {id:1, nome:'Arnaldo', datanasc:'16/08/1965', peso:72,altura:1.73},
    {id:2,nome:'Fernando', datanasc:'12/03/1970', peso:78,altura:1.81},
    {id:3,nome:'Beatriz', datanasc:'02/10/1975', peso:68,altura:1.69},
    {id:4,nome:'Silvana', datanasc:'21/04/1982', peso:84,altura:1.77},
    {id:5,nome:'Silvana', datanasc:'21/04/1982', peso:84,altura:1.77}    
  ]

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pacientes.map((paciente) => (
          <TableRow
            key={paciente.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="paciente">
              {paciente.id}
            </TableCell>
            <TableCell align="right">{paciente.nome}</TableCell>
            <TableCell align="right">{paciente.email}</TableCell>
            <TableCell align="right">{paciente.tipo}</TableCell>
            <TableCell align="right">{paciente.ativo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default CustomizedTables;