import api from "./api";

const findAllUserApi = (userValues) =>
  api
    .get("/usuario/findAll/", userValues)
    .then((response) => response)
    .catch((err) => console.error("Erro na chamada", err));

const findAllUsuarios = () =>
  api
    .get("usuario/findAll")
    .then((response) => response)
    .catch((err) => err);

const findUsuarioById = (id) =>
  api
    .get(`/usuario/findById/${id}`)
    .then((response) => response)
    .catch((err) => err);

const updateUsuarioById = (id, userEdit) =>
  api
    .put(`/usuario/update/${id}`, userEdit)
    .then((response) => response)
    .catch((err) => err);

const deleteUsuario = (id) =>
  api
    .delete(`/usuario/remove/${id}`)
    .then((response) => response)
    .catch((err) => err);

export { findAllUserApi, findAllUsuarios, findUsuarioById,  updateUsuarioById, deleteUsuario };
