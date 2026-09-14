import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUser,
  FaTerminal,
  FaCopy,
  FaCheck,
  FaLaptopCode,
  FaBrain,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaChevronRight,
  FaArrowRight,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";
import "../styles/about.css";

const terminalFiles = {
  "satyam.config.ts": `/**
 * Developer Profile Configuration
 * Satyam Kumar Mishra | Full-Stack & AI Engineer
 */
export const engineer = {
  name: "Satyam Kumar Mishra",
  role: "Full-Stack Engineer & Generative AI Builder",
  location: "Delhi, India (Open to Remote / On-Site)",
  availability: "Immediate (0 Days Notice)",
  education: {
    degree: "B.Tech Computer Science & Engineering",
    cgpa: 8.17,
    distinction: "University Rank #1 (Semesters 1-3)"
  },
  specializations: [
    "Next.js 15 App Router & React 19 Architecture",
    "Generative AI, OpenAI API & RAG Pipelines (FAISS)",
    "Secure RESTful APIs with Node.js & Express",
    "PostgreSQL, MongoDB Atlas, Prisma ORM & Redis",
    "Stripe & Razorpay Payment Integration"
  ],
  competitiveProgramming: {
    platform: "LeetCode",
    language: "Java",
    problemsSolved: 1000+
  }
};`,

  "engineering-principles.md": `# Engineering Pillars & Code Philosophy

### 1. Robust Architecture Over Hacks
Build maintainable, testable software from day one. Separation of concerns, clear API contracts, and predictable data flow.

### 2. Intelligent RAG & AI Integration
In projects like MockMate AI and DentAIva, AI isn't a gimmick—it's a high-impact retrieval engine powered by vector embeddings and prompt engineering.

### 3. Zero-Trust API Security
Enforce role-based access control (RBAC), sanitized database queries, rate limiting via Redis, and secure JWT token rotation.

### 4. Relentless Optimization
Every millisecond counts. Profiling database queries, indexing schemas, and using streaming server responses for sub-second user experiences.`,

  "tech-philosophy.json": `{
  "mindset": "Product-Minded Engineer",
  "dailyRoutine": [
    "Solve algorithmic challenges in Java",
    "Architect full-stack modules & refine UX",
    "Experiment with latest GenAI / LLM tooling",
    "Mentor junior peers & review open-source PRs"
  ],
  "values": [
    "Extreme Ownership",
    "High Shipping Velocity",
    "Clean Code Craftsmanship",
    "Humility & Curiosity"
  ]
}`
};

