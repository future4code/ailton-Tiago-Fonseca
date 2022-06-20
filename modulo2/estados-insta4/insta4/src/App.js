import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://cdn.mindminers.com/blog/uploads/2021/03/katlyn-ghost.jpeg'}
          fotoPost={'https://picsum.photos/200/150/'}
        />
        <Post
          nomeUsuario={'kellen01'}
          fotoUsuario={'https://i.pinimg.com/550x/ef/f3/db/eff3dbf3ddb97b7232e742a97206cc93.jpg'}
          fotoPost={'https://picsum.photos/seed/picsum/200/150'}
        />
         <Post
          nomeUsuario={'duartepedro'}
          fotoUsuario={'https://i.pinimg.com/originals/76/b2/79/76b2799fcd3c8b77e6e0e83a98af8657.jpg'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />
      </MainContainer>
    
    );
  }
}



export default App;
