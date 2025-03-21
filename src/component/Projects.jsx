import React from "react";
import "../styles/projects.css";

const projects = [
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
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Digital-Clock-App",
  },
  {
    title: "Memory Card Game",
    image: "/assets/memory-card-game.avif",
    description: "A fun memory-matching card game with animations.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Memory-Card-Game",
  },
  {
    title: "Quiz App",
    image: "/assets/Quiz Game.jpg",
    description: "An interactive quiz app with API-based questions & scoring.",
    tech: ["React.js", "JavaScript", "API", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Quiz-App",
  },
  {
    title: "SaaS-Dashboard",
    image: "/assets/SaaS-Dashboard.png",
    description: "Enhanced SaaS Dashboard with modern UI, animated sidebar, dark mode fixes, and improved charts.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/SaaS-Dashboard",
  },
  {
    title: "Weather App",
    image: "/assets/weather-app.jpg",
    description: "A weather forecast app fetching real-time data from an API.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Weather-App",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>🚀 Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn">🔗 Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">💻 GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
