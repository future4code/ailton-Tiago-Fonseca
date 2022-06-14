import React, { Component } from 'react';
import styled from "styled-components"
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

const Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  border-radius: 50px;
  border-style: 1px solid gray;
  padding: 20px;
  width: 400px;
  color: white;
  margin: 30px 450px;

  h3 {
    margin: 30px 30px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 6px;
    color: white;
    border-radius: 6px;
    border: 1px solid white;
    background-color: grey;
  } 
  
  input {
    margin: 10px;
  }

select {
  margin: 10px;
}
`

 export default class App extends React.Component {
  state = {
    etapa: 1
   };

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1/>;
        break;
      case 2:
        return <Etapa2/>;
        break;
      case 3:
        return <Etapa3/>;
        break;  
      case 4:
        return <Final/>;
        break;     
    };
  };

  irParaProximaEtapa = () => {
      this.setState({
        etapa: this.state.etapa + 1
      });
  };
ultimaTela = () => {
  if(this.state.etapa === Etapa3){
    return 
  }
    
  };

  render() {
    return (
       <Botao>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}><b>Próxima Etapa</b></button>
      </Botao>
      );
  };

};
