import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/footer.css";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (hash) => {
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <h2 className="footer-title">Crafted with ❤️ by Satyam Kumar Mishra</h2>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/#home" onClick={() => handleNavClick("#home")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleNavClick("#about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/techstack" onClick={() => handleNavClick("#techstack")}>
                Skills & Tech Stack
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => handleNavClick("#projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={() => handleNavClick("#education")}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/certifications" onClick={() => handleNavClick("#certifications")}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleNavClick("#contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <FaEnvelope /> <a href="mailto:satyamkmishraa@gmail.com">satyamkmishraa@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+916201902313">+91 6201902313</a>
          </p>
          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps?q=Delhi,+India"
              target="_blank"
              rel="noreferrer"
            >
              Delhi, India
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Connect & Follow</h3>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/satyam-kumar-mishra-dev"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon linkedin" />
              <span className="tooltip-text">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Satyam6201"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="GitHub"
            >
              <FaGithub className="icon github" />
              <span className="tooltip-text">GitHub</span>
            </a>
            <a
              href="mailto:satyamkmishraa@gmail.com"
              className="tooltip"
              aria-label="Email"
            >
              <FaEnvelope className="icon email" />
              <span className="tooltip-text">Email</span>
            </a>
            <a
              href="https://leetcode.com/u/SatyamMIshra62"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="LeetCode"
            >
              <SiLeetcode className="icon leetcode" />
              <span className="tooltip-text">LeetCode</span>
            </a>
            <a
              href="https://x.com/satyamkmishraa"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="Twitter"
            >
              <FaTwitter className="icon twitter" />
              <span className="tooltip-text">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/satyammishra_467"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="Instagram"
            >
              <FaInstagram className="icon instagram" />
              <span className="tooltip-text">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100024550755973"
              target="_blank"
              rel="noreferrer"
              className="tooltip"
              aria-label="Facebook"
            >
              <FaFacebook className="icon facebook" />
              <span className="tooltip-text">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {showTopBtn && (
        <button className="top-btn" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}

      <p className="footer-bottom-text">
        © {new Date().getFullYear()} Satyam Kumar Mishra. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
