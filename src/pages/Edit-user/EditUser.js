import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findUsuarioById, updateUsuarioById } from "../../services/usuarioService";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuarioForm, setUsuarioForm] = useState({
    nome: "",
    email: "",
    senha: "",
    profissao: "",
    categoria: "",
    especializacao: "",
    tipoDoc: "",
    numeroDoc: "",
    admin: "",
    ativo: "",
  });

  useEffect(() => {
    getUsuarioById();
  },[])

  const getUsuarioById = async () => {
    const response = await findUsuarioById(id);
    setUsuarioForm(response.data) 
  }
 
  const handleChangeValues = (evento) => {
    setUsuarioForm({
      ...usuarioForm,
      [evento.target.name]: evento.target.value,
    });
    console.log(usuarioForm);
  };

  const handleSubmit = async (evento) => {
      evento.preventDefault();
      const response = await updateUsuarioById(id, usuarioForm);
      if(response){
        alert(`Usuario ${ usuarioForm.nome }atualizazdo com sucesso!`);
        navigate('/admin')
      }
  }

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Editar Usuario</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        <div className="flex flex-col space-y-4">
          
          <label htmlFor="nome" className="text-gray-500 poppins">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={usuarioForm.nome}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="email" className="text-gray-500 poppins">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={usuarioForm.email}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="senha" className="text-gray-500 poppins">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={usuarioForm.senha}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="profissao" className="text-gray-500 poppins">
            Profissão
          </label>
          <input
            type="text"
            id="profissao"
            name="profissao"
            value={usuarioForm.profissao}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="especializacao" className="text-gray-500 poppins">
            Especialização
          </label>
          <input
            type="text"
            id="especializacao"
            name="especializacao"
            value={usuarioForm.especializacao}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col space-y-4">
        <label htmlFor="tipoDoc" className="text-gray-500 poppins">
            Informe o Tipo do Documento
          </label>
          <select id="tipoDoc" name="tipoDoc" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
 value={usuarioForm.tipoDoc} onChange={handleChangeValues} required>
            <option value="" >Selecione</option>
            <option value="CPF" >CPF</option>
            <option value="CRM" >CRM</option>
          </select>
          <label htmlFor="numeroDoc" className="text-gray-500 poppins">
            Nummero do Documento
          </label>
          <input
            type="text"
            id="numeroDoc"
            name="numeroDoc"
            value={usuarioForm.numeroDoc}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="ativo" className="text-gray-500 poppins">
            Categoria de Usuário
          </label>
          <select id="categoria" name="categoria" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
 value={usuarioForm.categoria} onChange={handleChangeValues} required>
            <option value=" UE0 - Medico" >Médico</option>
            <option value="UI1 - Patologista" >Med. Patologista </option>
            <option value="UI2 - Auxiliar" >Aux. Administrativo </option>
            <option value="UI3 - Tecnico" >Téc. Histopatologia </option>
          </select>
          <label htmlFor="admin" className="text-gray-500 poppins">
            Usuario Administrador
          </label>
          <select id="admin" name="admin" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
 value={usuarioForm.admin} onChange={handleChangeValues} required>
            <option value="" >Selecione</option>
            <option value="true" >Sim</option>
            <option value="false" >Não</option>
          </select>
           <label htmlFor="ativo" className="text-gray-500 poppins">
            Usuario Ativo
          </label>
          <select id="ativo" name="ativo" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
 value={usuarioForm.ativo} onChange={handleChangeValues} required>
            <option value="" >Selecione</option>
            <option value="true" >Ativo</option>
            <option value="false" >Desativo</option>
          </select>
         
          <div>
            <button type="submit" className="w-full px-4 py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditUser;
