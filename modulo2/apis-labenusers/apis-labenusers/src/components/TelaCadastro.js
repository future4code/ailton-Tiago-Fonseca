import React from "react"
import axios from "axios"

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
            <div >
                <button onClick={this.props.irParaLista}>Ir para lista de uruários</button>
                <h1>Ficha de Inscrição</h1>
                <hr />
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
                <button onClick={this.registrarCadastro}>Criar usuário</button>
            </div>
        )
    }
}