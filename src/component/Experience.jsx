import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Code Innovative Technologies (Remote)',
    date: 'Feb 2026 – May 2026',
    points: [
      <>Developed scalable full-stack web applications using <strong>React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL</strong>.</>,
      <>Designed and implemented <strong>RESTful APIs</strong> for real-world business applications, following clean, maintainable architecture.</>,
      <>Built <strong>responsive, reusable UI components</strong> shared across multiple production-oriented projects.</>,
      <>Collaborated with developers using <strong>Git-based workflows and Agile methodologies</strong>, contributing to sprint planning and code reviews.</>,
      <>Worked across the stack to integrate frontend and backend systems, ensuring smooth data flow between <strong>PostgreSQL</strong> and the API layer.</>,
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Software Beatz (Remote)',
    date: 'Oct 2025 – Feb 2026',
    points: [
      <>Built and maintained full-stack applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong> (MERN Stack).</>,
      <>Designed and implemented <strong>RESTful APIs</strong> for authentication, user management, and CRUD operations.</>,
      <>Implemented <strong>JWT-based authentication</strong> and protected routes ensuring secure access control.</>,
      <>Optimized database queries and handled <strong>MongoDB operations</strong> for better performance.</>,
      <>Collaborated with developers using <strong>Git, GitHub PR workflows</strong>, improving team productivity.</>,
      <>Tested and debugged APIs using <strong>Postman</strong>, ensuring correct JSON request-response handling.</>,
      <>Improved application stability by fixing backend bugs and enhancing error handling.</>,
      <>Worked on <strong>responsive UI components</strong> and integrated APIs with the frontend seamlessly.</>,
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            className="experience-item fade-in"
            key={exp.company}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="experience-date">{exp.date}</span>
            </div>

            <div className="experience-body">
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;