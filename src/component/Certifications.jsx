import React from "react";
import "../styles/certifications.css";
import certificateImg from "/public/Certificate.png"; // Add your certificate image here

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>🎓 Certifications</h2>
      <div className="certificates-container">
        <div className="certificate-card">
          <img src={certificateImg} alt="Apna College Certificate" className="certificate-img" />
          <h3>Full Stack Web Development</h3>
          <p>Completed from <strong>Apna College</strong></p>
          <a href={certificateImg} download="Apna_College_Certificate.jpg" className="download-btn">
            Download Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
