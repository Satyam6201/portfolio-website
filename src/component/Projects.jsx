import React, { useState, useEffect } from "react";
import "../styles/projects.css";
import { FaExternalLinkAlt, FaGithub, FaSearch, FaTimes, FaStar } from "react-icons/fa";

const projects = [
  {
    id: "dentalva",
    title: "DentAIva",
    image: "/assets/dentalva.png",
    description: "AI-Powered healthcare SaaS with voice assistants for automated appointment handling, AI consultations, and role-based access control.",
    details: "Built a scalable AI-powered healthcare SaaS platform integrating the OpenAI API and Vapi AI for intelligent automated appointment handling and AI-assisted workflows. Implemented secure Clerk authentication, Role-Based Access Control (RBAC), and a scalable PostgreSQL/Prisma database architecture.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Vapi AI", "Tailwind CSS"],
    liveDemo: "https://dentwise-henna.vercel.app/",
    github: "https://github.com/Satyam6201/DentAIva",
    featured: true 
  },
  {
    id: "grocerin",
    title: "Grocerin",
    image: "/assets/Grocerin.jpg",
    description: "A full-stack e-commerce platform with product listings, cart, wishlist, user auth, seller dashboard, and secure USD checkout.",
    details: "Developed a complete grocery e-commerce web application with secure Stripe payment gateway integration and REST APIs for auth, cart management, and order tracking. Built Admin and Seller dashboards with JWT authentication and role-based access management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe API", "Cloudinary"],
    liveDemo: "https://grocerinx.vercel.app",
    github: "https://github.com/Satyam6201/Grocerin"
  },
  {
    id: "medi-connect",
    title: "Medi-Connect",
    image: "/assets/mediConnection.png",
    description: "Full-stack MERN healthcare platform with multi-role authentication (Patient, Doctor, Admin), online appointment booking, and dashboard management.",
    details: "Comprehensive healthcare portal supporting patient online booking, doctor schedule management, admin dashboard for platform analytics, and integrated Razorpay/Stripe payments for secure medical consultation fees.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe/Razorpay", "CSS"],
    liveDemo: "https://prescripto.vercel.app/",
    github: "https://github.com/Satyam6201/Medi-Connect",
    featured: true
  },
  {
    id: "employee-manager-pro",
    title: "Employee Manager Pro",
    image: "/assets/employee-manager.png", 
    description: "A professional Full-Stack HRMS featuring real-time employee tracking, secure NextAuth integration, and dynamic server-side filtering.",
    details: "An enterprise-grade Human Resource Management System built with Next.js 14 App Router, Prisma ORM, and PostgreSQL. Includes department analytics, shift tracking, NextAuth session handling, and Framer Motion micro-interactions.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "NextAuth", "Framer Motion", "Tailwind CSS"],
    liveDemo: "https://employee-manager-pro-chi.vercel.app/",
    github: "https://github.com/Satyam6201/employee-manager-pro",
    featured: true 
  },
  {
    id: "connectify",
    title: "Connectify",
    image: "/assets/Video and Message.jpg",
    description: "A real-time chat and video calling app built with MERN, featuring JWT auth, messaging, and modern UI themes.",
    details: "Real-time communication app using Socket.io for messaging, WebRTC audio/video call signaling, Zustand state management, and custom avatar profiles.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Zustand", "Tailwind CSS"],
    liveDemo: "https://github.com/Satyam6201/Connectify",
    github: "https://github.com/Satyam6201/Connectify",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    image: "/assets/amazon.webp",
    description: "A modern Amazon clone showcasing frontend skills with a clean UI, product listings, search, and cart features.",
    details: "Fully functional e-commerce frontend replicating Amazon's interface, featuring product filtering, cart persistence, ratings calculation, and responsive layout.",
    tech: ["React.js", "JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://amazon-clone-react-js-pi.vercel.app/",
    github: "https://github.com/Satyam6201/Amazon-Clone---React.js",
  },
  {
    id: "quora-post",
    title: "Quora Post Platform",
    image: "/assets/Quora Post.jpg",
    description: "A Quora-like post-sharing and Q&A platform built with REST API.",
    details: "RESTful application for posting questions, adding answers, voting on responses, and filtering posts by tags.",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    liveDemo: "https://github.com/Satyam6201/Quora-Post",
    github: "https://github.com/Satyam6201/Quora-Post",
  },
  {
    id: "digital-clock",
    title: "Digital Clock App",
    image: "/assets/Digital-clock-App.png",
    description: "A modern digital clock with alarm, dynamic themes, and PWA support.",
    details: "Interactive clock web app featuring customized timezone toggling, alarm sound notifications, stopwatch, and dark/light color themes.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://digital-clock-app-12.vercel.app/",
    github: "https://github.com/Satyam6201/Digital-Clock-App",
  },
  {
    id: "memory-card",
    title: "Memory Card Game",
    image: "/assets/memory-card-game.avif",
    description: "A fun memory-matching card game with smooth animations and high-score tracking.",
    details: "Gamified React application testing recall speed with flipped card animations, move counter, and timer.",
    tech: ["React.js", "JavaScript", "CSS"],
    liveDemo: "https://memory-card-game-bice-zeta.vercel.app/",
    github: "https://github.com/Satyam6201/Memory-Card-Game",
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    image: "/assets/Quiz Game.jpg",
    description: "An interactive quiz app with API-based questions & live score tracking.",
    details: "Category-driven trivia game pulling dynamic questions from OpenTDB API with countdown timer and performance analytics.",
    tech: ["React.js", "JavaScript", "REST API", "CSS"],
    liveDemo: "https://quiz-app-zeta-rust-62.vercel.app/",
    github: "https://github.com/Satyam6201/Quiz-App",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard UI",
    image: "/assets/SaaS-Dashboard.png",
    description: "Enhanced SaaS Dashboard with a modern UI, animated sidebar, and analytics widgets.",
    details: "Admin panel layout equipped with interactive chart visualizations, user management tables, and quick action bars.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://saas-dashboard-teal.vercel.app/",
    github: "https://github.com/Satyam6201/SaaS-Dashboard",
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    image: "/assets/weather-app.jpg",
    description: "A weather forecast app fetching real-time data from an API with location search.",
    details: "Fetches live temperature, humidity, wind velocity, and 5-day weather predictions using OpenWeatherMap API.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://weather-app-seven-ashen-32.vercel.app/",
    github: "https://github.com/Satyam6201/Weather-App",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    image: "/assets/Tic Tac Toe.jpg",
    description: "Classic two-player Tic-Tac-Toe game with clean UI and win streak counters.",
    details: "Responsive browser game with move history, reset options, and score counter.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://tic-tac-toe-game-xi-peach.vercel.app/",
    github: "https://github.com/Satyam6201/Tic-Tac-Toe-Game",
  },
  {
    id: "brick-breaker",
    title: "2D Brick Breaker Game",
    image: "/assets/2D Brick Breaker.png",
    description: "Enjoy breaking bricks with paddle control, increasing difficulty, and sound effects.",
    details: "HTML5 Canvas arcade game with collision detection physics, score multiplier, and lives management.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    liveDemo: "https://2-d-brick-breaker-game.vercel.app/",
    github: "https://github.com/Satyam6201/2D-Brick-Breaker-Game",
  },
];

