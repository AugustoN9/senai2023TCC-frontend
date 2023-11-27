import { Routes, Route } from "react-router-dom";
import React from "react";
import "./styleApp.css";
import Login from "./pages/Login/Login";
import Solicitacao from "./pages/Solicitacao/Solicitacao";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import FormUI from "./components/FormMaterialUI/FormUI";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './routes/ProtectedRoute';
import Formulario from "./pages/Formulario/Formulario";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin";
import Teste from "./pages/Teste/Teste";
import Workspace1 from "./pages/Workspace1/Workspace1";
import Workspace2 from "./pages/Workspace2/Workspace2";
import Register from "./pages/Register/Register";
import EditUser from "./pages/Edit-user/EditUser";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={ < Home/> }/>
          <Route path="/teste" element={ < Teste/> }/>
          <Route path="/workspace2" element={ < Workspace2/> }/>
         
          <Route path="/workspace1" element={
            <ProtectedRoute>
              < Workspace1/>
            </ProtectedRoute>
          }/>
          <Route path="/Admin" element={
            <ProtectedRoute>
              < Admin/>
            </ProtectedRoute>
          }/>
            <Route path="/Admin/add-user" element={
            <ProtectedRoute>
              < Admin/>
            </ProtectedRoute>
          }/>
            <Route path="/Admin/edit-user/:id" element={
            <ProtectedRoute>
              < EditUser/>
            </ProtectedRoute>
          }/>
          <Route path="/solicitacao/:id" element={<Solicitacao />} />
          
          <Route path="/formulario" element={<FormUI />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulariodados" element={<Formulario />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
