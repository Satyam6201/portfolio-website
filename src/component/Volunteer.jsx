import React from "react";
import "../styles/volunteer.css";
import { FaUsers, FaChalkboardTeacher, FaCode, FaLaptopCode, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";

function Volunteer() {
  return (
    <section id="volunteer" className="volunteer">
      <h2>💙 Volunteer & Community Work</h2>
      <p>I’m passionate about empowering others through technology, education, and collaboration.</p>

      <div className="volunteer-grid">
        <div className="volunteer-card">
          <FaChalkboardTeacher className="volunteer-icon" />
          <h3>Workshop Lead</h3>
          <span className="volunteer-subtitle">Python, C++, Web Development | College</span>
          <span className="volunteer-date"><FaCalendarAlt /> Apr '23 - Jun '23</span>
          <p>Conducted workshops for 400+ students with hands-on coding sessions and real-world project building.</p>
        </div>

        <div className="volunteer-card">
          <FaLaptopCode className="volunteer-icon" />
          <h3>Event Organizer</h3>
          <span className="volunteer-subtitle">Technical Events | College</span>
          <span className="volunteer-date"><FaCalendarAlt /> Feb '24</span>
          <p>Spearheaded and managed technical events, creating opportunities for students to showcase their skills and foster innovation.</p>
        </div>

        <div className="volunteer-card">
          <FaUsers className="volunteer-icon" />
          <h3>T&P Department Member</h3>
          <span className="volunteer-subtitle">College</span>
          <span className="volunteer-date"><FaCalendarAlt /> Aug '23 - Present</span>
          <p>Coordinated placement activities and connected students with recruiters for internship and job opportunities.</p>
        </div>

        <div className="volunteer-card">
          <FaCode className="volunteer-icon" />
          <h3>Coding Communities</h3>
          <p>Actively engaged in programming groups, assisting peers with coding doubts and projects.</p>
        </div>

        <div className="volunteer-card">
          <FaHandsHelping className="volunteer-icon" />
          <h3>Peer Support</h3>
          <p>Provided guidance to juniors with personalized career advice, project feedback, and portfolio improvement tips.</p>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
