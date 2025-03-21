import React from "react";
import "../styles/blog.css";

function Blog() {
  return (
    <section id="blog" className="blog">
      <h2>📖 My Tech Blog</h2>
      <p className="blog-intro">
        Explore my thoughts, experiences, and technical insights on Full-Stack Development, Java, and DSA.
      </p>

      <div className="blog-container">
        <article className="blog-card">
          <h3>🚀 My Web Development Journey</h3>
          <p>Sharing my experiences, challenges, and growth as a web developer.</p>
          <a href="#">Read more →</a>
        </article>

        <article className="blog-card">
          <h3>⚡ Building Scalable Web Apps with MERN</h3>
          <p>Learn how to build a high-performance MERN stack application with best practices.</p>
          <a href="#">Read more →</a>
        </article>

        <article className="blog-card">
          <h3>💡 Java DSA Roadmap for Coding Interviews</h3>
          <p>
            Cracking coding interviews requires mastering DSA in Java. Here's a structured roadmap with must-know problems.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article className="blog-card">
          <h3>🛠️ Optimizing Java Code for Efficiency</h3>
          <p>
            Write efficient Java code by understanding time complexities, best practices, and Java utilities.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article className="blog-card">
          <h3>🔗 Connecting React with Node.js</h3>
          <p>
            A step-by-step guide on integrating your React frontend with a Node.js and Express backend.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article className="blog-card">
          <h3>📈 Mastering Data Structures in Java</h3>
          <p>
            Deep dive into essential data structures like Trees, Graphs, and HashMaps for Java-based interview prep.
          </p>
          <a href="#">Read more →</a>
        </article>
      </div>
    </section>
  );
}

export default Blog;
