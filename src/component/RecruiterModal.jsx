import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaFileDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaBolt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/recruitermodal.css";

const CANDIDATE_PROFILE = {
  name: "Satyam Kumar Mishra",
  title: "Full-Stack Engineer & Generative AI Systems Builder",
  noticePeriod: "Immediate Joining (0 Days Notice)",
  location: "Delhi, India (Open to Remote, Hybrid, & Relocation)",
  cgpa: "8.17 / 10.0 (University Rank #1 College Topper)",
  dsaMetric: "1000+ Algorithmic Problems Solved (Java)",
  email: "satyamkmishraa@gmail.com",
  phone: "+91 6201902313",
  whatsappUrl: "https://wa.me/916201902313?text=Hi%20Satyam,%20we%20reviewed%20your%20executive%20profile%20and%20would%20like%20to%20discuss%20an%20engineering%20role.",
  resumeUrl: "/assets/Resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/satyam-kumar-mishra-dev",
  githubUrl: "https://github.com/Satyam6201",
  leetcodeUrl: "https://leetcode.com/u/SatyamMIshra62"
};

const FLAGSHIP_SYSTEMS = [
  {
    name: "MockMate AI",
    badge: "RAG & LLM System",
    metrics: "Sub-80ms FAISS similarity search, PDF parsing, real-time AI scoring",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas", "FAISS Vector", "OpenAI API", "Stripe"],
    liveUrl: "https://mock-mate-ai-flame.vercel.app",
    repoUrl: "https://github.com/Satyam6201/MockMate-AI"
  },
  {
    name: "DentAIva",
    badge: "Healthcare SaaS & Voice AI",
    metrics: "Automated voice agent triage, Clerk RBAC auth, PostgreSQL migrations",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Clerk Auth", "Vapi AI"],
    liveUrl: "https://dentwise-henna.vercel.app",
    repoUrl: "https://github.com/Satyam6201/DentAIva"
  },
  {
    name: "Medi-Connect",
    badge: "Enterprise Healthcare Portal",
    metrics: "Multi-role RBAC (Patient/Doctor/Admin), Stripe & Razorpay workflows",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Stripe API"],
    liveUrl: "https://prescripto.vercel.app",
    repoUrl: "https://github.com/Satyam6201/Medi-Connect"
  }
];

