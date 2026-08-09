import React, { useEffect, useState } from "react";
import "../styles/about.css";

function About() {
  const [projects, setProjects] = useState(0);
  const [students, setStudents] = useState(0);
  const [problems, setProblems] = useState(0);

  // Animated counters
  useEffect(() => {
    let p = 0;
    let s = 0;
    let d = 0;

    const interval = setInterval(() => {
      if (p < 45) {
        p++;
        setProjects(p);
      }
      if (s < 250) {
        s += 5;
        setStudents(s);
      }
      if (d < 1000) {
        d += 15;
        setProblems(Math.min(d, 1000));
      }
      if (p >= 45 && s >= 250 && d >= 1000) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-overlay"></div>

      <h2 className="about-title">🚀 About Me</h2>

      <p className="about-intro">
        I'm <strong>Satyam Kumar Mishra</strong>, a results-driven
        <strong> Full-Stack Developer</strong> specializing in the
        <strong> MERN Stack, Next.js, and Generative AI</strong>. I build
        scalable SaaS platforms, secure authentication systems, and
        production-ready web applications.
        <br /><br />
        I specialize in transforming complex ideas into clean architecture
        using <code>React</code>, <code>Next.js</code>, <code>Node.js</code>,
        <code>Express</code>, <code>MongoDB</code>, <code>PostgreSQL</code>,
        and <code>Prisma ORM</code> — with hands-on experience integrating the
        <code>OpenAI API</code>, JWT Authentication, RBAC, and Stripe Payments
        into real-world products.
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
          <h3>{problems}+</h3>
          <p>DSA Problems Solved (Java)</p>
        </div>

        <div className="counter-box glow">
          <h3>8.17 CGPA</h3>
          <p>B.Tech CSE</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="about-section glass">
        <h3>💼 Professional Experience</h3>

        <div className="experience-item">
          <p>
            <strong>Full Stack Development Intern – Code Innovative Technologies (Remote)</strong>
            <span className="exp-date">Feb 2026 – Present</span>
          </p>
          <ul>
            <li>Developed scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.</li>
            <li>Designed and implemented RESTful APIs for real-world business applications and built responsive, reusable UI components.</li>
            <li>Collaborated with developers using Git-based workflows and Agile methodologies across production-oriented projects.</li>
          </ul>
        </div>

        <div className="experience-item">
          <p>
            <strong>Software Development Intern – Software Beatz (Remote)</strong>
            <span className="exp-date">Oct 2025 – Feb 2026</span>
          </p>
          <ul>
            <li>Developed full-stack modules using React.js, Node.js, Express.js, and MongoDB with secure REST APIs and JWT authentication.</li>
            <li>Optimized database operations and improved backend performance through debugging and API optimization.</li>
            <li>Participated in feature development, testing, and deployment of production-ready applications via Git PR workflows.</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="about-section glass">
        <h3>📂 Featured Projects</h3>

        <div className="project-item">
          <p>
            <strong>DentAIva – AI-Powered Healthcare SaaS Platform</strong>
          </p>
          <p className="project-stack">
            Next.js, TypeScript, PostgreSQL, Prisma, Clerk, OpenAI API, Tailwind CSS, Vapi AI
          </p>
          <ul>
            <li>Built a scalable AI-powered healthcare SaaS platform integrating the OpenAI API for intelligent automation and AI-assisted workflows.</li>
            <li>Implemented secure authentication, Role-Based Access Control (RBAC), and a scalable PostgreSQL/Prisma database architecture.</li>
          </ul>
        </div>

        <div className="project-item">
          <p>
            <strong>Grocerin – Full Stack E-Commerce Platform</strong>
          </p>
          <p className="project-stack">
            React.js, Node.js, Express.js, MongoDB, Stripe API, Cloudinary, Tailwind CSS
          </p>
          <ul>
            <li>Developed a complete e-commerce application with secure Stripe payment integration and REST APIs for auth, cart, and orders.</li>
            <li>Built Admin and Seller dashboards with JWT authentication, authorization, and role-based access management.</li>
          </ul>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-section glass">
        <h3>🏆 Achievements & Certifications</h3>
        <ul>
          <li>🥇 Winner – Innovative Project Award, College Tech Expo 2025</li>
          <li>💻 Solved 1000+ DSA problems on LeetCode using Java</li>
          <li>🚀 Built and deployed 45+ full-stack web applications</li>
          <li>📚 Conducted Web Development & Java workshops for 250+ students</li>
          <li>📜 Full Stack Development Internship – Code Innovative Technologies</li>
          <li>📜 Software Development Internship – Software Beatz</li>
          <li>📜 Java Programming Masterclass – Apna College</li>
          <li>📜 Web Development Certification – Apna College</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="about-section glass">
        <h3>🛠️ Technical Expertise</h3>
        <ul>
          <li><strong>Generative AI & LLMs:</strong> OpenAI API, GenAI Workflows, LLM Integration, RAG Architecture, Prompt Engineering</li>
          <li><strong>API Security & Auth:</strong> JWT Auth, OAuth 2.0, RBAC, API Security, Authentication & Authorization Middleware</li>
          <li><strong>Backend & Systems:</strong> Node.js, Express.js, REST APIs, Redis Caching, Apache Kafka, System Design, Load Balancer, CDN</li>
          <li><strong>Frontend:</strong> React.js, Next.js 14/15, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Redis, Firebase, Prisma ORM</li>
          <li><strong>DevOps & Cloud Hosting:</strong> Docker, CI/CD Pipelines, Vercel, Netlify, Render, Railway, Git/GitHub, Postman</li>
          <li><strong>CS Fundamentals:</strong> Java (1000+ DSA Solved), Object-Oriented Programming (OOP), Operating Systems, DBMS</li>
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