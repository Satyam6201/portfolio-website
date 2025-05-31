import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload, FaEye } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content fade-in">
        <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" className="profile-img" />

        <h2>
          Hi, I'm <span className="highlight">Satyam Kumar Mishra</span>
        </h2>

        <h3 className="typewriter">
          <Typewriter
            words={[
              'Full-Stack Web Developer',
              'React.js Enthusiast',
              'Tech Community Contributor',
              'Creative Problem Solver'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1300}
          />
        </h3>

        <p>
          I’m a <strong>dedicated full-stack developer</strong> with a passion for building
          impactful digital solutions. With a strong command over <strong>React.js</strong>,
          <strong> JavaScript</strong>, and <strong>modern backend technologies</strong>, I
          strive to deliver clean, scalable, and user-focused applications.
        </p>

        <p>
          I enjoy solving real-world challenges through code, optimizing performance,
          and crafting engaging UIs. Currently, I'm exploring advanced frontend
          architectures and cloud-based backend solutions.
        </p>

        <div className="cta-section">
          <h4>🚀 Let's Collaborate</h4>
          <p>
            I'm open to internships, freelance projects, or full-time roles where I can
            bring ideas to life and grow alongside a talented team.
          </p>
          <a href="#projects" className="home-btn">See My Work</a>
        </div>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="tel:+916201902313" className="contact-item">
            <FaPhoneAlt /> +91 6201902313
          </a>
          <a href="mailto:satyam@example.com" className="contact-item">
            <FaEnvelope /> satyamkmishraa@gmail.com
          </a>
        </div>

        {/* Resume Section */}
        <div className="resume-buttons">
  <a
    href="/assets/Resume.pdf"
    download
    className="resume-btn"
  >
    📥 Download Resume
  </a>
  <a
    href="/assets/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    👁️ View Resume
  </a>
</div>


        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Satyam6201"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
