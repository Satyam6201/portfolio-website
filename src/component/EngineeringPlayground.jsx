import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTerminal,
  FaRobot,
  FaKey,
  FaShieldAlt,
  FaBolt,
  FaSearch,
  FaPlay,
  FaSyncAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaLock,
  FaLayerGroup,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import "../styles/engineeringplayground.css";

const RAG_CHUNKS = [
  {
    id: 1,
    title: "MockMate AI - Vector Search Engine",
    content: "Architected FAISS in-memory vector index with text-embedding-3-small (1536 dimensions) for candidate resume chunk retrieval.",
    keywords: ["rag", "faiss", "vector", "openai", "embeddings", "mockmate", "ai", "interview"]
  },
  {
    id: 2,
    title: "Zero-Trust JWT & RBAC Auth Protocol",
    content: "Implemented HTTP-only secure cookie JWT token rotation, Redis token blacklisting, and role-based access control across Express middleware.",
    keywords: ["jwt", "auth", "security", "rbac", "redis", "token", "middleware", "express"]
  },
  {
    id: 3,
    title: "DentAIva - Healthcare SaaS & Voice Agent",
    content: "Built voice agent integration using Vapi AI and OpenAI API with Clerk session synchronization and PostgreSQL multi-tenant schema via Prisma.",
    keywords: ["dentalva", "healthcare", "voice", "nextjs", "clerk", "prisma", "postgresql", "saas"]
  },
  {
    id: 4,
    title: "Competitive Programming in Java (1000+ DSA)",
    content: "Mastered algorithmic graph traversals (Dijkstra, DSU), dynamic programming state transitions, and memory-conscious data structures on LeetCode.",
    keywords: ["java", "dsa", "leetcode", "graphs", "dp", "trees", "algorithms", "problem"]
  }
];

const PRESET_JWT_TOKENS = {
  admin: {
    role: "System Administrator",
    payload: {
      sub: "usr_94821a",
      name: "Satyam Kumar Mishra",
      role: "admin",
      permissions: ["users:read", "users:write", "analytics:full", "billing:manage", "rag:override"],
      iat: 1775640000,
      exp: 1775647200,
      issuer: "auth.satyam-portfolio.internal"
    }
  },
  engineer: {
    role: "Full-Stack Engineer",
    payload: {
      sub: "usr_38411b",
      name: "Engineering Lead",
      role: "engineer",
      permissions: ["projects:deploy", "metrics:read", "api:execute", "rag:query"],
      iat: 1775640000,
      exp: 1775647200,
      issuer: "auth.satyam-portfolio.internal"
    }
  },
  guest: {
    role: "Portfolio Visitor",
    payload: {
      sub: "usr_00293c",
      name: "Recruiter / Visitor",
      role: "viewer",
      permissions: ["profile:read", "resume:download", "contact:send"],
      iat: 1775640000,
      exp: 1775647200,
      issuer: "auth.satyam-portfolio.internal"
    }
  }
};

