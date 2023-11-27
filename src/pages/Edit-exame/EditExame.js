import React, { useState } from "react";

const EditExame = () => {
  const [exameForm, setExameForm] = useState({
    nome: "",
    email: "",
    senha: "",
    profissao: "",
    categoria: "",
    especializacao: "",
    tipoDoc: "",
    numeroDoc: "",
    categoria: "",
    admin: "",
    ativo: ""
  });

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Editar Usuario</h1>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        <div className="flex flex-col space-y-4">
          <label htmlFor="nome" className="text-gray-500 poppins">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="descricao" className="text-gray-500">
            Descrição
          </label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="5"
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
            required
          ></textarea>
          <label htmlFor="nome" className="text-gray-500 poppins">
            Código de Barra
          </label>
          <input
            type="text"
            id="codbarra"
            name="codbarra"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label htmlFor="nome" className="text-gray-500 poppins">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="nome" className="text-gray-500 poppins">
            Código de Barra
          </label>
          <input
            type="text"
            id="codbarra"
            name="codbarra"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="nome" className="text-gray-500 poppins">
            Código de Barra
          </label>
          <input
            type="text"
            id="codbarra"
            name="codbarra"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            required
          />
          <label htmlFor="categoria" className="text-gray-500 poppins">
            Categoria
          </label>
          <select
            type="text"
            id="codbarra"
            name="codbarra"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          >
            <option value=""></option>
          </select>
          <div>
            <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300" >Atualizar</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditExame;
