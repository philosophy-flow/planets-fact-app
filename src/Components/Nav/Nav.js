import './Nav.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Nav({data, selectPlanet}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (planet) => {
    setIsOpen(!isOpen);
    if (planet) {
      console.log('working');
    }
    selectPlanet(`${planet}`);
  }


  return (
    <nav className="Nav">
      <h2>The Planets</h2>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
      {
        data.map(planet => (
          <li key={planet.name}>
            <Link 
              to={`/${planet.name.toLowerCase()}`} 
              onClick={() => handleClick(`${planet.name}`)}
            >
              {planet.name}
            </Link>
          </li>
        ))
      }
      </ul>
      <button 
        className={`burger-button ${isOpen ? 'active' : ''}`}
        onClick={() => handleClick()}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>

  );
}

export default Nav;