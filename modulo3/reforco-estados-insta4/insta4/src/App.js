import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Instagram from"./img/Instagram.png"
import Add from"./img/add.svg"


const Container = styled.div`
background-image: linear-gradient(to bottom left, #b5bbf7, #d688f5, #f683b7,#fcb075,#fef0c6) ;
width: 100%;
`
const HeaderContainer = styled.div`
  display: flex;
  height: 65px;
  margin:  auto;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;

  a, img{
    width: 130px;
    margin-left: 6%;
 }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-left: 30%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  input{
    border-radius: 5px;
    border: 1px solid #fafafa;
    align-items: center;
    background-color: #fefe;
    height: 30px;
 
     }
     input::placeholder {
  color: grey;
  padding-left: 5px;
  /* border: #efefef; */
}

  button{
    border: 1px solid white; 
    border-radius: 5px;
    background-color: black;
    color: white;
    height: 30px;
    font-weight: bold;

  }

  img {
    width: 30px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

`;

const CardContainer = styled.div`
  display: flex;
  padding-left: 17%;
  margin-top: 8%;
  margin-bottom: 10.55%;
  gap: 30px;  
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */

`;
function App() {
  const [inputNome, setInputNome] = useState("");
  const [inputFotoPerfil, setInputFotoPerfil] = useState("");
  const [inputFotoPost, setInputFotoPost] = useState("");
  const [post, setPost] = useState([
    {
      nomeUsuario: "Marina",
      fotoUsuario:
        "https://st.depositphotos.com/1000162/3772/i/600/depositphotos_37722253-stock-photo-fashion-woman-profile-portrait.jpg",
      fotoPost:
        "https://destinocompartilhado.com/wp-content/uploads/2021/04/roteiro-de-viagem-pela-europa-scaled.jpg",
    },
    {
      nomeUsuario: "Paula",
      fotoUsuario:
        "https://img.r7.com/images/2014/08/12/2ekxd7mfze_7m1aumtmx8_file?dimensions=600x420",
      fotoPost:
        "https://image.cachorrogato.com.br/textimages/animais-de-estimacao-furao.jpg",
    },

    {
      nomeUsuario: "Marcos",
      fotoUsuario:
        "https://i.pinimg.com/736x/d8/b6/ef/d8b6ef6583fcd6236badc2168d05c9fe.jpg",
      fotoPost:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752",
    },
  ]);

  const addNovoPost = () => {
    const novoPostUsuario = {
      nomeUsuario: inputNome,
      fotoUsuario: inputFotoPerfil,
      fotoPost: inputFotoPost
    };
    const novoPost = [...post, novoPostUsuario];

    setPost(novoPost);
    setInputNome("")
    setInputFotoPerfil("")
    setInputFotoPost("")
    console.log(novoPostUsuario);

  };

  const onChangeInputNome = (event) => {
    setInputNome(event.target.value);

  };

  const onChangeInputFotoPerfil = (event) => {
    setInputFotoPerfil(event.target.value);
  };

  const onChangeInputFotoPost = (event) => {
    setInputFotoPost(event.target.value);
  };

  const listaDePosts = post.map((post, index) => {
    return (
      <Post
        key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    );
  });

  const validarFormulario = ( )=> {
    if(inputNome == "" || inputFotoPerfil == ""|| inputFotoPost == ""){
        alert('Adicione os dados requiridos!');
    }else{
      addNovoPost()            
    }
}
           
  return (
    <Container>
      <HeaderContainer>
      <a href="App.js"><img src={Instagram}/></a>
        <InputContainer>
        <img src={Add}/>
          <input
            placeholder="Nome do Perfil"
            value={inputNome}
            onChange={onChangeInputNome}
          />
          <input
            placeholder="URL da Foto Perfil"
            value={inputFotoPerfil}
            onChange={onChangeInputFotoPerfil}
          />
          <input
            placeholder="URL da Foto Post"
            value={inputFotoPost}
            onChange={onChangeInputFotoPost}
          />
          <button onClick={validarFormulario}>Postar</button>
        </InputContainer>

      </HeaderContainer>

      <MainContainer>
      
        <CardContainer>{listaDePosts}</CardContainer>
      </MainContainer>
    </Container>
  );
}

export default App
