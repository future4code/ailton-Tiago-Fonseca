
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import ListTripsCard from './pages/ListTripsPage/ListTripsCard'
import ListTripsPage from './pages/ListTripsPage/ListTripsPage'
import CreateTripPage from './pages/CreateTripPage/CreateTripPage'
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage'
import AdminHomePage from './pages/AdminHomePage/AdminHomePage'
import styled from 'styled-components'

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

function App() {
  return (
    <AppContainer>
     <HomePage/>
     {/* <LoginPage/> */}
     {/* <TripDetailsPage/> */}
     {/* <ListTripsCard/> */}
     {/* <ListTripsPage/> */}
     {/* <CreateTripPage/> */}
     {/* <ApplicationFormPage/> */}
     {/* <AdminHomePage/> */}
    </AppContainer>
  );
}

export default App;
