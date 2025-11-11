import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">GEMT</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
