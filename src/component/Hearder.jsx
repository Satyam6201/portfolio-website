import React, { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#techstack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src="/assets/image.jpg" alt="Profile" className="profile-img" />
          <h1 className="glow-text" title="Frontend Developer">
            <i>Satyam Kumar Mishra</i>
          </h1>
        </div>

        {/* <div className="menu-controls">
          <button
            className="theme-toggle ripple"
            onClick={toggleTheme}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <span className={`toggle-icon ${darkMode ? "sun" : "moon"}`}>
              {darkMode ? "🌞" : "🌙"}
            </span>
          </button>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div> */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.href} style={{ "--i": index }}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Header;