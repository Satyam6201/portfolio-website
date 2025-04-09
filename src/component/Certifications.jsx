import React from "react";
import "../styles/certifications.css";
import { FaDownload } from "react-icons/fa";
import certificateImg from "/public/assets/Certificate-WebD.png"; 
import certificateImgDSA from "/public/assets/DSA-certificate.png";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>🎓 Certifications</h2>
      <p className="cert-description">
        Here are some certifications that highlight my expertise in web development and DSA.
      </p>

      <div className="certificates-container">
        <div className="certificate-card">
          <img src={certificateImg} alt="Apna College Certificate" className="certificate-img" />
          <h3>Full Stack Web Development</h3>
          <p>Issued by <strong>Apna College</strong></p>
          <a href={certificateImg} download="Apna_College_Certificate.jpg" className="download-btn">
            <FaDownload className="download-icon" /> Download
          </a>
        </div>
        <div className="certificate-card">
          <img src={certificateImgDSA} alt="Apna College Certificate" className="certificate-img" />
          <h3>Java-Based DSA Proficiency Program</h3>
          <p>Issued by <strong>Apna College</strong></p>
          <a href={certificateImgDSA} download="Apna_College_Certificate.jpg" className="download-btn">
            <FaDownload className="download-icon" /> Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
