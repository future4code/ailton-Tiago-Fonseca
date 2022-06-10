import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcarBranco from '../../img/bookmark_white.svg'
import iconeMarcarPreto from '../../img/bookmark_black.svg'
// import iconeDeCompartilhar from '../../img/share_white.svg'


const PostContainer = styled.div` 
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    numeroMarcado: 0
    // compartilhado: false,
    // numeroCompartilhado: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: !this.state.numeroCurtidas + 1
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcar = () => {
    console.log('Marcou!')
    this.setState({
      marcado: !this.state.marcado,
      numeroMarcado: !this.state.numeroMarcado + 1
    })

  }

  // onClickCompartilhar = () => {
  //   console.log('Compartilhou!')
  //   this.setState({
  //     compartilhado:false,
  //     numeroCompartilhado: !this.state.numeroCompartilhado + 1
     
  //   })

  // }
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeMarcar

    if(this.state.marcado) {
      iconeMarcar = iconeMarcarPreto
    } else {
      iconeMarcar = iconeMarcarBranco
    }

    // let iconeCompartilhar

    // if(this.state.compartilhar) {
    //   iconeCompartilhar= iconeDeCompartilhar 
    // } else {
    //   iconeCompartilhar = iconeDeCompartilhar 
    // }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcar}
          onClickIcone={this.onClickMarcar}
          valorContador={this.state.numeroMarcado}
        />

        {/* <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={this.state.numeroCompartilhado}
        /> */}
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post