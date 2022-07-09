import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
    height: 800px;
    width: 300px;
    border: 1px solid black;
    justify-content: center;

`
const Header = styled.header`
  /* background-image: linear-gradient(orange, pink); */
  height: 30px;
  display: flex;
  justify-content: space-between;
`

const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const [perfil, setPerfil] = useState({});
  const [idPerfil, setIdPerfil] = useState(1);

  const getIdPerfil = (event) => {
    console.log(event.target.value);
  };

  useEffect(()=> {

  },[])

  const getPerfilAPI = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches" 
    axios
      .get(url)
      .then((res) => {console.log(res.data)})
      .catch((err) => {console.log(err.response)});
  };
  return (
    <div>
      <header>
        <p>AstroMatch</p>
        <button>Perfil</button>
      </header>
      <section>
      <h1>Profile</h1>
      </section>
      <section>
        <button>X</button>
        <button>V</button>
      </section>
    </div>
  );
};

export default UserProfile;