const pillars = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack & Systems",
    desc: "Architecting reactive frontends with Next.js 15 / React 19 and scalable Node/Express microservices.",
    tags: ["Next.js 15", "React 19", "Node.js", "Express", "PostgreSQL"],
    color: "#3b82f6",
  },
  {
    icon: <FaBrain />,
    title: "Generative AI & RAG",
    desc: "Engineering Retrieval-Augmented Generation with FAISS vector stores, OpenAI APIs, and AI voice agents.",
    tags: ["OpenAI API", "FAISS Vector", "RAG", "Embeddings", "LangChain"],
    color: "#8b5cf6",
  },
  {
    icon: <FaShieldAlt />,
    title: "API Security & Auth",
    desc: "Implementing enterprise-grade JWT auth, RBAC permissions, Redis rate limiting, and Stripe monetization.",
    tags: ["JWT", "RBAC", "Redis", "Stripe API", "OAuth 2.0"],
    color: "#10b981",
  },
  {
    icon: <FaRocket />,
    title: "Algorithmic Problem Solving",
    desc: "Solved 1000+ LeetCode DSA problems in Java, mastering graphs, trees, dynamic programming, and system design.",
    tags: ["Java", "1000+ LeetCode", "DSA", "System Design"],
    color: "#f59e0b",
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("satyam.config.ts");
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalFiles[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* Section Header */}
      <div className="about-header">
        <span className="shimmer-badge">
          <FaUser /> Engineering Story & Philosophy
        </span>
        <h2 className="about-title">About Satyam</h2>
        <p className="about-subtext">
          Bridging algorithmic problem-solving with full-stack product engineering and Generative AI systems.
        </p>
      </div>

      {/* Main Grid: Narrative & Interactive Terminal */}
      <div className="about-main-grid">
        {/* Left Column: Personal Narrative */}
        <motion.div
          className="about-story-col"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="story-card">
            <h3>From 1000+ DSA Solutions to Production SaaS 🚀</h3>
            <p>
              My journey in software engineering began with a deep fascination for algorithms and data structures.
              Solving <strong>1000+ LeetCode problems in Java</strong> trained my mind to identify edge cases,
              evaluate memory tradeoffs, and write clean, resilient logic under pressure.
            </p>
            <p>
              Today, I channel that problem-solving discipline into building scalable web applications.
              From architecting <strong>MockMate AI</strong> (a full-stack RAG mock interview platform using FAISS embeddings and OpenAI)
              to deploying production-ready platforms during my software internships at <strong>Code Innovative Technologies</strong> and <strong>Software Beatz</strong>,
              I thrive on turning complex business requirements into elegant digital experiences.
            </p>
            <p>
              I believe great software is built at the intersection of <strong>clean architecture, sub-second performance, intuitive user experience,</strong> and <strong>strong team collaboration</strong>.
            </p>

            <div className="story-nav-shortcuts">
              <a href="#projects" className="story-link-btn">
                <span>Explore Projects</span> <FaArrowRight />
              </a>
              <a href="#experience" className="story-link-btn outline">
                <span>View Work History</span> <FaChevronRight />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Sandbox / Terminal */}
        <motion.div
          className="about-terminal-col"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="interactive-terminal">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              {/* Tabs */}
              <div className="terminal-tabs">
                {Object.keys(terminalFiles).map((fileName) => (
                  <button
                    key={fileName}
                    className={`terminal-tab ${activeTab === fileName ? "active" : ""}`}
                    onClick={() => setActiveTab(fileName)}
                  >
                    <FaCode className="tab-code-icon" />
                    <span>{fileName}</span>
                  </button>
                ))}
              </div>

              {/* Copy Code Button */}
              <button
                className="terminal-copy-btn"
                onClick={handleCopy}
                title="Copy code to clipboard"
                aria-label="Copy code snippet"
              >
                {copied ? <FaCheck className="copied-icon" /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <pre className="terminal-code">
                <code>{terminalFiles[activeTab]}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll-Triggered Metric Counters Strip */}
      <div className="about-counters-wrap">
        <div className="counters-grid">
          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={1000} duration={2.2} /> : 0}+
            </span>
            <span className="counter-label">DSA Problems Solved</span>
            <span className="counter-sub">LeetCode (Java Mastery)</span>
          </motion.div>

          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={45} duration={2} /> : 0}+
            </span>
            <span className="counter-label">Deployed Projects</span>
            <span className="counter-sub">Full-Stack SaaS & Apps</span>
          </motion.div>

          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={400} duration={2} /> : 0}+
            </span>
            <span className="counter-label">Students Mentored</span>
            <span className="counter-sub">Workshops & T&P Cell</span>
          </motion.div>

          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">8.17</span>
            <span className="counter-label">B.Tech CGPA</span>
            <span className="counter-sub">University Rank #1 Topper</span>
          </motion.div>
        </div>
      </div>

      {/* Core Engineering Pillars */}
      <div className="about-pillars-section">
        <h3 className="pillars-title">
          <FaLightbulb className="icon-bulb" /> Core Engineering Pillars
        </h3>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="pillar-card glow-card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="pillar-icon" style={{ color: pillar.color, background: `${pillar.color}15` }}>
                {pillar.icon}
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>

              <div className="pillar-tags">
                {pillar.tags.map((t, idx) => (
                  <span key={idx} className="pillar-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;