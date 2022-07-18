import styled from 'styled-components'
import {Router} from './routes/Router'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  height: 97vh;
  justify-content: center;
  background-image: linear-gradient(darkblue, black );
  margin: 0 auto;
  padding: 0 auto;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`

export const App = () => {
  return (
    
    <AppContainer>
      <Router/>
    </AppContainer>
  );
}


