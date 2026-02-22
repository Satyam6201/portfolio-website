import React, { useEffect, useState } from "react";
import "../styles/about.css";

function About() {
  const [projects, setProjects] = useState(0);
  const [students, setStudents] = useState(0);

  // Animated counters
  useEffect(() => {
    let p = 0;
    let s = 0;

    const interval = setInterval(() => {
      if (p < 35) {
        p++;
        setProjects(p);
      }
      if (s < 250) {
        s += 5;
        setStudents(s);
      }
      if (p >= 35 && s >= 250) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-overlay"></div>

      <h2 className="about-title">🚀 About Me</h2>

      <p className="about-intro">
        I'm <strong>Satyam Kumar Mishra</strong>, a performance-driven 
        <strong> Full-Stack MERN & Next.js Developer</strong> with a passion 
        for building scalable SaaS platforms, secure authentication systems, 
        and production-ready web applications.
        <br /><br />
        I specialize in transforming complex ideas into clean architecture 
        using <code>React</code>, <code>Next.js</code>, <code>Node.js</code>, 
        <code>Express</code>, and <code>MongoDB</code>.
      </p>

      {/* Counters */}
      <div className="counters">
        <div className="counter-box glow">
          <h3>{projects}+</h3>
          <p>Projects Built & Deployed</p>
        </div>

        <div className="counter-box glow">
          <h3>{students}+</h3>
          <p>Students Mentored</p>
        </div>

        <div className="counter-box glow">
          <h3>8.03 CGPA</h3>
          <p>B.Tech CSE</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="about-section glass">
        <h3>💼 Professional Experience</h3>
        <p>
          <strong>Software Development Intern – Software Beatz (Remote)</strong>
          <br />
          Developed scalable full-stack modules using MERN stack.
          Implemented JWT authentication, built REST APIs, 
          optimized backend performance, and followed Git PR workflows.
        </p>
      </div>

      {/* Achievements */}
      <div className="about-section glass">
        <h3>🏆 Achievements</h3>
        <ul>
          <li>🥇 1st Rank – 1st, 2nd & 3rd Semester</li>
          <li>🏅 Innovative Project Award – Tech Expo 2025</li>
          <li>📚 Conducted Workshops for 250+ Students</li>
          <li>🚀 Built 35+ Production-Level Projects</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="about-section glass">
        <h3>🛠️ Technical Expertise</h3>
        <ul>
          <li>Frontend → React.js, Next.js, TypeScript, Tailwind</li>
          <li>Backend → Node.js, Express, JWT, MVC Architecture</li>
          <li>Databases → MongoDB, PostgreSQL, MySQL, Firebase</li>
          <li>DevOps → Git, Docker (Basic), CI/CD, Vercel</li>
          <li>Concepts → OOP, SDLC, API Security, System Design</li>
        </ul>
      </div>

      {/* Vision */}
      <div className="about-section vision">
        <h3>🌟 My Vision</h3>
        <p>
          I aim to join innovative engineering teams where I can contribute to 
          scalable product development, improve performance architecture, and 
          build user-first digital experiences.
          <br /><br />
          Open for <strong>Internships</strong> and <strong>Full-Time Roles</strong>.
        </p>
      </div>
    </section>
  );
}

export default About;