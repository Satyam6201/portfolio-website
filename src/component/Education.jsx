import React from "react";
import "../styles/education.css";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education">
      <h2><FaGraduationCap /> Education</h2>
      
      <ul className="edu-timeline">
        {/* B-Tech */}
        <li>
          <div className="edu-icon"><FaUniversity /></div>
          <div className="edu-content">
            <h3>B-Tech | Computer Science & Engineering (2022 - 2026)</h3>
            <p>🎓 Radharaman Institute of Technology and Science, Bhopal</p>
            <p>📊 CGPA: <strong>7.96</strong></p>
            <div className="progress-bar"><div className="progress" style={{ width: "80%" }}></div></div>
          </div>
        </li>

        {/* 12th */}
        <li>
          <div className="edu-icon"><FaSchool /></div>
          <div className="edu-content">
            <h3>XII (BSEB) | 2022</h3>
            <p>🏫 S.N.S.D.N.G Watson +2 School, Madhubani, Bihar</p>
            <p>📊 Percentage: <strong>71.4%</strong></p>
            <div className="progress-bar"><div className="progress" style={{ width: "71%" }}></div></div>
          </div>
        </li>

        {/* 10th */}
        <li>
          <div className="edu-icon"><FaSchool /></div>
          <div className="edu-content">
            <h3>X (BSEB) | 2020</h3>
            <p>🏫 B.S.H/S, Barhgoriya, Nahar, Madhubani, Bihar</p>
            <p>📊 Percentage: <strong>68.6%</strong></p>
            <div className="progress-bar"><div className="progress" style={{ width: "68%" }}></div></div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Education;
