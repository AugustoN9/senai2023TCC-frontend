import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styleNavbar2.css';
import { AuthContext } from '../../context/AuthContext';

const NavbarHome = () => {
  const { userLogged, userFull,  logoutUser }  = useContext( AuthContext );
    
  console.log(`Valor do context Navbar2`,userLogged);

  return (
    <header className="cabecalho">
      <nav className="navbar2-menu">
        
        {userLogged? (
          <div className="info_nav">
            <div className="usuarioLogado">
              
              <p>{userFull.nome}</p>
            </div>
            <div className="botoes">
              <button className="btn2"><Link to="/workspace1">Seu Workspace</Link></button>
              <button className="btn2" onClick={ logoutUser }>Sair</button>
            </div>
        </div>
        ):(
          <div className="botoes">
            <button className="btn2"><Link to="/login">Entrar</Link></button>
            <button className="btn2"><Link to="/formulariodados">Criar Conta</Link></button>
          </div>
        )}
        
      </nav>
    </header>
  );
}

export default NavbarHome;
