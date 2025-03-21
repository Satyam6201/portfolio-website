import React from "react";
import "../styles/techstack.css";

function TechStack() {
  const techs = [
    { name: "JAVA", img: "/assets/java-svgrepo-com.svg"},
    { name: "HTML", img: "/assets/html-5-svgrepo-com.svg" },
    { name: "CSS", img: "/assets/css-3-svgrepo-com.svg" },
    { name: "JavaScript", img: "/assets/javascript-svgrepo-com.svg" },
    { name: "Bootstrap", img: "/assets/bootstrap-svgrepo-com.svg" },
    { name: "Tailwind CSS", img: "/assets/tailwind-css-svgrepo-com.svg" },
    { name: "React.js", img: "/assets/reactjs-svgrepo-com.svg" },
    { name: "Node.js", img: "/assets/nodejs-icon-svgrepo-com.svg" },
    { name: "Express.js", img: "/assets/express-js.png" },
    { name: "MongoDB", img: "/assets/database-svgrepo-com.svg" },
    { name: "MySQL", img: "/assets/mysql-svgrepo-com.svg" },
    { name: "Git & GitHub", img: "/assets/github-142-svgrepo-com.svg" },
  ];

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <h2>🚀 My Tech Stack</h2>
        <p className="sub-text">Tools & technologies I use to build amazing projects.</p>
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.img} alt={tech.name} className="tech-icon" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
