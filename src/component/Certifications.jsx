import React, { useState } from "react";
import "../styles/certifications.css";
import { FaDownload, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import certificateImg from "/public/assets/Certificate-WebD.png";
import certificateImgDSA from "/public/assets/DSA-certificate.png";

function Certifications() {
  const [preview, setPreview] = useState(null);

  const handlePreview = (img) => setPreview(img);
  const closePreview = () => setPreview(null);

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      date: "April 2024",
      type: "Web Development",
      image: certificateImg,
      downloadName: "WebDev_Certificate.jpg",
      link: "#", // replace with real verification link if any
    },
    {
      title: "Java-Based DSA Proficiency Program",
      issuer: "Apna College",
      date: "January 2025",
      type: "Data Structures & Algorithms",
      image: certificateImgDSA,
      downloadName: "DSA_Certificate.jpg",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>🎓 Certifications</h2>
      <p className="cert-description">
        Here are my verified certifications showcasing skills in Full Stack Development and Data Structures & Algorithms using Java.
      </p>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <span className="tag">{cert.type}</span>
            <div className="cert-actions">
              <a href={cert.image} download={cert.downloadName} className="download-btn" title="Download Certificate">
                <FaDownload className="download-icon" /> Download
              </a>
              <button className="view-btn" onClick={() => handlePreview(cert.image)} title="Preview">
                <FaEye /> View
              </button>
              {cert.link !== "#" && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-btn" title="Verify">
                  <FaExternalLinkAlt /> Verify
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="cert-preview-overlay" onClick={closePreview}>
          <div className="cert-preview-modal">
            <img src={preview} alt="Certificate Preview" />
            <button onClick={closePreview} className="close-preview">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
