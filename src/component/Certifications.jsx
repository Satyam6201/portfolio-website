import React, { useState } from "react";
import "../styles/certifications.css";
import { FaDownload, FaEye, FaExternalLinkAlt, FaBriefcase, FaCertificate } from "react-icons/fa";
import certificateImg from "/public/assets/Certificate-WebD.png";
import certificateImgDSA from "/public/assets/DSA-certificate.png";
import certificateImgCodeInnovative from "/public/assets/Certificate-CodeInnovative.png";
import certificateImgSoftwareBeatz from "/public/assets/Certificate-SoftwareBeatz.png";

function Certifications() {
  const [preview, setPreview] = useState(null);

  const handlePreview = (img) => setPreview(img);
  const closePreview = () => setPreview(null);

  const certificates = [
    {
      title: "Full Stack Development Internship",
      issuer: "Code Innovative Technologies",
      date: "Feb 2026 – May 2026",
      type: "Internship",
      category: "internship",
      image: certificateImgCodeInnovative,
      downloadName: "CodeInnovative_Internship_Certificate.jpg",
      link: "#",
    },
    {
      title: "Software Development Internship",
      issuer: "Software Beatz",
      date: "Oct 2025 – Feb 2026",
      type: "Internship",
      category: "internship",
      image: certificateImgSoftwareBeatz,
      downloadName: "SoftwareBeatz_Internship_Certificate.jpg",
      link: "#",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      date: "April 2024",
      type: "Web Development",
      category: "certification",
      image: certificateImg,
      downloadName: "WebDev_Certificate.jpg",
      link: "#",
    },
    {
      title: "Java-Based DSA Proficiency Program",
      issuer: "Apna College",
      date: "January 2025",
      type: "Data Structures & Algorithms",
      category: "certification",
      image: certificateImgDSA,
      downloadName: "DSA_Certificate.jpg",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>🎓 Certifications & Internships</h2>
      <p className="cert-description">
        Verified certifications and internship experience letters showcasing hands-on
        Full Stack Development work and strong Data Structures & Algorithms fundamentals in Java.
      </p>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`certificate-card ${cert.category}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-badge">
              {cert.category === "internship" ? <FaBriefcase /> : <FaCertificate />}
            </div>

            <div className="img-wrapper">
              <img src={cert.image} alt={cert.title} className="certificate-img" />
              <div className="img-shine"></div>
            </div>

            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <span className={`tag ${cert.category}`}>{cert.type}</span>

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
          <div className="cert-preview-modal" onClick={(e) => e.stopPropagation()}>
            <img src={preview} alt="Certificate Preview" />
            <button onClick={closePreview} className="close-preview">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;