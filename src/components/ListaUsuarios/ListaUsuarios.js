import React, { useEffect, useState } from "react";
import { findAllUsuarios } from "../../services/usuarioService";
import { findAllSolicitacoes } from "../../services/solicitacaoService";
import { findAllExames } from "../../services/exameService";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import amostra from '../../assets/amostra2.png';
import exame from '../../assets/exame2.png';
import macro from '../../assets/macroscopia.png';
import histoprocesso from '../../assets/histoprocesso.png';
import laudo from '../../assets/laudo2.png';



import './styleLista.css'

const ListaUsuarios = () => {
  const [solicitacoes, setSolicitacoes ] =  useState([]);
  const [exames, setExames ] =  useState([]);
  const [usuarios, setUsuarios ] =  useState([]);

  useEffect(() => {
    getAllUsuarios();
    getAllSolicitacoes();
    getAllExames();

  },[])

  const getAllSolicitacoes = async() => {
    const response = await findAllSolicitacoes();
    setSolicitacoes(response.data)
  }

  const getAllExames = async() => {
    const response = await findAllExames();
    setExames(response.data)
  }

  const getAllUsuarios = async() => {
    const response = await findAllUsuarios();
    setUsuarios(response.data)
  }

  return (
    
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between">
          <div className="card">
            <h2>Solicitações</h2>
            <img src={amostra}/>
            <p>{solicitacoes.length}</p>
          </div>
          <div className="card">
            <h2>Exames</h2>
            <img src={exame} />
            <p>{exames.length}</p>
          </div>
          <div className="card">
            <h2>Macroscopia</h2>
            <img src={macro} />
            <p>{usuarios.length}</p>
          </div>
          <div className="card">
            <h2>Histoprocesso</h2>
            <img src={histoprocesso} />
            <p>{usuarios.length}</p>
          </div>
          <div className="card">
            <h2>Laudos</h2>
            <img src={laudo} />
            <p>{usuarios.length}</p>
          </div>
        </div>
        <div className="flex flex-col my-8">
          <div className="overfllow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden sm:rounded-lg shodow-md">
                <table className="min-w-full">
                  <thead className="bg-black">
                    <tr>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Nome
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Categoria
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Profissao
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Especializacao
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Doc Tipo
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Doc Numero
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Admin
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span
                          scope="col"
                          className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                        >
                          Ações
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map(usuario => (
                      <tr className="bg-white border-b" key={usuario._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {usuario.nome}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {usuario.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {usuario.categoria}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {usuario.profissao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {usuario.especializacao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {usuario.tipoDoc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {usuario.numeroDoc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {usuario.ativo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {usuario.admin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center justify-center space-x-3">
                              <FaEdit className="cursor-pointer text-2xl text-blue-400" />
                              <MdDelete className="cursor-pointer text-2xl text-red-600" />
                            </div>
                      </td>
                    </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ListaUsuarios;
