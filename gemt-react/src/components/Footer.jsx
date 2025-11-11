import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Browse pages</h4>
            <ul className="footer-links">
              <li><a href="#about">About us</a></li>
              <li><a href="#connectors">Connectors</a></li>
              <li><a href="#cable">Cable Assembly</a></li>
              <li><a href="#plastic">Plastic Injection Molding</a></li>
              <li><a href="#tool">Tool Building</a></li>
            </ul>
          </div>

          <div className="footer-section footer-info">
            <div className="footer-logo">
              <span className="footer-logo-text">GEMT</span>
            </div>
            <div className="footer-company">
              <p className="company-name">General Electronic Materials Technology</p>
              <p className="company-address">10662 Burt St</p>
              <p className="company-address">Omaha, NE 68114-1070</p>
              <p className="company-phone">P: (562) 595-0106</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© Scenery - All right reserved</p>
          <p className="designed-by">Designed by BusinessModo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
