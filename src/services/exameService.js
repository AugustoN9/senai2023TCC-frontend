import api from './api';

const findAllExames = () => 
    api.get('exame/findAll')
    .then((response) => response)
    .catch((err) => err)

export { findAllExames };