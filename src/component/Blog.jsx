import React, { useState } from "react";
import "../styles/blog.css";
import { 
  FaSearch, 
  FaTimes, 
  FaCalendarAlt, 
  FaClock, 
  FaBookOpen, 
  FaHeart, 
  FaLightbulb, 
  FaFire, 
  FaServer,
  FaCode,
  FaTerminal
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    isFeatured: true,
    category: "System Architecture",
    title: "Distributed Redis Caching & Sliding-Window Rate Limiting in Node.js",
    desc: "Architecting sub-15ms caching tiers and resilient DDoS/brute-force rate limiting using Redis, ioredis, and multi-core Node.js clustering.",
    content: `When scaling API gateways past 10,000 requests/minute, database bottlenecking becomes inevitable. In this architecture deep-dive, we explore how distributed in-memory caching and sliding-window rate limiting insulate downstream services.

Key Architectural Strategies:
1. Two-Tier Caching Strategy: Implementing an in-memory L1 LRU cache with an L2 Redis distributed store using ioredis. Cache invalidation is coordinated via Redis Pub/Sub events across clustered Node worker processes.
2. Sliding-Window Counter: Unlike fixed-window counters that allow 2x traffic bursts at boundary resets, Redis sorted sets (ZADD, ZREMRANGEBYSCORE) record epoch timestamps per client IP, guaranteeing deterministic rate enforcement.
3. Resilience Fallbacks: Circuit breakers (opossum) gracefully bypass Redis to localized memory dictionaries during cluster failovers with zero downtime.

This architecture forms the backbone of systems like Grocren and MockMate AI, achieving sub-15ms P99 latency.`,
    readTime: "7 min read",
    date: "September 2026",
    likes: 184,
    tags: ["Redis", "Node.js", "System Design", "Distributed Systems"],
  },
  {
    id: 2,
    isFeatured: false,
    category: "React & Next.js",
    title: "Next.js 15 Server Actions, Streaming SSR & Zero-Trust RBAC",
    desc: "End-to-end type safety, optimistic UI mutations, and role-based access control with Next.js 15 App Router, Prisma ORM 6, and Clerk.",
    content: `Next.js 15 fundamentally alters full-stack React architecture by replacing explicit REST boilerplate with co-located Server Actions and React Server Components (RSC).

Core Architectural Insights:
1. Deterministic Server Actions: By wrapping actions with Zod validation schemas and transactional Prisma 6 queries, we eliminate client-side state desync and API route overhead.
2. Suspense & Streaming SSR: Decoupling critical viewport HTML from slow third-party analytics enables instant First Contentful Paint (FCP < 300ms) with progressive component hydration.
3. Multi-Tenant RBAC: Role-Based Access Control enforced at the Next.js middleware edge layer guarantees unauthenticated or unauthorized users are intercepted before touching serverless handler compute.

Implemented in DentAIva (Healthcare SaaS) to maintain strict HIPAA compliance boundaries and instant scheduling updates.`,
    readTime: "8 min read",
    date: "August 2026",
    likes: 215,
    tags: ["Next.js 15", "React 19", "Server Actions", "TypeScript", "Prisma"],
  },
  {
    id: 3,
    isFeatured: false,
    category: "Java & DSA",
    title: "Deconstructing 1,064+ LeetCode Solutions: Algorithmic Patterns in Java",
    desc: "A structured breakdown of graph theory, dynamic programming transitions, and monotonic structures that scale to complex engineering problems.",
    content: `Solving over 1,064 problems on LeetCode exclusively in Java (Global Rank #28,349) taught me that algorithmic mastery is about pattern synthesis rather than memorization.

Key Algorithmic Pillars & Systems Translation:
1. Graph Traversal & Shortest Paths: Dijkstra, Bellman-Ford, and Kahn's Topological Sort directly inform dependency resolution in build systems and microservice circuit routing.
2. Dynamic Programming State Reductions: Transforming 2D DP matrices into 1D rolling arrays (e.g. 0/1 Knapsack, Longest Common Subsequence) reflects memory-conscious cache architectures in production backends.
3. Monotonic Queues & Sliding Windows: Used in sliding-window rate limiters, stock span analytics, and streaming telemetry ingestion pipelines.
4. Binary Search on Solution Space: Leveraging monotonicity to solve optimization problems in O(log N) where direct computation is infeasible.

These foundational patterns guarantee algorithmic efficiency and predictable time complexities across real-world systems.`,
    readTime: "10 min read",
    date: "July 2026",
    likes: 268,
    tags: ["Java", "DSA", "LeetCode", "Algorithms", "System Design"],
  },
  {
    id: 4,
    isFeatured: false,
    category: "AI & GenAI",
    title: "Architecting Sub-300ms Conversational Voice AI & RAG Pipelines",
    desc: "Integrating Vapi Web Voice SDK, FAISS vector embeddings, and multi-LLM orchestration for low-latency interactive AI assistants.",
    content: `Real-time voice and retrieval-augmented generation (RAG) introduce strict latency constraints where round-trip delays over 500ms feel sluggish to users.

Production Architecture Breakdown:
1. Low-Latency Voice Signaling: Integrating Vapi Web SDK with WebRTC bidirectional audio streams provides sub-300ms conversational turn-around for triage and booking agents.
2. In-Memory Vector Search: Pre-indexing semantic embeddings using FAISS enables similarity lookups in <25ms, avoiding expensive remote vector DB network hops for scoped workflows.
3. Resilient Multi-LLM Routing: Establishing fallback cascades across Google Gemini (2.0/1.5 Flash) and OpenAI (GPT-4o) via OpenRouter ensures 99.9% uptime during provider rate spikes.
4. Strict JSON Output Enforcement: Utilizing structured outputs and system prompts guarantees reliable downstream database mutations without hallucinations.

Powers the conversational triage engine in DentAIva and the dynamic mock interviewer in MockMate AI.`,
    readTime: "6 min read",
    date: "June 2026",
    likes: 192,
    tags: ["GenAI", "Voice AI", "Vapi SDK", "RAG", "Vector Embeddings"],
  }
];

