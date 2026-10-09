import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  FaChevronRight,
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/about.css";

const terminalFiles = {
  "satyam.config.ts": `export const engineer = {
  name: "Satyam Kumar Mishra",
  role: "Full-Stack Software Engineer & GenAI Builder",
  location: "Delhi, India (Open to Remote / Hybrid / Relocation)",
  availability: "Immediate (0 Days Notice)",
  education: {
    degree: "B.Tech Computer Science & Engineering",
    cgpa: 8.17,
    distinction: "University Rank #1 College Topper (Semesters 1-3)"
  },
  competitiveProgramming: {
    platform: "LeetCode",
    language: "Java 17/21",
    problemsSolved: "1,064+",
    globalRank: "#28,349",
    badges: 26,
    maxStreak: "223 Days"
  },
  coreStack: [
    "Next.js 15 (App Router, Turbopack, Server Actions)",
    "React 19, TypeScript 5, Tailwind CSS v4, Zustand",
    "Node.js (v20+), Express.js, REST APIs, WebSockets",
    "Redis (ioredis sub-15ms caching & Pub/Sub)",
    "PostgreSQL (Neon DB, Prisma ORM 6), MongoDB Atlas",
    "Generative AI (Gemini 1.5/2.0 Flash, OpenAI, RAG, Vapi Voice SDK)",
    "Docker (Multi-stage Alpine), CI/CD (GitHub Actions), NGINX"
  ]
};`,

  "engineering-principles.md": `# Production Engineering Principles & Philosophy

### 1. High-Throughput & Low Latency First
Sub-50ms API response budgets. Leveraging Redis caching layers, connection pooling, and Node clustering to scale backends effortlessly past 10,000+ req/min.

### 2. Type-Safe End-to-End Contracts
Strict schema validation with TypeScript 5, Prisma ORM 6, and Zod/Server Actions, ensuring zero runtime data corruption and deterministic API boundaries.

### 3. Pragmatic AI & Vector Retrieval (RAG)
Generative AI integrated as a high-precision retrieval engine. In MockMate AI, DentAIva, and Grocren, LLMs are grounded via vector embeddings, strict JSON output schemas, and low-latency voice streams.

### 4. Zero-Trust API Security & Auth
Enterprise-grade role-based access control (RBAC), JWT token rotation, HTTP-only session cookies, sliding-window rate limiting, and Stripe/Razorpay transactional integrity.`,

  "tech-philosophy.json": `{
  "mindset": "Product-Minded Systems Engineer",
  "dailyHabits": [
    "Solve algorithmic challenges in Java (1064+ LeetCode)",
    "Architect scalable full-stack features & benchmark latency",
    "Integrate latest GenAI tooling & voice agents",
    "Write comprehensive unit & integration test suites"
  ],
  "coreValues": [
    "Extreme Ownership",
    "High Shipping Velocity",
    "Clean Architecture Craftsmanship",
    "Continuous Lifelong Learning"
  ]
}`
};

const pillars = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack & Distributed Systems",
    desc: "Architecting high-throughput applications with Next.js 15, React 19, Node.js v20+, Express, and sub-15ms Redis caching.",
    tags: ["Next.js 15", "React 19", "Node.js (Clustering)", "Redis", "PostgreSQL"],
    color: "#3b82f6",
  },
  {
    icon: <FaBrain />,
    title: "Generative AI & Voice / RAG",
    desc: "Building low-latency RAG vector pipelines, real-time Vapi voice agents, and Google Gemini AI conversational engines.",
    tags: ["Google Gemini", "OpenAI API", "Vapi Voice SDK", "FAISS Vector", "RAG"],
    color: "#8b5cf6",
  },
  {
    icon: <FaShieldAlt />,
    title: "API Security & Cloud Architecture",
    desc: "Implementing zero-trust JWT token rotation, RBAC, Clerk auth, Docker Alpine containers, and Stripe monetization.",
    tags: ["JWT Rotation", "RBAC", "Clerk Auth", "Docker Compose", "Stripe API"],
    color: "#10b981",
  },
  {
    icon: <FaRocket />,
    title: "Algorithmic Rigor & Problem Solving",
    desc: "Solved 1,064+ LeetCode DSA problems in Java (Rank #28,349), mastering graphs, dynamic programming, and system design.",
    tags: ["Java 17/21", "1064+ LeetCode", "Graph Theory", "Dynamic Programming"],
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
      <div className="about-header">
        <span className="shimmer-badge">
          <FaUser /> Engineering Narrative & Mindset
        </span>
        <h2 className="about-title">About Satyam</h2>
        <p className="about-subtext">
          Bridging algorithmic problem-solving with full-stack systems engineering and production Generative AI architectures.
        </p>
      </div>

      <div className="about-main-grid">
        <motion.div
          className="about-story-col"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="story-card">
            <h3>From 1,064+ DSA Solutions to Scalable Production Architectures</h3>
            <p>
              My software engineering journey is rooted in deep algorithmic discipline.
              Solving <strong>1,064+ LeetCode problems in Java (Global Rank #28,349)</strong> trained me to evaluate memory tradeoffs,
              identify complex edge cases, and write clean, resilient logic under strict latency budgets.
            </p>
            <p>
              I channel this analytical mindset into architecting full-stack systems and GenAI applications.
              From engineering <strong>MockMate AI</strong> (handling 10,000+ req/min with sub-45ms latency and in-memory RAG pipelines)
              and <strong>DentAIva</strong> (Next.js 15 healthcare SaaS with Vapi AI voice triage)
              to deploying production features during software internships at <strong>Code Innovative Technologies</strong> and <strong>Software Beatz</strong>,
              I thrive on building scalable, reliable software.
            </p>
            <p>
              I specialize in <strong>Next.js 15 App Router, React 19, Node.js clustering, Redis distributed caching, PostgreSQL (Neon DB), MongoDB Atlas</strong>, and <strong>Docker microservices</strong>.
            </p>

            <div className="story-nav-shortcuts">
              <a href="#projects" className="story-link-btn">
                <span>Explore Featured Systems</span> <FaArrowRight />
              </a>
              <a href="#experience" className="story-link-btn outline">
                <span>View Work History</span> <FaChevronRight />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-terminal-col"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="interactive-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

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

            <div className="terminal-body">
              <pre className="terminal-code">
                <code>{terminalFiles[activeTab]}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-counters-wrap">
        <div className="counters-grid">
          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={1064} duration={2.2} /> : 0}+
            </span>
            <span className="counter-label">DSA Problems Solved</span>
            <span className="counter-sub">Java • Global Rank #28,349</span>
          </motion.div>

          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={15} duration={2} /> : 0}+
            </span>
            <span className="counter-label">Production Systems</span>
            <span className="counter-sub">Full-Stack SaaS & RAG Apps</span>
          </motion.div>

          <motion.div
            className="counter-card"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="counter-num">
              {isInView ? <CountUp start={0} end={10} duration={2} /> : 0}K+
            </span>
            <span className="counter-label">Req/Min Scaled</span>
            <span className="counter-sub">Node Clustering & Redis</span>
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