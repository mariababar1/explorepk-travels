import { useState } from "react";
import logo from "../assets/images/logo.png?url";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="navbar"
      style={{
        position: "relative",
        zIndex: 9999,
      }}
    >
      <div className="logo">
        <img src={logo} alt="ExplorePK Logo" />

        <div className="logo-text">
          <h2>ExplorePK</h2>
          <span>Luxury Travels</span>
        </div>
      </div>

      <nav>
        <ul
          className="nav-links"
          style={{
            display: menuOpen ? "flex" : undefined,
          }}
        >
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#destinations" onClick={closeMenu}>
              Destinations
            </a>
          </li>

          <li>
            <a href="#packages" onClick={closeMenu}>
              Packages
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
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

      <a
        href="#booking"
        className="book-btn"
        onClick={closeMenu}
      >
        <span>Book Now</span>
        <b>↗</b>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "relative",
          zIndex: 999999,
          pointerEvents: "auto",
          cursor: "pointer",
        }}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Navbar;