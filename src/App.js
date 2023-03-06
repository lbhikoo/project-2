import LocationsContainer from "./LocationsContainer"
import { Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Route path="/">
        <LocationsContainer />
      </Route>
      
    </div>
  )
}

export default App;
