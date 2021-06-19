import './Nav.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

/* chevron icon for mobile menu */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

function Nav({data, selectPlanet}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (planet) => {
    setIsOpen(!isOpen);
    if (planet) {
      selectPlanet(`${planet}`);
    }
  }

  return (
    <nav className="Nav">
      <h2>The Planets</h2>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
      {
        data.map(planet => (
          <li key={planet.name}>
            <span className={`mobile-nav-icon nav-icon-${planet.name.toLowerCase()}`}></span>
            <Link 
              to={`/${planet.name.toLowerCase()}`} 
              onClick={() => handleClick(`${planet.name}`)}
            >
              {planet.name}
            </Link>
            <Link className="mobile-nav-btn"
              to={`/${planet.name.toLowerCase()}`} 
              onClick={() => handleClick(`${planet.name}`)}
            >
              <FontAwesomeIcon 
                icon={faChevronRight} 
                className="arrow"
                onClick={() => handleClick(`${planet.name}`)}
              />
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