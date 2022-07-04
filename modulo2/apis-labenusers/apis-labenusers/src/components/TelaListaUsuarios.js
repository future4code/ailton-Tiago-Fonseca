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

`
const ListaUser = styled.div`
    background-color: salmon;
    padding: 10px;
    margin: 100px;
    border-radius: 40px 40px;
    border: 2px solid white;
    box-shadow: 0px 0px 5px #7e433c;
    width: 400px;
    height: 300px;
    text-align: center;
    align-items: center;
`

const CardUsuario = styled.div`
     border: 1px solid white;
     border-radius: 5px;
     padding: 1px 5px 1px 5px; 
     margin: 3px auto; 
     width: 150px;
     display: flex;
     align-items: center;
     justify-content: space-between;

     button {
        border:none;
        background-color: salmon;
        color: white;
        font-size: 11px;
     }

     button:hover{
        color: #7e433c;
     }
    
`


const ButtomPaginas = styled.button`
    /* margin-top: 20px; */
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
        if (window.confirm("Tem certeza de que deseja deletar?")) {
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
    }
        
    render(){
        const TelaListaUsuarios = this.state.usuarios.map((user) =>{
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>deletar</button>
                </CardUsuario>
        })

        return(
            <TelaGeral>
                <ListaUser>
                     <h1>Lista Usuários</h1>
                    {TelaListaUsuarios}
                    <ButtomPaginas onClick={this.props.irParaCadastro}>Voltar para registro</ButtomPaginas>
                </ListaUser>
            </TelaGeral>
        )
    }
}