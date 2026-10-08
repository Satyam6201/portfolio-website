import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaEye,
  FaRocket,
  FaCode,
  FaStar,
  FaAward,
  FaBrain,
  FaCheckCircle,
  FaBolt,
  FaLaptopCode,
  FaServer,
  FaTerminal
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiLeetcode } from "react-icons/si";
import "../styles/home.css";

const stats = [
  { icon: <SiLeetcode />, value: "1000+", label: "DSA Solutions in Java", sub: "LeetCode (Graphs, DP, Trees)" },
  { icon: <FaRocket />, value: "15+", label: "Production & SaaS Systems", sub: "RAG AI & Full-Stack" },
  { icon: <FaAward />, value: "Rank #1", label: "University College Topper", sub: "CGPA: 8.17 / 10.0" },
  { icon: <FaBrain />, value: "2", label: "Software Internships", sub: "Code CIT & Software Beatz" },
];

const floatingBadges = [
  { icon: <SiNextdotjs />, label: "Next.js 15", className: "badge-next", delay: 0 },
  { icon: <SiReact />, label: "React 19", className: "badge-react", delay: 0.5 },
  { icon: <SiNodedotjs />, label: "Node.js", className: "badge-node", delay: 1.0 },
  { icon: <FaBrain />, label: "GenAI & RAG", className: "badge-ai", delay: 1.5 },
];

function Home({ onOpenRecruiter }) {
  return (
    <section id="home" className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="hero-status-pill shimmer-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="live-pulse-dot" />
          <span>Available for Full-Time Engineering Roles · 0 Days Notice</span>
        </motion.div>

        <div className="hero-avatar-container">
          <div className="avatar-glow-ring" />
          <motion.div
            className="avatar-image-wrap"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/assets/image.jpg"
              alt="Satyam Kumar Mishra"
              className="profile-img-large"
              loading="eager"
            />
          </motion.div>

          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              className={`hero-floating-badge ${badge.className}`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              }}
            >
              <span className="hfb-icon">{badge.icon}</span>
              <span className="hfb-label">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Satyam Kumar Mishra</span>
        </h1>

        <div className="typewriter-container">
          <span className="typewriter-prompt">&gt;</span>
          <h3 className="typewriter">
            <Typewriter
              words={[
                "Full-Stack MERN & Next.js Engineer",
                "Generative AI & RAG Systems Builder",
                "1000+ DSA Solutions Solved in Java",
                "Zero-Trust API & Scalable Architecture",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1400}
            />
          </h3>
        </div>

        <p className="hero-description">
          Staff-level mindset engineer specializing in high-throughput SaaS platforms, zero-trust authentication protocols, and modern <strong>Generative AI & RAG pipelines</strong> with <strong>React 19, Next.js 15, Node.js, Express, PostgreSQL, MongoDB,</strong> and <strong>FAISS Vector Stores</strong>.
        </p>

        <div className="hero-stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="hero-stat-card"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <div className="h-stat-icon">{stat.icon}</div>
              <div className="h-stat-content">
                <span className="h-stat-value">{stat.value}</span>
                <span className="h-stat-label">{stat.label}</span>
                <span className="h-stat-sub">{stat.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hero-action-buttons">
          <motion.button
            onClick={onOpenRecruiter}
            className="hero-btn primary-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{ cursor: "pointer", border: "none" }}
          >
            <FaBolt style={{ color: "#f59e0b" }} /> Recruiter Executive View
          </motion.button>
          <motion.a
            href="#projects"
            className="hero-btn secondary-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaRocket /> Explore Architecture & Work
          </motion.a>
          <motion.a
            href="/assets/Resume.pdf"
            download="Satyam_Kumar_Mishra_Resume.pdf"
            className="hero-btn outline-btn"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </div>

        <div className="hero-quick-connect">
          <div className="contact-links">
            <a href="tel:+916201902313" className="contact-item">
              <FaPhoneAlt /> +91 6201902313
            </a>
            <a href="mailto:satyamkmishraa@gmail.com" className="contact-item">
              <FaEnvelope /> satyamkmishraa@gmail.com
            </a>
          </div>

          <div className="social-links">
            <motion.a
              href="https://www.linkedin.com/in/satyam-kumar-mishra-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.08 }}
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/Satyam6201"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.08 }}
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/SatyamMIshra62"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.08 }}
            >
              <SiLeetcode size={18} />
              <span>LeetCode</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;