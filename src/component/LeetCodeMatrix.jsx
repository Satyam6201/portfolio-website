import React, { useState } from "react";
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
  FaJava
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/leetcodematrix.css";

const DIFFICULTY_STATS = [
  { level: "Easy", count: 330, total: 800, color: "#22c55e", percentage: 41 },
  { level: "Medium", count: 540, total: 1700, color: "#f59e0b", percentage: 32 },
  { level: "Hard", count: 130, total: 700, color: "#ef4444", percentage: 19 }
];

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
  const [selectedTopic, setSelectedTopic] = useState(TOPIC_MASTERY[0]);
  const [activeFilter, setActiveFilter] = useState("All");

  const totalSolved = 1000;

  return (
    <section id="dsa-matrix" className="dsa-matrix-section">
      <div className="dsa-header">
        <span className="shimmer-badge">
          <SiLeetcode className="dsa-badge-icon" /> Algorithmic Rigor & Problem Solving
        </span>
        <h2>1000+ DSA Solutions in Java</h2>
        <p className="dsa-subtext">
          Deep competitive programming discipline across graph theory, dynamic programming, tree traversals, and high-performance algorithms.
        </p>
      </div>

      <div className="dsa-summary-grid">
        <div className="dsa-overall-card">
          <div className="dsa-brand-row">
            <div className="dsa-icon-ring">
              <FaJava className="java-icon" />
            </div>
            <div>
              <span className="dsa-metric-num">1000+</span>
              <span className="dsa-metric-lbl">Total Problems Solved</span>
            </div>
          </div>
          <p className="dsa-card-p">
            Consistent coding discipline solving complex algorithmic constraints on LeetCode with strict time & space complexity analysis.
          </p>
          <a
            href="https://leetcode.com/u/SatyamMIshra62"
            target="_blank"
            rel="noopener noreferrer"
            className="dsa-verify-btn"
          >
            <SiLeetcode /> View LeetCode Profile <FaExternalLinkAlt />
          </a>
        </div>

        <div className="dsa-difficulty-card">
          <h3>Difficulty Distribution</h3>
          <div className="difficulty-bars">
            {DIFFICULTY_STATS.map((stat, idx) => (
              <div key={idx} className="diff-bar-item">
                <div className="diff-label-row">
                  <span className="diff-name" style={{ color: stat.color }}>{stat.level}</span>
                  <span className="diff-count">{stat.count}+ Solved</span>
                </div>
                <div className="diff-track">
                  <motion.div
                    className="diff-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stat.count / 600) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    style={{ background: stat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dsa-topic-mastery-container">
        <div className="dsa-topic-header-row">
          <h3>
            <FaLayerGroup /> Topic Mastery & Pattern Breakdown
          </h3>
          <span className="dsa-topic-hint">Select a topic to view architectural patterns</span>
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
