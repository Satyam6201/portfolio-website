import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="about-intro">
        I am a passionate <strong>Web Developer</strong> with expertise in **HTML, CSS, JavaScript, React.js, and Full-Stack Development**.
        I specialize in creating **visually appealing, responsive, and efficient web applications**.
      </p>

      <div className="about-content">
        <div className="about-section">
          <h3>🎓 Academic Excellence</h3>
          <p>
            - **1st Rank** in university exams (1st, 2nd, and 3rd semesters)  
            - **3rd Rank** in 4th and 5th semesters  
            - Strong foundation in **Data Structures, Algorithms, and Web Development**
          </p>
        </div>

        <div className="about-section">
          <h3>💡 What Drives Me?</h3>
          <ul>
            <li><span>🚀</span> Building **user-friendly & modern** web applications</li>
            <li><span>💻</span> Learning & implementing **cutting-edge technologies**</li>
            <li><span>🔍</span> Problem-solving with **clean and efficient code**</li>
            <li><span>🤝</span> Collaborating on **exciting projects**</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>⚡ My Core Strengths</h3>
          <ul>
            <li><span>✔️</span> React.js, JavaScript, Node.js, Express.js</li>
            <li><span>✔️</span> REST APIs & Database Management (MongoDB, MySQL)</li>
            <li><span>✔️</span> Problem-Solving & Algorithm Optimization</li>
            <li><span>✔️</span> Responsive Design & UI/UX</li>
          </ul>
        </div>
        
        <div className="about-section">
          <h3>🚀 Opportunities</h3>
          <p>
          I'm always open to **new opportunities**, whether it's an **internship or a full-time role** in web development.  
          Let's connect and build something amazing together! 🚀 
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;

