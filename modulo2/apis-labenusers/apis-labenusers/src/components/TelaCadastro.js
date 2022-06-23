import React from "react"
import axios from "axios"
import styled from "styled-components"

const TelaGeral = styled.div`
    background-image: linear-gradient(salmon, white);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
    font-family: Arial;

    
div {
    background-color: salmon;
    padding: 10px;
    margin: 100px;
    border-radius: 40px 40px;
    border: 2px solid white;
    box-shadow: 0px 0px 5px #7e433c;
    width: 400px;
    height: 300px;
    text-align: center;

}
input {
    border-radius: 6px;
   border: 1px solid white;
   background-color:white;
   color: black;
   text-align: center;
}

`
const ButtomPaginas = styled.button`
    margin: 20px auto;
    display: grid;
    align-self:center;
    justify-self: center;
    border: none;
    background-color:salmon;
    color: white;
    font-size: 15px;

    :hover {
       color: #7e433c;
    }
`
const ButtomPaginas2 = styled.button`
   border-radius: 6px;
   border: white;
   color: salmon;
  

   :hover {
       color: white;
       background-color: #7e433c;
      
    }
`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    novoNome = (event) => {
        this.setState({nome: event.target.value})
    }
    
    novoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    registrarCadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
            name: this.state.nome,
            email:this.state.email
       }
       axios.post(url, body, {
            headers: {
                Authorization: "tiago-fonseca-ailton"
            }
        })
        .then((resp) => {
            alert("Usuário(a) casdastrado(a) com sucesso!")
            this.setState({nome:"", email:""})
        })    
        .catch((erro) => {
            alert(erro.response.data.message)
        })
    }

    render(){
        return(
            <TelaGeral>
                <div >
                    <h1>Registro</h1>
                    {/* <hr /> */}
                    <label>
                    <p>Nome:</p>
                    <input 
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.novoNome}
                    />
                    <p>E-mail:</p>
                    <input 
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.novoEmail}
                    />
                    </label>
                    <br></br>
                    <br></br>
                    <ButtomPaginas2 onClick={this.registrarCadastro}>Criar usuário</ButtomPaginas2>
                    <ButtomPaginas onClick={this.props.irParaLista}>Lista de usuários</ButtomPaginas>
                </div >
            </TelaGeral>    
        )
    }
}