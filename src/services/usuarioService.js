import api from './api';

const findAllUserApi = (userValues) => 
  api.get('/usuario/findAll/',userValues)
    .then((response) => response)
    .catch((err) => console.error('Erro na chamada', err));


export { findAllUserApi }