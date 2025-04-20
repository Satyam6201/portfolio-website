import React from "react";
import "../styles/goal.css";
import { FaRocket, FaBriefcase, FaLightbulb } from "react-icons/fa";

function Goal() {
  return (
    <section id="goal" className="goal-section">
      <h2>🚀 My Career Goals</h2>
      <p className="goal-subtext">
        Striving to grow as a professional in web development while constantly learning, building, and innovating.
      </p>

      <div className="goal-container">
        <div className="goal-card">
          <FaRocket className="goal-icon" />
          <h3>Internships & Real-World Projects</h3>
          <p>
            I'm eager to contribute to real-world projects through internships in <strong>Frontend Development</strong>,
            utilizing <strong>React.js</strong>, <strong>JavaScript</strong>, and crafting engaging <strong>UI/UX</strong>.
          </p>
        </div>

        <div className="goal-card">
          <FaBriefcase className="goal-icon" />
          <h3>Kickstart My Career</h3>
          <p>
            Seeking a role as a <strong>Full-Stack Developer</strong> where I can work with the <strong>MERN Stack</strong>,
            build impactful applications, and collaborate in a dynamic environment.
          </p>
        </div>

        <div className="goal-card">
          <FaLightbulb className="goal-icon" />
          <h3>Lifelong Learning</h3>
          <p>
            I aim to continuously improve my understanding of <strong>Data Structures & Algorithms</strong>, 
            <strong>System Design</strong>, and explore <strong>modern web technologies</strong> to stay ahead in tech.
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
