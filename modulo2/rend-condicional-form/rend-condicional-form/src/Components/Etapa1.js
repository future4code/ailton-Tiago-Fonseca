import React, { Component } from "react";
import styled from "styled-components";

const Dive = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
;
h3 {
  text-align: center;
  }
`


export default class App extends React.Component {
 render() {
  return (
      <Dive>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <option>1. Qual o seu nome?</option>
          <input
              value={this.props.inputNome}
              onChange={this.props.onChangeInputNome}
          />
        <option>2. Qual sua idade?</option>
            <input
              value={this.props.inputIdade}
              onChange={this.props.onChangeInputIdade}
             />
            <option>3. Qual seu email?</option>
              <input
                value={this.props.inputEmail}
                onChange={this.props.onChangeInputEmail}
               />
            <option>Qual a sua escolaridade?</option>
              <select>
                <option></option>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
              </select>
             
       </Dive>

)}
}

