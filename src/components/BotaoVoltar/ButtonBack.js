import { Button } from '@mui/material';
import React from 'react';

const ButtonBack = () => {
    
  return (
    <div>
      <Button onClick={this.context.router.history.goBack}>Voltar</Button>
    </div>
  )
}

export default ButtonBack;
