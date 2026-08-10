import React from "react";
import "../styles/education.css";
import { 
  FaGraduationCap, 
  FaSchool, 
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
      status: "Completed",
      statusType: "completed",
      title: "B.Tech | Computer Science & Engineering",
      period: "2022 - 2026",
      institution: "Radharaman Institute of Technology and Science, Bhopal",
      score: "CGPA: 8.17",
      scoreDetail: "College Topper (Rank #1 in Semesters 1 - 3)",
      description: "Successfully completed Degree with hands-on expertise in Full-Stack Web Development (MERN/Next.js), Data Structures & Algorithms (1000+ DSA Solved), Systems Architecture, and Generative AI Integration.",
      skills: ["MERN Stack", "Next.js", "Java & DSA", "System Design", "Generative AI", "PostgreSQL"],
      progress: 100,
      icon: <FaUniversity />,
      isHighlight: true
    },
    {
      id: "xii",
      status: "Passed",
      statusType: "passed",
      title: "Class XII (BSEB) - Senior Secondary",
      period: "2020 - 2022",
      institution: "S.N.S.D.N.G Watson +2 School, Madhubani, Bihar",
      score: "Percentage: 71.4%",
      scoreDetail: "State Board Merit Holder",
      description: "Focused on Physics, Chemistry, Mathematics (PCM) and foundational Computer Science concepts.",
      skills: ["Physics", "Chemistry", "Mathematics", "Computer Fundamentals"],
      progress: 100,
      icon: <FaSchool />,
      isHighlight: false
    },
    {
      id: "x",
      status: "Passed",
      statusType: "passed",
      title: "Class X (BSEB) - Secondary Education",
      period: "2019 - 2020",
      institution: "B.S.H/S, Barhgoriya, Nahar, Madhubani, Bihar",
      score: "Percentage: 68.6%",
      scoreDetail: "First Division",
      description: "Completed secondary education with distinction and strong performance in Mathematics and Science.",
      skills: ["Mathematics", "General Science", "Social Studies"],
      progress: 100,
      icon: <FaSchool />,
      isHighlight: false
    }
  ];

  return (
    <section id="education" className="education">
      <div className="edu-header">
        <h2>
          <FaGraduationCap className="edu-header-icon" /> Education & Academic Journey
        </h2>
        <p className="edu-subtitle">
          My academic qualifications, accomplishments, and engineering specialization
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