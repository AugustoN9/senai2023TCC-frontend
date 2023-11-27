import React, { useEffect, useState } from "react";
import { findAllExames } from "../../services/exameService";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ListaExames = () => {
  const [exames, setExames ] =  useState([]);

  useEffect(() => {
    getAllExames();
  },[])

  const getAllExames = async() => {
    const response = await findAllExames();
    setExames(response.data)
  }

  return (
    
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="flex justify-end space-y-2">
          <button className="w-44 px-2 py-3 bg-[orange] text-white ring-[orange]-800 focus:outline-none">
            Adiciona Exame
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
                        Exame
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Tipo de Exame
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Amostra
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Origem
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Solicitante
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Especialidade
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        CRM
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Prioridade
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Status
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
                    {exames.map(exame => (
                      <tr className="bg-white border-b" key={exame._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {exame.numeroExame}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {exame.tipoExame}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {exame.amostra}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {exame.origem}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {exame.solicitante}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {exame.especialidade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {exame.crm}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {exame.prioridade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           {exame.exameStatus}
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

export default ListaExames;
