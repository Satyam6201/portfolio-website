import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTerminal,
  FaLayerGroup,
  FaStar,
  FaAward,
  FaBrain,
  FaFilter,
  FaJava,
  FaSyncAlt,
  FaFire,
  FaCalendarCheck,
  FaTrophy,
  FaBolt
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/leetcodematrix.css";

const FALLBACK_STATS = {
  totalSolved: 1064,
  totalQuestions: 4073,
  easySolved: 419,
  totalEasy: 969,
  mediumSolved: 468,
  totalMedium: 2124,
  hardSolved: 177,
  totalHard: 980,
  ranking: 28349,
  contributionPoint: 2696,
  reputation: 0,
  badgesCount: 26,
  activeDays: 359,
  maxStreak: 223,
  recentSubmissions: [
    { title: "Remove Outermost Parentheses", statusDisplay: "Accepted", lang: "java", timestamp: Math.floor(Date.now() / 1000) - 3600 },
    { title: "Reschedule Meetings for Maximum Free Time I", statusDisplay: "Accepted", lang: "java", timestamp: Math.floor(Date.now() / 1000) - 7200 },
    { title: "Reschedule Meetings for Maximum Free Time II", statusDisplay: "Accepted", lang: "java", timestamp: Math.floor(Date.now() / 1000) - 14400 },
    { title: "Remove Invalid Parentheses", statusDisplay: "Accepted", lang: "java", timestamp: Math.floor(Date.now() / 1000) - 86400 }
  ]
};

const TOPIC_MASTERY = [
  {
    topic: "Dynamic Programming",
    solved: 180,
    mastery: 96,
    patterns: ["0/1 Knapsack", "Longest Common Subsequence", "Matrix Chain Multiplication", "State Machine DP", "Bitmask DP"],
    desc: "Optimizing overlapping subproblems and state transitions from 2^N brute force to O(N) linear time."
  },
  {
    topic: "Graph Algorithms",
    solved: 140,
    mastery: 94,
    patterns: ["BFS / DFS Traversal", "Dijkstra's Shortest Path", "Disjoint Set Union (DSU)", "Topological Sort (Kahn's)", "Bellman-Ford"],
    desc: "Modeling network flow, dependency resolution, cycle detection, and distributed state routing."
  },
  {
    topic: "Binary Trees & BST",
    solved: 160,
    mastery: 98,
    patterns: ["Level Order Traversal", "LCA in Binary Tree", "Serialize / Deserialize", "Morris Traversal (O(1) Space)", "Segment Tree"],
    desc: "Recursive and iterative tree structures, balance invariants, and hierarchical indexing."
  },
  {
    topic: "Arrays & Sliding Window",
    solved: 220,
    mastery: 99,
    patterns: ["Variable & Fixed Window", "Two Pointers (Opposite/Same)", "Kadane's Algorithm", "Prefix Sum & Hash Invariants", "Dutch National Flag"],
    desc: "Cache-conscious array operations, sub-array bounds optimization, and two-pointer pointers arithmetic."
  },
  {
    topic: "Heaps, Priority Queue & Trie",
    solved: 90,
    mastery: 92,
    patterns: ["Top K Elements", "Merge K Sorted Lists", "Prefix Tree (Trie)", "Median from Data Stream", "Monotonic Stack / Queue"],
    desc: "Streaming statistics, fast auto-complete lookup, and monotonic range queries."
  },
  {
    topic: "Backtracking & Recursion",
    solved: 110,
    mastery: 95,
    patterns: ["N-Queens & Sudoku", "Subset / Combination Sum", "Word Search II", "Permutations with Duplicates", "Partitioning"],
    desc: "Pruning invalid state trees and managing recursive call stacks with precise backtracking state recovery."
  }
];

