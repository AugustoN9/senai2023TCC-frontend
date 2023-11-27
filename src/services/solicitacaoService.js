import api from './api';

const findAllSolicitacoes = () => 
    api.get('solicitacao/findAll')
    .then((response) => response)
    .catch((err) => err)

export { findAllSolicitacoes };