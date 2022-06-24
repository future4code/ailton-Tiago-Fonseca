
import React from "react"; 
import styled from "styled-components";



const TelaGeral = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: gray;
  color: white;
  

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
  color: white;

  a{
    margin: 20px 0 5px 20px;
  }

` 


export default class App extends React.Component {

  render() {
    return (
      <TelaGeral>
        <MenuLateral>
          <a>Logo</a>
          <a>Home</a>
          <a>Buscar</a>
          <a>Sua Biblioteca</a>
          <a>Criar playlist</a>
          <br></br>
          <a>playlists</a>
        </MenuLateral>
        
      
      <h3>Login</h3>
      <p>Musicas</p>
      </TelaGeral>
      );
  }
}


