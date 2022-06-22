import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    users: [],
    nome: "",
    email:""
  };

  onChangeName = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  componentDidMount() {
    this.getLogin();
    }
  }

  getPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "lucas-macedo-aragon"
          }
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // createPlaylist = () => {
  //   const body = {
  //     name: this.state.inputName
  //   };

  //   axios
  //     .post(
  //       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
  //       body,
  //       {
  //         headers: {
  //           Authorization: "tiago-fonseca-ailton"
  //         }
  //       }
  //     )
  //     .then((response) => {
  //       this.getPlaylists();
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };


    // const listaDeUsuarios = this.state.users.map((user)=>{
    //   return <p>(user.name}</p>
    // })
    
  render() {
    return (
      <main>
        <h1>Ficha de Inscrição</h1>
        <label>
        <p>Nome:</p>
        <input/>
        <p>Email:</p>
        <input/>
        </label>
        <button>Criar usuário</button>
        <hr />

        {/* <section>
          <label>
            Nome da playlist
            <input value={this.state.inputName} onChange={this.onChangeInput} />
          </label>

          <button onClick={this.createPlaylist}>Criar playlist</button>
        </section>

        <section> */}
          {/* {this.state.playlists.map((playlist) => {
            return <p key={playlist.id}>{playlist.name}</p>;
          })} */}
        {/* </section> */}
      </main>
    );
  }
