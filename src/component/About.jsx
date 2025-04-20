import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="about-intro">
        I’m a dedicated <strong>Full-Stack Web Developer</strong> driven by curiosity and creativity.
        I specialize in building <strong>dynamic, scalable</strong> web applications using **React.js, Node.js, MongoDB, and Express.js**.
        Whether it's crafting modern UIs or optimizing backend performance—I'm all in!
      </p>

      <div className="about-content">
        <div className="about-section">
          <h3>🎓 Academic Excellence</h3>
          <p>
            - <strong>1st Rank</strong> in university exams (1st–3rd semesters)<br />
            - <strong>3rd Rank</strong> in 4th and 5th semesters<br />
            - Strong foundation in <strong>Data Structures, Algorithms</strong>, and <strong>Web Development</strong>
          </p>
        </div>

        <div className="about-section">
          <h3>💡 What Drives Me?</h3>
          <ul>
            <li><span>🚀</span> Building <strong>user-friendly & modern</strong> web apps</li>
            <li><span>💻</span> Learning & implementing <strong>cutting-edge technologies</strong></li>
            <li><span>🔍</span> Solving problems with <strong>clean and scalable code</strong></li>
            <li><span>🤝</span> Collaborating on <strong>real-world impactful projects</strong></li>
          </ul>
        </div>

        <div className="about-section">
          <h3>⚡ My Core Strengths</h3>
          <ul>
            <li><span>✔️</span> React.js, JavaScript, Node.js, Express.js</li>
            <li><span>✔️</span> MongoDB, MySQL, RESTful APIs</li>
            <li><span>✔️</span> Clean UI/UX & Responsive Design</li>
            <li><span>✔️</span> Git, GitHub, Deployment, Firebase</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🧠 Passions & Interests</h3>
          <ul>
            <li><span>🎮</span> Creating unique frontend games</li>
            <li><span>🧩</span> Solving DSA problems in Java</li>
            <li><span>🌐</span> Building real-world full-stack clones (Netflix, Amazon)</li>
            <li><span>📚</span> Mentoring peers & guiding student developers</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>📈 My Journey So Far</h3>
          <p>
            <strong>2023:</strong> Started web dev journey with HTML, CSS, JS, React.js<br />
            <strong>2024:</strong> Built 10+ projects including games, APIs, dashboards<br />
            <strong>2025:</strong> Exploring AI-powered apps, React + Firebase stack + Backend Technology
          </p>
        </div>

        <div className="about-section">
          <h3>🚀 Opportunities</h3>
          <p>
            I'm actively seeking <strong>internship</strong> and <strong>full-time opportunities </strong> 
            where I can contribute, grow, and innovate in the tech space.
            Let’s build something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
