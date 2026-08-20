import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaBriefcase,
  FaLightbulb,
  FaCubes,
  FaCompass,
  FaSlidersH,
  FaThLarge,
  FaCheckCircle,
  FaPaperPlane,
  FaBullseye,
  FaFire
} from "react-icons/fa";
import "../styles/goal.css";

const GOALS_DATA = [
  {
    id: "internships",
    phase: "Phase 1 • 0-1 Year",
    title: "Frontend & Full-Stack Internships",
    tagline: "Building high-impact frontend products & responsive UIs",
    icon: FaRocket,
    readiness: 95,
    category: "Phase 1: Short-Term",
    description:
      "Contribute to real-world software products through internships in Frontend & Web Development. Leveraging React 19, JavaScript, CSS3, and UI design principles to deliver fast, accessible, user-centric experiences.",
    tags: ["React 19", "JavaScript (ES6+)", "UI/UX Design", "Responsive Web"],
    color: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    shadow: "rgba(59, 130, 246, 0.4)"
  },
  {
    id: "fullstack-role",
    phase: "Phase 2 • 1-2 Years",
    title: "Full-Stack Software Engineer",
    tagline: "Kickstarting professional career in modern web engineering",
    icon: FaBriefcase,
    readiness: 90,
    category: "Phase 2: Mid-Term",
    description:
      "Securing a full-time Full-Stack Software Engineer role working with the MERN Stack. Building scalable APIs, backend services, client-side state management, and collaborating within agile engineering teams.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    shadow: "rgba(139, 92, 246, 0.4)"
  },
  {
    id: "lifelong-learning",
    phase: "Phase 3 • 2-4 Years",
    title: "Continuous Mastery & AI Tech",
    tagline: "Mastering System Design, Next.js 15 & AI Agents",
    icon: FaLightbulb,
    readiness: 88,
    category: "Phase 3: Mastery",
    description:
      "Continuously expanding technical depth across Data Structures & Algorithms, System Design, Server Actions with Next.js 15, and integrating OpenAI RAG Agents into modern software solutions.",
    tags: ["System Design", "Next.js 15", "AI RAG Agents", "Advanced DSA"],
    color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    shadow: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: "scalable-products",
    phase: "Phase 4 • 4+ Years",
    title: "Architecting Scalable Products",
    tagline: "Technical leadership & high-throughput software architecture",
    icon: FaCubes,
    readiness: 85,
    category: "Phase 4: Vision",
    description:
      "Architecting robust, distributed, high-performance web systems that serve real-world users. Mentoring junior engineers, guiding product roadmaps, and driving technical excellence.",
    tags: ["Distributed Systems", "Cloud Infrastructure", "Tech Leadership", "Scalable Apps"],
    color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    shadow: "rgba(16, 185, 129, 0.4)"
  }
];

const CATEGORIES = [
  "All Horizons",
  "Phase 1: Short-Term",
  "Phase 2: Mid-Term",
  "Phase 3: Mastery",
  "Phase 4: Vision"
];

