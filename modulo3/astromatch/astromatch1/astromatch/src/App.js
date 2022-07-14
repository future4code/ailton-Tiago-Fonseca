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
