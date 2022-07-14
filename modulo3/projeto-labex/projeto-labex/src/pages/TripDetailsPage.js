import React from "react";
import styled from "styled-components";

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

function TripDetailsPage() {
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
        <button>Voltar</button>
      </Buttons>
      <h2>Candidatos Pendentes</h2>
      <p>Texto</p>
      <h2>Candidatos Aprovados</h2>
      <p>Texto</p>
    </TripDetailsContainer>
  );
}

export default TripDetailsPage;
