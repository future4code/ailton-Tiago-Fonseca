
import React from "react"; 
import styled from "styled-components";
import Imagem from "./img/labefybr.png"
import Home from "./img/casa.png"
import Lupa from "./img/lupa.png"
import Mais from "./img/mais.png"
import Play from "./img/play.png"


const TelaGeral = styled.div`
  display: flex;
  background-color: gray;
  margin: 0;
  padding: 0;
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
  const Logo = styled.div`
  
  img {
    width: 140px;
    margin: 20px 0 10px 20px;
  }
`
const Options1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
 
  a{
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 10px;
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
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    text-align: center  ;
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
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 10px;
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
const Options4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
 
  a{
    margin-bottom: 20px;
    margin-left: 10px;
    margin-top: 10px;
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
const Login = styled.div`
  display: flex;
  flex-direction:row-reverse;
  /* justify-content: flex-end; */
   height: 10vh;
   width: 80vw;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   color: black;
   background-color: #101010;
   padding-right: 30px;
   margin: 0;
   align-items: center;

   a{
    border-radius: 30px;
    border: 1px solid white;
    background-color: white;
    font-size: 15px;
    padding: 12px 22px 12px 22px;
    
   }



`
const Body = styled.div`
display: flex;
flex-direction: column ;
background-color: #1b1b1b;

  
`
const Musicas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
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
          <Options4>
            <img src={Play}></img> 
            <a>Playlists</a>
          </Options4>
        </MenuLateral>
      <Body>
        <Login>
          <a>Entrar</a>
        </Login>
        <Musicas>
          <p>Musicas</p>
        </Musicas>
      </Body>  
      
     
      </TelaGeral>
      );
  }
}


