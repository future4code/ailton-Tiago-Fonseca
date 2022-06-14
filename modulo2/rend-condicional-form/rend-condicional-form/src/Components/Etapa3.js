import React, { Component } from "react";
import styled from "styled-components";

const Dive = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h3 {
    text-align: center;
  }

`

export default class App extends React.Component {
 render() {
  return (
      <Dive>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <option>1. Por que você não terminou um curso de graduação? </option>
            <input
                value={this.props.inputGrad}
                onChange={this.props.onChangeInputGrad}
            />
        <option>2. Você fez algum curso complementar?</option>
            <select>
                <option></option>
                <option>Curso técnico</option>
                <option>Cursos de inglês</option>
                <option>Não fiz curso complementar</option>
            </select>
       </Dive>

)}
}
