import React from "react";
import "../styles/techstack.css";

function TechStack() {

  const techCategories = [
    {
      title: "Frontend Development",
      items: [
        { name: "HTML5", icon: "html" , desc: "Semantic & accessible web structure" },
        { name: "CSS3", icon: "css", desc: "Responsive UI & animations" },
        { name: "JavaScript", icon: "js", desc: "Core logic & DOM manipulation" },
        { name: "TypeScript", icon: "ts", desc: "Type-safe scalable apps" },
        { name: "React.js", icon: "react", desc: "Component-based UI architecture" },
        { name: "Next.js", icon: "nextjs", desc: "SSR, SEO & production apps" },
        { name: "Tailwind", icon: "tailwind", desc: "Utility-first styling" },
        { name: "Bootstrap", icon: "bootstrap", desc: "Rapid UI prototyping" },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", icon: "nodejs", desc: "Server-side runtime" },
        { name: "Express.js", icon: "express", desc: "REST API & middleware" },
        { name: "JWT Auth", icon: "nodejs", desc: "Authentication & protected routes" },
        { name: "REST APIs", icon: "postman", desc: "API architecture & testing" },
        { name: "MVC Architecture", icon: "nodejs", desc: "Clean scalable backend" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: "mongodb", desc: "NoSQL scalable database" },
        { name: "MySQL", icon: "mysql", desc: "Relational DB schema design" },
        { name: "PostgreSQL", icon: "postgres", desc: "Production SQL database" },
        { name: "Firebase", icon: "firebase", desc: "Realtime & authentication services" },
        { name: "Prisma ORM", icon: "prisma", desc: "Modern database ORM" },
      ],
    },
    {
      title: "Tools & DevOps",
      items: [
        { name: "Git", icon: "git", desc: "Version control" },
        { name: "GitHub", icon: "github", desc: "Collaboration & repos" },
        { name: "Docker", icon: "docker", desc: "Containerization basics" },
        { name: "Vercel", icon: "vercel", desc: "Frontend deployment" },
        { name: "Postman", icon: "postman", desc: "API testing" },
        { name: "Figma", icon: "figma", desc: "UI/UX design collaboration" },
      ],
    },
    {
      title: "Programming & CS",
      items: [
        { name: "Java", icon: "java", desc: "DSA, OOP & problem solving" },
        { name: "Data Structures", icon: "java", desc: "Arrays, Trees, Graphs" },
        { name: "OOP", icon: "java", desc: "Encapsulation & abstraction" },
        { name: "System Design", icon: "nodejs", desc: "Scalable architecture basics" },
      ],
    },
  ];

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <h2 className="main-title">💻 Skills & Technologies</h2>

        <p className="intro">
          I design and develop full-stack applications from frontend UI to backend architecture,
          focusing on performance, scalability, and clean code practices.
        </p>

        {techCategories.map((category, i) => (
          <div className="category" key={i}>
            <h3 className="category-title">{category.title}</h3>

            <div className="tech-grid">
              {category.items.map((tech, index) => (
                <div key={index} className="tech-card">
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.icon}`}
                    alt={tech.name}
                    className="tech-icon"
                  />
                  <h4>{tech.name}</h4>
                  <p>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="closing">
          🚀 I continuously learn new technologies and build real-world projects
          to strengthen my engineering fundamentals and product thinking.
        </div>
      </div>
    </section>
  );
}

export default TechStack;