const categories = ["All", "System Architecture", "React & Next.js", "Java & DSA", "AI & GenAI"];

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
      <div className="blog-header-section">
        <span className="shimmer-badge">
          <FaBookOpen /> Engineering Case Studies
        </span>
        <h2>Engineering Blog & Architectural Deep-Dives</h2>
        <p className="blog-intro">
          Production case studies on Distributed Systems, Next.js 15 Architecture, Algorithmic Patterns, and Low-Latency Voice AI.
        </p>
      </div>

      {featuredPost && (
        <div className="featured-hero-card" onClick={() => setActivePost(featuredPost)}>
          <div className="featured-badge-pill">
            <FaFire className="fire-icon" /> Featured Architecture
          </div>
          <div className="hero-content">
            <span className="hero-category">{featuredPost.category}</span>
            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.desc}</p>

            <div className="hero-meta-bar">
              <span><FaCalendarAlt /> {featuredPost.date}</span>
              <span><FaClock /> {featuredPost.readTime}</span>
              <button className="hero-read-btn">
                Read Deep-Dive →
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="blog-controls-wrapper">
        <div className="blog-search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search articles by title, tech stack, or topic..."
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
              {cat === "System Architecture" && <FaServer className="cat-icon" />}
              {cat === "AI & GenAI" && <FaLightbulb className="cat-icon" />}
              {cat === "React & Next.js" && <FaCode className="cat-icon" />}
              {cat === "Java & DSA" && <FaTerminal className="cat-icon" />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-container">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>No articles found matching your search term.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article className="blog-card" key={post.id} onClick={() => setActivePost(post)}>
              <div className="blog-card-top">
                <span className="category-tag">
                  {post.category}
                </span>
                <button className="like-btn" onClick={(e) => handleLike(post.id, e)} title="Appreciate this article">
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
                Read Deep-Dive →
              </button>
            </article>
          ))
        )}
      </div>

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
              <span><FaHeart style={{ color: "#ef4444" }} /> {activePost.likes + (likedPosts[activePost.id] || 0)} Reads & Appreciations</span>
            </div>

            <div className="blog-tags">
              {activePost.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>

            <div className="modal-content-body">
              <div className="overview-callout">
                <p><strong>Architecture Overview:</strong> {activePost.desc}</p>
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
