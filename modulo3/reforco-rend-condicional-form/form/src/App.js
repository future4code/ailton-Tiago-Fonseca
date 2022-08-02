import { useState } from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, salmon, lightsalmon);
  width: 100%;
  height: 609px;

  button {
    border: none;
    background-color: salmon;
    border-radius: 5px;
    padding: 5px 8px 5px 8px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 2;
  }
`;

function App() {
  const [telaAtual, setTelaAtual] = useState("1");
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);
  const [emailInput, setEmailInput] = useState("");

  const irParaEtapa1 = () => {
    setTelaAtual("1");
  };
  const irParaEtapa2 = () => {
    // if ((nameInput != "") & (ageInput != 0) & (emailInput != "")) {
    //   return 
      setTelaAtual("2");
    // } else {
    //   alert("Você deve preencher todas as perguntas antes de continuar!");
    // }
  };

  const irParaEtapa3 = () => {
    setTelaAtual("3");
  };

  const irParaFinal = () => {
    setTelaAtual("4");
  };

  const renderizaTelaAtual = () => {
    if (telaAtual === "1") {
      return <Etapa1 nextPage={irParaEtapa2} />;
    } else if (telaAtual === "2") {
      return <Etapa2 nextPage={irParaEtapa3} />;
    } else if (telaAtual === "3") {
      return <Etapa3 nextPage={irParaFinal} />;
    } else if (telaAtual === "4") {
      return <Final nextPage={irParaEtapa1} />;
    }
  };

  return <AppContainer>{renderizaTelaAtual()}</AppContainer>;
}

export default App;
