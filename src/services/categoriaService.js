import api from "./api";

const findAllCategories = () => 
    api.get('/categoriaExame/findAll')
    .then((response) => response)
    .catch(err => err)

export { findAllCategories }