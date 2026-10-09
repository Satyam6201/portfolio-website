import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaCode
} from "react-icons/fa";
import "../styles/experience.css";

const experiences = [
  {
    id: "cit",
    role: "Full Stack Developer — Intern",
    company: "Code Innovative Technologies",
    location: "Remote",
    date: "Feb 2026 – Aug 2026",
    badge: "Recent Internship",
    isLatest: true,
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "JWT & RBAC",
      "Docker",
      "GitHub Actions (CI/CD)"
    ],
    highlights: [
      "Engineered production-facing modules using Next.js, React.js, Node.js, and MongoDB, driving scalable core business features.",
      "Architected 15+ secure RESTful APIs with JWT authentication and RBAC, ensuring strict data isolation and zero unauthorized access.",
      "Automated CI/CD pipelines via GitHub Actions and Docker, cutting deployment cycle times by 40% with zero-downtime releases."
    ],
  },
  {
    id: "software-beatz",
    role: "Software Development Intern",
    company: "Software Beatz",
    location: "Remote",
    date: "Oct 2025 – Feb 2026",
    badge: "Production Delivered",
    isLatest: false,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MVC Architecture",
      "Compound Indexing",
      "Jest",
      "Postman"
    ],
    highlights: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, following modular MVC design patterns.",
      "Optimized high-traffic MongoDB queries using compound indexing and aggregation pipelines, slashing API latency by 35%.",
      "Authored Jest unit tests and automated Postman test suites, achieving 85%+ test coverage and preventing critical production regressions."
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-header-wrap">
        <span className="shimmer-badge">
          <FaBriefcase /> Work History & Industry Engineering
        </span>
        <h2>Professional Experience</h2>
        <p className="experience-subtext">
          Production software engineering internships building full-stack modules, secure REST APIs with RBAC, automated CI/CD pipelines, and high-performance databases.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className={`experience-item glow-card-hover ${exp.isLatest ? "latest-item" : ""}`}
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="timeline-node">
              <span className="node-dot" />
              <span className="node-pulse" />
            </div>

            <div className="exp-card-header">
              <div className="exp-role-info">
                <div className="exp-title-row">
                  <h3>{exp.role}</h3>
                  <span className={`exp-badge-pill ${exp.isLatest ? "latest" : ""}`}>
                    {exp.isLatest && <FaStar className="star-icon" />}
                    {exp.badge}
                  </span>
                </div>
                <h4 className="exp-company">{exp.company}</h4>
              </div>

              <div className="exp-meta-pills">
                <span className="meta-pill">
                  <FaCalendarAlt /> {exp.date}
                </span>
                <span className="meta-pill">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>
            </div>

            <div className="experience-body">
              <ul>
                {exp.highlights.map((point, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-bullet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-tech-strip">
              <span className="tech-strip-title">Technologies Used:</span>
              <div className="tech-chips">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;