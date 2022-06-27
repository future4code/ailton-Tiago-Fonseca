
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
` 

  const Logo = styled.img`
    width: 140px;
    
  a {
    margin: 20px 0 5px 20px;
  }
`

const Options1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
 
  a{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  
  a :hover{
    color:white;
  }

  img {
      display: flex;
      flex-direction: row;
      width: 25px;
      height: 25px;
      margin: 0px 0 0 20px;

  }
`

const Options2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
 
  a{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  
  a :hover{
    color:white;
  }

  img {
      display: flex;
      flex-direction: row;
      width: 25px;
      height: 25px;
      margin: 0px 0 0 20px;

  }
`
const Options3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
 
  a{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  
  a :hover{
    color:white;
  }

  img {
      display: flex;
      flex-direction: row;
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
          <Logo>
            <a >
            <img src={Imagem}></img>
            </a>
          </Logo>  
          <Options1>
            <img src={Home}></img> 
            <a>Home</a>
          </Options1>
            <Options2>
            <img src={Lupa}></img> 
            <a>Buscar</a>
            </Options2>
            <Options3>
            <img src={Mais}></img> 
            <a>Criar playlist</a>
            </Options3>
            <br></br>
            <a>playlists</a>
          
        </MenuLateral>
        
      
      <h3>Login</h3>
      <p>Musicas</p>
      </TelaGeral>
      );
  }
}


