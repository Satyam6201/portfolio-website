import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaServer,
  FaNetworkWired,
  FaLayerGroup,
  FaDatabase,
  FaCogs,
  FaKey,
  FaSearch,
  FaTimes,
  FaJava,
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
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import "../styles/techstack.css";

const techCategories = [
  {
    title: "Generative AI & LLMs",
    categoryKey: "ai",
    items: [
      { name: "OpenAI API", icon: SiOpenai, color: "#10a37f", desc: "GPT-4o API integration & function calling" },
      { name: "Generative AI", icon: FaBrain, color: "#a855f7", desc: "AI agent workflows & prompt engineering" },
      { name: "LLM Integration", icon: FaRobot, color: "#ec4899", desc: "Large Language Model context processing" },
      { name: "RAG Architecture", icon: FaLayerGroup, color: "#3b82f6", desc: "Retrieval-Augmented Generation & FAISS" },
      { name: "Python / AI Tooling", icon: SiPython, color: "#3776ab", desc: "AI scripts, embeddings & vector search" },
    ],
  },
  {
    title: "API Security & Authentication",
    categoryKey: "security",
    items: [
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#ec4899", desc: "JSON Web Tokens & refresh token rotation" },
      { name: "OAuth 2.0", icon: FaKey, color: "#f59e0b", desc: "Third-party social authentication & SSO" },
      { name: "RBAC", icon: FaUserShield, color: "#10b981", desc: "Role-Based Access Control & permissions" },
      { name: "API Security", icon: FaShieldAlt, color: "#38bdf8", desc: "Rate limiting, CORS, input sanitization" },
      { name: "Auth & Authz", icon: FaLock, color: "#6366f1", desc: "Complete identity management & middleware" },
    ],
  },
  {
    title: "Backend & System Design",
    categoryKey: "backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", desc: "Scalable asynchronous server runtime" },
      { name: "Express.js", icon: SiExpress, color: "#9ca3af", desc: "RESTful Web APIs & custom middleware" },
      { name: "System Design", icon: FaServer, color: "#6366f1", desc: "Scalable architecture & microservices principles" },
      { name: "Redis Caching", icon: SiRedis, color: "#dc2626", desc: "In-memory caching, session store & pub/sub" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#f97316", desc: "Distributed event streaming & message queue" },
      { name: "Load Balancer", icon: FaNetworkWired, color: "#06b6d4", desc: "Traffic distribution & high availability" },
      { name: "CDN Integration", icon: SiCloudflare, color: "#f38020", desc: "Edge caching & global content delivery" },
    ],
  },
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    items: [
      { name: "React.js 19", icon: SiReact, color: "#61dafb", desc: "Component-based modern UI architecture" },
      { name: "Next.js 15", icon: SiNextdotjs, color: "#f8fafc", desc: "SSR, App Router, Server Actions & SEO" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", desc: "Type-safe robust web applications" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#f7df1e", desc: "Async/await, DOM, closures & modern features" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", desc: "Utility-first modern styling & glassmorphism" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", desc: "Responsive layout & rapid UI components" },
      { name: "HTML5 & CSS3", icon: SiHtml5, color: "#e34f26", desc: "Semantic markup, flexbox & grid design" },
    ],
  },
  {
    title: "Databases & ORMs",
    categoryKey: "database",
    items: [
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#47a248", desc: "NoSQL document database & aggregations" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", desc: "Relational SQL database & complex queries" },
      { name: "MySQL", icon: SiMysql, color: "#00758f", desc: "RDBMS, relational schemas & ACID transactions" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2d3748", desc: "Type-safe database ORM & schema migrations" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28", desc: "Realtime Database, Firestore & Storage" },
    ],
  },
  {
    title: "DevOps & Cloud Hosting",
    categoryKey: "devops",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ed", desc: "Containerization & multi-stage builds" },
      { name: "CI / CD Pipelines", icon: SiGithubactions, color: "#2088ff", desc: "Automated testing, building & deployments" },
      { name: "Vercel", icon: SiVercel, color: "#f8fafc", desc: "Frontend & Next.js serverless cloud hosting" },
      { name: "Render", icon: SiRender, color: "#46e3b7", desc: "Cloud app hosting & web backend services" },
      { name: "Railway", icon: SiRailway, color: "#8b5cf6", desc: "Infrastructure platform for backend & DBs" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7", desc: "Continuous deployment & edge hosting" },
      { name: "Git & GitHub", icon: SiGithub, color: "#c9d1d9", desc: "Version control, branching & PR workflows" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37", desc: "API testing, environment variables & mocks" },
    ],
  },
  {
    title: "Programming & CS Fundamentals",
    categoryKey: "cs",
    items: [
      { name: "Java (1000+ DSA)", icon: FaJava, color: "#f89820", desc: "1000+ LeetCode problems & algorithm design" },
      { name: "Data Structures", icon: FaDatabase, color: "#3b82f6", desc: "Arrays, Trees, Graphs, Hash Maps, DP" },
      { name: "OOP Principles", icon: FaCogs, color: "#10b981", desc: "Encapsulation, Inheritance, Polymorphism" },
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

function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = techCategories
    .map((category) => {
      // Category filter
      if (activeCategory !== "All" && category.categoryKey !== activeCategory) {
        return null;
      }

      // Search query filter
      if (!searchQuery.trim()) return category;

      const q = searchQuery.toLowerCase();
      const matchedItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );

      if (matchedItems.length === 0) return null;
      return { ...category, items: matchedItems };
    })
    .filter(Boolean);

  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <div className="techstack-header">
          <span className="shimmer-badge">
            <FaCogs /> Production Toolkit
          </span>
          <h2 className="main-title">Skills & Technical Expertise</h2>
          <p className="intro">
            A battle-tested tech stack spanning <strong>Full-Stack Development, Generative AI & RAG, Zero-Trust API Security, Microservices & Cloud DevOps</strong>.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="techstack-controls">
          <div className="tech-search-box">
            <FaSearch className="ts-search-icon" />
            <input
              type="text"
              placeholder="Search across 35+ technologies, tools, or frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="ts-clear-btn" onClick={() => setSearchQuery("")}>
                <FaTimes />
              </button>
            )}
          </div>

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
        </div>

        {/* Categories Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCategories.length === 0 ? (
            <div className="no-tech-results">
              <p>🔍 No technologies match your search query. Try another term!</p>
            </div>
          ) : (
            filteredCategories.map((category, i) => (
              <motion.div
                className="category"
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <h3 className="category-title">{category.title}</h3>

                <div className="tech-grid">
                  {category.items.map((tech, index) => {
                    const IconComp = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        className="tech-card glow-card-hover"
                        whileHover={{ y: -6, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      >
                        <div
                          className="icon-box"
                          style={{
                            color: tech.color,
                            backgroundColor: `${tech.color}15`,
                          }}
                        >
                          <IconComp className="tech-react-icon" />
                        </div>
                        <h4>{tech.name}</h4>
                        <p>{tech.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        <div className="closing">
          🚀 Always eager to master cutting-edge technologies, optimize system architectures, and deliver resilient product engineering solutions!
        </div>
      </div>
    </section>
  );
}

export default TechStack;