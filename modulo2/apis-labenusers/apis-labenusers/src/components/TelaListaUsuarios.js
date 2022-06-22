import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-around;
`

export default class TelaCadastro extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get (url, {
            headers: {
                Authorization: "tiago-fonseca-ailton"
            }
         })
        .then((resp) => {
           this.setState({usuarios: resp.data})
        })    
        .catch((erro) => {
            alert("Ocorreu um problema, tente novamente.")
        })
    }

    deletarUsuario = (id) => {
        const url =  `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "tiago-fonseca-ailton"
            }
        })
        .then((resp) => {
            alert("Usuário(a) deletado com sucesso!")
            this.pegarUsuarios()
         })    
        .catch((erro) => {
            alert("Ocorreu um erro, tente novamente")
         })
    }
        
    render(){
        const TelaListaUsuarios = this.state.usuarios.map((user) =>{
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                </CardUsuario>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h1>Lista Usuários</h1>
                {TelaListaUsuarios}
            </div>
        )
    }
}