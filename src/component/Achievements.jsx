import React from "react";
import "../styles/achievements.css";
import { FaTrophy, FaProjectDiagram, FaCode, FaLaptopCode, FaUsers, FaMedal } from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2>🏆 Achievements & Milestones</h2>
      <p className="subtitle">A glimpse into my journey of growth and excellence 🚀</p>
      
      <div className="achievements-list">

        <div className="achievement-card">
          <FaTrophy className="icon" />
          <p>Ranked <strong>1st</strong> in University Exams (1st, 2nd & 3rd Semesters).</p>
        </div>

        <div className="achievement-card">
          <FaMedal className="icon" />
          <p>Secured <strong>3rd Rank</strong> in 4th & 5th Semester for consistent academic performance.</p>
        </div>

        <div className="achievement-card">
          <FaProjectDiagram className="icon" />
          <p>Built <strong>10+ real-world projects</strong> showcasing creativity and full-stack proficiency.</p>
        </div>

        <div className="achievement-card">
          <FaCode className="icon" />
          <p>Hands-on experience in <strong>MERN Stack</strong> development and scalable app architecture.</p>
        </div>

        <div className="achievement-card">
          <FaLaptopCode className="icon" />
          <p>Conducted <strong>coding workshops</strong> & mentored juniors in Web Dev & DSA.</p>
        </div>

        <div className="achievement-card">
          <FaUsers className="icon" />
          <p>Led multiple <strong>tech events & community sessions</strong> in college clubs and T&P Cell.</p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
