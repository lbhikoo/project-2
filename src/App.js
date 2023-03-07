// import LocationsContainer from "./LocationsContainer"
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"
import TripExperience from "./TripExperience"
import LocationList from "./LocationList";


function App() {


  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/LocationsList">
          <LocationList />
        </Route>
        <Route path= "/About">
          <About />
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
