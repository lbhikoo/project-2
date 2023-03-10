// import LocationsContainer from "./LocationsContainer"
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import TripExperience from "./TripExperience"
import LocationsContainer from "./LocationsContainer"



function App() {


  return (
    <div className= "background">
      <NavBar />
      <Switch>
        <Route path="/locations">
          <LocationsContainer />
        </Route>
        <Route path="/Header">
          <Header />
        </Route>
        <Route path="/TripExperience">
          <TripExperience />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
