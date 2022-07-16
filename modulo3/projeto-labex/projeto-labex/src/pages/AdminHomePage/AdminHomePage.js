import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToHomePage} from "../../routes/coordinator"
import {goToLoginPage} from "../../routes/coordinator"
import {goToCreateTripPage} from "../../routes/coordinator"
import {goToTripDatailsPage} from "../../routes/coordinator"

const AdminHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: black;
  width: 500px;
  height: 500px;
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
    background-color: rgba( 25, 25, 112, 0.9);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 8px;
    
  }
`;

const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  p{
  background-color: rgba(240, 248, 255, 0.9);
  width: 300px;
  height: 30px;
  border-radius: 8px;
  border: none;
  color: black;
  text-align: center;
  
}
`;


export const AdminHomePage = () => {
  const navigate = useNavigate()
  
  return (
    <AdminHomeContainer>
      <h1>Painel Administrativo</h1>
      <Buttons>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      </Buttons>
      <Jobs>
        <p onClick={() => goToTripDatailsPage(navigate)}>Job</p>
        <p>Job</p>
        <p>Job</p>
      </Jobs>
    </AdminHomeContainer>
  )
}

