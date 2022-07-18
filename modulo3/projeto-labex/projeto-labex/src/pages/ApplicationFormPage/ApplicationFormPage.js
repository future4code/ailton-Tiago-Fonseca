import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToListTripsPage} from "../../routes/coordinator"
import {goToApplicationFormPage} from "../../routes/coordinator"

const ApplicationContainer = styled.div`
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

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  return (
    <ApplicationContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <Input>
        <select name="select">
          <option value="valor1">Escolhar uma Viagem</option>
          <option value="valor2">Viagem 1</option>
          <option value="valor3">Viagem 2</option>
          <option value="valor3">Viagem 3</option>
        </select>
        <input placeholder="Nome" />
        <input placeholder="Idade" />
        <input placeholder="Texto Candidatura" />
        <input placeholder="Profissão" />
        <select>
          <option>Escolha um país</option>
          <option>Brasil</option>
          <option>Alemanha</option>
          <option>Portugal</option>
        </select>
      </Input>
      <Buttons>
        <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>Enviar</button>
      </Buttons>
    </ApplicationContainer>
  )
}

