import './Nav.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

/* chevron icon for mobile menu */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';



function Nav({data, selectPlanet, activePlanet}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (planet) => {
    setIsOpen(!isOpen);
    if (planet) {
      selectPlanet(`${planet}`);
    }
  }

  // detect resize to reset open state when transitioning to small screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])


  console.log(isOpen);
  return (
    <header className="Nav">
      <h2>The Planets</h2>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
      {
        data.map(planet => (
          <li key={planet.name}>
            <Link className="nav-link"
              to={`/${planet.name.toLowerCase()}`} 
              onClick={() => handleClick(`${planet.name}`)}
            >
              <span className={`mobile-nav-icon nav-icon-${planet.name.toLowerCase()}`}></span>
              <span 
                className=
                {`nav-planet-name ${activePlanet.name === planet.name ? 'active' : ''}`}
              >
                {planet.name}
              </span>
              <FontAwesomeIcon 
                className="arrow"
                icon={faChevronRight} 
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
    </header>

  );
}

export default Nav;