const CORE_MATRIX = [
  { group: "Backend & Systems", items: ["Node.js", "Express.js", "REST Architecture", "Redis Caching", "Kafka", "Microservices"] },
  { group: "Frontend Architecture", items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"] },
  { group: "AI & Vector Search", items: ["OpenAI API", "RAG Pipelines", "FAISS Vector Store", "Embeddings", "Prompt Engineering"] },
  { group: "Databases & Security", items: ["PostgreSQL", "MongoDB Atlas", "Prisma ORM", "JWT Token Rotation", "RBAC", "Stripe API"] }
];

export default function RecruiterModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `Candidate: Satyam Kumar Mishra\nRole: Full-Stack Engineer & AI Builder\nAvailability: Immediate (0 Days Notice)\nStats: 1000+ LeetCode (Java), 8.17 CGPA (University Rank #1)\nCore Stack: Next.js, React, Node.js, Express, PostgreSQL, MongoDB, FAISS RAG, OpenAI API\nContact: ${CANDIDATE_PROFILE.email} | ${CANDIDATE_PROFILE.phone}\nResume: https://satyam-mishra.vercel.app/assets/Resume.pdf\nPortfolio: https://satyam-mishra.vercel.app/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="recruiter-overlay" onClick={onClose}>
      <motion.div
        className="recruiter-modal-container"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="recruiter-modal-header">
          <div className="rm-header-left">
            <span className="rm-badge-pill">
              <FaBolt className="rm-bolt-icon" /> Executive Candidate Summary
            </span>
            <h2>{CANDIDATE_PROFILE.name}</h2>
            <p className="rm-subtitle">{CANDIDATE_PROFILE.title}</p>
          </div>
          <button className="rm-close-btn" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        <div className="recruiter-modal-body">
          <div className="rm-stats-grid">
            <div className="rm-stat-card">
              <span className="rm-stat-label">Notice Period</span>
              <span className="rm-stat-value rm-accent-green">0 Days Notice</span>
              <span className="rm-stat-sub">Immediate Availability</span>
            </div>
            <div className="rm-stat-card">
              <span className="rm-stat-label">DSA Discipline</span>
              <span className="rm-stat-value">1000+ Solved</span>
              <span className="rm-stat-sub">LeetCode (Java Mastery)</span>
            </div>
            <div className="rm-stat-card">
              <span className="rm-stat-label">Academic Merit</span>
              <span className="rm-stat-value">CGPA 8.17</span>
              <span className="rm-stat-sub">Rank #1 College Topper</span>
            </div>
            <div className="rm-stat-card">
              <span className="rm-stat-label">Work Experience</span>
              <span className="rm-stat-value">2 Internships</span>
              <span className="rm-stat-sub">Code CIT & Software Beatz</span>
            </div>
          </div>

          <div className="rm-actions-row">
            <a
              href={CANDIDATE_PROFILE.resumeUrl}
              download="Satyam_Kumar_Mishra_Resume.pdf"
              className="rm-btn rm-primary-btn"
            >
              <FaFileDownload /> Download ATS Resume (PDF)
            </a>
            <a
              href={CANDIDATE_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rm-btn rm-whatsapp-btn"
            >
              <FaWhatsapp /> Fast-Track WhatsApp
            </a>
            <a
              href={`mailto:${CANDIDATE_PROFILE.email}?subject=Interview%20Invitation%20for%20Engineering%20Role`}
              className="rm-btn rm-email-btn"
            >
              <FaEnvelope /> Email Satyam
            </a>
            <button
              className="rm-btn rm-copy-btn"
              onClick={handleCopySummary}
              title="Copy 1-paragraph ATS summary"
            >
              {copied ? <FaCheck /> : <FaCopy />}
              <span>{copied ? "Copied!" : "Copy Summary"}</span>
            </button>
          </div>

          <div className="rm-section">
            <h3 className="rm-section-title">
              <FaCode /> Core Technical Competencies
            </h3>
            <div className="rm-matrix-grid">
              {CORE_MATRIX.map((group, idx) => (
                <div key={idx} className="rm-matrix-card">
                  <h4>{group.group}</h4>
                  <div className="rm-tech-chips">
                    {group.items.map((tech, i) => (
                      <span key={i} className="rm-tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rm-section">
            <h3 className="rm-section-title">
              <FaServer /> Flagship Production Systems
            </h3>
            <div className="rm-projects-list">
              {FLAGSHIP_SYSTEMS.map((proj, idx) => (
                <div key={idx} className="rm-project-card">
                  <div className="rm-proj-header">
                    <div>
                      <div className="rm-proj-title-row">
                        <h4>{proj.name}</h4>
                        <span className="rm-proj-badge">{proj.badge}</span>
                      </div>
                      <p className="rm-proj-metrics">{proj.metrics}</p>
                    </div>
                    <div className="rm-proj-links">
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="rm-icon-link" title="Open Live App">
                        <FaExternalLinkAlt />
                      </a>
                      <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="rm-icon-link" title="View Source Code">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="rm-proj-stack">
                    {proj.stack.map((s, i) => (
                      <span key={i} className="rm-stack-pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rm-section">
            <h3 className="rm-section-title">
              <FaBriefcase /> Professional Work History
            </h3>
            <div className="rm-history-card">
              <div className="rm-history-item">
                <div className="rm-hi-header">
                  <strong>Full Stack Development Intern</strong>
                  <span className="rm-hi-date">Feb 2026 – Aug 2026</span>
                </div>
                <span className="rm-hi-company">Code Innovative Technologies (Remote)</span>
                <p className="rm-hi-desc">
                  Engineered modular full-stack web applications with React.js, Next.js, Node.js, Express.js, and PostgreSQL. Designed high-throughput REST APIs and maintained strict Git PR review standards.
                </p>
              </div>

              <div className="rm-history-item">
                <div className="rm-hi-header">
                  <strong>Software Development Intern</strong>
                  <span className="rm-hi-date">Oct 2025 – Feb 2026</span>
                </div>
                <span className="rm-hi-company">Software Beatz (Remote)</span>
                <p className="rm-hi-desc">
                  Built secure MERN stack endpoints, integrated JWT token rotation, structured MongoDB aggregation pipelines, and executed comprehensive Postman API integration test suites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="recruiter-modal-footer">
          <div className="rm-footer-links">
            <a href={CANDIDATE_PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={CANDIDATE_PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href={CANDIDATE_PROFILE.leetcodeUrl} target="_blank" rel="noopener noreferrer">
              <SiLeetcode /> LeetCode
            </a>
          </div>
          <button className="rm-done-btn" onClick={onClose}>
            Close Fast-Track View
          </button>
        </div>
      </motion.div>
    </div>
  );
}
