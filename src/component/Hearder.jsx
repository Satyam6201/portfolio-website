import React, { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/image.jpg" alt="Profile" className="profile-img" />
        <h1><i>Satyam Kumar Mishra</i></h1>
      </div>

      <div className="menu-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌞" : "🌙"}
        </button>
        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

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
