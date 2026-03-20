import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">

        <div className="experience-item fade-in">
          <div className="experience-header">
            <h3>Software Development Intern</h3>
            <h4>Software Beatz (Remote)</h4>
            <span className="experience-date">Oct 2025 – Feb 2026</span>
          </div>

          <div className="experience-body">
            <ul>
              <li>Built and maintained full-stack applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong> (MERN Stack).</li>

              <li>Designed and implemented <strong>RESTful APIs</strong> for authentication, user management, and CRUD operations.</li>

              <li>Implemented <strong>JWT-based authentication</strong> and protected routes ensuring secure access control.</li>

              <li>Optimized database queries and handled <strong>MongoDB operations</strong> for better performance.</li>

              <li>Collaborated with developers using <strong>Git, GitHub PR workflows</strong>, improving team productivity.</li>

              <li>Tested and debugged APIs using <strong>Postman</strong>, ensuring correct JSON request-response handling.</li>

              <li>Improved application stability by fixing backend bugs and enhancing error handling.</li>

              <li>Worked on <strong>responsive UI components</strong> and integrated APIs with frontend seamlessly.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;