export default function EngineeringPlayground() {
  const [activeTab, setActiveTab] = useState("rag");

  const [ragQuery, setRagQuery] = useState("Next.js vector search with FAISS");
  const [ragResults, setRagResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLatency, setSearchLatency] = useState(14);

  const [jwtRole, setJwtRole] = useState("admin");

  const [tokensLeft, setTokensLeft] = useState(8);
  const [maxTokens] = useState(10);
  const [rateLogs, setRateLogs] = useState([]);

  useEffect(() => {
    handleSimulateRag(ragQuery);
  }, []);

  useEffect(() => {
    const refillInterval = setInterval(() => {
      setTokensLeft((prev) => Math.min(prev + 1, maxTokens));
    }, 2500);
    return () => clearInterval(refillInterval);
  }, [maxTokens]);

  const handleSimulateRag = (query) => {
    setIsSearching(true);
    const start = performance.now();
    setTimeout(() => {
      const qTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
      const scored = RAG_CHUNKS.map((chunk) => {
        let matchCount = 0;
        qTokens.forEach((tok) => {
          if (chunk.keywords.some((k) => k.includes(tok) || tok.includes(k))) matchCount += 2;
          if (chunk.content.toLowerCase().includes(tok)) matchCount += 1;
        });
        const baseScore = matchCount > 0 ? 0.7 + Math.min(matchCount * 0.08, 0.28) : 0.42 + Math.random() * 0.15;
        return {
          ...chunk,
          similarity: parseFloat(baseScore.toFixed(3))
        };
      }).sort((a, b) => b.similarity - a.similarity);

      const end = performance.now();
      setSearchLatency(Math.max(8, Math.round(end - start)));
      setRagResults(scored);
      setIsSearching(false);
    }, 180);
  };

  const handleFireRequest = () => {
    const now = new Date().toLocaleTimeString();
    if (tokensLeft > 0) {
      setTokensLeft((prev) => prev - 1);
      setRateLogs((prev) => [
        { id: Date.now(), time: now, status: 200, msg: "HTTP 200 OK — Token consumed (Redis atomic DECR)" },
        ...prev.slice(0, 5)
      ]);
    } else {
      setRateLogs((prev) => [
        { id: Date.now(), time: now, status: 429, msg: "HTTP 429 Rate Limited — Token bucket exhausted" },
        ...prev.slice(0, 5)
      ]);
    }
  };

  return (
    <section id="playground" className="playground-section">
      <div className="playground-header">
        <span className="shimmer-badge">
          <FaTerminal className="pg-badge-icon" /> Live Engineering Sandbox
        </span>
        <h2>System Architecture & Proof-of-Work Labs</h2>
        <p className="pg-subtext">
          Interactive interactive simulators demonstrating RAG semantic vector search, zero-trust JWT RBAC validation, and Redis rate-limiting algorithms.
        </p>
      </div>

      <div className="pg-tabs-bar">
        <button
          className={`pg-tab ${activeTab === "rag" ? "active" : ""}`}
          onClick={() => setActiveTab("rag")}
        >
          <FaRobot /> 1. RAG Vector Search Simulator
        </button>
        <button
          className={`pg-tab ${activeTab === "jwt" ? "active" : ""}`}
          onClick={() => setActiveTab("jwt")}
        >
          <FaKey /> 2. JWT & RBAC Payload Inspector
        </button>
        <button
          className={`pg-tab ${activeTab === "rate" ? "active" : ""}`}
          onClick={() => setActiveTab("rate")}
        >
          <FaShieldAlt /> 3. Redis Token-Bucket Rate Limiter
        </button>
      </div>

      <div className="pg-content-box">
        {activeTab === "rag" && (
          <div className="rag-lab-container">
            <div className="lab-controls-row">
              <div className="rag-input-wrap">
                <FaSearch className="rag-search-icon" />
                <input
                  type="text"
                  value={ragQuery}
                  onChange={(e) => setRagQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSimulateRag(ragQuery)}
                  placeholder="Enter a technical prompt (e.g., 'RAG with FAISS', 'JWT security', '1000 DSA Java')..."
                />
              </div>
              <button
                className="lab-action-btn"
                onClick={() => handleSimulateRag(ragQuery)}
                disabled={isSearching}
              >
                <FaPlay /> {isSearching ? "Computing Embeddings..." : "Execute Vector Match"}
              </button>
            </div>

            <div className="preset-queries-row">
              <span className="pq-label">Try Preset Queries:</span>
              <button onClick={() => { setRagQuery("FAISS RAG OpenAI embeddings"); handleSimulateRag("FAISS RAG OpenAI embeddings"); }}>
                FAISS Vector Search
              </button>
              <button onClick={() => { setRagQuery("Zero-Trust JWT Auth & Redis"); handleSimulateRag("Zero-Trust JWT Auth & Redis"); }}>
                JWT & Auth Security
              </button>
              <button onClick={() => { setRagQuery("Java LeetCode Graph and DP"); handleSimulateRag("Java LeetCode Graph and DP"); }}>
                Java 1000+ DSA
              </button>
            </div>

            <div className="rag-metrics-bar">
              <span>Vector Dimensions: <strong>1,536 (text-embedding-3-small)</strong></span>
              <span>Metric: <strong>Cosine Similarity</strong></span>
              <span>In-Memory Latency: <strong>{searchLatency}ms</strong></span>
            </div>

            <div className="rag-results-grid">
              {ragResults.map((chunk, index) => (
                <div key={chunk.id} className="rag-chunk-card">
                  <div className="rcc-header">
                    <span className="rcc-rank">#{index + 1} Match</span>
                    <span className={`rcc-score ${chunk.similarity > 0.8 ? "high" : ""}`}>
                      Similarity: {(chunk.similarity * 100).toFixed(1)}%
                    </span>
                  </div>
                  <h4>{chunk.title}</h4>
                  <p>{chunk.content}</p>
                  <div className="rcc-keywords">
                    {chunk.keywords.slice(0, 5).map((k, i) => (
                      <span key={i} className="rcc-kw">#{k}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "jwt" && (
          <div className="jwt-lab-container">
            <div className="jwt-role-selector">
              <span className="jwt-role-lbl">Select Identity Role to Simulate:</span>
              <div className="jwt-role-buttons">
                {Object.keys(PRESET_JWT_TOKENS).map((key) => (
                  <button
                    key={key}
                    className={`jwt-role-btn ${jwtRole === key ? "active" : ""}`}
                    onClick={() => setJwtRole(key)}
                  >
                    <FaLock /> {PRESET_JWT_TOKENS[key].role}
                  </button>
                ))}
              </div>
            </div>

            <div className="jwt-visualizer-grid">
              <div className="jwt-card header-card">
                <span className="jwt-section-tag">Header (Algorithm & Type)</span>
                <pre className="jwt-code">
{JSON.stringify({ alg: "HS256", typ: "JWT" }, null, 2)}
                </pre>
              </div>

              <div className="jwt-card payload-card">
                <span className="jwt-section-tag">Decoded Payload Claims</span>
                <pre className="jwt-code">
{JSON.stringify(PRESET_JWT_TOKENS[jwtRole].payload, null, 2)}
                </pre>
              </div>
            </div>

            <div className="rbac-permission-matrix">
              <h4>RBAC Route Authorization Status:</h4>
              <div className="rbac-grid">
                <div className={`rbac-item ${PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("users:write") ? "allowed" : "denied"}`}>
                  {PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("users:write") ? <FaCheckCircle /> : <FaTimesCircle />}
                  <span>POST /api/v1/admin/users</span>
                </div>
                <div className={`rbac-item ${PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("rag:query") || PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("rag:override") ? "allowed" : "denied"}`}>
                  {PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("rag:query") || PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("rag:override") ? <FaCheckCircle /> : <FaTimesCircle />}
                  <span>POST /api/v1/rag/vector-query</span>
                </div>
                <div className={`rbac-item ${PRESET_JWT_TOKENS[jwtRole].payload.permissions.includes("profile:read") || PRESET_JWT_TOKENS[jwtRole].payload.role === "admin" ? "allowed" : "denied"}`}>
                  <FaCheckCircle />
                  <span>GET /api/v1/profile/resume</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rate" && (
          <div className="rate-lab-container">
            <div className="rate-interactive-panel">
              <div className="bucket-visual-card">
                <div className="bvc-header">
                  <h4>Redis Token Bucket (Capacity: {maxTokens})</h4>
                  <span className="token-count">{tokensLeft} / {maxTokens} Available</span>
                </div>

                <div className="token-bucket-track">
                  <div
                    className="token-bucket-fill"
                    style={{ width: `${(tokensLeft / maxTokens) * 100}%` }}
                  />
                </div>

                <div className="bucket-meta-row">
                  <span>Refill Rate: <strong>+1 token every 2.5s</strong></span>
                  <span>Store: <strong>Redis In-Memory Key</strong></span>
                </div>

                <button
                  className="send-rate-request-btn"
                  onClick={handleFireRequest}
                >
                  <FaBolt /> Dispatch API Request (Consume Token)
                </button>
              </div>

              <div className="rate-logs-card">
                <h4>Live HTTP Response Stream</h4>
                <div className="rate-logs-list">
                  {rateLogs.length === 0 ? (
                    <p className="rate-logs-empty">Click "Dispatch API Request" to test live rate limiting.</p>
                  ) : (
                    rateLogs.map((log) => (
                      <div key={log.id} className={`rate-log-item status-${log.status}`}>
                        <span className="rl-time">[{log.time}]</span>
                        <span className="rl-msg">{log.msg}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
