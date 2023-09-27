import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, loginUserApi } from "../services/authService";
import api from "../services/api";

const useAuth = () => {
  //variavel de estado para verifi logon user
  const [userLogged, setUserLogged] = useState();

  //state para carregar a rota, enquanto ver o user ta logado
  const [loading, setLoading] = useState(true);
  // receber a resposta do servidor
  const [userFull, setUserFull] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(`Dados do UserInfo`, userInfo);
    if (userInfo) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userInfo.token}`;
      const dadosUserLog = findUserById(userInfo.id);
      console.log(dadosUserLog);
      setUserLogged(true);
    }
    //se user logado, loading volta para false
    setLoading(false);
  }, []);

  const loginUser = async (inputValues) => {
    //uso a api para login
    const response = await loginUserApi(inputValues);
    const data = response.data;

    console.log("Resposta da API", data.token)
    if(data.token == null){
      console.log("Resposta back: Erro no login");
    }

    localStorage.setItem("userInfo", JSON.stringify(data));
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
      

    setUserFull(data);

    setUserLogged(true);
    navigate("/HomeUsuarioExt");
  };

  // Funcao logout
  const logoutUser = () => {
    setUserLogged(false);
    setUserFull({});
    localStorage.clear();
    navigate("/");
  };

  const findUserById = async (idUser) => {
    const response = await getUserById(idUser);
    setUserFull(response.data);
    console.log(userFull);
  };

  return { userLogged, userFull, loading, loginUser, logoutUser };
};

export default useAuth;
