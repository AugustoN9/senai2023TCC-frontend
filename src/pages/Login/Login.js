import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './styleLogin.css'


const Login = () => {  

  return (
    <main className='loginTela'>
      <section className='loginFundo'>
      </section>
      <section className='loginFormulario'>
        <FormLogin />
      </section>      
    </main>
  )
}

export default Login;
