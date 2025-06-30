import React, { useState } from 'react';
import './Header.css';

function Header({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="app-header">
      <div className="logo">🌟 US Constructions</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#features" onClick={toggleMenu}>Features</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <button className="contact-btn" onClick={() => { toggleMenu(); onContactClick(); }}>
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;
