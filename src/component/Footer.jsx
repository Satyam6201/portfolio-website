import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Satyam Kumar Mishra. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/Satyam6201" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
