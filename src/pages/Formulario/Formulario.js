import React from 'react';
import './styleFormulario.css';
import logo from "../../assets/LogoExactapatho2.png";
import { Link } from 'react-router-dom';
import FormularioCadastro from '../../components/FormularioCadastro/FormularioCadastro';


const Formulario = () => {  

  return (
    <main className='formularioTela'>

      <section className='formularioFundo'>
      </section>
      <section className='formulario'>
        <img src={logo} alt='logo' width="100%"/>   
        <Link to="/">Voltar</Link>    
        <h1>Cadastro</h1>
        <FormularioCadastro />
        
      </section>      
    </main>
  )
}

export default Formulario;
