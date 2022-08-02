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
text-align: center;

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

function Etapa3(props) {

    const [cursoInput, setCursoInput] = useState("") 
    const [ensinoInput, setEnsinoInput] = useState("") 

    
   const onChangeCurso = (event ) => {
    setCursoInput(event.target.value)
    }

    const onChangeEnsino = (event ) => {
        setEnsinoInput(event.target.value)
    }


    return (
      <HomePageContainer>
            <h1>Informações gerais de ensino</h1>
            <p>7. Por que você não terminou um <br/> curso de graduação?</p>
            <input 
            placeholder={"Respota"} 
            type="text"
            value={cursoInput}
            onChange={onChangeCurso}
            />
            <p>8. Você fez algum curso complementar?</p>
            <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de inglês</option>
                        </select>
            <button onClick={props.nextPage}>Próxima Etapa</button>
 
      </HomePageContainer>
    );
  }
  
  export default Etapa3;
  