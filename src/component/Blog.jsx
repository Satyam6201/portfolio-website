import React from "react";
import "../styles/blog.css";

function Blog() {
  const blogPosts = [
    {
      title: "🚀 My Web Development Journey",
      desc: "Sharing my experiences, challenges, and growth as a web developer from beginner to advanced.",
      readTime: "4 min read",
      date: "April 10, 2025",
      author: "Satyam Kumar",
      tags: ["Web Dev", "React", "JS", "Node.js"],
      // image: "https://source.unsplash.com/featured/?code,developer",
    },
    {
      title: "⚡ Building Scalable Web Apps with MERN",
      desc: "Learn how to build a high-performance MERN stack application with best practices and clean architecture.",
      readTime: "6 min read",
      date: "March 28, 2025",
      author: "Satyam Kumar",
      tags: ["MERN", "MongoDB", "React", "Node.js"],
      image: "https://source.unsplash.com/featured/?mern,code",
    },
    {
      title: "💡 Java DSA Roadmap for Coding Interviews",
      desc: "Cracking coding interviews requires mastering DSA in Java. Here's a structured roadmap with must-know problems and techniques.",
      readTime: "8 min read",
      date: "March 10, 2025",
      author: "Satyam Kumar",
      tags: ["Java", "DSA", "Interview Prep"],
      image: "https://source.unsplash.com/featured/?java,code",
    },
    {
      title: "🛠️ Optimizing Java Code for Efficiency",
      desc: "Write efficient Java code by understanding time complexities, design patterns, and Java collections framework.",
      readTime: "5 min read",
      date: "February 25, 2025",
      author: "Satyam Kumar",
      tags: ["Java", "Optimization", "Clean Code"],
      image: "https://source.unsplash.com/featured/?java,optimization",
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
            {/* <img src={post.image} alt="Blog" className="blog-image" /> */}
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <div className="blog-meta">
                <span>📅 {post.date}</span>
                <span>⏱️ {post.readTime}</span>
              </div>
              <div className="blog-author">✍️ {post.author}</div>
              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="tag">#{tag}</span>
                ))}
              </div>
              <a href="#">Read more →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