const uniqueTech = [
  "All",
  ...new Set(projects.flatMap((p) => p.tech)),
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let result = projects;

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

    setFilteredProjects(result);
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="projects">
      <h2>🚀 Featured Projects</h2>
      <p className="projects-subtext">
        Explore my recent full-stack SaaS platforms, web applications, open-source projects, and interactive tools.
      </p>

      <div className="filter-search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by name or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="filter-container">
          <label htmlFor="tech-filter">Tech Stack:</label>
          <select
            id="tech-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {uniqueTech.map((tech, i) => (
              <option key={i} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="projects-container">
        {filteredProjects.length === 0 ? (
          <div className="no-projects">
            <p>No projects match your filter query. Try selecting another technology!</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {project.featured && (
                <div className="featured-badge">
                  <FaStar /> Featured
                </div>
              )}
              <div className="img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="overlay">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="tech extra">+{project.tech.length - 5}</span>
                  )}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>

                <button
                  className="details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-img"
            />

            <h3>{selectedProject.title}</h3>

            <p className="modal-description">
              {selectedProject.details || selectedProject.description}
            </p>

            <div className="modal-tech-list">
              <h4>Technologies Used:</h4>
              <div className="tech-stack">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                <FaExternalLinkAlt /> Open Live App
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub /> View Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;