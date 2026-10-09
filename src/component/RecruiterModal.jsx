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
  title: "Full-Stack Software Engineer & Generative AI Builder",
  noticePeriod: "Immediate Joining (0 Days Notice)",
  location: "Delhi, India (Open to Remote, Hybrid, & Relocation)",
  cgpa: "8.17 / 10.0 (University Rank #1 College Topper)",
  dsaMetric: "1064+ Solved (Java) • Global Rank #28,349",
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
    badge: "Flagship AI & RAG System",
    metrics: "Node clustering (10K+ req/min, <45ms latency), Redis Pub/Sub, OpenRouter RAG (98.4% accuracy), ATS Resume Builder (2,500+ exports/hr)",
    stack: ["React 19", "Node.js (Clustering)", "Express.js", "MongoDB", "Redis", "OpenRouter LLMs", "Stripe API", "Docker"],
    liveUrl: "https://mock-mate-ai-flame.vercel.app",
    repoUrl: "https://github.com/Satyam6201/MockMate-AI"
  },
  {
    name: "DentAIva",
    badge: "Next.js 15 & Voice AI SaaS",
    metrics: "Vapi Web SDK automated voice triage (<300ms latency), Clerk RBAC auth, serverless PostgreSQL on Neon DB, Prisma ORM 6, Resend & TanStack Query v5",
    stack: ["Next.js 15", "TypeScript 5", "Tailwind CSS v4", "PostgreSQL (Neon DB)", "Prisma ORM 6", "Clerk", "Vapi Web SDK"],
    liveUrl: "https://dentwise-henna.vercel.app",
    repoUrl: "https://github.com/Satyam6201/DentAIva"
  },
  {
    name: "Grocren (Grocerin)",
    badge: "Gemini AI & Sub-15ms Redis",
    metrics: "ioredis sub-15ms cache with TTL dictionary fallback (80% DB query reduction), Google Gemini 1.5/2.0 Flash AI, 100-connection MongoDB pool, Stripe & COD",
    stack: ["React 19", "Vite 7", "Tailwind CSS 4", "Node.js v20+", "Express.js", "MongoDB Atlas", "Redis", "Google Gemini AI", "Stripe"],
    liveUrl: "https://grocerinx.vercel.app",
    repoUrl: "https://github.com/Satyam6201/Grocerin"
  },
  {
    name: "Connectify",
    badge: "WebRTC & Distributed Caching",
    metrics: "High-throughput HD video & chat platform supporting 10,000+ concurrent users, Stream WebRTC SDK, Redis distributed caching (45% query latency cut)",
    stack: ["React 19", "Node.js", "Express.js", "MongoDB", "Redis", "Stream WebRTC SDK", "Zustand", "Docker"],
    liveUrl: "https://connectify-videocall.vercel.app",
    repoUrl: "https://github.com/Satyam6201/Connectify"
  },
  {
    name: "AI Resume Parser",
    badge: "Heuristic & Image Extractor",
    metrics: "Local PDF-to-JSON engine intercepting raw PDF rendering operators for embedded candidate photo extraction, strict schema validation, sub-100ms parse latency",
    stack: ["Node.js", "Express.js", "pdf-parse", "Multer", "HTML5/CSS3 Glassmorphism", "Regex Engine"],
    liveUrl: "https://github.com/Satyam6201/Resume-Parser",
    repoUrl: "https://github.com/Satyam6201/Resume-Parser"
  }
];

const CORE_MATRIX = [
  { group: "Backend & Distributed Systems", items: ["Node.js (v20+)", "Express.js", "REST APIs", "Redis (ioredis / PubSub)", "WebSockets", "Socket.IO", "Node Clustering"] },
  { group: "Frontend Architecture", items: ["Next.js 15 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS v4", "Zustand", "TanStack React Query v5", "Framer Motion"] },
  { group: "Generative AI & Voice", items: ["OpenAI API", "Google Gemini 1.5/2.0 Flash", "OpenRouter LLMs", "RAG Pipelines", "Vapi Web SDK Voice", "LangChain", "Prompt Engineering"] },
  { group: "Databases & Security", items: ["MongoDB Atlas (Pooled)", "PostgreSQL (Neon DB)", "Prisma ORM 6", "JWT Token Rotation", "RBAC", "Clerk Auth", "Helmet", "Stripe API"] }
];

export default function RecruiterModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `Candidate: Satyam Kumar Mishra\nRole: Full-Stack Software Engineer & AI Builder\nAvailability: Immediate (0 Days Notice)\nStats: 1064+ LeetCode (Java), Global Rank #28,349, 8.17 CGPA (University Rank #1)\nCore Stack: Next.js 15, React 19, TypeScript 5, Node.js, Express, PostgreSQL, MongoDB, Redis, OpenAI / Gemini AI, Vapi Voice SDK\nContact: ${CANDIDATE_PROFILE.email} | ${CANDIDATE_PROFILE.phone}\nResume: https://satyam-devfolio.vercel.app/assets/Resume.pdf\nPortfolio: https://satyam-devfolio.vercel.app/`;
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
              <span className="rm-stat-value">1064+ Solved</span>
              <span className="rm-stat-sub">Java • Global Rank #28,349</span>
            </div>
            <div className="rm-stat-card">
              <span className="rm-stat-label">Academic Merit</span>
              <span className="rm-stat-value">CGPA 8.17</span>
              <span className="rm-stat-sub">University Rank #1 Topper</span>
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
              <FaServer /> Flagship Production Systems & Architecture
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
                  <strong>Full Stack Developer — Intern</strong>
                  <span className="rm-hi-date">Feb 2026 – Aug 2026</span>
                </div>
                <span className="rm-hi-company">Code Innovative Technologies (Remote)</span>
                <p className="rm-hi-desc">
                  Engineered production-facing modules using Next.js, React.js, Node.js, and MongoDB. Architected 15+ secure RESTful APIs with JWT authentication and RBAC. Automated CI/CD pipelines via GitHub Actions and Docker, cutting deployment cycle times by 40% with zero-downtime releases.
                </p>
              </div>

              <div className="rm-history-item">
                <div className="rm-hi-header">
                  <strong>Software Development Intern</strong>
                  <span className="rm-hi-date">Oct 2025 – Feb 2026</span>
                </div>
                <span className="rm-hi-company">Software Beatz (Remote)</span>
                <p className="rm-hi-desc">
                  Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB following modular MVC patterns. Optimized high-traffic MongoDB queries via compound indexing and aggregations, slashing API latency by 35%. Authored Jest unit tests and automated Postman test suites (85%+ coverage).
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
