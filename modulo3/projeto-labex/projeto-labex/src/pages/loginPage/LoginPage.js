import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { goToAdminHomePage } from "../../routes/coordinator";
import axios from "axios";

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
    background-color: rgba(25, 25, 112, 0.9);
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

  input {
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: none;
  }
`;

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(`e-mail:${email}
    senha: ${password}`);
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-fonseca-ailton/login";
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(url, body)
      .then((response) => {
        console.log('Deu certo:', response.data);
        localStorage.setItem('token', response.data.token)
        goToAdminHomePage(navigate)
      })
      .catch((error) => {
        console.log('Deu errado:', error.response);
      });
  }; 

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Input>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </Input>
      <Buttons>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
      </Buttons>
    </LoginContainer>
  );
};
