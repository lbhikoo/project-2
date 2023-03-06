import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Header from "./Header"
import LocationsContainer from "./LocationsContainer"
import About from "./About"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/Locations">
        <LocationsContainer />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
    </Switch>
  </BrowserRouter>
    
);


