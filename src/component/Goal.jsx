import React from "react";
import "../styles/goal.css";
import { FaRocket, FaBriefcase, FaLightbulb } from "react-icons/fa"; // Icons

function Goal() {
  return (
    <section id="goal" className="goal-section">
      <h2>🎯 Career Objective</h2>
      <div className="goal-container">
        <div className="goal-card">
          <FaRocket className="goal-icon" />
          <h3>Internship & Learning</h3>
          <p>
            I am eager to gain hands-on experience in **Frontend Development** with a focus on **React.js**,
            **JavaScript**, and **UI/UX design**.
          </p>
        </div>

        <div className="goal-card">
          <FaBriefcase className="goal-icon" />
          <h3>Job Opportunities</h3>
          <p>
            Seeking an entry-level **Full-Stack Web Developer** role where I can apply my knowledge of **MERN Stack**,
            contribute to projects, and grow professionally.
          </p>
        </div>

        <div className="goal-card">
          <FaLightbulb className="goal-icon" />
          <h3>Continuous Learning</h3>
          <p>
            Passionate about learning **Data Structures & Algorithms (DSA)**, **System Design**, and exploring
            **cutting-edge web technologies**.
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
