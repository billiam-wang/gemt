import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="welcome-badge">WELCOME</div>
          <h1 className="hero-title">GENERAL ELECTRONIC<br />MATERIALS TECHNOLOGY</h1>
          <p className="hero-subtitle">Custom connectors and cable assembly</p>
          <button className="learn-more-btn">Learn more &#8250;</button>
          <p className="hero-notice">
            Website currently under construction; some links may<br />
            not work. Please bear with us!
          </p>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <p>Electronic Connectors & Components</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
