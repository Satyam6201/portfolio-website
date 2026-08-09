import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (path, hash) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { path: "/", hash: "#home", label: "Home" },
    { path: "/about", hash: "#about", label: "About" },
    { path: "/techstack", hash: "#techstack", label: "Skills" },
    { path: "/projects", hash: "#projects", label: "Projects" },
    { path: "/experience", hash: "#experience", label: "Experience" },
    { path: "/education", hash: "#education", label: "Education" },
    { path: "/certifications", hash: "#certifications", label: "Certifications" },
    { path: "/blog", hash: "#blog", label: "Blog" },
    { path: "/contact", hash: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo" onClick={() => handleNavClick("/", "#home")} style={{ cursor: "pointer" }}>
          <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" className="profile-img" />
          <h1 className="glow-text" title="Full-Stack Developer">
            <i>Satyam Kumar Mishra</i>
          </h1>
        </div>

        <div className="menu-controls">
          <button
            className="theme-toggle ripple"
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Day / Light Mode" : "Switch to Night / Dark Mode"}
            aria-label="Toggle Day and Night Mode"
          >
            <span className="toggle-icon">
              {isDarkMode ? <FaSun style={{ color: "#fbbf24" }} /> : <FaMoon style={{ color: "#6366f1" }} />}
            </span>
          </button>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.path} style={{ "--i": index }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavClick(item.path, item.hash);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  {item.label}
                </NavLink>
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
