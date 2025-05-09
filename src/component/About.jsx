import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-header">
        <p className="about-intro">
          Hello! I’m a passionate <strong>Full-Stack Web Developer</strong> with a love for turning ideas into impactful digital solutions.  
          I specialize in building <strong>modern, scalable</strong> web applications using <code>React.js</code>, <code>Node.js</code>, <code>MongoDB</code>, and <code>Express.js</code>.  
          From stunning UIs to high-performance backends—<strong>I build it all.</strong>
        </p>
      </div>

      <div className="counters">
        <div><h3>👨‍💻 15+</h3><p>Projects Completed</p></div>
        <div><h3>🌟 4.9/5</h3><p>Peer Review Score</p></div>
        <div><h3>🎯 2+</h3><p>Years of Experience</p></div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>🎓 Academic Excellence</h3>
          <p>
            🥇 Ranked <strong>1st</strong> in 1st–3rd Semesters<br />
            🥉 Ranked <strong>3rd</strong> in 4th & 5th Semesters<br />
            📘 Strong foundation in <strong>DSA, Java</strong>, and <strong>Web Development</strong>
          </p>
        </div>

        <div className="about-section">
          <h3>💡 What Drives Me</h3>
          <ul>
            <li>🚀 Building interactive and modern web apps</li>
            <li>💻 Learning emerging tech (AI, Firebase, Next.js)</li>
            <li>🔍 Writing clean, maintainable code</li>
            <li>🤝 Collaborating in dynamic teams</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>⚙️ Technical Skills</h3>
          <ul>
            <li>✅ React.js, Next.js, JavaScript, TypeScript</li>
            <li>✅ Node.js, Express.js, MongoDB, MySQL</li>
            <li>✅ Firebase, REST APIs, Git/GitHub, Netlify</li>
            <li>✅ CSS, Sass, Responsive UI, Figma Integration</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🧠 My Interests</h3>
          <ul>
            <li>🎮 Creating games like Simon Says, Whack-a-Mole</li>
            <li>💡 Solving DSA problems in Java</li>
            <li>📺 Building full-stack clones (Netflix, Amazon)</li>
            <li>📣 Conducting workshops & mentoring peers</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🚀 Career Goals</h3>
          <p>
            I aim to work with <strong>forward-thinking companies</strong> on impactful products, grow as a developer, and contribute meaningfully to real-world solutions.  
            I'm currently open to <strong>internships & full-time roles</strong> in full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
