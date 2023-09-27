import { Routes, Route } from "react-router-dom";
import React from "react";
import "./styleApp.css";
import Login from "./pages/Login/Login";
import CadastroUsuario from "./pages/CadastroUsuario/CadastroUsuario";
import Solicitacao from "./pages/Solicitacao/Solicitacao";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import FormUI from "./components/FormMaterialUI/FormUI";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './routes/ProtectedRoute';
import Formulario from "./pages/Formulario/Formulario";
import Home2 from "./pages/Home2/Home2";
import HomeUsuarioExt from "./pages/HomeUsuarioExt/HomeUsuarioExt";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={ < Home2/> }/>
         
          <Route path="/HomeUsuarioExt" element={
            <ProtectedRoute>
              < HomeUsuarioExt/>
            </ProtectedRoute>
          }/>
          <Route path="/Admin" element={
            <ProtectedRoute>
              < Admin/>
            </ProtectedRoute>
          }/>
          <Route path="/solicitacao/:id" element={<Solicitacao />} />
          <Route path="/formulario" element={<FormUI />} />

          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulariodados" element={<Formulario />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