export default function LeetCodeMatrix() {
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [selectedTopic, setSelectedTopic] = useState(TOPIC_MASTERY[0]);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);

  const fetchLeetCodeData = async () => {
    setIsLoading(true);
    try {
      const primaryRes = await fetch("https://leetcode-api-faisalshohag.vercel.app/SatyamMIshra62");
      if (primaryRes.ok) {
        const data = await primaryRes.json();
        if (data && data.totalSolved) {
          setStats((prev) => ({
            ...prev,
            totalSolved: data.totalSolved || prev.totalSolved,
            totalQuestions: data.totalQuestions || prev.totalQuestions,
            easySolved: data.easySolved || prev.easySolved,
            totalEasy: data.totalEasy || prev.totalEasy,
            mediumSolved: data.mediumSolved || prev.mediumSolved,
            totalMedium: data.totalMedium || prev.totalMedium,
            hardSolved: data.hardSolved || prev.hardSolved,
            totalHard: data.totalHard || prev.totalHard,
            ranking: data.ranking || prev.ranking,
            contributionPoint: data.contributionPoint || prev.contributionPoint,
            recentSubmissions: data.recentSubmissions && data.recentSubmissions.length > 0
              ? data.recentSubmissions.slice(0, 6)
              : prev.recentSubmissions
          }));
          setIsLive(true);
          setLastSynced(new Date());
          setIsLoading(false);
          return;
        }
      }
    } catch (err) {
      // Primary API failed, continue to fallback API
    }

    try {
      const fallbackRes = await fetch("https://alfa-leetcode-api.onrender.com/SatyamMIshra62/solved");
      if (fallbackRes.ok) {
        const data = await fallbackRes.json();
        if (data && data.solvedProblem) {
          setStats((prev) => ({
            ...prev,
            totalSolved: data.solvedProblem || prev.totalSolved,
            easySolved: data.easySolved || prev.easySolved,
            mediumSolved: data.mediumSolved || prev.mediumSolved,
            hardSolved: data.hardSolved || prev.hardSolved
          }));
          setIsLive(true);
          setLastSynced(new Date());
          setIsLoading(false);
          return;
        }
      }
    } catch (err) {
      // Fallback API failed, gracefully preserve snapshot state
    }

    setIsLive(false);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLeetCodeData();
    const interval = setInterval(fetchLeetCodeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const difficultyItems = [
    {
      level: "Easy",
      count: stats.easySolved,
      total: stats.totalEasy,
      color: "#22c55e",
      percentage: Math.round((stats.easySolved / stats.totalEasy) * 100)
    },
    {
      level: "Medium",
      count: stats.mediumSolved,
      total: stats.totalMedium,
      color: "#f59e0b",
      percentage: Math.round((stats.mediumSolved / stats.totalMedium) * 100)
    },
    {
      level: "Hard",
      count: stats.hardSolved,
      total: stats.totalHard,
      color: "#ef4444",
      percentage: Math.round((stats.hardSolved / stats.totalHard) * 100)
    }
  ];

  return (
    <section id="dsa-matrix" className="dsa-matrix-section">
      <div className="dsa-header">
        <div className="dsa-live-tag-row">
          <span className="shimmer-badge">
            <SiLeetcode className="dsa-badge-icon" /> Algorithmic Rigor & Discipline
          </span>
          <div className="dsa-live-status-pill">
            <span className={`live-pulse-dot ${isLive ? "online" : "cached"}`} />
            <span>{isLive ? `Live Sync Active • Rank #${stats.ranking.toLocaleString()}` : `Verified Snapshot • Rank #${stats.ranking.toLocaleString()}`}</span>
            <button
              className="dsa-sync-btn"
              onClick={fetchLeetCodeData}
              disabled={isLoading}
              title="Re-sync latest stats from LeetCode"
            >
              <FaSyncAlt className={isLoading ? "spinning" : ""} />
            </button>
          </div>
        </div>

        <h2>{stats.totalSolved}+ DSA Solutions in Java</h2>
        <p className="dsa-subtext">
          High-performance algorithm design and competitive programming discipline solving complex constraints on LeetCode with strict asymptotic analysis.
        </p>
      </div>

      <div className="dsa-metric-cards-grid">
        <div className="dsa-stat-box primary">
          <div className="dsa-stat-icon-wrap java">
            <FaJava />
          </div>
          <div className="dsa-stat-content">
            <span className="dsa-stat-number">{stats.totalSolved}</span>
            <span className="dsa-stat-label">Total Problems Solved</span>
          </div>
          <div className="dsa-stat-foot">
            <span>Primary: <strong>Java 17/21</strong></span>
          </div>
        </div>

        <div className="dsa-stat-box">
          <div className="dsa-stat-icon-wrap rank">
            <FaTrophy />
          </div>
          <div className="dsa-stat-content">
            <span className="dsa-stat-number">#{stats.ranking.toLocaleString()}</span>
            <span className="dsa-stat-label">Global LeetCode Rank</span>
          </div>
          <div className="dsa-stat-foot">
            <span>Top Tier Competitive Coder</span>
          </div>
        </div>

        <div className="dsa-stat-box">
          <div className="dsa-stat-icon-wrap streak">
            <FaFire />
          </div>
          <div className="dsa-stat-content">
            <span className="dsa-stat-number">{stats.maxStreak} Days</span>
            <span className="dsa-stat-label">Max Daily Streak</span>
          </div>
          <div className="dsa-stat-foot">
            <span>{stats.activeDays} Total Active Days</span>
          </div>
        </div>

        <div className="dsa-stat-box">
          <div className="dsa-stat-icon-wrap badge">
            <FaAward />
          </div>
          <div className="dsa-stat-content">
            <span className="dsa-stat-number">{stats.badgesCount}</span>
            <span className="dsa-stat-label">LeetCode Badges</span>
          </div>
          <div className="dsa-stat-foot">
            <span>500-Days, 100-Days & Annual</span>
          </div>
        </div>
      </div>

      <div className="dsa-summary-grid">
        <div className="dsa-difficulty-card">
          <div className="dsa-card-top-row">
            <h3>Difficulty Distribution</h3>
            <span className="dsa-card-sub-stat">
              {stats.totalSolved} / {stats.totalQuestions} Solved
            </span>
          </div>

          <div className="difficulty-bars">
            {difficultyItems.map((stat, idx) => (
              <div key={idx} className="diff-bar-item">
                <div className="diff-label-row">
                  <span className="diff-name" style={{ color: stat.color }}>{stat.level}</span>
                  <span className="diff-count">
                    <strong>{stat.count}</strong> / {stat.total}
                    <span className="diff-pct"> ({stat.percentage}%)</span>
                  </span>
                </div>
                <div className="diff-track">
                  <motion.div
                    className="diff-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(stat.percentage * 1.5, 100)}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    style={{ background: stat.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://leetcode.com/u/SatyamMIshra62"
            target="_blank"
            rel="noopener noreferrer"
            className="dsa-verify-btn"
          >
            <SiLeetcode /> View Live LeetCode Profile <FaExternalLinkAlt />
          </a>
        </div>

        <div className="dsa-recent-stream-card">
          <div className="dsa-card-top-row">
            <h3>
              <FaBolt className="recent-bolt-icon" /> Recent Live Submissions
            </h3>
            <span className="dsa-live-badge">Verified AC</span>
          </div>

          <div className="recent-submissions-list">
            {stats.recentSubmissions && stats.recentSubmissions.length > 0 ? (
              stats.recentSubmissions.map((sub, i) => (
                <div key={i} className="recent-sub-item">
                  <div className="rsi-left">
                    <FaCheckCircle className="rsi-ac-icon" />
                    <span className="rsi-title">{sub.title}</span>
                  </div>
                  <div className="rsi-right">
                    <span className="rsi-lang">{sub.lang?.toUpperCase() || "JAVA"}</span>
                    <span className="rsi-status">Accepted</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="recent-sub-empty">No recent submissions found</div>
            )}
          </div>
        </div>
      </div>

      <div className="dsa-topic-mastery-container">
        <div className="dsa-topic-header-row">
          <h3>
            <FaLayerGroup /> Algorithmic Pattern Breakdown & Topic Mastery
          </h3>
          <span className="dsa-topic-hint">Select a topic to inspect complexity & architectural patterns</span>
        </div>

        <div className="dsa-topics-grid">
          <div className="dsa-topics-list">
            {TOPIC_MASTERY.map((item, idx) => (
              <button
                key={idx}
                className={`dsa-topic-btn ${selectedTopic.topic === item.topic ? "active" : ""}`}
                onClick={() => setSelectedTopic(item)}
              >
                <div className="dtb-left">
                  <span className="dtb-dot" />
                  <span className="dtb-title">{item.topic}</span>
                </div>
                <div className="dtb-right">
                  <span className="dtb-solved">{item.solved}+ solved</span>
                  <span className="dtb-percent">{item.mastery}%</span>
                </div>
              </button>
            ))}
          </div>

          <div className="dsa-topic-detail-card">
            <div className="dtd-header">
              <div className="dtd-title-row">
                <h4>{selectedTopic.topic}</h4>
                <span className="dtd-badge">
                  <FaStar /> {selectedTopic.mastery}% Pattern Mastery
                </span>
              </div>
              <p className="dtd-desc">{selectedTopic.desc}</p>
            </div>

            <div className="dtd-patterns-section">
              <span className="dtd-patterns-title">
                <FaCode /> Core Algorithmic Patterns Mastered:
              </span>
              <div className="dtd-patterns-grid">
                {selectedTopic.patterns.map((p, i) => (
                  <div key={i} className="dtd-pattern-item">
                    <FaCheckCircle className="dtd-check" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dtd-footer">
              <div className="dtd-footer-stat">
                <span>Solutions Written:</span>
                <strong>{selectedTopic.solved}+ Verified Submissions</strong>
              </div>
              <div className="dtd-footer-stat">
                <span>Primary Language:</span>
                <strong>Java 17 / 21</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
