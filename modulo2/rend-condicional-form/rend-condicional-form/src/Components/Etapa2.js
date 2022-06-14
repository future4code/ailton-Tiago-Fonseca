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
        <h3>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h3>
        <option>1. Qual o curso? </option>
            <input
                value={this.props.inputCurso}
                onChange={this.props.onChangeInputCurso}
            />
        <option>2. Qual a unidade de ensino?</option>
            <input
                value={this.props.inputEnsino}
                onChange={this.props.onChangeInputEnsino}
            />
        
       </Dive>

)}
}

