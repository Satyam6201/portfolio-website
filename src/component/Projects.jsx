// Projects.jsx
import React, { useState, useEffect } from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Amazon Clone",
    image: "/assets/amazon.webp",
    description:
      "A modern Amazon clone showcasing frontend skills with a clean UI, product listings, search, and cart features.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://amazon-clone-react-js-pi.vercel.app/",
    github: "https://github.com/Satyam6201/Amazon-Clone---React.js",
  },
  {
    title: "Quora Post",
    image: "/assets/Quora Post.jpg",
    description: "A Quora-like post-sharing platform using REST API.",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Quora-Post",
  },
  {
    title: "Digital Clock",
    image: "/assets/Digital-clock-App.png",
    description: "A modern digital clock with alarm, themes, and PWA support.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://digital-clock-app-12.vercel.app/",
    github: "https://github.com/Satyam6201/Digital-Clock-App",
  },
  {
    title: "Memory Card Game",
    image: "/assets/memory-card-game.avif",
    description: "A fun memory-matching card game with animations.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://memory-card-game-bice-zeta.vercel.app/",
    github: "https://github.com/Satyam6201/Memory-Card-Game",
  },
  {
    title: "Quiz App",
    image: "/assets/Quiz Game.jpg",
    description: "An interactive quiz app with API-based questions & scoring.",
    tech: ["React.js", "JavaScript", "API", "CSS"],
    liveDemo: "https://quiz-app-zeta-rust-62.vercel.app/",
    github: "https://github.com/Satyam6201/Quiz-App",
  },
  {
    title: "SaaS-Dashboard",
    image: "/assets/SaaS-Dashboard.png",
    description:
      "Enhanced SaaS Dashboard with a modern UI, animated sidebar, and dark mode fixes.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://saas-dashboard-teal.vercel.app/",
    github: "https://github.com/Satyam6201/SaaS-Dashboard",
  },
  {
    title: "Weather App",
    image: "/assets/weather-app.jpg",
    description: "A weather forecast app fetching real-time data from an API.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    liveDemo: "https://weather-app-seven-ashen-32.vercel.app/",
    github: "https://github.com/Satyam6201/Weather-App",
  },
  {
    title: "Tic-Tac-Toe-Game",
    image: "/assets/Tic Tac Toe.jpg",
    description:
      "Classic two-player Tic-Tac-Toe game with simple yet attractive UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://tic-tac-toe-game-xi-peach.vercel.app/",
    github: "https://github.com/Satyam6201/Tic-Tac-Toe-Game",
  },
  {
    title: "2D Brick Breaker Game",
    image: "/assets/2D Brick Breaker.png",
    description:
      "Enjoy breaking bricks with paddle control, increasing difficulty, and addictive gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://2-d-brick-breaker-game.vercel.app/",
    github: "https://github.com/Satyam6201/2D-Brick-Breaker-Game",
  },
];

// Extract unique tech tags for filter dropdown
const uniqueTech = [
  "All",
  ...new Set(projects.flatMap((p) => p.tech)),
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tech.includes(filter))
      );
    }
  }, [filter]);

  // Scroll animation for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects">
      <h2>🚀 Projects</h2>

      <div className="filter-container">
        <label htmlFor="tech-filter">Filter by Tech:</label>
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

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="img-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  💻 GitHub
                </a>
              </div>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
