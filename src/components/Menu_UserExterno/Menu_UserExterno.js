import React, { useContext } from "react";
import logo from "../../assets/LogoExactapatho2.png";
import "./styleMenu_UserExterno.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Menu_UserExterno = () => {
  const { userLogged, userFull, logoutUser } = useContext(AuthContext);
  console.log(`Valor do context MenuExt`, userLogged);

  return (
    <header className="cabecalho">
      <nav className="navbar-menu">
        <img src={logo} alt="logo" height="100%" />
        {userLogged ? (
          <div className="info_nav">
            <div className="usuarioLogado">
              <p>{userFull.email}</p>
            </div>
            <div className="botoes">              
              <button className="btn">
                <Link to="/workspace1">Voltar</Link>
              </button>
              <button className="btn" onClick={logoutUser}>
                Sair
              </button>
            </div>
          </div>
        ) : (
          <div className="botoes">
            <button className="btn">
              <Link to="/login">Entrar</Link>
            </button>
            <button className="btn">
              <Link to="/cadastro">Criar Conta</Link>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu_UserExterno;
