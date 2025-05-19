import React from "react";
import "../styles/goal.css";
import { FaRocket, FaBriefcase, FaLightbulb, FaCubes } from "react-icons/fa";

function Goal() {
  return (
    <section id="goal" className="goal-section">
      <h2>🚀 My Career Goals</h2>
      <p className="goal-subtext">
        I aspire to become a top-tier developer who builds user-centric, scalable, and impactful digital solutions.
      </p>

      <div className="goal-container">
        <div className="goal-card">
          <FaRocket className="goal-icon" />
          <h3>Internships & Projects</h3>
          <p>
            I'm eager to contribute to real-world projects through internships in <strong>Frontend Development</strong>,
            utilizing <strong>React.js</strong>, <strong>JavaScript</strong>, and building delightful <strong>UI/UX</strong>.
          </p>
        </div>

        <div className="goal-card">
          <FaBriefcase className="goal-icon" />
          <h3>Kickstart My Career</h3>
          <p>
            Looking for a <strong>Full-Stack Developer</strong> role where I can work with the <strong>MERN Stack</strong>,
            solve real problems, and contribute to innovative teams.
          </p>
        </div>

        <div className="goal-card">
          <FaLightbulb className="goal-icon" />
          <h3>Lifelong Learning</h3>
          <p>
            I continuously sharpen my understanding of <strong>DSA</strong>, <strong>System Design</strong>, and
            explore modern technologies like <strong>Next.js</strong> and <strong>AI APIs</strong>.
          </p>
        </div>

        <div className="goal-card">
          <FaCubes className="goal-icon" />
          <h3>Build Scalable Products</h3>
          <p>
            My long-term goal is to architect scalable, performant web apps that serve real-world users and bring measurable impact.
          </p>
        </div>
      </div>

      <a href="mailto:satyamkmishraa@gmail.com" className="hire-me-btn">
        💼 Hire Me
      </a>
    </section>
  );
}

export default Goal;
