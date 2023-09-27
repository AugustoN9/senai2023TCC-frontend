import React from "react";
import FormCadastro from "../../components/FormCadastro/FormCadastro";
import "./styleCadastroUsuario.css";

const CadastroUsuario = () => {
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

export default CadastroUsuario;
