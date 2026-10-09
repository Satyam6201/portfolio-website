import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaSearch,
  FaTimes,
  FaStar,
  FaSlidersH,
  FaThLarge,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaProjectDiagram,
  FaMicrochip,
  FaDocker,
  FaCheckCircle,
  FaBolt
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiOpenai } from "react-icons/si";
import "../styles/projects.css";

const projects = [
  {
    id: "mockmate-ai",
    title: "MockMate AI",
    subtitle: "Full-Stack AI Interview & ATS Resume Architect",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/mockmate-ai.jpg",
    description: "High-concurrency AI mock interview platform featuring Node clustering, distributed Redis caching, in-memory RAG resume parsing with OpenRouter LLMs, and real-time Socket.IO coding rounds.",
    details: "Architected a full-stack AI interview platform processing 10,000+ requests/min with <45ms API response latency. Engineered a distributed Redis caching layer, slashing database load by 68% and sustaining 5,000+ simultaneous WebSocket connections via Socket.IO Pub/Sub. Built an intelligent RAG resume-parsing pipeline with OpenRouter LLMs, achieving 98.4% contextual question accuracy. Developed an ATS AI Resume Builder with real-time scoring (99% ATS compatibility), atomic credit deduction, and vector PDF rendering, scaling to process 2,500+ exports/hour.",
    resumeHighlights: [
      "Architected high-concurrency AI interview platform using React, Node.js, Express, and MongoDB, leveraging Node clustering to process 10,000+ requests/min with <45ms API response latency.",
      "Engineered a distributed Redis caching layer, slashing database load by 68% and sustaining 5,000+ simultaneous WebSocket connections via Socket.IO Pub/Sub for live adaptive coding rounds.",
      "Built an intelligent RAG resume-parsing pipeline with OpenRouter LLMs, achieving 98.4% contextual question accuracy and accelerating mock evaluation speed by 75%.",
      "Developed an ATS AI Resume Builder with real-time scoring (99% ATS compatibility), atomic credit deduction, and vector PDF rendering, scaling to process 2,500+ resume exports/hour."
    ],
    architecture: {
      diagram: "Client (React 19) ➔ Express Gateway (Node Clustering) ➔ Redis Pub/Sub & Cache ➔ OpenRouter LLMs / LangChain ➔ MongoDB Atlas ➔ Stripe Webhooks",
      tradeoffs: [
        { decision: "Node Clustering & Redis Caching", reason: "Slashed database load by 68% and handled 10,000+ req/min with sub-45ms latency." },
        { decision: "Socket.IO Pub/Sub vs Polling", reason: "Sustained 5,000+ simultaneous live coding sessions with instant state propagation." },
        { decision: "OpenRouter LLMs RAG Pipeline", reason: "98.4% contextual question accuracy from resume embeddings with 75% faster mock evaluations." },
        { decision: "Atomic Credit Deduction & Vector PDF", reason: "Eliminated race conditions on concurrent resume exports scaling to 2,500+ exports/hr." }
      ],
      metrics: "10,000+ req/min, <45ms API latency, 99% ATS compatibility, 2,500+ resume exports/hr."
    },
    techStackLayers: [
      { layer: "Frontend Framework", stack: "React.js (v19), Tailwind CSS, Framer Motion, Zustand" },
      { layer: "Backend API", stack: "Node.js (Clustering), Express.js, Socket.IO, Multer" },
      { layer: "Databases & Caching", stack: "MongoDB Atlas (Replica Set), Redis (Pub/Sub & Query Cache)" },
      { layer: "Generative AI & RAG", stack: "OpenRouter LLMs (GPT-4o, Claude 3.5), LangChain, Vector Embeddings" },
      { layer: "Auth & Payments", stack: "Firebase Auth, JWT Token Rotation, Stripe API" },
      { layer: "DevOps & Deployment", stack: "Docker, GitHub Actions (CI/CD), Vercel, Render" }
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "OpenRouter (AI/LLM)", "Firebase Auth", "Stripe", "LangChain", "Tailwind CSS", "Docker", "CI/CD"],
    liveDemo: "https://mock-mate-ai-flame.vercel.app",
    github: "https://github.com/Satyam6201/MockMate-AI",
    featured: true
  },
  {
    id: "dentiva",
    title: "DentAIva",
    subtitle: "Enterprise AI Dental Voice & Clinical Triage SaaS",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/dentalva.png",
    description: "Production healthcare SaaS platform built on Next.js 15 App Router and TypeScript 5, integrating Vapi Web SDK for automated AI voice triage, Clerk RBAC auth, Prisma ORM 6 on PostgreSQL, and Resend email workflows.",
    details: "Built an enterprise healthcare SaaS integrating Vapi Web SDK for automated AI voice scheduling and patient triage. Engineered secure Clerk authentication with multi-role RBAC (Patient, Clinic Staff, Doctor) and structured PostgreSQL schema migrations using Prisma ORM 6 on Neon DB with connection pooling. Built with Next.js 15 Server Actions, TanStack React Query v5 optimistic mutations, Tailwind CSS v4, and Biome.",
    resumeHighlights: [
      "Engineered real-time automated conversational voice receptionist using Vapi Web SDK, cutting patient scheduling intake time by 70%.",
      "Designed serverless PostgreSQL database schemas using Prisma ORM 6 on Neon DB with connection pooling and strict relational integrity.",
      "Implemented multi-tenant role-based access control (RBAC) via Clerk authentication across Doctor, Clinic Admin, and Patient dashboards.",
      "Integrated Resend email triggers and TanStack React Query v5 for optimistic UI updates and instant booking confirmations."
    ],
    architecture: {
      diagram: "Next.js 15 (Turbopack) ➔ Vapi Web SDK Voice Stream ➔ Server Actions ➔ Clerk Auth (RBAC) ➔ Prisma ORM 6 ➔ PostgreSQL (Neon DB) ➔ Resend API",
      tradeoffs: [
        { decision: "PostgreSQL (Neon DB) + Prisma 6 vs NoSQL", reason: "Guaranteed ACID transactions and relational foreign-key integrity for medical appointment slots." },
        { decision: "Next.js 15 Server Actions + TanStack Query v5", reason: "Direct end-to-end type safety eliminating manual REST controller boilerplate with instant UI updates." },
        { decision: "Vapi Web SDK Voice Integration", reason: "Sub-300ms conversational voice latency with human-like triage comprehension." },
        { decision: "Biome Tooling", reason: "25x faster linting and formatting speed compared to legacy ESLint/Prettier setup." }
      ],
      metrics: "100% automated voice triage, <300ms voice interaction latency, 0 appointment scheduling race conditions."
    },
    techStackLayers: [
      { layer: "Framework", stack: "Next.js 15 (App Router, Turbopack, Server Actions)" },
      { layer: "Language", stack: "TypeScript 5" },
      { layer: "Styling & UI", stack: "Tailwind CSS v4, Radix UI, Lucide React, Sonner Toast" },
      { layer: "Database & ORM", stack: "PostgreSQL (Neon DB), Prisma ORM 6" },
      { layer: "Authentication & Billing", stack: "Clerk (@clerk/nextjs)" },
      { layer: "AI / Voice Integration", stack: "Vapi Web SDK (@vapi-ai/web)" },
      { layer: "Email Service", stack: "Resend + @react-email/components" },
      { layer: "Data Fetching & Caching", stack: "TanStack React Query v5" },
      { layer: "Linter & Formatter", stack: "Biome" }
    ],
    tech: ["Next.js 15", "TypeScript 5", "Tailwind CSS v4", "PostgreSQL (Neon DB)", "Prisma ORM 6", "Clerk", "Vapi Web SDK", "Resend", "TanStack Query v5", "Biome"],
    liveDemo: "https://dentwise-henna.vercel.app",
    github: "https://github.com/Satyam6201/DentAIva",
    featured: true
  },
  {
    id: "grocerin",
    title: "Grocren (Grocerin)",
    subtitle: "Scalable Grocery SaaS & AI Commerce Engine",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/Grocerin.jpg",
    description: "High-performance multi-vendor grocery SaaS platform featuring Google Gemini AI recipe & cart optimization, sub-15ms Redis caching, MongoDB Atlas connection pool, Stripe API checkout, and Docker Alpine microservices.",
    details: "Developed a modern multi-tenant grocery e-commerce web application with React 19, Vite 7, Tailwind CSS 4, and React Router v7. Powered by Node.js v20+ with Express, ioredis sub-15ms caching with in-memory TTL dictionary fallback, MongoDB Atlas 100-connection pooled cluster, Google Gemini API (gemini-1.5-flash, gemini-2.0-flash, gemini-1.5-pro), Stripe API & COD payments, Multer, Cloudinary SDK media CDN, and containerized deployment with Docker Compose & NGINX reverse proxy.",
    resumeHighlights: [
      "Engineered high-throughput grocery platform using React 19, Vite 7, Tailwind CSS 4, and Node.js v20+ with Express.",
      "Implemented sub-15ms query caching layer via ioredis with in-memory TTL dictionary fallback, slashing database read queries by 80%.",
      "Integrated Google Gemini AI (1.5-flash, 2.0-flash, 1.5-pro) for automated recipe generation, smart grocery substitution, and cart recommendations.",
      "Hardened backend with Helmet, Express Rate Limit, JWT auth, Stripe API, COD checkout, and multi-stage Alpine Docker containers behind NGINX."
    ],
    architecture: {
      diagram: "React 19 / Vite 7 ➔ NGINX Reverse Proxy ➔ Express v20 API (Helmet, Rate Limit) ➔ Redis (ioredis sub-15ms) ➔ MongoDB Atlas (Pooled 100) ➔ Google Gemini & Stripe API",
      tradeoffs: [
        { decision: "ioredis Sub-15ms Cache + TTL Dictionary Fallback", reason: "80% reduction in database read operations for high-velocity catalog queries." },
        { decision: "Google Gemini 1.5/2.0 Flash Integration", reason: "Real-time conversational basket optimization and dietary recipe parsing." },
        { decision: "Multi-Stage Alpine Docker + NGINX", reason: "Lightweight container footprint (<85MB) with reverse proxy SSL termination and rate limiting." },
        { decision: "Stripe Webhooks & COD Dual-Gateway", reason: "Guaranteed transactional order fulfillment with zero payment dropped state." }
      ],
      metrics: "Sub-15ms Redis query caching, 100-connection MongoDB pool, <85MB Docker container footprint, 99.9% checkout reliability."
    },
    techStackLayers: [
      { layer: "Frontend Framework", stack: "React 19, Vite 7, Tailwind CSS 4 (@tailwindcss/vite), React Router v7" },
      { layer: "Icons & UI Utilities", stack: "React Icons (react-icons/hi2, react-icons/fa6), Canvas Confetti, React Hot Toast" },
      { layer: "Backend API", stack: "Node.js (v20+), Express.js, ioredis, Mongoose, Multer, Cloudinary SDK" },
      { layer: "Security & Middleware", stack: "Helmet, Compression, Express Rate Limit, JWT Authentication, CORS" },
      { layer: "Databases & Caching", stack: "MongoDB Atlas (Pooled 100-connection cluster), Redis (Sub-15ms cache with in-memory TTL dictionary fallback)" },
      { layer: "Generative AI", stack: "Google Gemini API (gemini-1.5-flash, gemini-2.0-flash, gemini-1.5-pro)" },
      { layer: "Payment Gateways", stack: "Stripe API (Credit/Debit/Cards) & Cash on Delivery (COD)" },
      { layer: "DevOps & Containers", stack: "Docker (Multi-stage Alpine), Docker Compose, NGINX Reverse Proxy, Vercel" }
    ],
    tech: ["React 19", "Vite 7", "Tailwind CSS 4", "Node.js (v20+)", "Express.js", "MongoDB Atlas", "Redis (ioredis)", "Google Gemini AI", "Stripe API", "Docker", "NGINX"],
    liveDemo: "https://grocerinx.vercel.app",
    github: "https://github.com/Satyam6201/Grocerin",
    featured: true
  },
  {
    id: "connectify",
    title: "Connectify",
    subtitle: "Real-Time Chat & HD Video Collaboration Platform",
    tier: 1,
    tierLabel: "Flagship Production System",
    image: "/assets/Video and Message.jpg",
    description: "High-throughput real-time chat and HD video communication platform supporting 10,000+ concurrent users with Stream WebRTC/Chat SDK, Redis distributed caching, and zero-downtime Docker containers.",
    details: "Architected a real-time chat and HD video platform using React 19, Node.js, Express, MongoDB, and Redis, integrating Stream WebRTC/Chat SDK for sub-second communication. Engineered high-throughput backend infrastructure supporting 10,000+ concurrent users and 1,000+ req/sec, cutting database query latency by 45% via distributed Redis caching. Secured and containerized microservices with JWT/HTTP-only cookies, Redis sliding-window rate limiting (100 req/min), and Docker Compose for zero-downtime deployment.",
    resumeHighlights: [
      "Architected a real-time chat and HD video platform using React 19, Node.js, Express, MongoDB, and Redis, integrating Stream WebRTC/Chat SDK for sub-second communication.",
      "Engineered high-throughput backend infrastructure supporting 10,000+ concurrent users and 1,000+ req/sec, cutting database query latency by 45% via distributed Redis caching.",
      "Secured and containerized microservices with JWT/HTTP-only cookies, Redis sliding-window rate limiting (100 req/min), and Docker Compose for zero-downtime deployment."
    ],
    architecture: {
      diagram: "React 19 (Zustand, TanStack Query) ➔ Stream WebRTC / Chat SDK ➔ Express REST Gateway ➔ Redis Distributed Cache ➔ MongoDB Atlas (Docker)",
      tradeoffs: [
        { decision: "Stream WebRTC/Chat SDK vs Custom Mesh", reason: "Sub-second peer-to-peer HD video latency with automated signaling fallback." },
        { decision: "Redis Sliding-Window Rate Limiting (100 req/min)", reason: "Protected API endpoints against brute force and abuse with zero state leakage." },
        { decision: "Distributed Redis Caching", reason: "Slashed database query latency by 45% for 10,000+ concurrent active sessions." }
      ],
      metrics: "10,000+ concurrent users, 1,000+ req/sec, 45% latency reduction, 100 req/min rate limiting."
    },
    techStackLayers: [
      { layer: "Frontend Framework", stack: "React 19, Tailwind CSS, DaisyUI, Zustand, TanStack Query" },
      { layer: "Backend API", stack: "Node.js, Express.js, REST API, Stream SDK" },
      { layer: "Real-Time & Media", stack: "Stream WebRTC / Chat SDK, WebSockets" },
      { layer: "Databases & Caching", stack: "MongoDB Atlas, Redis Distributed Cache (Sliding-Window)" },
      { layer: "Security & Auth", stack: "JWT / HTTP-Only Cookies, Express Rate Limit, Helmet" },
      { layer: "DevOps & Containers", stack: "Docker, Docker Compose, GitHub Actions, Vercel" }
    ],
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Redis", "Stream SDK (WebRTC/Chat)", "Tailwind CSS", "DaisyUI", "Zustand", "TanStack Query", "JWT", "Docker"],
    liveDemo: "https://connectify-videocall.vercel.app",
    github: "https://github.com/Satyam6201/Connectify",
    featured: true
  },
  {
    id: "medi-connect",
    title: "Medi-Connect",
    subtitle: "Enterprise Healthcare & Online Appointment Portal",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/mediConnection.png",
    description: "Enterprise healthcare appointment booking portal featuring multi-role authentication (Patient, Doctor, Admin), atomic slot reservations, and Razorpay/Stripe payments.",
    details: "Comprehensive healthcare portal supporting patient online booking, doctor availability scheduling, admin dashboard for platform analytics, and integrated Razorpay/Stripe payments for consultation fees.",
    architecture: {
      diagram: "Client (React 19) ➔ Express REST Gateway ➔ MongoDB Atlas ➔ Razorpay/Stripe Gateway",
      tradeoffs: [
        { decision: "Multi-Role JWT Middleware vs Static Routes", reason: "Enforces zero-trust authorization at the API route level across 3 user roles." }
      ],
      metrics: "Zero double-booking conflicts via atomic database reservation locks."
    },
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe/Razorpay", "Tailwind CSS"],
    liveDemo: "https://prescripto.vercel.app",
    github: "https://github.com/Satyam6201/Medi-Connect",
    featured: false
  },
  {
    id: "employee-manager-pro",
    title: "Employee Manager Pro",
    subtitle: "Enterprise HRMS & Department Analytics",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/employee-manager.png",
    description: "Enterprise Human Resource Management System (HRMS) built with Next.js 14 App Router, Prisma ORM, PostgreSQL, and NextAuth session handling.",
    details: "An enterprise-grade Human Resource Management System built with Next.js 14 App Router, Prisma ORM, and PostgreSQL. Includes department analytics, shift tracking, NextAuth session handling, and Framer Motion micro-interactions.",
    architecture: {
      diagram: "Client (Next.js 14) ➔ NextAuth Handler ➔ Prisma ORM ➔ PostgreSQL Database",
      tradeoffs: [
        { decision: "NextAuth vs Custom Session", reason: "Standardized OAuth & credential session handling with CSRF protection." }
      ],
      metrics: "Instant server-side filtered queries over complex employee rosters."
    },
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "NextAuth", "Framer Motion", "Tailwind CSS"],
    liveDemo: "https://employee-manager-pro-chi.vercel.app",
    github: "https://github.com/Satyam6201/employee-manager-pro",
    featured: false
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard UI",
    subtitle: "Analytics & Telemetry Dashboard",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/SaaS-Dashboard.png",
    description: "Interactive analytics dashboard equipped with chart visualizations, user management tables, and quick action telemetry.",
    details: "Admin panel layout equipped with interactive chart visualizations, user management tables, and quick action bars.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://saas-dashboard-teal.vercel.app",
    github: "https://github.com/Satyam6201/SaaS-Dashboard",
    featured: false
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    subtitle: "E-Commerce Experience",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/amazon.webp",
    description: "Full-featured e-commerce frontend replicating Amazon's interface, featuring product filtering, cart persistence, and rating metrics.",
    details: "Fully functional e-commerce frontend replicating Amazon's interface, featuring product filtering, cart persistence, ratings calculation, and responsive layout.",
    tech: ["React.js", "JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://amazon-clone-react-js-pi.vercel.app",
    github: "https://github.com/Satyam6201/Amazon-Clone---React.js",
    featured: false
  },
  {
    id: "quora-post",
    title: "Quora Post Platform",
    subtitle: "RESTful Community Forum",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/Quora Post.jpg",
    description: "RESTful Q&A forum platform with post creation, answer threads, voting metrics, and tag-based filtering.",
    details: "RESTful application for posting questions, adding answers, voting on responses, and filtering posts by tags.",
    tech: ["Node.js", "Express.js", "EJS", "CSS"],
    liveDemo: "https://github.com/Satyam6201/Quora-Post",
    github: "https://github.com/Satyam6201/Quora-Post",
    featured: false
  },
  {
    id: "digital-clock",
    title: "Digital Clock App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/Digital-clock-App.png",
    description: "Interactive clock web app featuring customized timezone toggling, alarm sound notifications, stopwatch, and dynamic themes.",
    details: "Interactive clock web app featuring customized timezone toggling, alarm sound notifications, stopwatch, and dark/light color themes.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://clockify-delta.vercel.app/",
    github: "https://github.com/Satyam6201/Digital-Clock-App"
  },
  {
    id: "memory-card",
    title: "Memory Card Game",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/memory-card-game.avif",
    description: "Gamified React application testing recall speed with flipped card animations, move counter, and timer.",
    details: "Gamified React application testing recall speed with flipped card animations, move counter, and timer.",
    tech: ["React.js", "JavaScript", "CSS"],
    liveDemo: "https://memory-card-game-bice-zeta.vercel.app",
    github: "https://github.com/Satyam6201/Memory-Card-Game"
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/Quiz Game.jpg",
    description: "Category-driven trivia game pulling dynamic questions from OpenTDB API with countdown timer and performance analytics.",
    details: "Category-driven trivia game pulling dynamic questions from OpenTDB API with countdown timer and performance analytics.",
    tech: ["React.js", "JavaScript", "REST API", "CSS"],
    liveDemo: "https://quiz-app-zeta-rust-62.vercel.app",
    github: "https://github.com/Satyam6201/Quiz-App"
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/weather-app.jpg",
    description: "Weather forecast app fetching real-time data from an API with location search and 5-day predictive forecasts.",
    details: "Fetches live temperature, humidity, wind velocity, and 5-day weather predictions using OpenWeatherMap API.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    liveDemo: "https://weather-app-seven-ashen-32.vercel.app",
    github: "https://github.com/Satyam6201/Weather-App"
  },
  {
    id: "ai-resume-parser",
    title: "AI Resume Parser",
    subtitle: "Production PDF-to-JSON Heuristic & Image Extraction Engine",
    tier: 2,
    tierLabel: "Real-Time & SaaS Application",
    image: "/assets/resume-parser.png",
    description: "Production-ready web application built with Node.js and Express that transforms PDF resumes into strictly structured JSON data with profile image extraction and zero external API dependencies.",
    details: "Engineered an ultra-fast, local heuristic & regex parsing pipeline using Node.js, Express, pdf-parse, and Multer. Features automated profile picture extraction via PDF internal operator stream interception, zero-hallucination strict JSON schemas, section boundary isolation (Experience, Education, Projects, Skills, Summary), and a dark-mode Glassmorphism drag-and-drop UI.",
    resumeHighlights: [
      "Engineered an automated PDF resume-to-JSON extraction engine in Node.js and Express with strict schema validation.",
      "Scanned PDF internal rendering operators to intercept raw image buffers, automatically extracting and saving embedded profile photos.",
      "Implemented modular, isolated section parsers with heuristic boundary detection, eliminating cross-section data bleeding without external LLM costs.",
      "Built a dark-mode Glassmorphism drag-and-drop interface with client-side syntax highlighting and sub-100ms parsing latency."
    ],
    architecture: {
      diagram: "Client (Drag & Drop UI) ➔ Express POST /upload (Multer) ➔ pdf-parse Stream Interceptor ➔ Text Normalizer ➔ Section Boundary Detector ➔ Isolated Section Parsers ➔ Strict JSON Response",
      tradeoffs: [
        { decision: "Local Regex & Heuristics vs Cloud LLM APIs", reason: "Zero operational API costs, zero data privacy leaks, and sub-100ms local parse latency." },
        { decision: "Modular Isolated Parsers vs Single-Pass Parser", reason: "Completely eliminates cross-section entity bleed between Experience and Projects." },
        { decision: "Custom PDF Pagerender Buffer Interception", reason: "Scans internal rendering operators to extract embedded JPEG/PNG candidate profile pictures directly." }
      ],
      metrics: "Sub-100ms local parse latency, 100% strict JSON schema compliance, 0 external API costs, automatic profile photo extraction."
    },
    techStackLayers: [
      { layer: "Backend API", stack: "Node.js (LTS), Express.js, Multer (multipart/form-data)" },
      { layer: "Parsing Engine", stack: "pdf-parse (Custom Pagerender Image Interceptor), Heuristic Boundary Detector, Regex Dictionary" },
      { layer: "Frontend UI", stack: "Vanilla HTML5, CSS3 Glassmorphism, JavaScript ES6+ (Drag & Drop, Syntax Highlighting)" },
      { layer: "Storage & File System", stack: "Local File Buffers (/uploads/profile candidate photo storage)" }
    ],
    tech: ["Node.js", "Express.js", "JavaScript", "pdf-parse", "Multer", "HTML5", "CSS3 Glassmorphism", "Regex Engine"],
    liveDemo: "https://github.com/Satyam6201/Resume-Parser",
    github: "https://github.com/Satyam6201/Resume-Parser",
    featured: true
  },
  {
    id: "brick-breaker",
    title: "2D Brick Breaker Game",
    tier: 3,
    tierLabel: "Early Prototype & Utility",
    image: "/assets/2D Brick Breaker.png",
    description: "HTML5 Canvas arcade game with collision detection physics, score multiplier, and paddle mechanics.",
    details: "HTML5 Canvas arcade game with collision detection physics, score multiplier, and lives management.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    liveDemo: "https://2-d-brick-breaker-game.vercel.app",
    github: "https://github.com/Satyam6201/2D-Brick-Breaker-Game"
  }
];

