import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styleNavbar.css';
import logo from '../../assets/LogoExactapatho2.png';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { userLogged, userFull, logoutUser }  = useContext( AuthContext );

  return (
    <header className="cabecalho">
      <nav className="navbar-menu">
        <img src={logo} alt="logo" height="100%" />
        {userLogged? (
          <div className="info_nav">
            <div className="usuarioLogado">
              <p>{userFull.nome}</p>             
            </div>
            <div className="botoes">
              <button className="btn"><Link to="/Admin">Dashboard</Link></button>
              <button className="btn"><Link to="/workspace1">Workspace</Link></button>
              <button className="btn" onClick={ logoutUser }>Sair</button>
            </div>
        </div>
        ):(
          <div className="botoes">
            <button className="btn">Voltar</button>
            <button className="btn"><Link to="/login">Entrar</Link></button>
            <button className="btn"><Link to="/register">Criar Conta</Link></button>
          </div>
        )}
        
      </nav>
    </header>
  );
}

export default Navbar;
