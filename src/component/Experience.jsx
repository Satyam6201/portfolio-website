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
    role: "Full Stack Development Intern",
    company: "Code Innovative Technologies",
    location: "Remote",
    date: "Feb 2026 – Aug 2026",
    badge: "Recent Internship",
    isLatest: true,
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Git / Agile",
    ],
    highlights: [
      "Architected and deployed 4+ full-stack production modules utilizing React.js, Next.js, Node.js, Express, and PostgreSQL, improving data fetch speeds by 34%.",
      "Engineered 12+ RESTful API endpoints with strict schema validation and error-handling middleware, achieving 99.8% test coverage in CI pipelines.",
      "Developed reusable, accessible UI component libraries shared across client deliverables, slashing frontend iteration cycle times by 28%.",
      "Collaborated within cross-functional Agile engineering teams, conducting bi-weekly sprint reviews, Git PR code audits, and merge conflict resolutions.",
      "Structured database indexing schemas in PostgreSQL and MongoDB, reducing average query execution latency from 240ms to under 75ms.",
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
      "JWT Auth",
      "Postman",
      "REST APIs",
    ],
    highlights: [
      "Engineered core MERN stack backend services for multi-tenant user authentication, profile management, and CRUD transactions.",
      "Implemented zero-trust JWT authentication with refresh token rotation and protected route middleware, mitigating XSS and session hijacking risks.",
      "Optimized complex MongoDB aggregation pipelines and indexing strategies, decreasing server memory overhead by 22%.",
      "Authored automated and regression API test suites with Postman, validating 45+ endpoint contracts, edge cases, and status payload payloads.",
      "Integrated frontend state synchronization with backend data layers, ensuring sub-second response times across high-traffic dashboard views.",
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
          Hands-on software engineering internships building production web architectures, secure REST APIs, and high-performance databases.
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