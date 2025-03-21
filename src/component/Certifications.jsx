import React from "react";
import "../styles/certifications.css";
import { FaDownload } from "react-icons/fa";
import certificateImg from "/public/assets/Certificate.png"; 

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>🎓 Certifications</h2>
      <p className="cert-description">
        Here are some certifications that highlight my expertise in web development.
      </p>

      <div className="certificates-container">
        {/* Single Certificate Card */}
        <div className="certificate-card">
          <img src={certificateImg} alt="Apna College Certificate" className="certificate-img" />
          <h3>Full Stack Web Development</h3>
          <p>Issued by <strong>Apna College</strong></p>
          <a href={certificateImg} download="Apna_College_Certificate.jpg" className="download-btn">
            <FaDownload className="download-icon" /> Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
