import React, { useState } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/chat.png";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeSalvarBranco from "../../img/bookmark-white.svg";
import iconeSalvarPreto from "../../img/bookmark-black.svg";

const PostContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 10px;
  background-color: white;

`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
    height: 250px;
  width: 300px;
`;

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [salvar, setSalvar] = useState(false);


  const onClickSalvar = () => {
    setSalvar(!salvar);
  };
      
      
  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (numeroCurtidas){
      setNumeroCurtidas(numeroCurtidas - 1) 
    } else {
      setNumeroCurtidas(numeroCurtidas + 1) 
        }
  
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const aoEnviarComentario = () => {
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };

  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto ;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

let iconeSalvar

if (salvar) {
  iconeSalvar = iconeSalvarPreto ;
} else {
  iconeSalvar = iconeSalvarBranco;
}
  
  let componenteComentario;

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />;
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={onClickSalvar}
          />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  );
}

export default Post;
