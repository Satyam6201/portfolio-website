import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="public/image.jpg" alt="Profile" className="profile-img" />
        <h1><i>Satyam Kumar Mishra</i></h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar Links */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

