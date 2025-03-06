import React from "react";
import "../src/styles/blog.css";

function Blog() {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <article>
          <h3>My Web Development Journey</h3>
          <p>Sharing my experiences, challenges, and growth as a web developer.</p>
          <a href="#">Read more</a>
      </article>
      <article>
        <h3>Building a Full-Stack Web App with MERN</h3>
        <p>The MERN stack (MongoDB, Express.js, React.js, Node.js) is a popular choice for full-stack development. Learn how to build a CRUD application...</p>
        <a href="#">Read more</a>
      </article>
      <article>
      <h3>Mastering Java and DSA for Interviews</h3>
        <p>
          Solving Java and DSA problems is crucial for cracking technical interviews. In this post, I share my approach to tackling complex algorithms and data structures efficiently.
        </p>
        <a href="#">Read More</a>
        </article>
        <article>
        <h3>Optimizing Your Java Code</h3>
        <p>
          Learn how to write efficient Java code by understanding time and space complexities, using best practices, and leveraging built-in Java utilities.
        </p>
        <a href="#">Read More</a>
      </article>
    </section>
  );
}

export default Blog;