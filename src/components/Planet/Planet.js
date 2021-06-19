import './Planet.css';

function Planet({planet}) {
  return (
    <main className="Planet">
      <section className="planet-content-container">
        <nav className="planet-navigation-container">
          <ul>
            <li>Overview</li>
            <li>Structure</li>
            <li>Surface</li>
          </ul>
        </nav>
        <figure className="planet-image-container">
          <img src={planet.images.planet} alt="planet" />
        </figure>
        <article className="planet-text-container">
          <h1>{planet.name}</h1>
          <p className="planet-text">{planet.overview.content}</p>
          <p className="planet-source">{planet.overview.source}</p>
        </article>
      </section>

      <section className="planet-stats-container">
        <div className="planet-stat">
          <h3>{planet.rotation} days</h3>
          <p>ROTATION TIME</p>
        </div>
        <div className="planet-stat">
          <h3>{planet.revolution} days</h3>
          <p>REVOLUTION TIME</p>
        </div>
        <div className="planet-stat">
          <h3>{planet.radius} km</h3>
          <p>RADIUS</p>
        </div>
        <div className="planet-stat">
          <h3>{planet.temperature} °C</h3>
          <p>RAVERAGE TEMP.</p>
        </div>
      </section>

    </main>
  );
}

export default Planet;
