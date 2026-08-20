import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  FaSun, FaMoon, FaBars, FaTimes,
  FaHome, FaUser, FaCode, FaProjectDiagram,
  FaBriefcase, FaGraduationCap, FaCertificate,
  FaBlog, FaEnvelope, FaChevronDown,
} from "react-icons/fa";
import "../styles/header.css";

const navItems = [
  { path: "/",              hash: "#home",          label: "Home",          icon: <FaHome /> },
  { path: "/about",         hash: "#about",         label: "About",         icon: <FaUser /> },
  { path: "/techstack",     hash: "#techstack",     label: "Skills",        icon: <FaCode /> },
  { path: "/projects",      hash: "#projects",      label: "Projects",      icon: <FaProjectDiagram /> },
  { path: "/experience",    hash: "#experience",    label: "Experience",    icon: <FaBriefcase /> },
  { path: "/education",     hash: "#education",     label: "Education",     icon: <FaGraduationCap /> },
  { path: "/certifications",hash: "#certifications",label: "Certifications",icon: <FaCertificate /> },
  { path: "/blog",          hash: "#blog",          label: "Blog",          icon: <FaBlog /> },
  { path: "/contact",       hash: "#contact",       label: "Contact",       icon: <FaEnvelope /> },
];

function Header() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection]   = useState("home");
  const [showMoreMenu, setShowMoreMenu]     = useState(false);
  const moreRef = useRef(null);

  const { isDarkMode, toggleTheme } = useTheme();
  const location  = useLocation();
  const navigate  = useNavigate();

  /* ── Scroll progress + shrink ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section tracker via IntersectionObserver ── */
  useEffect(() => {
    const ids = navItems.map((n) => n.hash.replace("#", ""));
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close "more" dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setShowMoreMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu  = () => { setMenuOpen(false); setShowMoreMenu(false); };

  const handleNavClick = (hash) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Desktop: show first 6, rest in "More" dropdown */
  const primaryItems = navItems.slice(0, 6);
  const moreItems    = navItems.slice(6);

  const isNavActive = (item) =>
    activeSection === item.hash.replace("#", "");

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>

        {/* Scroll Progress Bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

        {/* Logo */}
        <div className="logo" onClick={() => handleNavClick("#home")} style={{ cursor: "pointer" }}>
          <div className="logo-img-wrap">
            <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" className="profile-img" />
            <span className="logo-ring" />
          </div>
          <div className="logo-text">
            <h1 className="glow-text"><i>Satyam Kumar Mishra</i></h1>
            <span className="logo-subtitle">Full-Stack Dev · AI Builder</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul>
            {primaryItems.map((item, index) => (
              <li key={item.path} style={{ "--i": index }}>
                <button
                  className={`nav-btn ${isNavActive(item) ? "active-link" : ""}`}
                  onClick={() => handleNavClick(item.hash)}
                  title={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-underline" />
                </button>
              </li>
            ))}

            {/* More Dropdown */}
            <li ref={moreRef} className="more-dropdown-wrap">
              <button
                className={`nav-btn more-btn ${moreItems.some(isNavActive) ? "active-link" : ""}`}
                onClick={() => setShowMoreMenu((p) => !p)}
              >
                <span className="nav-label">More</span>
                <FaChevronDown className={`chevron ${showMoreMenu ? "open" : ""}`} />
                <span className="nav-underline" />
              </button>
              {showMoreMenu && (
                <div className="more-dropdown">
                  {moreItems.map((item) => (
                    <button
                      key={item.path}
                      className={`dropdown-item ${isNavActive(item) ? "active-link" : ""}`}
                      onClick={() => { handleNavClick(item.hash); setShowMoreMenu(false); }}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Controls */}
        <div className="menu-controls">
          <button
            className="theme-toggle ripple"
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <span className="toggle-icon">
              {isDarkMode
                ? <FaSun  style={{ color: "#fbbf24" }} />
                : <FaMoon style={{ color: "#6366f1" }} />}
            </span>
          </button>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
          {/* Close handle */}
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Navigation</span>
            <button className="mobile-close-btn" onClick={closeMenu}><FaTimes /></button>
          </div>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.path} style={{ "--i": index }}>
                <button
                  className={`mobile-nav-btn ${isNavActive(item) ? "active-link" : ""}`}
                  onClick={() => handleNavClick(item.hash)}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  {item.label}
                  {isNavActive(item) && <span className="mobile-active-dot" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={`nav-overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu} />
    </>
  );
}

export default Header;
