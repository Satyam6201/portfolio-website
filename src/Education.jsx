import React from "react";
import "../src/styles/education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="edu-item">
        <h3>B-Tech | Computer Science & Engineering</h3>
        <p>Radharaman Institute of Technology and Science, Bhopal</p>
        <p>CGPA: 7.93</p>
      </div>
      <div className="edu-item">
        <h3>XII (BSEB)</h3>
        <p>S.N.S.D.N.G Watson +2 School, Madhubani</p>
        <p>Percentage: 71.4% (2022)</p>
      </div>
      <div className="edu-item">
        <h3>X (BSEB)</h3>
        <p>Percentage: 68.6%</p>
      </div>
    </section>
  );
}

export default Education;