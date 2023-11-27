import React, { useEffect, useState } from "react";
import { deleteUsuario, findAllUsuarios } from "../../services/usuarioService";
import { findAllSolicitacoes } from "../../services/solicitacaoService";
import { findAllExames } from "../../services/exameService";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import amostra from "../../assets/solicitacao.png";
import exame from "../../assets/examelupa.png";
import macro from "../../assets/macroscopia.png";
import histoprocesso from "../../assets/histoprocesso.png";
import laudo from "../../assets/laudomicro.png";
import "./styleAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Admin = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [exames, setExames] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsuarios();
    getAllSolicitacoes();
    getAllExames();
  }, []);

  const getAllSolicitacoes = async () => {
    const response = await findAllSolicitacoes();
    setSolicitacoes(response.data);
  };

  const getAllExames = async () => {
    const response = await findAllExames();
    setExames(response.data);
  };

  const getAllUsuarios = async () => {
    const response = await findAllUsuarios();
    setUsuarios(response.data);
  };

  const removeUsuario = async (id) => {
    const answer = window.confirm("Deseja realmente excluir este usuario ?");
    if (answer) {
      console.log(id);
      await deleteUsuario(id);
      getAllUsuarios();
    }
  };

  return (
    <>
    <Navbar />
    <div className="dashboard">
      <section className="Sidebar">
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <a className="list-group-item py-2">
            <i className="bi bi-list fs-5 me-2"></i>
            <span className="fs-5"></span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-speedometer2 fs-5 me-2"></i>
            <span className="fs-5">Dashboard</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-house fs-4 me-2"></i>
            <span className="fs-5">Home</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-person-circle fs-4 me-2"></i>
            <span className="fs-5">Usuarios</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-table fs-4 me-2"></i>
            <span className="fs-5">Solicitacoes</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-clipboard-data fs-4 me-2"></i>
            <span className="fs-5">Exames</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-search fs-4 me-2"></i>
            <span className="fs-5">Macroscopia</span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-gear-wide-connected fs-4 me-2"></i>
            <span className="fs-5">Histoprocesso</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-cup-hot-fill fs-4 me-2"></i>
            <span className="fs-5">Microscopia</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-file-text-fill fs-4 me-2"></i>
            <span className="fs-5">Diagnosticos</span>
          </a>
          <a className="list-group-item py-2 ">
            <i className="bi bi-file-earmark-text fs-4 me-2"></i>
            <span className="fs-5">Laudos</span>
          </a>
          </div>
      </section>
      <section className="my-12 max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between">
          <div className="card">
            <h2>Solicitações</h2>
            <img src={amostra} alt="" />
            <p>{solicitacoes.length}</p>
          </div>
          <div className="card">
            <h2>Exames</h2>
            <img src={exame} alt="" />
            <p>{exames.length}</p>
          </div>
          <div className="card">
            <h2>Macroscopia</h2>
            <img src={macro} alt="" />
            <p>{usuarios.length}</p>
          </div>
          <div className="card">
            <h2>Histoprocesso</h2>
            <img src={histoprocesso} alt="" />
            <p>{usuarios.length}</p>
          </div>
          <div className="card">
            <h2>Laudos</h2>
            <img src={laudo} alt="" />
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
                        className="text-xs font-medium text-white px-4 py-2 text-left uppercase tracking-wider"
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
                    {usuarios.map((usuario) => (
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
                            <Link to={`/Admin/edit-user/${usuario._id}`}>
                              <FaEdit className="cursor-pointer text-2xl text-blue-400" />
                            </Link>
                            <MdDelete
                              onClick={() => removeUsuario(usuario._id)}
                              className="cursor-pointer text-2xl text-red-600"
                            />{" "}
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
    </div>
    
    </>    
  );
};

export default Admin;
