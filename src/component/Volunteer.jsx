import React from "react";
import "../styles/volunteer.css";
import { FaUsers, FaChalkboardTeacher, FaCode } from "react-icons/fa"; 

function Volunteer() {
  return (
    <section id="volunteer" className="volunteer">
      <h2>💙 Volunteer & Community Work</h2>
      <p>I love sharing knowledge and helping others grow in Web Development & Data Structures.</p>

      <div className="volunteer-grid">
        <div className="volunteer-card">
          <FaUsers className="volunteer-icon" />
          <h3>Guiding Students</h3>
          <p>Mentored many students in Web Development & Data Structures, helping them build projects.</p>
        </div>

        <div className="volunteer-card">
          <FaChalkboardTeacher className="volunteer-icon" />
          <h3>Workshops & Sessions</h3>
          <p>Conducted coding sessions to teach **React.js, JavaScript, and problem-solving**.</p>
        </div>

        <div className="volunteer-card">
          <FaCode className="volunteer-icon" />
          <h3>Coding Communities</h3>
          <p>Actively engaged in programming groups, assisting peers with coding doubts and projects.</p>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
