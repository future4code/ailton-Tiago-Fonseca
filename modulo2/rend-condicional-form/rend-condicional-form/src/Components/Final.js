import React, { Component } from "react";
import styled from "styled-components";

const Dive = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h4 {
    text-align: center;
  }

`

export default class App extends React.Component {
 render() {
  return (
      <Dive>
        <h2>O Formulario Acabou</h2>
        <h4><b>Muito obrigado por participar!<br/>Entraremos em contato em breve!</b></h4>
       </Dive>

)}
}
