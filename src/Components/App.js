// import dependencies
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


// import all planet data + component
import data from '../data';
import Planet from './Planet';


function App() {
  // manage currently selected planet
  const [activePlanet, setActivePlanet] = useState(data[2]);

  const handleClick = (name) => {
    data.forEach(planet => {
      if (planet.name === name) {
        setActivePlanet(planet);
      }
    });
  }

  return (
    <Router>
      <div className="App">
        <nav>
          {
            data.map(planet => (
              <Link 
                key={planet.name}
                to={`/${planet.name.toLowerCase()}`} 
                onClick={() => handleClick(`${planet.name}`)}
              >
                {planet.name}
              </Link>
            ))
          }
        </nav>

        <Switch>
          <Route exact path="/"><Redirect to={`/${activePlanet.name}`}/></Route>
          <Route path={`/${activePlanet.name}`}>
            <Planet data={activePlanet} />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
