import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: black;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  color: white;
  background-color: rgba(240, 248, 255, 0.3);

`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 50px;

  button {
    background-color: rgba( 25, 25, 112, 0.9);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 8px;
    
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  input{
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: none;
  }
`;

function LoginPage() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <Input>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
      </Input>
      <Buttons>
        <button>Voltar</button>
        <button>Entrar</button>
      </Buttons>
    </LoginContainer>
  );
}

export default LoginPage;
