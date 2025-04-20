import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p className="footer-title">Made with ❤️ by Satyam Kumar Mishra</p>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaLinkedin className="icon linkedin" />
          <span className="tooltip-text">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Satyam6201"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaGithub className="icon github" />
          <span className="tooltip-text">GitHub</span>
        </a>

        <a href="mailto:satyamkmishraa@gmail.com" className="tooltip">
          <FaEnvelope className="icon email" />
          <span className="tooltip-text">Email</span>
        </a>

        <a
          href="https://x.com/satyamkmishraa?t=kATgYsKWGY4_ZJfpr1l7pg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaTwitter className="icon twitter" />
          <span className="tooltip-text">Twitter</span>
        </a>

        <a
          href="https://www.instagram.com/satyammishra_467"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaInstagram className="icon instagram" />
          <span className="tooltip-text">Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100024550755973"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaFacebook className="icon facebook" />
          <span className="tooltip-text">Facebook</span>
        </a>
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