import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src="public/image.jpg" alt="Satyam Kumar Mishra" />
        <h2>Hi, I'm <span className="highlight">Satyam!</span></h2>
        <p>
          A passionate <strong>Web Developer</strong> skilled in <strong>React.js, JavaScript, and Backend Technologies</strong>.
          I love building modern, responsive, and interactive web applications.
        </p>
        <a href="#projects" className="home-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
