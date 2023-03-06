import LocationsContainer from "./LocationsContainer"
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"


function App() {


  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Locations">
          <LocationsContainer />
        </Route>
        <Route path= "/About">
          <About />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
      
    </div>
  )
}

export default App;
