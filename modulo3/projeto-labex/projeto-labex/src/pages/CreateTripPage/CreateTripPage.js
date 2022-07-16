import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage} from "../../routes/coordinator"
import {goToCreateTripPage} from "../../routes/coordinator"

const CreateTripnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  input{
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: none;
  }
  select {
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: none;  
  }
`;

export const CreateTripPage = () => {
  const navigate = useNavigate()

  return (
    <CreateTripnContainer>
      <h1>Criar Viagem</h1>
      <Input>
        <input placeholder="Nome"/>
        <select>
          <option>Escolha um Planeta</option>
          <option>Marte</option>
          <option>Vênus</option>
          <option>Plutão</option>
        </select>
        <input id="date" type="date"/>
        <input placeholder="Descrição"/>
        <input placeholder="Duração em dias"/>
      </Input>
      <Buttons>
        <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar</button>
      </Buttons>
    </CreateTripnContainer>
  )
}

