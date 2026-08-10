import React, { useState } from "react";
import "../styles/blog.css";
import { 
  FaSearch, 
  FaTimes, 
  FaCalendarAlt, 
  FaClock, 
  FaBookOpen, 
  FaHeart, 
  FaLaughBeam, 
  FaLightbulb, 
  FaFire, 
  FaBookmark,
  FaTag,
  FaShareAlt
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    isFeatured: true,
    category: "React & Next.js",
    title: "🧠 Mastering Next.js 15 Server Actions & RAG AI Architecture",
    desc: "A deep dive into building production-ready SaaS platforms with Next.js 15, App Router, Server Actions, and OpenAI API integration.",
    content: `Building modern AI-powered applications requires leveraging server components and streaming responses.

Key Takeaways:
1. Server Actions simplify form mutations without writing explicit API routes.
2. Vector embeddings with Pinecone/PGVector enable fast RAG (Retrieval-Augmented Generation) context lookup.
3. Clerk + Prisma ORM provides enterprise-grade Role-Based Access Control (RBAC).

Whether you are building healthcare SaaS or e-commerce platforms, this architecture ensures sub-second response times and maximum security.`,
    readTime: "6 min read",
    date: "August 2026",
    likes: 142,
    tags: ["Next.js", "AI", "SaaS", "React"],
  },
  {
    id: 2,
    isFeatured: false,
    category: "Dev Humor",
    title: "😂 10 Hilarious Realities of Being a Full-Stack Engineer",
    desc: "Why do programmers prefer dark mode? Because light attracts bugs! A lighthearted collection of developer humor, bug hunting sagas, and coding memes.",
    content: `Coding is 10% writing code and 90% figuring out why it doesn't work!

Developer Myths vs Realities:
- Myth: Developers write code non-stop for 8 hours.
- Reality: Spent 4 hours renaming a variable, 2 hours on StackOverflow, and 2 hours explaining why a semicolon broke production.

Classic Dev Jokes:
1. There are 10 types of people in the world: those who understand binary, and those who don't.
2. A SQL query walks into a bar, approaches two tables and asks... "Can I join you?"
3. 99 little bugs in the code... take one down, patch it around... 127 little bugs in the code!

Moral of the story: Keep coding, stay calm, and don't push to main on a Friday! 🚀`,
    readTime: "3 min read",
    date: "July 2026",
    likes: 289,
    tags: ["Dev Humor", "Fun", "Coding Life"],
  },
  {
    id: 3,
    isFeatured: false,
    category: "Java & DSA",
    title: "⚡ How I Solved 1000+ DSA Problems on LeetCode in Java",
    desc: "Pattern recognition, time complexity trade-offs, and graph/tree algorithms that cracked coding interviews.",
    content: `Consistency is the key to mastering Data Structures and Algorithms.

Top 5 Problem Patterns to Master:
1. Two Pointers & Sliding Window (Arrays / Strings)
2. Fast & Slow Pointers (Linked Lists / Cycle Detection)
3. Graph BFS/DFS & Dijkstra's Algorithm
4. Dynamic Programming (Knapsack & Subsequences)
5. Binary Search on Answer Space

Focus on understanding underlying patterns rather than memorizing individual solutions!`,
    readTime: "7 min read",
    date: "June 2026",
    likes: 198,
    tags: ["Java", "DSA", "LeetCode", "Interviews"],
  },
  {
    id: 4,
    isFeatured: false,
    category: "AI & GenAI",
    title: "🤖 Integrating OpenAI Voice AI & RAG Agents into React Apps",
    desc: "Learn how to embed conversational AI assistants and real-time voice agents into React & Next.js applications.",
    content: `Generative AI has shifted web apps from static portals to dynamic conversational partners.

In this guide, we walk through setting up streaming completions with the Vercel AI SDK, managing conversation context buffers, and providing smart fallback knowledge engines when API limits are hit.`,
    readTime: "5 min read",
    date: "June 2026",
    likes: 165,
    tags: ["GenAI", "OpenAI", "React", "AI Agents"],
  },
  {
    id: 5,
    isFeatured: false,
    category: "Dev Humor",
    title: "💬 Talking to Code: Confessions of a Night-Owl Programmer",
    desc: "Ever spent 5 hours debugging only to realize you forgot to call the function? You are not alone!",
    content: `Rubber duck debugging is real! Explaining your code out loud to a plastic duck (or your AI assistant) forces your brain to evaluate logic line by line.

Top 3 Late-Night Debugging Realizations:
1. It wasn't a framework bug; it was a typo in .env.
2. The server wasn't hanging; npm run dev was running in another terminal window.
3. The CSS wasn't applying because of a missing closing curly brace.`,
    readTime: "4 min read",
    date: "May 2026",
    likes: 210,
    tags: ["Dev Humor", "Debugging", "Life"],
  },
  {
    id: 6,
    isFeatured: false,
    category: "API & Security",
    title: "🔒 JWT Authentication, RBAC & Redis Rate Limiting",
    desc: "Protecting Node.js and Express REST APIs with JWT tokens, refresh tokens, role-based authorization, and Redis caching.",
    content: `API security is non-negotiable in production SaaS products.

We explore setting up secure HTTP-only cookies for JWT storage, building express middleware for Role-Based Access Control (RBAC), and implementing IP rate limiting using Redis to prevent brute-force attacks.`,
    readTime: "6 min read",
    date: "May 2026",
    likes: 134,
    tags: ["Backend", "Security", "Node.js", "JWT"],
  }
];