function Goal() {
  const [activeCategory, setActiveCategory] = useState("All Horizons");
  const [viewMode, setViewMode] = useState("stage"); // 'stage' | 'grid'

  const filteredGoals =
    activeCategory === "All Horizons"
      ? GOALS_DATA
      : GOALS_DATA.filter((goal) => goal.category === activeCategory);

  return (
    <section id="goal" className="goal-section">
      {/* Header Section */}
      <div className="goal-header">
        <span className="goal-badge">
          <FaBullseye className="target-icon" /> Vision & Roadmap
        </span>
        <h2>🚀 My Career Goals</h2>
        <p className="goal-subtext">
          My strategic career roadmap—from mastering modern full-stack web engineering to architecting scalable, high-impact software systems.
        </p>

        {/* Stats Summary Banner */}
        <div className="goal-stats-banner">
          <div className="g-stat-item">
            <span className="g-stat-num">4</span>
            <span className="g-stat-lbl">Strategic Phases</span>
          </div>
          <div className="g-stat-divider" />
          <div className="g-stat-item">
            <span className="g-stat-num">MERN & AI</span>
            <span className="g-stat-lbl">Primary Focus</span>
          </div>
          <div className="g-stat-divider" />
          <div className="g-stat-item">
            <span className="g-stat-num">100%</span>
            <span className="g-stat-lbl">Growth Mindset</span>
          </div>
        </div>
      </div>

      {/* Controls: Category Tabs & View Switcher */}
      <div className="goal-controls">
        <div className="goal-category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`g-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="active-g-tab-indicator"
                  layoutId="activeGoalTab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="goal-view-toggle">
          <button
            className={`g-toggle-btn ${viewMode === "stage" ? "active" : ""}`}
            onClick={() => setViewMode("stage")}
          >
            <FaSlidersH /> 3D Stage Roadmap
          </button>
          <button
            className={`g-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <FaThLarge /> 3D Grid Matrix
          </button>
        </div>
      </div>

      {/* Mode 1: 3D Stage Roadmap View */}
      {viewMode === "stage" && (
        <div className="goal-stage-container">
          <motion.div className="goal-3d-roadmap" layout>
            <AnimatePresence mode="popLayout">
              {filteredGoals.map((goal, index) => {
                const IconComponent = goal.icon;

                return (
                  <motion.div
                    key={goal.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30, rotateY: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                    className="goal-3d-card"
                    whileHover={{ y: -8, scale: 1.02, rotateY: 3 }}
                    style={{
                      "--goal-accent": goal.color,
                      "--goal-shadow": goal.shadow
                    }}
                  >
                    {/* Top Row: Phase Tag & Readiness Pill */}
                    <div className="g-card-top">
                      <span className="g-phase-pill" style={{ background: goal.color }}>
                        {goal.phase}
                      </span>
                      <div className="g-readiness-badge">
                        <FaFire className="fire-badge-icon" /> Focus Level: {goal.readiness}%
                      </div>
                    </div>

                    {/* Icon & Title Group */}
                    <div className="g-card-header-group">
                      <div className="g-icon-wrapper" style={{ background: goal.color }}>
                        <IconComponent className="g-react-icon" />
                      </div>
                      <div className="g-header-text">
                        <h3>{goal.title}</h3>
                        <span className="g-tagline">{goal.tagline}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="g-card-description">{goal.description}</p>

                    {/* Focus Readiness Meter */}
                    <div className="g-meter-box">
                      <div className="g-meter-header">
                        <span>Target Focus & Preparedness</span>
                        <span>{goal.readiness}%</span>
                      </div>
                      <div className="g-meter-bar-bg">
                        <motion.div
                          className="g-meter-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${goal.readiness}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          style={{ background: goal.color }}
                        />
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="g-tags-row">
                      {goal.tags.map((tag, idx) => (
                        <span key={idx} className="g-tag">
                          <FaCheckCircle className="g-check-icon" /> {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Mode 2: 3D Grid Matrix View */}
      {viewMode === "grid" && (
        <motion.div className="goal-grid-matrix" layout>
          <AnimatePresence mode="popLayout">
            {filteredGoals.map((goal, index) => {
              const IconComponent = goal.icon;

              return (
                <motion.div
                  key={goal.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
                  className="goal-grid-card"
                  whileHover={{ y: -8, scale: 1.03 }}
                  style={{
                    "--goal-accent": goal.color,
                    "--goal-shadow": goal.shadow
                  }}
                >
                  <div className="g-card-top">
                    <span className="g-phase-pill" style={{ background: goal.color }}>
                      {goal.phase}
                    </span>
                    <div className="g-readiness-badge">
                      <FaFire className="fire-badge-icon" /> {goal.readiness}%
                    </div>
                  </div>

                  <div className="g-card-header-group">
                    <div className="g-icon-wrapper" style={{ background: goal.color }}>
                      <IconComponent className="g-react-icon" />
                    </div>
                    <div className="g-header-text">
                      <h3>{goal.title}</h3>
                      <span className="g-tagline">{goal.tagline}</span>
                    </div>
                  </div>

                  <p className="g-card-description">{goal.description}</p>

                  <div className="g-tags-row">
                    {goal.tags.map((tag, idx) => (
                      <span key={idx} className="g-tag">
                        <FaCheckCircle className="g-check-icon" /> {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* CTA Button */}
      <div className="goal-cta-wrapper">
        <a href="mailto:satyamkmishraa@gmail.com" className="hire-me-btn">
          <FaPaperPlane className="plane-icon" /> 💼 Hire Me / Let's Connect
        </a>
      </div>
    </section>
  );
}

export default Goal;
