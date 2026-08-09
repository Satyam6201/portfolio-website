import React, { useState } from "react";
import "../styles/techstack.css";
import {
  FaBrain,
  FaRobot,
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaServer,
  FaNetworkWired,
  FaLayerGroup,
  FaInfinity,
  FaCloud,
  FaCodeBranch,
  FaDatabase,
  FaCogs,
  FaKey,
} from "react-icons/fa";
import {
  SiOpenai,
  SiRedis,
  SiApachekafka,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiRender,
  SiRailway,
  SiGithubactions,
  SiCloudflare,
  SiJsonwebtokens,
  SiPython,
} from "react-icons/si";

function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const techCategories = [
    {
      title: "Generative AI & LLMs",
      categoryKey: "ai",
      items: [
        { name: "OpenAI API", iconType: "si", iconComp: SiOpenai, icon: "openai", desc: "GPT-4o API integration & function calling" },
        { name: "Generative AI", iconType: "fa", iconComp: FaBrain, icon: "ai", desc: "AI agent workflows & prompt engineering" },
        { name: "LLM Integration", iconType: "fa", iconComp: FaRobot, icon: "ai", desc: "Large Language Model context processing" },
        { name: "RAG Architecture", iconType: "fa", iconComp: FaLayerGroup, icon: "ai", desc: "Retrieval-Augmented Generation & Vector embeddings" },
        { name: "Python / AI Tooling", iconType: "si", iconComp: SiPython, icon: "py", desc: "AI scripts, embeddings & vector search" },
      ],
    },
    {
      title: "API Security & Authentication",
      categoryKey: "security",
      items: [
        { name: "JWT Auth", iconType: "si", iconComp: SiJsonwebtokens, icon: "jwt", desc: "JSON Web Tokens & refresh token flows" },
        { name: "OAuth 2.0", iconType: "fa", iconComp: FaKey, icon: "security", desc: "Third-party social authentication & SSO" },
        { name: "RBAC", iconType: "fa", iconComp: FaUserShield, icon: "security", desc: "Role-Based Access Control & multi-role permissions" },
        { name: "API Security", iconType: "fa", iconComp: FaShieldAlt, icon: "security", desc: "Rate limiting, CORS, input validation & sanitization" },
        { name: "Auth & Authz", iconType: "fa", iconComp: FaLock, icon: "security", desc: "Complete identity management & middleware security" },
      ],
    },
    {
      title: "Backend & System Design",
      categoryKey: "backend",
      items: [
        { name: "Node.js", iconType: "skill", icon: "nodejs", desc: "Scalable asynchronous server runtime" },
        { name: "Express.js", iconType: "skill", icon: "express", desc: "RESTful Web APIs & custom middleware" },
        { name: "System Design", iconType: "fa", iconComp: FaServer, icon: "nodejs", desc: "Scalable architecture & microservices principles" },
        { name: "Redis Caching", iconType: "si", iconComp: SiRedis, icon: "redis", desc: "In-memory caching, session store & pub/sub" },
        { name: "Apache Kafka", iconType: "si", iconComp: SiApachekafka, icon: "kafka", desc: "Distributed event streaming & message queue" },
        { name: "Load Balancer", iconType: "fa", iconComp: FaNetworkWired, icon: "nginx", desc: "Traffic distribution & high availability" },
        { name: "CDN Integration", iconType: "si", iconComp: SiCloudflare, icon: "cloudflare", desc: "Content delivery networks & edge caching" },
      ],
    },
    {
      title: "Frontend Development",
      categoryKey: "frontend",
      items: [
        { name: "React.js", iconType: "skill", icon: "react", desc: "Component-based modern UI architecture" },
        { name: "Next.js 14/15", iconType: "skill", icon: "nextjs", desc: "SSR, App Router, SSG & SEO production apps" },
        { name: "TypeScript", iconType: "skill", icon: "ts", desc: "Type-safe robust web applications" },
        { name: "JavaScript (ES6+)", iconType: "skill", icon: "js", desc: "Async/await, DOM, closures & modern features" },
        { name: "Tailwind CSS", iconType: "skill", icon: "tailwind", desc: "Utility-first modern styling & glassmorphism" },
        { name: "Bootstrap", iconType: "skill", icon: "bootstrap", desc: "Responsive layout & rapid UI components" },
        { name: "HTML5 & CSS3", iconType: "skill", icon: "html", desc: "Semantic markup, flexbox & grid design" },
      ],
    },
    {
      title: "Databases & ORMs",
      categoryKey: "database",
      items: [
        { name: "MongoDB", iconType: "skill", icon: "mongodb", desc: "NoSQL document database & aggregations" },
        { name: "PostgreSQL", iconType: "skill", icon: "postgres", desc: "Relational SQL database & relational schemas" },
        { name: "MySQL", iconType: "skill", icon: "mysql", desc: "RDBMS, indexing & ACID transactions" },
        { name: "Prisma ORM", iconType: "skill", icon: "prisma", desc: "Type-safe database ORM & migrations" },
        { name: "Firebase", iconType: "skill", icon: "firebase", desc: "Realtime Database, Firestore & Cloud Storage" },
      ],
    },
    {
      title: "DevOps & Cloud Hosting",
      categoryKey: "devops",
      items: [
        { name: "Docker", iconType: "si", iconComp: SiDocker, icon: "docker", desc: "Containerization & multi-stage builds" },
        { name: "CI / CD Pipelines", iconType: "si", iconComp: SiGithubactions, icon: "githubactions", desc: "Automated testing, building & deployments" },
        { name: "Vercel", iconType: "si", iconComp: SiVercel, icon: "vercel", desc: "Frontend & Next.js serverless cloud hosting" },
        { name: "Netlify", iconType: "si", iconComp: SiNetlify, icon: "netlify", desc: "Continuous deployment & static site hosting" },
        { name: "Render", iconType: "si", iconComp: SiRender, icon: "render", desc: "Cloud app hosting & web services" },
        { name: "Railway", iconType: "si", iconComp: SiRailway, icon: "railway", desc: "Infrastructure platform for backend & DBs" },
        { name: "Git & GitHub", iconType: "skill", icon: "github", desc: "Version control, branching & PR workflows" },
        { name: "Postman", iconType: "skill", icon: "postman", desc: "API testing, environment variables & mocks" },
      ],
    },
    {
      title: "Programming & CS Fundamentals",
      categoryKey: "cs",
      items: [
        { name: "Java (DSA)", iconType: "skill", icon: "java", desc: "1000+ LeetCode problems & algorithm design" },
        { name: "Data Structures", iconType: "fa", iconComp: FaDatabase, icon: "java", desc: "Arrays, Trees, Graphs, Hash Maps, DP" },
        { name: "OOP Principles", iconType: "fa", iconComp: FaCogs, icon: "java", desc: "Encapsulation, Inheritance, Polymorphism" },
      ],
    },
  ];

  const categoryFilters = [
    { label: "All Skills", value: "All" },
    { label: "AI & LLMs", value: "ai" },
    { label: "Security & Auth", value: "security" },
    { label: "Backend & Systems", value: "backend" },
    { label: "Frontend", value: "frontend" },
    { label: "Databases", value: "database" },
    { label: "DevOps & Cloud", value: "devops" },
    { label: "CS & Java", value: "cs" },
  ];

  const displayedCategories =
    activeCategory === "All"
      ? techCategories
      : techCategories.filter((c) => c.categoryKey === activeCategory);

  const renderIcon = (tech) => {
    if (tech.iconComp) {
      const IconComponent = tech.iconComp;
      return <IconComponent className="tech-react-icon" />;
    }
    return (
      <img
        src={`https://skillicons.dev/icons?i=${tech.icon}`}
        alt={tech.name}
        className="tech-icon"
      />
    );
  };

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <h2 className="main-title">💻 Skills & Technical Expertise</h2>

        <p className="intro">
          A comprehensive overview of my technical stack across <strong>Full-Stack Development, Generative AI, API Security, Microservices & DevOps</strong>.
        </p>

        {/* Category Filter Tabs */}
        <div className="skill-category-tabs">
          {categoryFilters.map((tab) => (
            <button
              key={tab.value}
              className={`skill-tab ${activeCategory === tab.value ? "active" : ""}`}
              onClick={() => setActiveCategory(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {displayedCategories.map((category, i) => (
          <div className="category" key={i}>
            <h3 className="category-title">{category.title}</h3>

            <div className="tech-grid">
              {category.items.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="icon-box">{renderIcon(tech)}</div>
                  <h4>{tech.name}</h4>
                  <p>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="closing">
          🚀 Always eager to master cutting-edge technologies, optimize system architectures, and deliver resilient product engineering solutions!
        </div>
      </div>
    </section>
  );
}

export default TechStack;