const categories = ["All", "React & Next.js", "Dev Humor", "Java & DSA", "AI & GenAI", "API & Security"];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  const featuredPost = blogPosts.find((p) => p.isFeatured) || blogPosts[0];

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="blog" className="blog">
      {/* Header */}
      <div className="blog-header-section">
        <h2>
          <FaBookOpen className="header-icon" /> Tech Blog & Developer Stories
        </h2>
        <p className="blog-intro">
          Insights on Full-Stack Engineering, Generative AI, Java DSA, and Lighthearted Developer Humor!
        </p>
      </div>

      {/* Featured Hero Article */}
      {featuredPost && (
        <div className="featured-hero-card" onClick={() => setActivePost(featuredPost)}>
          <div className="featured-badge-pill">
            <FaFire className="fire-icon" /> Featured Masterclass
          </div>
          <div className="hero-content">
            <span className="hero-category">{featuredPost.category}</span>
            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.desc}</p>

            <div className="hero-meta-bar">
              <span><FaCalendarAlt /> {featuredPost.date}</span>
              <span><FaClock /> {featuredPost.readTime}</span>
              <button className="hero-read-btn">
                Read Full Article →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search and Category Filter Controls */}
      <div className="blog-controls-wrapper">
        <div className="blog-search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search articles by title, tech stack, or funny facts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="category-tabs">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`cat-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "Dev Humor" && <FaLaughBeam className="cat-icon" />}
              {cat === "AI & GenAI" && <FaLightbulb className="cat-icon" />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-container">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>🔍 No articles found matching your search term.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article className={`blog-card ${post.category === "Dev Humor" ? "humor-card" : ""}`} key={post.id} onClick={() => setActivePost(post)}>
              <div className="blog-card-top">
                <span className={`category-tag ${post.category === "Dev Humor" ? "humor" : ""}`}>
                  {post.category === "Dev Humor" && <FaLaughBeam className="tag-icon" />}
                  {post.category}
                </span>
                <button className="like-btn" onClick={(e) => handleLike(post.id, e)} title="Like this article">
                  <FaHeart className={`heart-icon ${likedPosts[post.id] ? "liked" : ""}`} />
                  <span>{post.likes + (likedPosts[post.id] || 0)}</span>
                </button>
              </div>

              <h3>{post.title}</h3>
              <p className="card-desc">{post.desc}</p>

              <div className="blog-meta">
                <span><FaCalendarAlt /> {post.date}</span>
                <span><FaClock /> {post.readTime}</span>
              </div>

              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="read-more-btn" onClick={(e) => { e.stopPropagation(); setActivePost(post); }}>
                Read Article →
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

            <span className="modal-category">{activePost.category}</span>
            <h3>{activePost.title}</h3>

            <div className="blog-meta modal-meta">
              <span><FaCalendarAlt /> Published: {activePost.date}</span>
              <span><FaClock /> {activePost.readTime}</span>
              <span><FaHeart style={{ color: "#ef4444" }} /> {activePost.likes + (likedPosts[activePost.id] || 0)} Likes</span>
            </div>

            <div className="blog-tags">
              {activePost.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>

            <div className="modal-content-body">
              <div className="overview-callout">
                <p><strong>Summary:</strong> {activePost.desc}</p>
              </div>
              <hr />
              <div className="article-paragraphs">
                {activePost.content.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;

