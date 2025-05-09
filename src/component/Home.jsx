import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub} from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content fade-in">
        <img src="/assets/image.jpg" alt="Satyam Kumar Mishra" />
        <h2>
          Hi, I'm <span className="highlight">Satyam Kumar Mishra</span>
        </h2>
        <h3 className="typewriter">
          <Typewriter
            words={['Full-Stack Web Developer', 'React.js Specialist', 'Problem Solver']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h3>

        <p>
          I’m a passionate <strong>Full-Stack Developer</strong> with a strong foundation in 
          <strong> React.js, JavaScript, and Backend technologies</strong>. I specialize in building dynamic, scalable, and performance-driven applications. 
          From responsive user interfaces to real-world problem-solving systems, my goal is to deliver seamless user experiences and elegant code.
        </p>

        <div className="cta-section">
          <h4>Let’s Collaborate!</h4>
          <p>Open to exciting internships, freelance projects, or tech roles. Let’s build innovative products together.</p>
          <a href="#projects" className="home-btn">Explore My Projects</a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Satyam6201"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
