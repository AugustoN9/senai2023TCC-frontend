import React from 'react';
import { Link } from 'react-router-dom';
import './styleBannerNavbar.css';
import logo from '../../assets/LogoExactapatho2.png';

const BannerNavbar = () => {
  return (
    <header className='cabecalho'>
        <nav className='navbar-menu'>
            <img src={logo} alt='logo' height="100%"/>
        </nav>
    </header>
  )
}

export default BannerNavbar;
