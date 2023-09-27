import React from 'react';
import './styleFormulario.css'
import DadosPessoais from '../../components/FormularioCadastro/DadosPessoais';
import DadosUsuario from '../../components/FormularioCadastro/DadosUsuario';
import logo from "../../assets/LogoExactapatho2.png";
import FormularioCadastro from '../../components/FormularioCadastro/FormularioCadastro';
import { Link } from 'react-router-dom';


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
