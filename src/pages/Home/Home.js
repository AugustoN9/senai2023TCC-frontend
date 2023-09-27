import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import "./styleHome.css";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {

  const userLogged = useContext(AuthContext);
  console.log(`Valor do context Home`, userLogged);

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
