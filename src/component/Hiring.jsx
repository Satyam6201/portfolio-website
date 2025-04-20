import React from "react";
import "../styles/hiring.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaBriefcase, FaUserGraduate, FaLaptopCode, FaLink } from "react-icons/fa";

function Hiring() {
  return (
    <section className="hiring-container">
  
      <div className="hiring internship">
        <h2><FaUserGraduate /> Internship Opportunities</h2>
        <p>
          Looking for an **Internship** in **Frontend Development, React.js, or Full Stack Web Development**? 
          Let’s work together on exciting projects that shape the future of web development.
        </p>
        <p>
          With hands-on experience in building **React** applications and understanding of **MERN stack**,
          I’m eager to contribute to innovative projects while learning from the best in the industry.
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
          I’m open to exciting opportunities where I can bring my knowledge and passion to impactful projects.
        </p>
        <p>
          With experience in **React.js**, **Node.js**, **Express**, and **MongoDB**, I’m ready to take on complex challenges 
          and contribute to a fast-paced development environment.
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
