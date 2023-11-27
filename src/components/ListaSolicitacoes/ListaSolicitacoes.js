import React, { useEffect, useState } from "react";
import { findAllSolicitacoes } from "../../services/solicitacaoService";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ListaSolicitacoes = () => {
  const [solicitacoes, setSolicitacoes ] =  useState([]);

  useEffect(() => {
    getAllSolicitacoes();
  },[])

  const getAllSolicitacoes = async() => {
    const response = await findAllSolicitacoes();
    setSolicitacoes(response.data)
  }

  return (
    
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="flex justify-end space-y-2">
          <button className="w-44 px-2 py-3 bg-[orange] text-white ring-[orange]-800 focus:outline-none">
            Adiciona Solicitacao
          </button>
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
                        numeroSolicitacao
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        tipoExame
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        amostra
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        origem
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        solicitante
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        paciente
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        prioridade
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Status Solicitacao
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
                    {solicitacoes.map(solicitacao => (
                      <tr className="bg-white border-b" key={solicitacao._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {solicitacao.numeroSolicitacao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {solicitacao.tipoExame}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {solicitacao.amostra}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {solicitacao.origem}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {solicitacao.solicitante}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {solicitacao.paciente}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {solicitacao.prioridade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {solicitacao.solicitacaoStatus}
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

export default ListaSolicitacoes;
