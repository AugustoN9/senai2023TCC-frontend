import { TextField } from '@mui/material'
import React from 'react'

const DadosPessoais = () => {
  return (
    <form>
        <TextField 
            id='nome'
            label='Nome Completo'
            type='text'
            variant='outlined'
            margin='normal'
            fullWidth
        />      
        <TextField 
            id='cpf'
            label='CPF'
            type='number'
            variant='outlined'
            margin='normal'
            fullWidth
        />  
    </form>
  )
}

export default DadosPessoais
