import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Quora Post",
    image: "/assets/Quora Post.jpg",
    description: "A Quora-like post-sharing platform using REST API.",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/Satyam6201/Quora-Post"
  },
  {
    title: "Digital Clock",
    image: "/assets/Digital-clock-App.png",
    description: "A modern digital clock with alarm, themes, and PWA support.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://digital-clock-app-12.vercel.app/",
    github: "https://github.com/Satyam6201/Digital-Clock-App"
  },
  {
    title: "Memory Card Game",
    image: "/assets/memory-card-game.avif",
    description: "A fun memory-matching card game with animations.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://memory-card-game-bice-zeta.vercel.app/",
    github: "https://github.com/Satyam6201/Memory-Card-Game"
  },
  {
    title: "Quiz App",
    image: "/assets/Quiz Game.jpg",
    description: "An interactive quiz app with API-based questions & scoring.",
    tech: ["React.js", "JavaScript", "API", "CSS"],
    liveDemo: "https://quiz-app-zeta-rust-62.vercel.app/",
    github: "https://github.com/Satyam6201/Quiz-App"
  },
  {
    title: "SaaS-Dashboard",
    image: "/assets/SaaS-Dashboard.png",
    description: "Enhanced SaaS Dashboard with a modern UI, animated sidebar, dark mode fixes.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://saas-dashboard-teal.vercel.app/",
    github: "https://github.com/Satyam6201/SaaS-Dashboard"
  },
  {
    title: "Weather App",
    image: "/assets/weather-app.jpg",
    description: "A weather forecast app fetching real-time data from an API.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    liveDemo: "https://weather-app-seven-ashen-32.vercel.app/",
    github: "https://github.com/Satyam6201/Weather-App"
  },
  {
    title: "Tic-Tac-Toe-Game",
    image: "/assets/Tic Tac Toe.jpg",
    description: "Players take turns marking squares; the first to align three wins.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://tic-tac-toe-game-xi-peach.vercel.app/",
    github: "https://github.com/Satyam6201/Tic-Tac-Toe-Game"
  },
  {
    title: "2D Brick Breaker Game",
    image: "/assets/2D Brick Breaker.png",
    description: "Fun for all ages with increasing excitement as more players join! 🚀🎮.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://2-d-brick-breaker-game.vercel.app/",
    github: "https://github.com/Satyam6201/2D-Brick-Breaker-Game"
  },
  {
    title: "Whack-a-mole",
    image: "/assets/Whack a Mole.jpg",
    description: " players click moles appearing randomly in a grid to score points🎯🎮🚀.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://whack-a-mole-game-one.vercel.app/",
    github: "https://github.com/Satyam6201/Whack-a-mole-Game",
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
