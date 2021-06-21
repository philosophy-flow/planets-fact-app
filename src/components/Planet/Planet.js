import './Planet.css';
import React, {useState} from 'react';

/* link icon for source */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';

function Planet({planet}) {
  const [activeContent, setActiveContent] = useState('overview');

  // set active text & source
  let activeText = '';
  let activeSource = '';
  switch (activeContent) {
    case 'overview':
      activeText = planet.overview.content;
      activeSource = planet.overview.source;
      break;
    case 'structure':
      activeText = planet.structure.content;
      activeSource = planet.structure.source;
      break;
    case 'surface':
      activeText = planet.geology.content;
      activeSource = planet.geology.source;
      break;
    default:
      break;
  }

  return (
    <main className="Planet">
      <section className="planet-content-container">
        <nav className="planet-navigation-container">
          <button 
            className=
              {`content-btn ${planet.name.toLowerCase()}-btn ${activeContent === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveContent('overview')}
          >
            Overview
          </button>
          <button 
            className=
              {`content-btn ${planet.name.toLowerCase()}-btn ${activeContent === 'structure' ? 'active' : ''}`}
            onClick={() => setActiveContent('structure')}
          >
            Internal Structure
          </button>
          <button 
            className=
              {`content-btn ${planet.name.toLowerCase()}-btn ${activeContent === 'surface' ? 'active' : ''}`}
            onClick={() => setActiveContent('surface')}
          >
            Surface Geology
          </button>
        </nav>
        <figure className="planet-image-container">
          <img className={`${planet.name.toLowerCase()}-image`} src={planet.images.planet} alt="planet" />
        </figure>
        <article className="planet-text-container">
          <h1>{planet.name}</h1>
          <p className="planet-text">{activeText}</p>
          <div className="planet-source">
            <span>Source : </span>
            <a href={activeSource} target="_blank" rel="noreferrer"> Wikipedia</a>
            <span><FontAwesomeIcon className="link-icon" icon={faExternalLinkSquareAlt} /></span>
          </div>
        </article>
      </section>

      <section className="planet-stats-container">
        <div className="planet-stat">
          <h3>ROTATION TIME</h3>
          <strong>{planet.rotation}</strong>
        </div>
        <div className="planet-stat">
          <h3>REVOLUTION TIME</h3>
          <strong>{planet.revolution}</strong>
        </div>
        <div className="planet-stat">
          <h3>RADIUS</h3>
          <strong>{planet.radius}</strong>
        </div>
        <div className="planet-stat">
          <h3>AVERAGE TEMP.</h3>
          <strong>{planet.temperature}</strong>
        </div>
      </section>
    </main>
  );
}

export default Planet;
