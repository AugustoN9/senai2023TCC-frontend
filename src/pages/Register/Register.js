import React from "react";
import "./styleRegister.css";
import FormCadastro from "../../components/FormCadastro/FormCadastroMedico";

const Register = () => {
  return (
    <main className="cadastroTela">
      <section className="cadastroFundo">
      </section>
      <section className="cadastroFormulario">
        <FormCadastro />
      </section>
    </main>
  );
};

export default Register;
