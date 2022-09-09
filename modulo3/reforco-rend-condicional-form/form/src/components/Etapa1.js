
import { useState } from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
margin: 0 auto ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
width: 400px;
height: 450px;
background-color: white;
border-radius: 20px;
color: salmon;

input{
    border-radius: 5px;
    border: 1px solid salmon;
    padding-left: 5px;
    background-color: light;
    -webkit-appearance: none;
    
    ::placeholder{
        color: lightpink;
    }
};

select{
    border-radius: 5px;
    border: none;
    padding-left: 5px;
    margin-bottom: 15px;
    color: salmon;
    padding-left: 5px;
    border: 1px solid salmon;
    
    ::selection {
        border: 1px solid salmon;
        }
}

button{
    border: none;
    background-color: salmon;
    border-radius: 5px;
    padding: 5px 8px 5px 8px;
    color: white;
    font-weight: bold;
    margin-bottom: 20px;

}
`

function Etapa1(props ) {

    // const [nameInput, setNameInput] = useState("") 
    // const [ageInput, setAgeInput] = useState("") 
    // const [emailInput, setEmailInput] = useState("") 
    

    // const onClick = (props ) => {
    //     if ( nameInput != "" & ageInput != 0 & emailInput != "" ){
    //         return (props.nextPage)
    //     }else {
    //         alert("Preencha todos os campos!")
    //     }
    // }
   const onChangeName = (event ) => {
    props.setNameInput(event.target.value)
    }

    const onChangeAge = (event ) => {
        props.setAgeInput(event.target.value)
    }

    const onChangeEmail = (event ) => {
        props.setEmailInput(event.target.value)
    }

    return (
      <HomePageContainer>
            <h1>Dados Gerais</h1>
            <p>1. Qual o seu nome?</p>
            <input 
            placeholder={"Nome"} 
            type="text"
            value={props.nameInput}
            onChange={onChangeName}
            />
            <p>2. Qual sua idade?</p>
            <input 
            placeholder={"Idade"}  
            type="number"
            value={props.ageInput}
            onChange={onChangeAge}
            />
            <p>3. Qual seu email?</p>
            <input 
            placeholder={"E-mail"}  
            type="text"
            value={props.emailInput}
            onChange={onChangeEmail}
            />
            <p>4. Qual a sua escolaridade?</p>
            <select>
            <option>Esino médio incompleto</option>
            <option>Esino médio completo</option>
            <option>Esino superior incompleto</option>
            <option>Esino superior completo</option>
            </select>
            <button onClick={props.nextPage}>Próxima Etapa</button>
 
      </HomePageContainer>
    );
  }
  
  export default Etapa1;
  