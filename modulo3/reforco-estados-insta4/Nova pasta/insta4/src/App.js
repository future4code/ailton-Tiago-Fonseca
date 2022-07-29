import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
padding-top: 5%;
height: 550px;
  justify-content: space-evenly ;
  flex-direction: flex;
  align-items: center;
  background-color: #fafafa;
  `;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Marina"}
        fotoUsuario={"https://st.depositphotos.com/1000162/3772/i/600/depositphotos_37722253-stock-photo-fashion-woman-profile-portrait.jpg"}
        fotoPost={"https://destinocompartilhado.com/wp-content/uploads/2021/04/roteiro-de-viagem-pela-europa-scaled.jpg"}
      />
          <Post
        nomeUsuario={"Paula"}
        fotoUsuario={"https://img.r7.com/images/2014/08/12/2ekxd7mfze_7m1aumtmx8_file?dimensions=600x420"}
        fotoPost={"https://image.cachorrogato.com.br/textimages/animais-de-estimacao-furao.jpg"}
      />
          <Post
        nomeUsuario={"Marcos"}
        fotoUsuario={"https://i.pinimg.com/736x/d8/b6/ef/d8b6ef6583fcd6236badc2168d05c9fe.jpg"}
        fotoPost={"https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"}
      />
    </MainContainer>
  );
}

export default App;
