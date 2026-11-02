import React from "react";
import "../styles/education.css";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCheckCircle, 
  FaTrophy, 
  FaStar,
  FaAward
} from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: "btech",
      status: "Graduated",
      statusType: "completed",
      title: "B.Tech in Computer Science & Engineering",
      period: "2022 - 2026",
      institution: "Radharaman Institute of Technology and Science, Bhopal",
      score: "CGPA: 8.17 / 10.0",
      scoreDetail: "University Rank #1 College Topper (Semesters 1 - 3)",
      description: "Rigorous four-year computer science curriculum focused on high-throughput distributed systems, software engineering methodologies, data structures & algorithms (1,064+ solved), and modern web architectures.",
      skills: ["Distributed Systems", "Data Structures & Algorithms", "System Design", "Relational Databases", "Computer Networks", "Operating Systems"],
      progress: 100,
      icon: <FaUniversity />,
      isHighlight: true
    },
    {
      id: "curriculum",
      status: "Honors",
      statusType: "completed",
      title: "Core Computer Science & Systems Specialization",
      period: "2022 - 2026",
      institution: "Department of Computer Science & Engineering",
      score: "Grade 'A' Distinction",
      scoreDetail: "Training & Placement Cell Coordinator · 400+ Mentored",
      description: "In-depth coursework and applied labs across Concurrency & Multithreading, Database Management Systems (ACID, Indexing, B+ Trees), Computer Networks (TCP/IP, WebSockets), and Object-Oriented Software Design.",
      skills: ["Multithreading & Concurrency", "ACID Transactions & SQL", "Socket Programming", "OOP Design Patterns", "REST & GraphQL Architectures"],
      progress: 100,
      icon: <FaGraduationCap />,
      isHighlight: false
    }
  ];

  return (
    <section id="education" className="education">
      <div className="edu-header">
        <span className="shimmer-badge">
          <FaGraduationCap /> Academic Pedigree
        </span>
        <h2>Education & Academic Journey</h2>
        <p className="edu-subtitle">
          Academic qualifications, distinction milestones, and computer science engineering specialization.
        </p>
      </div>

      <div className="edu-timeline">
        {educationData.map((item) => (
          <div 
            key={item.id} 
            className={`edu-card ${item.isHighlight ? "highlight-card" : ""}`}
          >
            <div className="edu-icon-wrapper">
              <div className="edu-icon">
                {item.icon}
              </div>
            </div>

            <div className="edu-content">
              <div className="edu-card-header">
                <div>
                  <h3 className="edu-title">{item.title}</h3>
                  <span className="edu-period">{item.period}</span>
                </div>
                <span className={`status-badge ${item.statusType}`}>
                  {item.statusType === "completed" && <FaCheckCircle className="badge-icon" />}
                  {item.status}
                </span>
              </div>

              <div className="edu-institution">
                <FaUniversity className="institution-icon" />
                <span>{item.institution}</span>
              </div>

              <div className="edu-metrics">
                <span className="metric-score">{item.score}</span>
                {item.scoreDetail && (
                  <span className="metric-detail">
                    <FaTrophy className="trophy-icon" /> {item.scoreDetail}
                  </span>
                )}
              </div>

              <p className="edu-description">{item.description}</p>

              {item.skills && (
                <div className="edu-tags">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="edu-tag">{skill}</span>
                  ))}
                </div>
              )}

              <div className="progress-container">
                <div className="progress-label">
                  <span>Completion Status</span>
                  <span>{item.progress}% Completed</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress ${item.statusType === "completed" ? "completed-progress" : ""}`} 
                    style={{ width: `${item.progress}%` }}
                  >
                    <span className="progress-shimmer"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;