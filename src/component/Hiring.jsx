import React from "react";
import "../styles/hiring.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaBriefcase, FaUserGraduate } from "react-icons/fa";

function Hiring() {
  return (
    <section className="hiring-container">
  
      <div className="hiring internship">
        <h2><FaUserGraduate /> Internship Opportunities</h2>
        <p>
          Looking for an **Internship** in **Frontend Development, React.js, or Full Stack Web Development**?
          Let's work together on exciting projects!
        </p>
        <div className="hiring-details">
          <a href="mailto:satyamkmishraa@gmail.com" className="hire-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="tel:+916201902313" className="hire-btn">
            <FaPhoneAlt /> Call Me
          </a>
          <a href="https://wa.me/916201902313" className="hire-btn">
            <FaWhatsapp /> WhatsApp Me
          </a>
        </div>
      </div>

      <div className="hiring fulltime">
        <h2><FaBriefcase /> Full-Time Hiring</h2>
        <p>
          Looking for a **Full-time Web Developer** with expertise in **React.js, JavaScript, and Full Stack Development**?
          I’m open to exciting opportunities!
        </p>
        <div className="hiring-details">
          <a href="mailto:satyamkmishraa@gmail.com" className="hire-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="tel:+916201902313" className="hire-btn">
            <FaPhoneAlt /> Call Me
          </a>
          <a href="https://wa.me/916201902313" className="hire-btn">
            <FaWhatsapp /> WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
