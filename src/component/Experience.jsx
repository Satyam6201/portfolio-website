import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCode,
  FaExternalLinkAlt,
  FaStar,
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
      "Engineered scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Designed and implemented RESTful APIs for real-world business applications with clean architecture and strict schema validation.",
      "Built responsive, accessible, reusable UI components shared across production-oriented client deliverables.",
      "Collaborated across cross-functional engineering teams using Git PR workflows, code reviews, and Agile bi-weekly sprint planning.",
      "Ensured seamless data synchronization between PostgreSQL database layers and frontend state management.",
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
      "Built and maintained full-stack modules using React.js, Node.js, Express.js, and MongoDB (MERN stack).",
      "Designed secure RESTful APIs for authentication, profile management, and multi-tenant CRUD operations.",
      "Implemented JWT-based authentication and protected API middleware, ensuring zero-trust access control.",
      "Optimized MongoDB aggregation queries and indexed collections, reducing backend response latency.",
      "Conducted automated and manual API testing with Postman, validating edge cases and error response payloads.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-header-wrap">
        <span className="shimmer-badge">
          <FaBriefcase /> Work History & Industry Experience
        </span>
        <h2>Professional Experience</h2>
        <p className="experience-subtext">
          Hands-on full-stack engineering internships building production web applications, secure REST APIs, and scalable databases.
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
            {/* Timeline Node Glow */}
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

            {/* Highlights List */}
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

            {/* Tech Stack Chips */}
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