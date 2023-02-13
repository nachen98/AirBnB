// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsList from "../src/components/SpotsList/index"
import { SingleSpot } from "./components/SingleSpotById";
import CreateSpotForm  from "./components/CreateSpotForm/CreateSpotForm"
import CurrUserTrips from "./components/CurrUserTrips"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Switch>

        <Route exact path="/">
          <Navigation isLoaded={isLoaded} NavBar="NavBar" />
          {isLoaded && (
            <SpotsList />)}
        </Route>
        <Route path="/spots/:spotId">
          <Navigation isLoaded={isLoaded} NavBar="NavBarNarrow"/>
          {isLoaded && (
            <SingleSpot />)}
        </Route>
        
        <Route path="/create-spot">
          <Navigation isLoaded={isLoaded} NavBar="NavBar"/>
          {isLoaded && (
            <CreateSpotForm />)}
        </Route>

        <Route path="/mytrips">
          <Navigation   isLoaded={isLoaded} NavBar="NavBarNarrow" />
            {isLoaded && (
            <CurrUserTrips />
            )}
         
        </Route>
      </Switch>

    </>
  );
}

export default App;