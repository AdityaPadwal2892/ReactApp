// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header({ onContactClick }) {
  return (
    <header className="app-header">
      <div className="logo">🌟 US Constructions</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
       <button className="contact-btn" onClick={onContactClick}>
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;
