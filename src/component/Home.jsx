import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" />
        <h2>
          Hi, I'm <span className="highlight">Satyam!</span>
        </h2>
        <h3 className="typewriter">
          <Typewriter
            words={['Web Developer', 'React Enthusiast', 'Tech Explorer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
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
