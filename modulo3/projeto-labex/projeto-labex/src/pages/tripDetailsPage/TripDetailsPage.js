import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage} from "../../routes/coordinator"
import axios from "axios";

const TripDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: black;
  width: 500px;
  /* height: 60vh; */
  border-radius: 30px;
  color: white;
  background-color: rgba(240, 248, 255, 0.3);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 50px;

  button {
    background-color: rgba(25, 25, 112, 0.9);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 8px;
  }
`;

const Job = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 5px;
   width: 350px;
  border-radius: 8px;
  border: 1px solid white;
  color: black;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;

  p {
    text-align: start;
    margin-right: 30px;
    color: white;
  }
`;

export const TripDetailsPage = () => {
  const navigate = useNavigate()

  
  useEffect(() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-fonseca-ailton/trip/0aQ9retlt9zxpeo40G2M"
    const header = { 
    auth: token
  }
    const token = localStorage.getItem('token')
    axios.get(url, {header}).then((response) => {
      console.log(response.data)
    }).catch((error) =>  {
      console.log('Deu erro:', error.response)
    })
  }, [])

  return (
    <TripDetailsContainer>
      <h1>Baixa prioridade</h1>
      <Job>
        <p>Nome:Pabllo Ruan</p>
        <p>Descrição:Viagem pra Lua</p>
        <p>Planeta: Marte</p>
        <p>Duração:60 dias</p>
        <p>Data: 2023-10-10</p>
      </Job>
      <Buttons>
        <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
      </Buttons>
      <h2>Candidatos Pendentes</h2>
      <p>Texto</p>
      <h2>Candidatos Aprovados</h2>
      <p>Texto</p>
    </TripDetailsContainer>
  );
}

