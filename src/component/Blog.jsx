import React, { useState } from "react";
import "../styles/blog.css";
import { FaSearch, FaTimes, FaCalendarAlt, FaClock, FaBookOpen } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "🧠 Learning React the Smart Way: Architecture & Hooks",
    desc: "Unlock the power of React 19 by mastering custom hooks, state management patterns, component memoization, and real-world project structures.",
    content: "Building high-performance React applications requires more than just knowing basic JSX. In this article, we explore custom hook abstraction, performance optimization techniques with useMemo & useCallback, global state management with Zustand and Context API, and clean project directory architectures.",
    readTime: "5 min read",
    date: "May 15, 2025",
    tags: ["React", "Hooks", "Frontend", "Best Practices"],
  },
  {
    id: 2,
    title: "🚀 My Web Development Journey: Zero to Full Stack",
    desc: "Sharing my experiences, challenges, and milestones transitioning from Java programming to full-stack MERN stack development.",
    content: "Starting out in web development can feel overwhelming with the endless ecosystem of frameworks. In this post, I detail my personal learning path — from mastering core JavaScript fundamentals to architecting scalable MERN SaaS solutions.",
    readTime: "4 min read",
    date: "April 10, 2025",
    tags: ["Web Dev", "React", "JavaScript", "Career"],
  },
  {
    id: 3,
    title: "⚡ Building Scalable Web Apps with the MERN Stack",
    desc: "Learn how to build high-performance MERN stack applications with REST APIs, JWT authentication, and MongoDB index optimization.",
    content: "Scalability is paramount when deploying MERN applications. We discuss structuring Express backend routes cleanly, enforcing RBAC middleware security, optimizing MongoDB query aggregations, and deploying on cloud infrastructure.",
    readTime: "6 min read",
    date: "March 28, 2025",
    tags: ["MERN", "MongoDB", "React", "Node.js"],
  },
  {
    id: 4,
    title: "💡 Java DSA Roadmap for Coding Interviews",
    desc: "Cracking technical coding interviews requires mastering Data Structures & Algorithms in Java. Here is a battle-tested roadmap.",
    content: "After solving 1000+ DSA problems on LeetCode using Java, I compiled this roadmap focusing on must-know problem patterns: Two Pointers, Sliding Window, Graph BFS/DFS, Dynamic Programming, and Binary Search applications.",
    readTime: "8 min read",
    date: "March 10, 2025",
    tags: ["Java", "DSA", "Interview Prep"],
  },
  {
    id: 5,
    title: "🛠️ Optimizing Java Code for High Efficiency",
    desc: "Write clean and efficient Java code by understanding time/space complexities, design patterns, and JVM garbage collection.",
    content: "Deep dive into writing enterprise-ready Java code. We analyze time complexity reductions from O(N^2) to O(N log N), object pooling, effective use of Java Collections framework, and clean OOP design principles.",
    readTime: "5 min read",
    date: "February 25, 2025",
    tags: ["Java", "Optimization", "Clean Code"],
  },
  {
    id: 6,
    title: "🔗 Connecting React with Node.js & Express REST APIs",
    desc: "A step-by-step guide on integrating your React frontend with Node.js backends using CORS, Axios, and JWT token passing.",
    content: "Seamless integration between client and server is key to full-stack development. Learn how to configure Axios interceptors for authorization headers, handle API errors gracefully, and maintain user state.",
    readTime: "5 min read",
    date: "February 12, 2025",
    tags: ["React", "Express", "API", "Auth"],
  },
  {
    id: 7,
    title: "📈 Mastering Trees & Graphs in Java for Beginners",
    desc: "Deep dive into essential tree traversals (Inorder, Preorder, Postorder) and graph algorithms (Dijkstra, Topological Sort).",
    content: "Trees and Graphs frequently trip up interviewees. This article provides intuitive visual diagrams and Java code templates for Breadth-First Search, Depth-First Search, and Shortest Path algorithms.",
    readTime: "7 min read",
    date: "January 30, 2025",
    tags: ["Java", "DSA", "Algorithms"],
  },
  {
    id: 8,
    title: "🧠 React Performance: Memoization & Virtualization",
    desc: "Boost React rendering speeds using React.memo, window virtualization for large lists, and dynamic code splitting with React.lazy.",
    content: "Prevent unnecessary re-renders in large React applications. We demonstrate how to profile React components with Chrome DevTools, implement virtualized scrolling with react-window, and lazy-load heavy routes.",
    readTime: "6 min read",
    date: "January 10, 2025",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: 9,
    title: "🌐 REST vs GraphQL: Choosing the Right API Strategy",
    desc: "A detailed architectural comparison of RESTful services versus GraphQL query engines with pros, cons, and real-world use cases.",
    content: "Selecting the right API strategy directly impacts client payload size and server performance. Compare REST endpoints with GraphQL schemas, over-fetching vs under-fetching, caching layers, and implementation complexity.",
    readTime: "5 min read",
    date: "December 22, 2024",
    tags: ["API", "REST", "GraphQL", "Backend"],
  },
];

const allTags = ["All", ...new Set(blogPosts.flatMap((p) => p.tags))];

function Blog() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    const matchesQuery =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesQuery;
  });

  return (
    <section id="blog" className="blog">
      <h2>📖 My Tech Blog & Insights</h2>
      <p className="blog-intro">
        Explore my technical articles, tutorials, and insights on Full-Stack Engineering, React, Node.js, and Java DSA.
      </p>

      {/* Filter and Search controls */}
      <div className="blog-controls">
        <div className="blog-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search articles by keyword or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="blog-tags-filter">
          {allTags.slice(0, 7).map((tag, i) => (
            <button
              key={i}
              className={`tag-btn ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-container">
        {filteredPosts.length === 0 ? (
          <p className="no-posts">No articles found matching your search.</p>
        ) : (
          filteredPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>

              <div className="blog-meta">
                <span>
                  <FaCalendarAlt /> {post.date}
                </span>
                <span>
                  <FaClock /> {post.readTime}
                </span>
              </div>

              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="read-more-btn" onClick={() => setActivePost(post)}>
                <FaBookOpen /> Read Full Article <span>→</span>
              </button>
            </article>
          ))
        )}
      </div>

      {/* Article Detail Modal */}
      {activePost && (
        <div className="blog-modal-overlay" onClick={() => setActivePost(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setActivePost(null)}>
              <FaTimes />
            </button>

            <h3>{activePost.title}</h3>

            <div className="blog-meta modal-meta">
              <span>
                <FaCalendarAlt /> Published: {activePost.date}
              </span>
              <span>
                <FaClock /> {activePost.readTime}
              </span>
            </div>

            <div className="blog-tags">
              {activePost.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="modal-content-body">
              <p><strong>Overview:</strong> {activePost.desc}</p>
              <hr />
              <p>{activePost.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;