const uniqueTech = ["All", ...new Set(projects.flatMap((p) => p.tech))];

const projectTiers = [
  { label: "All Work", key: "all" },
  { label: "Tier 1: Flagship Systems", key: "tier1" },
  { label: "Tier 2: Real-Time & SaaS", key: "tier2" },
  { label: "AI & Voice / RAG", key: "ai" },
  { label: "Next.js & SQL", key: "next" },
  { label: "Tier 3: Early Prototypes", key: "tier3" },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewMode, setViewMode] = useState("grid");
  const [stageIndex, setStageIndex] = useState(0);
  const [showArchived, setShowArchived] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    let result = projects;

    if (selectedCategory === "tier1") {
      result = result.filter((p) => p.tier === 1);
    } else if (selectedCategory === "tier2") {
      result = result.filter((p) => p.tier === 2);
    } else if (selectedCategory === "tier3") {
      result = result.filter((p) => p.tier === 3);
    } else if (selectedCategory === "ai") {
      result = result.filter((p) => p.tech.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("rag") || t.toLowerCase().includes("vapi") || t.toLowerCase().includes("gemini") || t.toLowerCase().includes("openrouter")));
    } else if (selectedCategory === "next") {
      result = result.filter((p) => p.tech.some(t => t.toLowerCase().includes("next") || t.toLowerCase().includes("postgres") || t.toLowerCase().includes("prisma")));
    }

    if (filter !== "All") {
      result = result.filter((p) => p.tech.includes(filter));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory === "all" && !showArchived && !searchQuery.trim() && filter === "All") {
      result = result.filter(p => p.tier !== 3);
    }

    setFilteredProjects(result);
    setStageIndex(0);
  }, [filter, selectedCategory, searchQuery, showArchived]);

  const handleNext = () => setStageIndex((prev) => (prev + 1) % filteredProjects.length);
  const handlePrev = () => setStageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header-wrap">
        <span className="shimmer-badge">
          <FaProjectDiagram /> Proven Track Record & Production Architecture
        </span>
        <h2>Featured Systems & Engineering Projects</h2>
        <p className="projects-subtext">
          Curated full-stack SaaS platforms, RAG vector retrieval engines, AI voice agents, and real-time distributed applications built for production scale.
        </p>
      </div>

      <div className="project-category-pills">
        {projectTiers.map((cat) => (
          <button
            key={cat.key}
            className={`skill-tab ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => { setSelectedCategory(cat.key); setFilter("All"); }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="filter-search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search systems by name, stack (e.g. Next.js 15, Redis, Vapi, Gemini)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}><FaTimes /></button>
          )}
        </div>
        <div className="filter-container">
          <label htmlFor="tech-filter">Filter by Tech:</label>
          <select id="tech-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            {uniqueTech.map((tech, i) => <option key={i} value={tech}>{tech}</option>)}
          </select>
        </div>
      </div>

      <div className="projects-view-switcher">
        <button className={`pv-toggle-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
          <FaThLarge /> Matrix Grid View
        </button>
        <button className={`pv-toggle-btn ${viewMode === "stage" ? "active" : ""}`} onClick={() => setViewMode("stage")}>
          <FaSlidersH /> 3D Stage Carousel
        </button>
      </div>

      {viewMode === "grid" && (
        <motion.div className="projects-container" layout>
          {filteredProjects.length === 0 ? (
            <div className="no-projects"><p>No projects match your filter. Try another tech!</p></div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.05 }}
                  className="project-card glow-card-hover"
                >
                  <div className="project-card-top-badges">
                    <span className={`tier-badge tier-${project.tier}`}>
                      {project.tier === 1 ? <FaStar /> : <FaCode />} {project.tierLabel}
                    </span>
                  </div>
                  <div className="img-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                    <div className="overlay"><p>{project.description}</p></div>
                  </div>
                  <div className="project-info">
                    <div className="project-title-header">
                      <h3>{project.title}</h3>
                      {project.subtitle && <span className="project-card-sub">{project.subtitle}</span>}
                    </div>
                    <div className="tech-stack">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="tech"
                          style={{ cursor: "pointer" }}
                          title={`Filter by ${tech}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setFilter(tech);
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && <span className="tech extra">+{project.tech.length - 5}</span>}
                    </div>
                    <div className="project-links">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn"><FaExternalLinkAlt /> Live Demo</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn"><FaGithub /> GitHub</a>
                    </div>
                    <button className="details-btn" onClick={() => setSelectedProject(project)}>
                      Architecture & Deep Dive Case Study
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
      )}

      {viewMode === "stage" && (
        <div className="projects-stage-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {filteredProjects.length === 0 ? (
            <div className="no-projects"><p>No projects match your filter. Try another tech!</p></div>
          ) : (
            <>
              <div className="projects-3d-track">
                {filteredProjects.map((project, index) => {
                  const count = filteredProjects.length;
                  let offset = (index - stageIndex + count) % count;
                  if (offset > count / 2) offset -= count;

                  let posClass = "hidden-stage";
                  if (offset === 0) posClass = "active-stage";
                  else if (offset === -1 || (stageIndex === 0 && index === count - 1)) posClass = "prev-stage";
                  else if (offset === 1 || (stageIndex === count - 1 && index === 0)) posClass = "next-stage";

                  return (
                    <div key={project.id} className={`project-stage-card ${posClass}`} onClick={() => posClass === "active-stage" ? setSelectedProject(project) : setStageIndex(index)}>
                      <div className="project-card-top-badges">
                        <span className={`tier-badge tier-${project.tier}`}>
                          {project.tier === 1 ? <FaStar /> : <FaCode />} {project.tierLabel}
                        </span>
                      </div>
                      <img src={project.image} alt={project.title} className="stage-card-image" />
                      <div className="stage-card-body">
                        <div className="stage-card-title-row">
                          <h3>{project.title}</h3>
                        </div>
                        {project.subtitle && <span className="stage-card-sub">{project.subtitle}</span>}
                        <p className="stage-card-desc">{project.description}</p>
                        <div className="tech-stack">
                          {project.tech.slice(0, 4).map((t, i) => <span key={i} className="tech">{t}</span>)}
                          {project.tech.length > 4 && <span className="tech extra">+{project.tech.length - 4}</span>}
                        </div>
                        <div className="stage-card-links">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn" onClick={e => e.stopPropagation()}><FaExternalLinkAlt /> Live</a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn" onClick={e => e.stopPropagation()}><FaGithub /> GitHub</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="stage-nav-controls">
                <button className="stage-nav-btn" onClick={handlePrev}><FaChevronLeft /></button>
                <div className="stage-dots">
                  {filteredProjects.map((_, i) => (
                    <button key={i} className={`dot ${i === stageIndex ? "active" : ""}`} onClick={() => setStageIndex(i)} />
                  ))}
                </div>
                <button className="stage-nav-btn" onClick={handleNext}><FaChevronRight /></button>
              </div>
            </>
          )}
        </div>
      )}

      {selectedCategory === "all" && (
        <div className="archive-toggle-wrapper">
          <button className="archive-toggle-btn" onClick={() => setShowArchived(p => !p)}>
            {showArchived ? <FaChevronUp /> : <FaChevronDown />}
            <span>{showArchived ? "Hide Early Prototypes & Mini-Apps" : "View Early Prototypes & Mini-Apps (5 Projects)"}</span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="project-modal" initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}><FaTimes /></button>
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              
              <div className="modal-header-row">
                <div>
                  <h3>{selectedProject.title}</h3>
                  {selectedProject.subtitle && <p className="modal-subtitle-text">{selectedProject.subtitle}</p>}
                </div>
                <span className={`tier-badge tier-${selectedProject.tier}`}>
                  {selectedProject.tierLabel}
                </span>
              </div>

              <p className="modal-description">{selectedProject.details || selectedProject.description}</p>
              
              {selectedProject.resumeHighlights && (
                <div className="modal-highlights-box">
                  <h4><FaCheckCircle className="modal-hl-icon" /> Core Engineering Accomplishments:</h4>
                  <ul className="modal-highlights-list">
                    {selectedProject.resumeHighlights.map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.techStackLayers && (
                <div className="modal-layer-stack-box">
                  <h4><FaLayerGroup className="modal-layer-icon" /> Technology Stack Architecture:</h4>
                  <div className="stack-layers-table">
                    {selectedProject.techStackLayers.map((row, idx) => (
                      <div key={idx} className="stack-layer-row">
                        <span className="layer-name">{row.layer}</span>
                        <span className="layer-tech">{row.stack}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.architecture && (
                <div className="modal-architecture-box">
                  <div className="arch-header">
                    <FaServer />
                    <h4>System Architecture & Flow:</h4>
                  </div>
                  <div className="arch-flow-diagram">
                    <code>{selectedProject.architecture.diagram}</code>
                  </div>

                  <div className="arch-tradeoffs-section">
                    <h5>Key Engineering Decisions & Trade-Offs:</h5>
                    <div className="tradeoffs-list">
                      {selectedProject.architecture.tradeoffs.map((t, idx) => (
                        <div key={idx} className="tradeoff-item">
                          <strong>{t.decision}:</strong> <span>{t.reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="arch-metrics-footer">
                    <span>Production Benchmarks: <strong>{selectedProject.architecture.metrics}</strong></span>
                  </div>
                </div>
              )}

              <div className="modal-tech-list">
                <h4>Technologies & Tools:</h4>
                <div className="tech-stack">
                  {selectedProject.tech.map((t, i) => <span key={i} className="tech">{t}</span>)}
                </div>
              </div>

              <div className="modal-actions">
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="live-btn"><FaExternalLinkAlt /> Open Live Application</a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-btn"><FaGithub /> View Source Code</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;