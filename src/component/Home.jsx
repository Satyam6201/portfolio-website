import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" />
        <h2>
          Hello, I'm <span className="highlight">Satyam!</span>
        </h2>
        <h3 className="typewriter">
          <Typewriter
            words={['Web Developer', 'React Enthusiast', 'Tech Innovator']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
        <p>
          I'm a passionate <strong>Web Developer</strong> specializing in <strong>React.js, JavaScript</strong>, and modern <strong>Backend Technologies</strong>. I craft modern, interactive, and performance-optimized web experiences. From creating responsive UIs to building dynamic, feature-rich applications, I’m driven by innovation and solving real-world problems with code.
        </p>
        
        <div className="cta-section">
          <h4>Let's Build Something Great Together!</h4>
          <p>If you're looking for a dedicated developer to bring your ideas to life, I'm here to help. Feel free to connect with me!</p>
          <a href="#projects" className="home-btn">See My Work</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
            LinkedIn
          </a>
          <a href="https://github.com/Satyam6201" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
