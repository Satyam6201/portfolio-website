import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaDownload, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>📞 Get in Touch</h2>
      <p className="contact-subtext">Feel free to reach out for <strong>collaborations, internships, freelance work, or a friendly chat!</strong></p>

      <div className="contact-box">
        <div className="contact-info">
          <a href="mailto:satyamkmishraa@gmail.com" className="contact-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="tel:+916201902313" className="contact-btn">
            <FaPhoneAlt /> Call Me
          </a>
          <a href="https://wa.me/916201902313" className="contact-btn">
            <FaWhatsapp /> WhatsApp Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Satyam6201" target="_blank" className="social-icon">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/" target="_blank" className="social-icon">
            <FaLinkedin /> LinkedIn
          </a>
        </div> 
        <div className="resume-wrapper">
          <a href="/assets/Resume.pdf" download className="resume-btn">
          <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      <p className="footer-note">🚀 Let’s build something amazing together!</p>
    </section>
  );
}

export default Contact;
