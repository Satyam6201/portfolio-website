import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <h2 className="footer-title">Made with ❤️ by Satyam Kumar Mishra</h2>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Education">Education</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaEnvelope /><a href="mailto:satyamkmishraa@gmail.com">satyamkmishraa@gmail.com</a></p>
          <p><FaPhoneAlt /><a href="tel:+916201902313">+91 6201902313</a></p>
          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps?q=Bhopal,+India"
              target="_blank"
              rel="noreferrer"
            >
              Bhopal, India
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/" target="_blank" rel="noreferrer" className="tooltip">
              <FaLinkedin className="icon linkedin" />
              <span className="tooltip-text">LinkedIn</span>
            </a>
            <a href="https://github.com/Satyam6201" target="_blank" rel="noreferrer" className="tooltip">
              <FaGithub className="icon github" />
              <span className="tooltip-text">GitHub</span>
            </a>
            <a href="mailto:satyamkmishraa@gmail.com" className="tooltip">
              <FaEnvelope className="icon email" />
              <span className="tooltip-text">Email</span>
            </a>
            <a href="https://leetcode.com/u/satyammishra62/" target="_blank" rel="noreferrer" className="tooltip">
              <SiLeetcode className="icon leetcode" />
              <span className="tooltip-text">LeetCode</span>
            </a>
            <a href="https://x.com/satyamkmishraa?t=kATgYsKWGY4_ZJfpr1l7pg&s=09" target="_blank" rel="noreferrer" className="tooltip">
              <FaTwitter className="icon twitter" />
              <span className="tooltip-text">Twitter</span>
            </a>
            <a href="https://www.instagram.com/satyammishra_467" target="_blank" rel="noreferrer" className="tooltip">
              <FaInstagram className="icon instagram" />
              <span className="tooltip-text">Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100024550755973" target="_blank" rel="noreferrer" className="tooltip">
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

      <p className="footer-bottom-text">© 2025 Satyam Kumar Mishra. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
