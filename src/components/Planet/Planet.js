import './Planet.css';

function Planet({planet}) {
  return (
    <main className="Planet">
      <section className="planet-content-container">
        <nav className="planet-navigation-container">
          <h3>Overview</h3>
          <h3>Structure</h3>
          <h3>Surface</h3>
        </nav>
        <figure className="planet-image-container">
          <img className={`${planet.name.toLowerCase()}-image`} src={planet.images.planet} alt="planet" />
        </figure>
        <article className="planet-text-container">
          <h1>{planet.name}</h1>
          <p className="planet-text">{planet.overview.content}</p>
          <p className="planet-source">{planet.overview.source}</p>
        </article>
      </section>

      <section className="planet-stats-container">
        <div className="planet-stat">
          <h4>ROTATION TIME</h4>
          <strong>{planet.rotation} days</strong>
        </div>
        <div className="planet-stat">
          <h4>REVOLUTION TIME</h4>
          <strong>{planet.revolution} days</strong>
        </div>
        <div className="planet-stat">
          <h4>RADIUS</h4>
          <strong>{planet.radius} km</strong>
        </div>
        <div className="planet-stat">
          <h4>RAVERAGE TEMP.</h4>
          <strong>{planet.temperature} °C</strong>
        </div>
      </section>
    </main>
  );
}

export default Planet;
