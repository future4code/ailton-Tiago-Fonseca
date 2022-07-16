import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToHomePage} from "../../routes/coordinator"
import {goToApplicationFormPage} from "../../routes/coordinator"

const ListTripContainer = styled.div`
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
    background-color: rgba( 25, 25, 112, 0.9);
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
  /* align-items: center; */
  background-color: rgba(240, 248, 255, 0.9);
  width: 350px;
  border-radius: 8px;
  border: none;
  color: black;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
  

  p{
    text-align: start;
    margin-right: 30px;
}
 
`;

export const ListTripsPage = () => {
  const navigate = useNavigate()

  const [trips, setTrips] = useState([])
  return (
    <ListTripContainer>
      <Buttons>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </Buttons>
      <h1>Lista de Viagens</h1>
      <Job>
        
      </Job>
      {/* <Job>
        <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Duração:</p>
        <p>Data:</p>
      </Job>
      <Job>
        <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Duração:</p>
        <p>Data:</p>
      </Job> */}

    </ListTripContainer>
  )
}

