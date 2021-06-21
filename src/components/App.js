// import dependencies
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// import components
import Nav from './Nav/Nav';


// import all planet data + component
import data from '../data';
import Planet from './Planet/Planet';


function App() {
  // manage currently selected planet
  const [activePlanet, setActivePlanet] = useState(data[2]);
  const selectPlanet = (name) => {
    data.forEach(planet => {
      if (planet.name === name) {
        setActivePlanet(planet);
      }
    });
  }

  return (
    <Router className="App">
      <Nav 
        data={data} 
        selectPlanet={selectPlanet} 
        activePlanet={activePlanet} 
      />
      <Switch>
        <Route exact path="/"><Redirect to={`/${activePlanet.name}`}/></Route>
        <Route path={`/${activePlanet.name}`}>
          <Planet planet={activePlanet} />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
