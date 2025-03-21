import React from "react";
import "../styles/techstack.css";

function TechStack() {
  const techs = [
    { name: "JAVA", img: "public/assets/java-svgrepo-com.svg"},
    { name: "HTML", img: "public/assets/html-5-svgrepo-com.svg" },
    { name: "CSS", img: "public/assets/css-3-svgrepo-com.svg" },
    { name: "JavaScript", img: "public/assets/javascript-svgrepo-com.svg" },
    { name: "Bootstrap", img: "public/assets/bootstrap-svgrepo-com.svg" },
    { name: "Tailwind CSS", img: "public/assets/tailwind-css-svgrepo-com.svg" },
    { name: "React.js", img: "public/assets/reactjs-svgrepo-com.svg" },
    { name: "Node.js", img: "public/assets/nodejs-icon-svgrepo-com.svg" },
    { name: "Express.js", img: "public/assets/express-js.png" },
    { name: "MongoDB", img: "public/assets/database-svgrepo-com.svg" },
    { name: "MySQL", img: "public/assets/mysql-svgrepo-com.svg" },
    { name: "Git & GitHub", img: "public/assets/github-142-svgrepo-com.svg" },
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
