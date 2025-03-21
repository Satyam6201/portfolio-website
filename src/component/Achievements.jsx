import React from "react";
import "../styles/achievements.css";
import { FaTrophy, FaProjectDiagram, FaCode } from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2>🏆 Achievements & Milestones</h2>
      <div className="achievements-list">
        <div className="achievement-card">
          <FaTrophy className="icon" />
          <p>Ranked <strong>1st</strong> in University Exams (1st, 2nd & 3rd Semester).</p>
        </div>
        <div className="achievement-card">
          <FaTrophy className="icon" />
          <p>Secured <strong>3rd rank</strong> in 4th & 5th Semester, showcasing strong technical skills.</p>
        </div>
        <div className="achievement-card">
          <FaProjectDiagram className="icon" />
          <p>Developed multiple <strong>web projects</strong>, demonstrating expertise in modern web technologies.</p>
        </div>
        <div className="achievement-card">
          <FaCode className="icon" />
          <p>Proficient in <strong>React.js, JavaScript, and MERN stack</strong> development.</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
