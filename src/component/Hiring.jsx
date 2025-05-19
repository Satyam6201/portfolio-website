import React from "react";
import "../styles/hiring.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaBriefcase,
  FaUserGraduate,
  FaLightbulb,
  FaCode,
  FaLink,
} from "react-icons/fa";

function Hiring() {
  return (
    <section className="hiring-container">
      <h1 className="hiring-title">
        <FaLightbulb className="title-icon" />
        Let's Build Something Great Together
      </h1>
      <p className="hiring-subtext">
        🚀 Passionate about Web Development | Ready to Collaborate | Open to Learn and Deliver
      </p>

      <div className="hiring internship">
        <h2><FaUserGraduate className="animated-icon" /> Internship Opportunities</h2>
        <p>
          Seeking an <strong>Internship</strong> in <strong>Frontend / Full Stack Web Development</strong>? I'm open to contributing my skills in
          <strong> React.js</strong> and <strong>MERN Stack</strong> while learning from talented professionals.
        </p>
        <div className="info-badges">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>API Integration</span>
          <span>Project-Based Learning</span>
        </div>
        <p className="quote">“The best way to learn is by building real things.”</p>
        <div className="hiring-details">
          <a href="mailto:satyamkmishraa@gmail.com" className="hire-btn"><FaEnvelope /> Email Me</a>
          <a href="tel:+916201902313" className="hire-btn"><FaPhoneAlt /> Call Me</a>
          <a href="https://wa.me/916201902313" className="hire-btn"><FaWhatsapp /> WhatsApp Me</a>
        </div>
      </div>

      <div className="separator-line"></div>

      <div className="hiring fulltime">
        <h2><FaBriefcase className="animated-icon" /> Full-Time Hiring</h2>
        <p>
          Looking for a <strong>Full-Time Developer</strong> with hands-on experience in <strong>React.js</strong>,
          <strong> JavaScript</strong>, and <strong>Node.js</strong>? I’m passionate about building scalable applications and learning continuously.
        </p>
        <div className="info-badges">
          <span>MERN Stack</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>Team Collaboration</span>
        </div>
        <p className="quote">“Code is not just code, it’s craft, logic, and creativity.”</p>
        <div className="hiring-details">
          <a href="mailto:satyamkmishraa@gmail.com" className="hire-btn"><FaEnvelope /> Email Me</a>
          <a href="tel:+916201902313" className="hire-btn"><FaPhoneAlt /> Call Me</a>
          <a href="https://wa.me/916201902313" className="hire-btn"><FaWhatsapp /> WhatsApp Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
