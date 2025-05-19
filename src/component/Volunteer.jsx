import React from "react";
import "../styles/volunteer.css";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaCode,
  FaLaptopCode,
  FaHandsHelping,
  FaCalendarAlt,
  FaRegLightbulb,
  FaGlobe
} from "react-icons/fa";

function Volunteer() {
  return (
    <section id="volunteer" className="volunteer">
      <h2>💙 Volunteer & Community Work</h2>
      <p>I’m passionate about empowering others through technology, education, innovation, and collaboration.</p>

      <div className="volunteer-grid">
        <div className="volunteer-card">
          <FaChalkboardTeacher className="volunteer-icon" />
          <h3>Workshop Lead</h3>
          <span className="volunteer-subtitle">Python, C++, Web Development | College</span>
          <span className="volunteer-date"><FaCalendarAlt /> Apr '23 - Jun '23</span>
          <p>Conducted workshops for 400+ students with hands-on sessions, project building, and live mentorship.</p>
        </div>

        <div className="volunteer-card">
          <FaLaptopCode className="volunteer-icon" />
          <h3>Event Organizer</h3>
          <span className="volunteer-subtitle">Hackathons & Technical Events | College</span>
          <span className="volunteer-date"><FaCalendarAlt /> Feb '24</span>
          <p>Planned and organized tech fests and hackathons promoting creativity, collaboration, and coding skills.</p>
        </div>

        <div className="volunteer-card">
          <FaUsers className="volunteer-icon" />
          <h3>T&P Dept. Member</h3>
          <span className="volunteer-subtitle">College Training & Placement Cell</span>
          <span className="volunteer-date"><FaCalendarAlt /> Aug '23 - Present</span>
          <p>Assisted in recruitment drives, coordinated with recruiters, and helped students prepare for placements.</p>
        </div>

        <div className="volunteer-card">
          <FaCode className="volunteer-icon" />
          <h3>Open Source Contributor</h3>
          <span className="volunteer-subtitle">GitHub | Public Repositories</span>
          <span className="volunteer-date"><FaCalendarAlt /> Ongoing</span>
          <p>Contributed to open-source projects, fixed bugs, reviewed PRs, and collaborated with developers globally.</p>
        </div>

        <div className="volunteer-card">
          <FaGlobe className="volunteer-icon" />
          <h3>Global Coding Community</h3>
          <p>Participated in global coding forums, sharing insights and resolving queries for learners worldwide.</p>
        </div>

        <div className="volunteer-card">
          <FaHandsHelping className="volunteer-icon" />
          <h3>Peer Support</h3>
          <p>Guided juniors with personalized advice on resumes, portfolios, projects, and career paths.</p>
        </div>

        <div className="volunteer-card">
          <FaRegLightbulb className="volunteer-icon" />
          <h3>Idea Incubator</h3>
          <p>Encouraged innovation by mentoring students in ideation and MVP building during college competitions.</p>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
