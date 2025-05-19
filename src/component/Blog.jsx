import React from "react";
import "../styles/blog.css";

function Blog() {
  const blogPosts = [
    {
      title: "🧠 Learning React the Smart Way",
      desc: "Unlock the power of React by mastering components, hooks, state management, and real-world project structures.",
      readTime: "5 min read",
      date: "May 15, 2025",
      tags: ["React", "Hooks", "Frontend", "Best Practices"],
    },
    {
      title: "🚀 My Web Development Journey",
      desc: "Sharing my experiences, challenges, and growth as a web developer from beginner to advanced.",
      readTime: "4 min read",
      date: "April 10, 2025",
      tags: ["Web Dev", "React", "JS", "Node.js"],
    },
    {
      title: "⚡ Building Scalable Web Apps with MERN",
      desc: "Learn how to build a high-performance MERN stack application with best practices and clean architecture.",
      readTime: "6 min read",
      date: "March 28, 2025",
      tags: ["MERN", "MongoDB", "React", "Node.js"],
    },
    {
      title: "💡 Java DSA Roadmap for Coding Interviews",
      desc: "Cracking coding interviews requires mastering DSA in Java. Here's a structured roadmap with must-know problems and techniques.",
      readTime: "8 min read",
      date: "March 10, 2025",
      tags: ["Java", "DSA", "Interview Prep"],
    },
    {
      title: "🛠️ Optimizing Java Code for Efficiency",
      desc: "Write efficient Java code by understanding time complexities, design patterns, and Java collections framework.",
      readTime: "5 min read",
      date: "February 25, 2025",
      tags: ["Java", "Optimization", "Clean Code"],
    },
    {
      title: "🔗 Connecting React with Node.js",
      desc: "A step-by-step guide on integrating your React frontend with a Node.js and Express backend using REST APIs.",
      readTime: "5 min read",
      date: "February 12, 2025",
      tags: ["React", "Express", "API"],
    },
    {
      title: "📈 Mastering Data Structures in Java",
      desc: "Deep dive into essential data structures like Trees, Graphs, and HashMaps for Java-based interview prep.",
      readTime: "7 min read",
      date: "January 30, 2025",
      tags: ["Java", "Data Structures"],
    },
    {
      title: "🧠 Mastering React Performance Optimization",
      desc: "Boost React performance using memoization, lazy loading, and avoiding unnecessary re-renders.",
      readTime: "6 min read",
      date: "January 10, 2025",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      title: "🌐 REST vs GraphQL: Which One to Choose?",
      desc: "A complete comparison of REST and GraphQL with use-cases, pros & cons for modern web APIs.",
      readTime: "5 min read",
      date: "December 22, 2024",
      tags: ["API", "REST", "GraphQL"],
    },
  ];

  return (
    <section id="blog" className="blog">
      <h2>📖 My Tech Blog</h2>
      <p className="blog-intro">
        Explore my thoughts, experiences, and technical insights on Full-Stack Development, Java, and DSA.
      </p>

      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <article className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <div className="blog-meta">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
            <div className="blog-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <a href="#" className="read-more">
              Read more <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
