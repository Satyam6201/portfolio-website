import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>🚀 About Me</h2>

      <div className="about-header">
        <p className="about-intro">
          Hi there! I'm a <strong>Full-Stack Web Developer</strong> driven by curiosity and creativity.  
          I bring ideas to life with <code>React.js</code>, <code>Node.js</code>, <code>Express.js</code>, and <code>MongoDB</code>, blending modern design with scalable code.  
          <br />
          Whether it's a sleek UI or a powerful API—<strong>I build both ends.</strong>
        </p>
      </div>

      <div className="counters">
        <div className="counter-box">
          <h3>👨‍💻 25+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="counter-box">
          <h3>🌟 4.9/5</h3>
          <p>Peer Review Rating</p>
        </div>
        <div className="counter-box">
          <h3>📅 2+ yrs</h3>
          <p>Hands-on Experience</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>🎓 Academic Achievements</h3>
          <p>
            🥇 <strong>1st Rank</strong> (1st–3rd Semesters)<br />
            🥉 <strong>3rd Rank</strong> (4th–5th Semesters)<br />
            🥉 <strong>1rd Rank</strong> (6th Semesters)<br />
            📚 Strong in <strong>Java, DSA</strong> & <strong>Web Dev</strong>
          </p>
        </div>

        <div className="about-section">
          <h3>⚡ What Drives Me</h3>
          <ul>
            <li>🚀 Creating immersive user experiences</li>
            <li>🧠 Exploring AI, Next.js, Firebase</li>
            <li>📦 Writing clean, scalable code</li>
            <li>🤝 Collaborating with creative teams</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🛠️ My Tech Stack</h3>
          <ul>
            <li>✅ React.js, Next.js, JavaScript, TypeScript</li>
            <li>✅ Node.js, Express.js, MongoDB, MySQL</li>
            <li>✅ Firebase, REST APIs, Git, Netlify</li>
            <li>✅ CSS, Sass, Responsive Design, Figma</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🎮 Fun Projects & Interests</h3>
          <ul>
            <li>🧠 Building games like Simon Says, Brick Breaker</li>
            <li>🧩 Solving DSA problems using Java</li>
            <li>🎬 Developing full-stack clones (Netflix, Amazon)</li>
            <li>🎤 Hosting workshops & mentoring juniors</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🌟 Career Vision</h3>
          <p>
            I'm passionate about working with <strong>innovative teams</strong> to solve real-world challenges.  
            Open to <strong>internships</strong> and <strong>full-time opportunities</strong> in web development. Let's build the future together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
