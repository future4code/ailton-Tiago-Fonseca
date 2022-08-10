import React from "react";
import styled from "styled-components";
import Labex from '../../assets/img/labexlogo.png'
import { useNavigate } from "react-router-dom";
import {goToListTripsPage} from "../../routes/coordinator"
import {goToLoginPage} from "../../routes/coordinator"


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: black;
  width: 300px;
  height: 350px;
  border-radius: 30px;
  color: white;
`

const Image = styled.div`
  
  img{
  width: 280px;
  align-items: center;

}
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

button {
  background-color: rgba(240, 248, 255, 0.3);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  padding: 8px;
}
  
`

export const HomePage = () => {
  const navigate = useNavigate()
 
  return (
    <HomeContainer>
      <Image>
      <img src={Labex}/>
      </Image>
      <Buttons>
        <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
        <button onClick={() => goToLoginPage(navigate)}>Área de Adm</button>
      </Buttons>
    </HomeContainer>
  );
}

