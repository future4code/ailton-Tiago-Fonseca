import React from 'react';
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton';
import styled from 'styled-components';


const Container = styled.div`
   background-image: linear-gradient(#ff5f38, #fd2a76);
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 480px) {
    height: 97vh;
    padding-top: 20px;
      }
`
function App() {
  return (
    <Container >
     <Main/>
     <ResetButton/>
    </Container>
  );
}

export default App;
