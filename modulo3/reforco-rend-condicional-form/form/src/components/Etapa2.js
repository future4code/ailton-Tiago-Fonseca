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


button{
    border: none;
    background-color: salmon;
    border-radius: 5px;
    padding: 5px 8px 5px 8px;
    color: white;
    font-weight: bold;
    margin-top: 20px;

}
`

function Etapa2(props) {

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
            <h1>Informações do ensino superior</h1>
            <p>5. Qual curso?</p>
            <input 
            placeholder={"Curso"} 
            type="text"
            value={cursoInput}
            onChange={onChangeCurso}
            />
            <p>6. Qual a unidade de ensino?</p>
            <input 
            placeholder={"Unidade de curso"}  
            type="number"
            value={ensinoInput}
            onChange={onChangeEnsino}
            />
            <button onClick={props.nextPage}>Próxima Etapa</button>
 
      </HomePageContainer>
    );
  }
  
  export default Etapa2;
  