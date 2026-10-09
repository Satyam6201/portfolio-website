import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaBlog,
  FaEnvelope,
  FaFileDownload,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaBolt,
  FaRobot,
  FaPalette,
  FaTerminal,
  FaLaptopCode,
  FaTrophy,
  FaCogs,
  FaServer,
  FaExternalLinkAlt
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import "../styles/commandpalette.css";

const COMMAND_ACTIONS = [
  {
    category: "Navigation",
    items: [
      { id: "nav-home", label: "Home / Overview", icon: <FaHome />, action: "hash:#home" },
      { id: "nav-about", label: "About & Engineering Pillars", icon: <FaUser />, action: "hash:#about" },
      { id: "nav-projects", label: "Featured Projects (15+)", icon: <FaProjectDiagram />, action: "hash:#projects" },
      { id: "nav-tech", label: "Technical Skills & Architecture", icon: <FaCode />, action: "hash:#techstack" },
      { id: "nav-exp", label: "Professional Experience", icon: <FaBriefcase />, action: "hash:#experience" },
      { id: "nav-dsa", label: "LeetCode 1000+ DSA Matrix", icon: <SiLeetcode />, action: "hash:#dsa-matrix" },
      { id: "nav-playground", label: "Interactive System Playground", icon: <FaTerminal />, action: "hash:#playground" },
      { id: "nav-edu", label: "Education (Rank #1, 8.17 CGPA)", icon: <FaGraduationCap />, action: "hash:#education" },
      { id: "nav-cert", label: "Certifications & Credentials", icon: <FaCertificate />, action: "hash:#certifications" },
      { id: "nav-hiring", label: "Recruiter Hub & Roles", icon: <FaLaptopCode />, action: "hash:#hiring" },
      { id: "nav-blog", label: "Tech Blog & Case Studies", icon: <FaBlog />, action: "hash:#blog" },
      { id: "nav-contact", label: "Contact & Reach Out", icon: <FaEnvelope />, action: "hash:#contact" },
    ]
  },
  {
    category: "Recruiter & Direct Actions",
    items: [
      { id: "act-resume", label: "Download Resume (PDF)", icon: <FaFileDownload />, action: "download:/assets/Resume.pdf" },
      { id: "act-email", label: "Send Email (satyamkmishraa@gmail.com)", icon: <FaEnvelope />, action: "link:mailto:satyamkmishraa@gmail.com" },
      { id: "act-wa", label: "Chat on WhatsApp (+91 6201902313)", icon: <FaWhatsapp />, action: "link:https://wa.me/916201902313?text=Hi%20Satyam,%20we%20reviewed%20your%20portfolio!" },
      { id: "act-recruiter-mode", label: "Open Recruiter Executive View", icon: <FaBolt />, action: "recruiter" }
    ]
  },
  {
    category: "Featured Production Systems",
    items: [
      { id: "proj-mockmate", label: "MockMate AI (Node Clustering, Redis, OpenRouter RAG)", icon: <FaRobot />, action: "link:https://mock-mate-ai-flame.vercel.app" },
      { id: "proj-dentalva", label: "DentAIva (Next.js 15, Vapi Voice SDK, Neon DB, Prisma 6)", icon: <FaLaptopCode />, action: "link:https://dentwise-henna.vercel.app" },
      { id: "proj-grocerin", label: "Grocren (React 19, Vite 7, Sub-15ms Redis, Gemini AI)", icon: <FaProjectDiagram />, action: "link:https://grocerinx.vercel.app" },
      { id: "proj-connectify", label: "Connectify (React 19, Stream WebRTC, 10K+ Users)", icon: <FaServer />, action: "link:https://connectify-videocall.vercel.app" },
      { id: "proj-resume-parser", label: "AI Resume Parser (Node.js, PDF Image Extractor)", icon: <FaCode />, action: "link:https://github.com/Satyam6201/Resume-Parser" },
    ]
  },
  {
    category: "Profiles & Ecosystem",
    items: [
      { id: "ext-github", label: "GitHub Profile (@Satyam6201)", icon: <FaGithub />, action: "link:https://github.com/Satyam6201" },
      { id: "ext-linkedin", label: "LinkedIn Profile", icon: <FaLinkedin />, action: "link:https://www.linkedin.com/in/satyam-kumar-mishra-dev" },
      { id: "ext-leetcode", label: "LeetCode Profile (1064+ Solved, Rank #28,349)", icon: <SiLeetcode />, action: "link:https://leetcode.com/u/SatyamMIshra62" }
    ]
  }
];

export default function CommandPalette({ isOpen, onClose, onOpenRecruiter }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const allItems = COMMAND_ACTIONS.flatMap(c => c.items.map(item => ({ ...item, categoryName: c.category })));

  const filteredItems = query.trim()
    ? allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleSelect = (item) => {
    onClose();
    if (!item) return;

    if (item.action.startsWith("hash:")) {
      const hash = item.action.replace("hash:", "");
      if (location.pathname !== "/") {
        navigate("/" + hash);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.action.startsWith("download:")) {
      const url = item.action.replace("download:", "");
      const a = document.createElement("a");
      a.href = url;
      a.download = "Satyam_Kumar_Mishra_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (item.action.startsWith("link:")) {
      const url = item.action.replace("link:", "");
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (item.action === "recruiter") {
      if (onOpenRecruiter) onOpenRecruiter();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cmd-overlay" onClick={onClose}>
          <motion.div
            className="cmd-dialog"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cmd-search-bar">
              <FaSearch className="cmd-search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Search commands, projects, skills, or direct actions..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
              />
              <button className="cmd-close-btn" onClick={onClose} aria-label="Close Command Palette">
                <FaTimes />
              </button>
            </div>

            <div className="cmd-results-list">
              {filteredItems.length === 0 ? (
                <div className="cmd-empty-state">
                  <p>No matching commands or actions found for "{query}".</p>
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`cmd-item ${index === selectedIndex ? "selected" : ""}`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="cmd-item-left">
                      <span className="cmd-item-icon">{item.icon}</span>
                      <div className="cmd-item-text">
                        <span className="cmd-item-label">{item.label}</span>
                        <span className="cmd-item-cat">{item.categoryName}</span>
                      </div>
                    </div>
                    <span className="cmd-enter-hint">
                      {index === selectedIndex && <span>Press Enter</span>}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="cmd-footer">
              <div className="cmd-footer-keys">
                <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
                <span><kbd>↵</kbd> Select</span>
                <span><kbd>esc</kbd> Close</span>
              </div>
              <div className="cmd-footer-right">
                <span className="cmd-badge">Staff DX</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
