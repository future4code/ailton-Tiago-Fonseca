
import React from "react"; 
import styled from "styled-components";
import Imagem from "./img/labefybr.png"
import Home from "./img/casa.png"
import Lupa from "./img/lupa.png"
import Mais from "./img/mais.png"


const TelaGeral = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: gray;
  color: white;
  margin: 0;
  padding: 0;
  
  

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 30px;
  }
  
   h3 {
    display: flex;
    color: aqua;
    margin-left: o;

  }

` 
const MenuLateral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
  height: 100vh;
  width: 250px;
  color: #b3b3b3;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  a{
    margin: 20px 0 5px 20px;
  }

 
` 
const Logo = styled.img`
    width: 140px;
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
  height: 100vh;
  width: 250px;
  color: #b3b3b3;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  a{
    margin: 20px 0 5px 20px;
  }

     img {
      display: flex;
      flex-direction: column;
      width: 25px;
      height: 25px;
      margin: 0px 0 0 20px;

  }
  `

export default class App extends React.Component {

  render() {
    return (
      <TelaGeral>
        
        <MenuLateral>
          <a href="./App.js">
            <Logo src={Imagem}></Logo>
          </a>
          <Options>
            <img src={Home}></img> 
            <a>Home</a>
            <img src={Lupa}></img> 
            <a>Buscar</a>
            <img src={Mais}></img> 
            <a>Criar playlist</a>
            <br></br>
            <a>playlists</a>
          </Options>
        </MenuLateral>
        
      
      <h3>Login</h3>
      <p>Musicas</p>
      </TelaGeral>
      );
  }
}


