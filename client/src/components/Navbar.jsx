import { useState } from "react";
import logo from "../assets/images/logo.png?url";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="ExplorePK Logo" />

        <div className="logo-text">
          <h2>ExplorePK</h2>
          <span>Luxury Travels</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#destinations" onClick={closeMenu}>Destinations</a>
          </li>

          <li>
            <a href="#packages" onClick={closeMenu}>Packages</a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

          <li>
            <a href="#booking" onClick={closeMenu}>Booking</a>
          </li>

        </ul>
      </nav>

      {/* BOOK NOW */}
      <a href="#booking" className="book-btn" onClick={closeMenu}>
        <span>Book Now</span>
        <b>↗</b>
      </a>

      {/* MOBILE MENU */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;