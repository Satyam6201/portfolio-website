import React from "react";
import "../styles/techstack.css";

function TechStack() {
  const techs = [
    { name: "Java", img: "/assets/java-svgrepo-com.svg", feature: "OOPs, DSA, Backend APIs" },
    { name: "HTML5", img: "/assets/html-5-svgrepo-com.svg", feature: "Semantic structure for web pages" },
    { name: "CSS3", img: "/assets/css-3-svgrepo-com.svg", feature: "Modern responsive layouts & animations" },
    { name: "JavaScript", img: "/assets/javascript-svgrepo-com.svg", feature: "Logic, DOM, and interactivity" },
    { name: "Bootstrap", img: "/assets/bootstrap-svgrepo-com.svg", feature: "Rapid UI development" },
    { name: "Tailwind CSS", img: "/assets/tailwind-css-svgrepo-com.svg", feature: "Utility-first styling" },
    { name: "React.js", img: "/assets/reactjs-svgrepo-com.svg", feature: "Component-driven UI & Hooks" },
    { name: "Node.js", img: "/assets/nodejs-icon-svgrepo-com.svg", feature: "Backend services & APIs" },
    { name: "Express.js", img: "/assets/express-js.png", feature: "Routing & middleware for backend" },
    { name: "MongoDB", img: "/assets/database-svgrepo-com.svg", feature: "NoSQL DB for scalable apps" },
    { name: "MySQL", img: "/assets/mysql-svgrepo-com.svg", feature: "Relational DB & schema design" },
    { name: "Git & GitHub", img: "/assets/github-142-svgrepo-com.svg", feature: "Version control & collaboration" },
  ];

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <h2>💻 My Tech Stack</h2>
        <p className="sub-text">A curated list of technologies I work with to bring ideas to life.</p>
        <p className="tagline">✨ Crafting modern web experiences with passion & precision.</p>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.img} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
              <span className="tech-feature">{tech.feature}</span>
            </div>
          ))}
        </div>

        <p className="footer-quote">📌 “Building for the web, one pixel at a time.”</p>
      </div>
    </section>
  );
}

export default TechStack;
