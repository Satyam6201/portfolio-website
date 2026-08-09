import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaDownload, FaEye } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content fade-in">
        <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" className="profile-img-large" />

        <h2>
          Hi, I'm <span className="highlight">Satyam Kumar Mishra</span>
        </h2>

        <h3 className="typewriter">
          <Typewriter
            words={[
              'Full-Stack MERN Developer',
              'React.js & Next.js Engineer',
              'Generative AI Integrator',
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
          I’m a <strong>dedicated Full-Stack Engineer</strong> specializing in building
          scalable SaaS platforms, secure authentication systems, and production-ready applications
          with <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.
        </p>

        <p>
          With 1000+ DSA problems solved in Java and real-world internship experience, I focus on building performant backend APIs, intuitive user interfaces, and seamless digital experiences.
        </p>

        <div className="cta-section">
          <h4>🚀 Let's Collaborate</h4>
          <p>
            Open for internships, freelance projects, and full-time roles where I can deliver real value and grow with a high-performing team.
          </p>
          <a href="#projects" className="home-btn">See My Work</a>
        </div>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="tel:+916201902313" className="contact-item">
            <FaPhoneAlt /> +91 6201902313
          </a>
          <a href="mailto:satyamkmishraa@gmail.com" className="contact-item">
            <FaEnvelope /> satyamkmishraa@gmail.com
          </a>
        </div>

        {/* Resume Section */}
        <div className="resume-buttons">
          <a
            href="/assets/Resume.pdf"
            download="Satyam_Kumar_Mishra_Resume.pdf"
            className="resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <FaEye /> View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/satyam-kumar-mishra-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Satyam6201"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;