import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaSearch,
  FaTimes,
  FaStar,
  FaSlidersH,
  FaThLarge,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
  FaCode,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import "../styles/projects.css";

const projects = [
  {
    id: "mockmate-ai",
    title: "MockMate AI",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/mockmate-ai.jpg",
    description: "End-to-end RAG mock interview system featuring PDF resume chunking, FAISS vector embeddings, real-time AI scoring, and multi-gateway monetization.",
    details: "Architected a full-stack AI mock interview platform powered by Node.js, Express, MongoDB Atlas, and React. Engineered an in-memory RAG pipeline using OpenAI text-embedding-3-small and FAISS vector index to analyze candidate resumes and generate dynamically grounded interview questions. Features sub-80ms semantic retrieval, real-time multi-dimensional scoring (correctness, confidence, communication), Multer file uploads, zero-trust JWT token rotation, Stripe/Razorpay payment processing, and containerized deployment.",
    architecture: {
      diagram: "Client (React 19) ➔ Express Gateway ➔ FAISS In-Memory Vector Store ➔ OpenAI GPT-4o API ➔ MongoDB Atlas ➔ Stripe Webhooks",
      tradeoffs: [
        { decision: "FAISS In-Memory vs Pinecone", reason: "Sub-millisecond retrieval latency for single-tenant resume embeddings without external network round-trips." },
        { decision: "Zustand vs Redux Toolkit", reason: "85% reduction in boilerplate and zero-overhead bundle size for real-time WebSocket state." },
        { decision: "HTTP-Only Cookie JWT vs LocalStorage", reason: "Eliminates XSS attack vectors and protects token rotation." }
      ],
      metrics: "Sub-80ms semantic search latency, 1536-dim vector indexing, 99.9% API uptime."
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI / RAG", "FAISS Vector", "Redis", "Tailwind CSS", "JWT", "Stripe", "Vercel / Render"],
    liveDemo: "https://mock-mate-ai-flame.vercel.app",
    github: "https://github.com/Satyam6201/MockMate-AI",
    featured: true
  },
  {
    id: "dentalva",
    title: "DentAIva",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/dentalva.png",
    description: "Healthcare SaaS platform integrating AI voice agents for automated appointment triage, consultation pipelines, and role-based access control.",
    details: "Built an enterprise healthcare SaaS integrating the OpenAI API and Vapi AI for automated voice scheduling and patient triage. Engineered secure Clerk authentication with multi-role RBAC (Patient, Clinic Staff, Doctor) and structured PostgreSQL schema migrations using Prisma ORM with connection pooling.",
    architecture: {
      diagram: "Client (Next.js 15) ➔ Vapi AI Voice Agent ➔ Clerk Session Sync ➔ PostgreSQL (Prisma ORM) ➔ Server Actions",
      tradeoffs: [
        { decision: "PostgreSQL (Prisma) vs MongoDB", reason: "Strict relational integrity for medical appointments and billing schemas." },
        { decision: "Next.js Server Actions vs REST endpoints", reason: "Direct type-safe data mutations eliminating manual client-side API contracts." }
      ],
      metrics: "Automated voice triage handling with zero scheduling race conditions."
    },
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Vapi AI", "Tailwind CSS"],
    liveDemo: "https://dentwise-henna.vercel.app",
    github: "https://github.com/Satyam6201/DentAIva",
    featured: true
  },
  {
    id: "grocerin",
    title: "Grocerin",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/Grocerin.jpg",
    description: "Multi-tenant e-commerce platform with real-time inventory management, seller analytics dashboard, and secure Stripe checkout workflows.",
    details: "Developed a full-stack grocery e-commerce web application with Stripe payment gateway integration and REST APIs for authentication, cart synchronization, and order lifecycle tracking. Built seller analytics dashboards with JWT authentication and granular role-based permissions.",
    architecture: {
      diagram: "Client (React 19) ➔ Express REST Gateway ➔ MongoDB Aggregations ➔ Stripe Webhooks ➔ Cloudinary Media CDN",
      tradeoffs: [
        { decision: "Stripe Webhooks vs Client Callbacks", reason: "Guarantees reliable order fulfillment independent of client network interruptions." }
      ],
      metrics: "Optimized MongoDB aggregation pipelines delivering sub-120ms product query responses."
    },
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe API", "Cloudinary"],
    liveDemo: "https://grocerinx.vercel.app",
    github: "https://github.com/Satyam6201/Grocerin",
    featured: true
  },
  {
    id: "medi-connect",
    title: "Medi-Connect",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/mediConnection.png",
    description: "Enterprise healthcare appointment booking portal featuring multi-role authentication (Patient, Doctor, Admin) and Razorpay/Stripe payments.",
    details: "Comprehensive healthcare portal supporting patient online booking, doctor availability scheduling, admin dashboard for platform analytics, and integrated Razorpay/Stripe payments for consultation fees.",
    architecture: {
      diagram: "Client (React 19) ➔ Node.js API ➔ MongoDB Atlas ➔ Razorpay/Stripe Gateway",
      tradeoffs: [
        { decision: "Multi-Role JWT Middleware vs Static Routes", reason: "Enforces zero-trust authorization at the API route level." }
      ],
      metrics: "Zero double-booking conflicts via atomic database reservation locks."
    },
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe/Razorpay", "CSS"],
    liveDemo: "https://prescripto.vercel.app",
    github: "https://github.com/Satyam6201/Medi-Connect",
    featured: true
  },
  {
    id: "employee-manager-pro",
    title: "Employee Manager Pro",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/employee-manager.png",
    description: "Enterprise Human Resource Management System (HRMS) featuring shift tracking, department analytics, and NextAuth session handling.",
    details: "An enterprise-grade Human Resource Management System built with Next.js 14 App Router, Prisma ORM, and PostgreSQL. Includes department analytics, shift tracking, NextAuth session handling, and Framer Motion micro-interactions.",
    architecture: {
      diagram: "Client (Next.js 14) ➔ NextAuth Handler ➔ Prisma ORM ➔ PostgreSQL Database",
      tradeoffs: [
        { decision: "NextAuth vs Custom Session", reason: "Standardized OAuth & credential session handling with CSRF protection." }
      ],
      metrics: "Instant server-side filtered queries over complex employee rosters."
    },
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "NextAuth", "Framer Motion", "Tailwind CSS"],
    liveDemo: "https://employee-manager-pro-chi.vercel.app",
    github: "https://github.com/Satyam6201/employee-manager-pro",
    featured: true
  },
  {
    id: "connectify",
    title: "Connectify",
    tier: 2,
    tierLabel: "Real-Time & WebRTC Application",
    image: "/assets/Video and Message.jpg",
    description: "Real-time communication app built with MERN, featuring WebRTC audio/video call signaling, Socket.io messaging, and JWT authentication.",
    details: "Real-time communication app using Socket.io for messaging, WebRTC audio/video call signaling, Zustand state management, and custom avatar profiles.",
    architecture: {
      diagram: "Client (React + WebRTC) ➔ Socket.io Signaling Server ➔ Redis PubSub ➔ MongoDB Atlas",
      tradeoffs: [
        { decision: "Socket.io + WebRTC vs HTTP Polling", reason: "Sub-50ms peer-to-peer audio/video streaming latency." }
      ],
      metrics: "Peer-to-peer encrypted media streams with instant signaling recovery."
    },
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redis", "Socket.io", "WebRTC", "Zustand", "Tailwind CSS"],
    liveDemo: "https://connectify-videocall.vercel.app",
    github: "https://github.com/Satyam6201/Connectify",
    featured: false
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard UI",
    tier: 2,
    tierLabel: "Real-Time & WebRTC Application",
    image: "/assets/SaaS-Dashboard.png",
    description: "Interactive analytics dashboard equipped with chart visualizations, user management tables, and quick action telemetry.",
    details: "Admin panel layout equipped with interactive chart visualizations, user management tables, and quick action bars.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://saas-dashboard-teal.vercel.app",
    github: "https://github.com/Satyam6201/SaaS-Dashboard",
    featured: false
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    tier: 2,
    tierLabel: "Real-Time & WebRTC Application",
    image: "/assets/amazon.webp",
    description: "Full-featured e-commerce frontend replicating Amazon's interface, featuring product filtering, cart persistence, and rating metrics.",
    details: "Fully functional e-commerce frontend replicating Amazon's interface, featuring product filtering, cart persistence, ratings calculation, and responsive layout.",
    tech: ["React.js", "JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://amazon-clone-react-js-pi.vercel.app",
    github: "https://github.com/Satyam6201/Amazon-Clone---React.js",
    featured: false
  },
  {
    id: "quora-post",
    title: "Quora Post Platform",
    tier: 2,
    tierLabel: "Real-Time & WebRTC Application",
    image: "/assets/Quora Post.jpg",
    description: "RESTful Q&A forum platform with post creation, answer threads, voting metrics, and tag-based filtering.",
    details: "RESTful application for posting questions, adding answers, voting on responses, and filtering posts by tags.",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    liveDemo: "https://github.com/Satyam6201/Quora-Post",
    github: "https://github.com/Satyam6201/Quora-Post",
    featured: false
  },
  {
    id: "digital-clock",
    title: "Digital Clock App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/Digital-clock-App.png",
    description: "Interactive clock web app featuring customized timezone toggling, alarm sound notifications, stopwatch, and dynamic themes.",
    details: "Interactive clock web app featuring customized timezone toggling, alarm sound notifications, stopwatch, and dark/light color themes.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://digital-clock-app-12.vercel.app",
    github: "https://github.com/Satyam6201/Digital-Clock-App"
  },
  {
    id: "memory-card",
    title: "Memory Card Game",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/memory-card-game.avif",
    description: "Gamified React application testing recall speed with flipped card animations, move counter, and timer.",
    details: "Gamified React application testing recall speed with flipped card animations, move counter, and timer.",
    tech: ["React.js", "JavaScript", "CSS"],
    liveDemo: "https://memory-card-game-bice-zeta.vercel.app",
    github: "https://github.com/Satyam6201/Memory-Card-Game"
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/Quiz Game.jpg",
    description: "Category-driven trivia game pulling dynamic questions from OpenTDB API with countdown timer and performance analytics.",
    details: "Category-driven trivia game pulling dynamic questions from OpenTDB API with countdown timer and performance analytics.",
    tech: ["React.js", "JavaScript", "REST API", "CSS"],
    liveDemo: "https://quiz-app-zeta-rust-62.vercel.app",
    github: "https://github.com/Satyam6201/Quiz-App"
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/weather-app.jpg",
    description: "Weather forecast app fetching real-time data from an API with location search and 5-day predictive forecasts.",
    details: "Fetches live temperature, humidity, wind velocity, and 5-day weather predictions using OpenWeatherMap API.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://weather-app-seven-ashen-32.vercel.app",
    github: "https://github.com/Satyam6201/Weather-App"
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/Tic Tac Toe.jpg",
    description: "Classic two-player browser game with move history, reset options, and win streak tracking.",
    details: "Responsive browser game with move history, reset options, and score counter.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://tic-tac-toe-game-xi-peach.vercel.app",
    github: "https://github.com/Satyam6201/Tic-Tac-Toe-Game"
  },
  {
    id: "brick-breaker",
    title: "2D Brick Breaker Game",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/2D Brick Breaker.png",
    description: "HTML5 Canvas arcade game with collision detection physics, score multiplier, and paddle mechanics.",
    details: "HTML5 Canvas arcade game with collision detection physics, score multiplier, and lives management.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    liveDemo: "https://2-d-brick-breaker-game.vercel.app",
    github: "https://github.com/Satyam6201/2D-Brick-Breaker-Game"
  }
];

const uniqueTech = ["All", ...new Set(projects.flatMap((p) => p.tech))];

const projectTiers = [
  { label: "All Work", key: "all" },
  { label: "Tier 1: Flagship Production", key: "tier1" },
  { label: "Tier 2: Real-Time & SaaS", key: "tier2" },
  { label: "AI & RAG Systems", key: "ai" },
  { label: "Next.js & SQL", key: "next" },
  { label: "Tier 3: Early Prototypes", key: "tier3" },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewMode, setViewMode] = useState("grid");
  const [stageIndex, setStageIndex] = useState(0);
  const [showArchived, setShowArchived] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    let result = projects;

    if (selectedCategory === "tier1") {
      result = result.filter((p) => p.tier === 1);
    } else if (selectedCategory === "tier2") {
      result = result.filter((p) => p.tier === 2);
    } else if (selectedCategory === "tier3") {
      result = result.filter((p) => p.tier === 3);
    } else if (selectedCategory === "ai") {
      result = result.filter((p) => p.tech.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("rag") || t.toLowerCase().includes("vapi")));
    } else if (selectedCategory === "next") {
      result = result.filter((p) => p.tech.some(t => t.toLowerCase().includes("next") || t.toLowerCase().includes("postgres") || t.toLowerCase().includes("prisma")));
    }

    if (filter !== "All") {
      result = result.filter((p) => p.tech.includes(filter));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory === "all" && !showArchived && !searchQuery.trim() && filter === "All") {
      result = result.filter(p => p.tier !== 3);
    }

    setFilteredProjects(result);
    setStageIndex(0);
  }, [filter, selectedCategory, searchQuery, showArchived]);

  const handleNext = () => setStageIndex((prev) => (prev + 1) % filteredProjects.length);
  const handlePrev = () => setStageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header-wrap">
        <span className="shimmer-badge">
          <FaProjectDiagram /> Proven Track Record & Production Architecture
        </span>
        <h2>Featured Systems & Engineering Projects</h2>
        <p className="projects-subtext">
          Curated full-stack SaaS platforms, RAG vector retrieval engines, enterprise portals, and real-time distributed applications.
        </p>
      </div>

      <div className="project-category-pills">
        {projectTiers.map((cat) => (
          <button
            key={cat.key}
            className={`skill-tab ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => { setSelectedCategory(cat.key); setFilter("All"); }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="filter-search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by name, keyword, or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}><FaTimes /></button>
          )}
        </div>
        <div className="filter-container">
          <label htmlFor="tech-filter">Filter by Tech:</label>
          <select id="tech-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            {uniqueTech.map((tech, i) => <option key={i} value={tech}>{tech}</option>)}
          </select>
        </div>
      </div>

      <div className="projects-view-switcher">
        <button className={`pv-toggle-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
          <FaThLarge /> Matrix Grid View
        </button>
        <button className={`pv-toggle-btn ${viewMode === "stage" ? "active" : ""}`} onClick={() => setViewMode("stage")}>
          <FaSlidersH /> 3D Stage Carousel
        </button>
      </div>

      {viewMode === "grid" && (
        <motion.div className="projects-container" layout>
          {filteredProjects.length === 0 ? (
            <div className="no-projects"><p>No projects match your filter. Try another tech!</p></div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.05 }}
                  className="project-card glow-card-hover"
                >
                  <div className="project-card-top-badges">
                    <span className={`tier-badge tier-${project.tier}`}>
                      {project.tier === 1 ? <FaStar /> : <FaCode />} {project.tierLabel}
                    </span>
                  </div>
                  <div className="img-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                    <div className="overlay"><p>{project.description}</p></div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="tech-stack">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="tech"
                          style={{ cursor: "pointer" }}
                          title={`Filter by ${tech}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setFilter(tech);
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && <span className="tech extra">+{project.tech.length - 5}</span>}
                    </div>
                    <div className="project-links">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn"><FaExternalLinkAlt /> Live Demo</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn"><FaGithub /> GitHub</a>
                    </div>
                    <button className="details-btn" onClick={() => setSelectedProject(project)}>
                      Architecture & Deep Dive Case Study
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
      )}

      {viewMode === "stage" && (
        <div className="projects-stage-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {filteredProjects.length === 0 ? (
            <div className="no-projects"><p>No projects match your filter. Try another tech!</p></div>
          ) : (
            <>
              <div className="projects-3d-track">
                {filteredProjects.map((project, index) => {
                  const count = filteredProjects.length;
                  let offset = (index - stageIndex + count) % count;
                  if (offset > count / 2) offset -= count;

                  let posClass = "hidden-stage";
                  if (offset === 0) posClass = "active-stage";
                  else if (offset === -1 || (stageIndex === 0 && index === count - 1)) posClass = "prev-stage";
                  else if (offset === 1 || (stageIndex === count - 1 && index === 0)) posClass = "next-stage";

                  return (
                    <div key={project.id} className={`project-stage-card ${posClass}`} onClick={() => posClass === "active-stage" ? setSelectedProject(project) : setStageIndex(index)}>
                      <div className="project-card-top-badges">
                        <span className={`tier-badge tier-${project.tier}`}>
                          {project.tier === 1 ? <FaStar /> : <FaCode />} {project.tierLabel}
                        </span>
                      </div>
                      <img src={project.image} alt={project.title} className="stage-card-image" />
                      <div className="stage-card-body">
                        <div className="stage-card-title-row">
                          <h3>{project.title}</h3>
                        </div>
                        <p className="stage-card-desc">{project.description}</p>
                        <div className="tech-stack">
                          {project.tech.slice(0, 4).map((t, i) => <span key={i} className="tech">{t}</span>)}
                          {project.tech.length > 4 && <span className="tech extra">+{project.tech.length - 4}</span>}
                        </div>
                        <div className="stage-card-links">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn" onClick={e => e.stopPropagation()}><FaExternalLinkAlt /> Live</a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn" onClick={e => e.stopPropagation()}><FaGithub /> GitHub</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="stage-nav-controls">
                <button className="stage-nav-btn" onClick={handlePrev}><FaChevronLeft /></button>
                <div className="stage-dots">
                  {filteredProjects.map((_, i) => (
                    <button key={i} className={`dot ${i === stageIndex ? "active" : ""}`} onClick={() => setStageIndex(i)} />
                  ))}
                </div>
                <button className="stage-nav-btn" onClick={handleNext}><FaChevronRight /></button>
              </div>
            </>
          )}
        </div>
      )}

      {selectedCategory === "all" && (
        <div className="archive-toggle-wrapper">
          <button className="archive-toggle-btn" onClick={() => setShowArchived(p => !p)}>
            {showArchived ? <FaChevronUp /> : <FaChevronDown />}
            <span>{showArchived ? "Hide Early Prototypes & Mini-Apps" : "View Early Prototypes & Mini-Apps (6 Projects)"}</span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="project-modal" initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}><FaTimes /></button>
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              
              <div className="modal-header-row">
                <h3>{selectedProject.title}</h3>
                <span className={`tier-badge tier-${selectedProject.tier}`}>
                  {selectedProject.tierLabel}
                </span>
              </div>

              <p className="modal-description">{selectedProject.details || selectedProject.description}</p>
              
              {selectedProject.architecture && (
                <div className="modal-architecture-box">
                  <div className="arch-header">
                    <FaServer />
                    <h4>System Architecture & Flow:</h4>
                  </div>
                  <div className="arch-flow-diagram">
                    <code>{selectedProject.architecture.diagram}</code>
                  </div>

                  <div className="arch-tradeoffs-section">
                    <h5>Key Engineering Decisions & Trade-Offs:</h5>
                    <div className="tradeoffs-list">
                      {selectedProject.architecture.tradeoffs.map((t, idx) => (
                        <div key={idx} className="tradeoff-item">
                          <strong>{t.decision}:</strong> <span>{t.reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="arch-metrics-footer">
                    <span>Performance Benchmarks: <strong>{selectedProject.architecture.metrics}</strong></span>
                  </div>
                </div>
              )}

              <div className="modal-tech-list">
                <h4>Technologies & Tools:</h4>
                <div className="tech-stack">
                  {selectedProject.tech.map((t, i) => <span key={i} className="tech">{t}</span>)}
                </div>
              </div>

              <div className="modal-actions">
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn"><FaExternalLinkAlt /> Open Live Application</a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-btn"><FaGithub /> View Source Code</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;