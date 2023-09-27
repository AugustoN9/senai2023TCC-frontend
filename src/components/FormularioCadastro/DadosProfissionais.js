import { TextField } from '@mui/material';
import React from 'react';
import { cpfMask } from '../MascaraCpf/MascaraCpf';

const DadosProfissionais = () => {
     
  return (
    <form>
       
        <TextField 
            id='crm'
            label='CRM'
            type='number'
            variant='outlined'
            margin='normal'
            cpfMask
            fullWidth
        />      
        <TextField 
            id='especialidade'
            label='RQE'
            type='number'
            variant='outlined'
            margin='normal'
            fullWidth
        />  
    </form>
  )
}

export default DadosProfissionais
