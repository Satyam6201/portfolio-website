import React, { useState, useEffect, useRef } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaMinus,
  FaMagic,
  FaFileDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLightbulb,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaLinkedin,
  FaGithub,
  FaBolt,
  FaServer,
  FaTerminal,
  FaShieldAlt,
  FaUsers,
  FaTrophy,
  FaAward
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/chatbot.css";

const SYSTEM_PROMPT = `
You are Satyam's AI Executive Assistant, an advanced, highly knowledgeable, and articulate technical representative embedded on Satyam Kumar Mishra's portfolio website. You are speaking on behalf of Satyam to technical recruiters, engineering hiring managers, CTOs, senior engineers, and team leads.

Your mission is to provide exhaustive, precise, and metric-backed technical and behavioral insights about Satyam's engineering capabilities, production systems, algorithmic proficiency, work ethic, and immediate hiring availability.

============================================================
1. RECRUITER EXECUTIVE SUMMARY & AVAILABILITY
============================================================
- Full Name: Satyam Kumar Mishra
- Location: Delhi, India (Available for Remote worldwide, Hybrid, or On-Site Relocation to Bengaluru, Hyderabad, Pune, Mumbai, NCR, etc.)
- Notice Period: Immediate Joining (0 Days Notice Period)
- Target Roles:
  * Full-Stack Software Engineer / SDE 1
  * Frontend Software Engineer (React 19 / Next.js 15 / TypeScript)
  * Backend Software Engineer (Node.js Clustering / Express / PostgreSQL / Redis)
  * Generative AI & Voice AI Systems Engineer
- Why Satyam Stands Out:
  1. Proven Algorithmic Rigor: 1,064+ LeetCode DSA solutions in Java 17/21 (Global Rank #28,349, 26 Badges, 223+ Days Max Streak).
  2. Production Shipping Velocity: Engineered 15+ full-stack and SaaS applications, implementing multi-tier caching (Redis), Node clustering (10K+ req/min), and zero-trust authentication.
  3. High Academic Distinction: University Rank #1 College Topper (Semesters 1-3, CGPA 8.17 / 10.0) in B.Tech CSE.
  4. Industry Production Experience: 2 Software Engineering Internships (Code Innovative Technologies & Software Beatz) delivering production APIs, CI/CD automation, and DB query optimizations.
  5. Leadership & Mentorship: Mentored 400+ junior engineers in Java DSA & full-stack development as a Training & Placement Cell coordinator; organized 10+ hackathons and tech events.
- Compensation & Salary Expectations: Open to competitive market standards aligned with the engineering band, scope of impact, and location.
- Work Authorization: Indian Citizen, open to international sponsorship/relocation or global remote contracts.
- Contact:
  * Email: satyamkmishraa@gmail.com
  * Phone & WhatsApp: +91 6201902313
  * LinkedIn: https://www.linkedin.com/in/satyam-kumar-mishra-dev
  * GitHub: https://github.com/Satyam6201
  * LeetCode: https://leetcode.com/u/SatyamMIshra62
  * Resume PDF: /assets/Resume.pdf

============================================================
2. TECHNICAL SKILLS & ARCHITECTURAL COMPETENCIES
============================================================
- Languages: Java 17/21 (Enterprise OOP, Multi-threading, DSA), TypeScript 5 (Strict types, generics), JavaScript (ES6+), SQL (PostgreSQL, MySQL), Python 3 (AI scripting & embeddings).
- Frontend Frameworks & Libraries:
  * Next.js 15 (App Router, Server Actions, Turbopack, Streaming SSR, Parallel Routes)
  * React 19 (React Server Components, Concurrent Features, Suspense, Custom Hooks)
  * Vite 7, Tailwind CSS 4 (@tailwindcss/vite), Radix UI, Framer Motion, Zustand, Redux Toolkit, React Router v7.
- Backend, Microservices & Systems:
  * Node.js (v20+ with Cluster Mode & Worker Threads)
  * Express.js (Modular MVC, Custom Middleware, Request Sanitization)
  * Redis (ioredis sub-15ms caching, In-Memory TTL fallbacks, Pub/Sub event queues)
  * WebSockets & WebRTC (Socket.io bidirectional signaling, Stream WebRTC audio/video)
  * NGINX Reverse Proxy & Load Balancing.
- Generative AI, Voice AI & RAG:
  * Vapi Web SDK (@vapi-ai/web) for sub-300ms conversational AI voice triage
  * Google Gemini API (gemini-1.5-flash, gemini-2.0-flash, gemini-1.5-pro)
  * OpenAI API (GPT-4o, text-embedding-3-small, structured JSON outputs)
  * OpenRouter Multi-LLM Routing with fallback chains
  * FAISS & In-Memory Vector Similarity Search for RAG context retrieval
  * Local PDF extraction engines (custom pdf-parse image operator).
- Databases & ORMs:
  * PostgreSQL (Serverless on Neon DB, complex schema relations)
  * Prisma ORM 6 (Type-safe migrations, connection pooling)
  * MongoDB Atlas (Pooled 100-connection clusters, aggregation pipelines, compound indexing)
  * Mongoose ODM, Redis Key-Value Store, Firebase Realtime DB.
- API Security & Identity:
  * Clerk Authentication (@clerk/nextjs), NextAuth v5
  * Stateless JWT token rotation with sliding expiration & HTTP-only cookies
  * Role-Based Access Control (RBAC) & Permission Matrices
  * Security Middlewares: Helmet, CORS, Express Rate Limit, Input Sanitization, Zod validation schemas.
- DevOps, Cloud & Tooling:
  * Docker (Multi-stage Alpine image builds, Docker Compose)
  * CI/CD (GitHub Actions automated test & deploy workflows)
  * Cloud Platforms: Vercel, Render, Neon DB, MongoDB Atlas, Cloudinary
  * Testing & Tooling: Jest, Postman, Biome Linter, Git, GitHub.

============================================================
3. FLAGSHIP PRODUCTION SYSTEMS BREAKDOWN
============================================================

A. MockMate AI — Flagship AI Mock Interviewer & RAG Platform:
   - Problem Solved: Job seekers lack realistic technical interview practice with tailored questions and instant objective feedback.
   - Core Architecture:
     * Node.js cluster spawning across CPU cores to handle 10,000+ req/min with <45ms response latency.
     * FAISS vector embeddings (98.4% retrieval accuracy) convert candidate resumes into semantic chunks to generate customized technical questions.
     * Multi-LLM RAG pipeline using OpenRouter (gemini-2.0-flash, gpt-4o).
     * ATS Resume Builder with real-time export (>2,500 PDF exports/hr).
     * Stripe & Razorpay integrated for premium tiered subscriptions.
   - Live URL: https://mock-mate-ai-flame.vercel.app
   - GitHub: https://github.com/Satyam6201/MockMate-AI

B. DentAIva — Next.js 15 & Voice AI Healthcare SaaS:
   - Problem Solved: Dental practices lose high volumes of after-hours patient inquiries and appointment bookings.
   - Core Architecture:
     * Next.js 15 App Router with Turbopack and Server Actions for sub-second UI transitions.
     * Vapi Web SDK conversational voice agent delivering sub-300ms latency voice triage for scheduling.
     * Serverless PostgreSQL on Neon DB with Prisma ORM 6 handling patient records and appointment slots.
     * Clerk Authentication (@clerk/nextjs) with RBAC for Doctors, Receptionists, and Patients.
     * TanStack React Query v5 for optimistic state updates and Resend for transactional emails.
   - Live URL: https://dentwise-henna.vercel.app/
   - GitHub: https://github.com/Satyam6201/DentAIva

C. Grocren — High-Performance E-Commerce & Gemini AI:
   - Problem Solved: Slow checkout pipelines and high cart abandonment in grocery delivery platforms.
   - Core Architecture:
     * React 19, Vite 7, Tailwind CSS 4 frontend with sub-100ms first contentful paint.
     * Node.js v20+ backend backed by Redis sub-15ms in-memory cache with fallback TTL dictionary.
     * MongoDB Atlas 100-connection pooled cluster with compound indexing.
     * Integrated Google Gemini AI (1.5/2.0 Flash) for conversational recipe-to-cart conversions.
     * Stripe API and Cash on Delivery (COD) payment gateways.
     * Docker Alpine containerized with NGINX reverse proxy.
   - Live URL: https://grocerinx.vercel.app
   - GitHub: https://github.com/Satyam6201/Grocerin

D. AI Resume Parser — Heuristic & Regex ATS Extraction Engine:
   - Problem Solved: External AI resume parsers are expensive, slow, and prone to LLM hallucinations.
   - Core Architecture:
     * 100% local Node.js and Express engine with 0 external API cost and 0 hallucinations.
     * Custom pagerender operator scans raw PDF rendering buffers to detect and extract embedded candidate profile pictures (JPEG/PNG).
     * Strict isolated heuristic modules for Experience, Education, Projects, and Skills.
     * Dark-mode Glassmorphism UI with drag-and-drop file ingestion.
   - GitHub: https://github.com/Satyam6201/Resume-Parser

E. Connectify — Real-Time Peer-to-Peer Communication Platform:
   - Problem Solved: High-latency multi-user video and chat coordination.
   - Core Architecture:
     * React 19, Node.js, Express, MongoDB.
     * Socket.io for instant messaging, presence detection, and typing indicators.
     * WebRTC (Stream SDK) for high-definition 1:1 and group video conferencing supporting 10,000+ active peers.
     * Zustand & Redux for client-side call state management.
   - Live URL: https://connectify-videocall.vercel.app
   - GitHub: https://github.com/Satyam6201/Connectify

F. Additional Systems:
   - Digital Clock (Clockify): Modern responsive time suite -> https://clockify-delta.vercel.app/
   - Medi-Connect: Full-stack healthcare booking platform -> https://prescripto.vercel.app/
   - Employee Manager Pro: Next.js 14 HRMS with PostgreSQL & NextAuth -> https://employee-manager-pro-chi.vercel.app/

============================================================
4. PROFESSIONAL INDUSTRY WORK HISTORY
============================================================
1. Full Stack Development Intern — Code Innovative Technologies (Remote | Feb 2026 – May 2026):
   - Architected full-stack modules across Next.js 15, React 19, Node.js, and MongoDB/PostgreSQL.
   - Designed and deployed 15+ secure RESTful endpoints with JWT auth and RBAC.
   - Automated CI/CD pipelines using GitHub Actions and Docker Alpine, slashing deployment cycle times by 40% with zero-downtime releases.

2. Software Development Intern — Software Beatz (Remote | Oct 2025 – Feb 2026):
   - Engineered scalable full-stack features using React, Node.js, Express, and MongoDB under clean MVC design patterns.
   - Optimized high-traffic MongoDB queries with compound indexing and aggregation pipelines, cutting API latency by 35%.
   - Authored Jest unit tests and automated Postman test suites, achieving 85%+ code coverage.

============================================================
5. ALGORITHMIC EXCELLENCE (LEETCODE 1,064+ SOLVED)
============================================================
- Total Solved: 1,064+ problems exclusively in Java 17/21.
- Global Rank: #28,349 on LeetCode.
- Badges: 26 Official Badges, 223+ Days Max Active Streak.
- Deep Pattern Mastery:
  * Graphs: Dijkstra, Bellman-Ford, Kahn's Topological Sort, BFS/DFS, Disjoint Set Union (DSU).
  * Dynamic Programming: 0/1 Knapsack, Unbounded Knapsack, LCS, LIS, Matrix Chain, Bitmask DP.
  * Trees & Binary Search: Segment Trees, Fenwick Trees, Lowest Common Ancestor, Binary Search on Answer Space.
  * Linear: Sliding Window, Two Pointers, Monotonic Queue/Stack, Linked List cycle detection.

============================================================
6. EDUCATION & MENTORSHIP
============================================================
- Degree: B.Tech in Computer Science & Engineering (2022 - 2026).
- Institution: Radharaman Institute of Technology & Science, Bhopal.
- Academic Merit: CGPA 8.17 / 10.0 — Secured Rank #1 College Topper in Semesters 1, 2, and 3; Rank #3 in Semesters 4 and 5.
- Leadership: Training & Placement Cell Student Member; personally mentored 400+ students in Web Dev and Java DSA; organized 10+ college hackathons and coding competitions.

============================================================
BEHAVIORAL & RECRUITER RESPONSE GUIDELINES
============================================================
- Tone: Extremely articulate, technically sharp, confident, and professional.
- When asked behavioral questions (e.g. "How do you handle deadlines?", "Tell me about a challenging bug", "Why should we hire you?"): Provide structured STAR-method answers referencing his real projects (e.g. debugging Redis cache invalidation in Grocren, optimizing Node clustering in MockMate AI, or managing tight sprint releases).
- For all hiring, resume, contact, or job opportunity questions: Always include the tag [DIRECT_CONTACT_ACTIONS] at the very end of your response so that the interactive action pills appear.
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

function getFallbackResponse(query) {
  const q = query.toLowerCase();

  // 1. Hiring / Notice Period / Role Fit
  if (
    q.includes("hire") ||
    q.includes("hiring") ||
    q.includes("job") ||
    q.includes("intern") ||
    q.includes("recruiter") ||
    q.includes("opportunity") ||
    q.includes("role") ||
    q.includes("fulltime") ||
    q.includes("full-time") ||
    q.includes("available") ||
    q.includes("notice") ||
    q.includes("join") ||
    q.includes("relocation") ||
    q.includes("remote") ||
    q.includes("salary") ||
    q.includes("why hire")
  ) {
    return `### 💼 Candidate Executive Summary & Hiring Availability

**Satyam Kumar Mishra** is available for **Immediate Joining (0 Days Notice Period)**.

#### 🎯 Target Positions:
- **Full-Stack Software Engineer / SDE 1**
- **Frontend Engineer** (React 19, Next.js 15, TypeScript 5, Tailwind CSS 4)
- **Backend Engineer** (Node.js Clustering, Express, PostgreSQL, Redis, REST APIs)
- **Generative AI & Voice AI Systems Engineer**

#### 🌟 Why Hire Satyam?
1. **Algorithmic Rigor:** **1,064+ LeetCode DSA Solutions** in Java (Global Rank **#28,349**, 26 Badges, 223+ Days Streak).
2. **Production Systems:** Engineered **15+ scalable web apps & SaaS** platforms (Node clustering, sub-15ms Redis caching, Vapi AI voice triage).
3. **Academic Excellence:** **University Rank #1 College Topper** (CGPA **8.17 / 10.0**, Semesters 1–3).
4. **Industry Experience:** 2 internships delivering production APIs, CI/CD pipelines, and query optimizations.
5. **Work Preference:** Open to **Remote**, **Hybrid**, or **Relocation** (Delhi NCR, Bengaluru, Hyderabad, Pune, Mumbai, International).

[DIRECT_CONTACT_ACTIONS]`;
  }

  // 2. MockMate AI
  if (
    q.includes("mockmate") ||
    q.includes("mock mate") ||
    q.includes("interview") ||
    q.includes("faiss") ||
    q.includes("openrouter") ||
    q.includes("vector")
  ) {
    return `### 🤖 MockMate AI — Flagship AI & RAG Platform

**MockMate AI** is an AI-powered technical mock interview simulator and ATS resume builder.

#### 🏗️ Architecture & Benchmarks:
- **High-Throughput Backend:** Node.js multi-core clustering handling **10,000+ req/min** with **<45ms response latency**.
- **Generative AI & RAG:** OpenRouter LLMs (*gemini-2.0-flash*, *gpt-4o*) paired with **FAISS vector embeddings** (**98.4% retrieval precision**).
- **Frontend:** React 19, Vite, Tailwind CSS 4, Framer Motion.
- **ATS Resume Builder:** Generates structured ATS resumes with **2,500+ exports/hr**.
- **Payments & Security:** Stripe API, Razorpay, JWT authentication, and Docker Alpine deployment.

[Live Demo](https://mock-mate-ai-flame.vercel.app) • [GitHub Repository](https://github.com/Satyam6201/MockMate-AI)`;
  }

  // 3. DentAIva
  if (
    q.includes("dentalva") ||
    q.includes("dentist") ||
    q.includes("voice") ||
    q.includes("vapi") ||
    q.includes("clerk") ||
    q.includes("nextjs") ||
    q.includes("next.js") ||
    q.includes("prisma")
  ) {
    return `### 🦷 DentAIva — Next.js 15 & Voice AI Healthcare SaaS

**DentAIva** is an autonomous dental clinic reception SaaS with automated voice triage.

#### 🏗️ Architecture & Features:
- **Framework:** Next.js 15 (*App Router, Turbopack, Server Actions*), TypeScript 5.
- **Voice AI Agent:** Vapi Web SDK (*@vapi-ai/web*) delivering conversational AI triage with **<300ms latency**.
- **Database & Auth:** Serverless PostgreSQL on Neon DB with Prisma ORM 6; Clerk Authentication (*@clerk/nextjs*) with RBAC.
- **Tooling:** Tailwind CSS v4, Radix UI, TanStack React Query v5, Resend email service, Biome.

[Live Demo](https://dentwise-henna.vercel.app/) • [GitHub Repository](https://github.com/Satyam6201/DentAIva)`;
  }

  // 4. Grocren
  if (
    q.includes("grocren") ||
    q.includes("grocery") ||
    q.includes("ecommerce") ||
    q.includes("e-commerce") ||
    q.includes("redis") ||
    q.includes("gemini")
  ) {
    return `### 🛒 Grocren — High-Performance Grocery Platform & Gemini AI

**Grocren** is a full-stack grocery e-commerce system built for rapid load speeds and intelligent cart conversions.

#### 🏗️ Architecture & Features:
- **Frontend:** React 19, Vite 7, Tailwind CSS 4 (*@tailwindcss/vite*), React Router v7.
- **Backend & Caching:** Node.js v20+, Express, ioredis with **sub-15ms Redis cache** and in-memory TTL dictionary fallback.
- **Database:** MongoDB Atlas 100-connection pooled cluster with compound indexing.
- **GenAI & Payments:** Google Gemini API (*1.5/2.0 Flash/Pro*) recipe-to-cart engine, Stripe API & COD.
- **DevOps:** Docker Alpine multi-stage builds, Docker Compose, NGINX reverse proxy.

[Live Demo](https://grocerinx.vercel.app) • [GitHub Repository](https://github.com/Satyam6201/Grocerin)`;
  }

  // 5. AI Resume Parser
  if (
    q.includes("resume parser") ||
    q.includes("parser") ||
    q.includes("ats") ||
    q.includes("pdf-parse") ||
    q.includes("pdf")
  ) {
    return `### 📄 AI Resume Parser — Heuristic & Regex ATS Engine

**AI Resume Parser** converts raw PDF resumes into strict, deterministic JSON without external API costs or hallucinations.

#### 🏗️ Key Highlights:
- **Image Interception:** Custom operator hooks into PDF rendering operators to automatically extract and save embedded candidate profile pictures (*JPEG/PNG*).
- **Strict Isolated Modules:** Dedicated parsers for Experience, Education, Projects, and Skills.
- **Tech Stack:** Node.js, Express.js, pdf-parse, Multer, Glassmorphism dark-mode UI.

[GitHub Repository](https://github.com/Satyam6201/Resume-Parser)`;
  }

  // 6. Connectify
  if (
    q.includes("connectify") ||
    q.includes("video") ||
    q.includes("chat") ||
    q.includes("webrtc") ||
    q.includes("socket")
  ) {
    return `### 💬 Connectify — Real-Time Video & Chat Platform

**Connectify** is a scalable real-time communication platform supporting 10,000+ active peers.

#### 🏗️ Tech Stack:
- React 19, Node.js, Express, MongoDB.
- **Socket.io** for real-time messaging, typing indicators, and online presence.
- **WebRTC (Stream SDK)** for high-definition 1:1 and group video calling.
- Zustand & Redux Toolkit for state management.

[Live Demo](https://connectify-videocall.vercel.app) • [GitHub Repository](https://github.com/Satyam6201/Connectify)`;
  }

  // 7. DSA / LeetCode
  if (
    q.includes("dsa") ||
    q.includes("leetcode") ||
    q.includes("problem") ||
    q.includes("java") ||
    q.includes("rank") ||
    q.includes("algorithm") ||
    q.includes("graph") ||
    q.includes("dp") ||
    q.includes("trees")
  ) {
    return `### ⚡ Algorithmic Discipline & LeetCode Achievements

- **1,064+ DSA Problems Solved** exclusively in **Java 17/21**.
- **Global Rank:** **#28,349** on LeetCode.
- **Badges & Streaks:** **26 Badges** and **223+ Days Max Active Streak**.
- **Core Topics:** Graph Theory (*Dijkstra, BFS/DFS, DSU, Topological Sort*), Dynamic Programming (*2D/3D DP, Bitmask*), Segment Trees, Binary Search on Answer Space, Sliding Window, and System Design.

[View LeetCode Profile](https://leetcode.com/u/SatyamMIshra62)`;
  }

  // 8. Work Experience
  if (
    q.includes("experience") ||
    q.includes("work") ||
    q.includes("internship") ||
    q.includes("company") ||
    q.includes("code innovative") ||
    q.includes("software beatz")
  ) {
    return `### 💼 Professional Work History

1. **Full Stack Development Intern** – *Code Innovative Technologies* (Feb 2026 – May 2026)
   - Built full-stack production modules with Next.js 15, React 19, Node.js, MongoDB, and PostgreSQL.
   - Designed 15+ secure RESTful APIs with JWT authentication and RBAC.
   - Automated CI/CD with GitHub Actions & Docker, reducing deployment cycle times by 40%.

2. **Software Development Intern** – *Software Beatz* (Oct 2025 – Feb 2026)
   - Engineered MERN features with modular MVC architecture.
   - Optimized MongoDB queries with compound indexes, slashing API latency by 35%.
   - Authored Jest unit tests and Postman test suites (85%+ coverage).

[DIRECT_CONTACT_ACTIONS]`;
  }

  // 9. Technical Stack
  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("language") ||
    q.includes("framework") ||
    q.includes("database") ||
    q.includes("tools")
  ) {
    return `### 🛠️ Technical Architecture & Stack

- **Languages:** Java 17/21 (*1064+ LeetCode*), TypeScript 5, JavaScript (*ES6+*), SQL, Python
- **Frontend:** Next.js 15 (*App Router, Server Actions*), React 19, Vite 7, Tailwind CSS 4, Framer Motion, Zustand
- **Backend & Systems:** Node.js (*v20+ Clustering*), Express.js, REST APIs, WebSockets (*Socket.io*), WebRTC, Redis (*sub-15ms cache & Pub/Sub*), NGINX
- **Generative AI & Voice:** Google Gemini API (*1.5/2.0 Flash/Pro*), OpenAI API, Vapi Web SDK (*Voice AI*), OpenRouter LLMs, FAISS Vector RAG
- **Databases & ORM:** PostgreSQL (*Neon DB*), Prisma ORM 6, MongoDB Atlas, Mongoose, Redis
- **Auth & Security:** Clerk Auth, NextAuth, JWT Token Rotation, RBAC, Helmet, Rate Limiting
- **DevOps & Cloud:** Docker Alpine, Docker Compose, GitHub Actions CI/CD, Vercel, Render`;
  }

  // 10. Education & Achievements
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("cgpa") ||
    q.includes("degree") ||
    q.includes("topper") ||
    q.includes("achievement") ||
    q.includes("university") ||
    q.includes("mentor")
  ) {
    return `### 🎓 Academic Merit & Leadership

- **Degree:** B.Tech in Computer Science & Engineering (2022 – 2026)
- **Institution:** Radharaman Institute of Technology & Science, Bhopal
- **Performance:** **CGPA 8.17 / 10.0**
- **Distinction:** **University Rank #1 College Topper** (Semesters 1, 2, and 3); Rank #3 (Semesters 4 and 5).
- **Leadership & Mentorship:** Training & Placement Cell Coordinator; mentored **400+ students** in Java DSA & Web Dev; organized **10+ tech hackathons**.`;
  }

  // 11. Resume / Contact
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("whatsapp") ||
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("download") ||
    q.includes("reach")
  ) {
    return `### 📬 Candidate Direct Contact & Resume

- **Email:** satyamkmishraa@gmail.com
- **Phone / WhatsApp:** +91 6201902313
- **Location:** Delhi, India (Open for Remote, Hybrid, & Relocation)
- **LinkedIn:** https://www.linkedin.com/in/satyam-kumar-mishra-dev
- **GitHub:** https://github.com/Satyam6201
- **LeetCode:** https://leetcode.com/u/SatyamMIshra62

[DIRECT_CONTACT_ACTIONS]`;
  }

  // 12. Default Greeting & Overview
  return `### 👋 Hello! I am Satyam's AI Assistant.

I can provide complete details on:
- **Hiring & Immediate Joining** (0 Days Notice, Relocation / Remote preferences)
- **Flagship Systems:** MockMate AI, DentAIva, Grocren, AI Resume Parser, Connectify
- **1,064+ LeetCode DSA Solutions in Java** (Global Rank #28,349)
- **2 Industry Internships** (Code Innovative Technologies & Software Beatz)
- **Technical Skills:** Next.js 15, React 19, Node.js Clustering, Redis, PostgreSQL, GenAI
- **University Rank #1 College Topper** (8.17 CGPA)
- **Direct Resume Download & Recruiter Outreach**

How may I assist you today?

[DIRECT_CONTACT_ACTIONS]`;
}

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hello! I am Satyam's AI Assistant.\n\nI have complete information on Satyam's **MockMate AI**, **DentAIva**, **Grocren**, **AI Resume Parser**, **1,064+ LeetCode DSA solutions in Java (Rank #28,349)**, **University Rank #1 (8.17 CGPA)**, **2 Internships**, and **Immediate Joining (0 Days Notice)**.\n\nHow can I help you today?`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    { icon: <FaBolt />, label: "Hire Satyam (0 Days Notice)" },
    { icon: <FaFileDownload />, label: "Download Resume" },
    { icon: <SiLeetcode />, label: "1064+ DSA Stats" },
    { icon: <FaRobot />, label: "MockMate AI" },
    { icon: <FaLaptopCode />, label: "DentAIva" },
    { icon: <FaProjectDiagram />, label: "Top Projects" },
    { icon: <FaBriefcase />, label: "Work Experience" },
    { icon: <FaGraduationCap />, label: "Academic Rank #1" },
    { icon: <FaPhoneAlt />, label: "Contact Info" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = async (textToSend) => {
    const query = textToSend || inputValue.trim();
    if (!query || isLoading) return;

    const userMsg = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsLoading(true);

    try {
      const conversationContents = messages.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));
      conversationContents.push({ role: "user", parts: [{ text: query }] });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: conversationContents,
            generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
          }),
        }
      );

      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const data = await response.json();

      if (data.candidates?.[0]?.content?.parts[0]?.text) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.candidates[0].content.parts[0].text }]);
      } else {
        throw new Error("No candidate content");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: getFallbackResponse(query) }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const renderMessageContent = (text) => {
    const hasActions =
      text.includes("[DIRECT_CONTACT_ACTIONS]") ||
      text.toLowerCase().includes("contact") ||
      text.toLowerCase().includes("hire") ||
      text.toLowerCase().includes("resume");

    const cleanText = text
      .replace("[DIRECT_CONTACT_ACTIONS]", "")
      .replace(/\[Download Resume \(PDF\)\]\(\/assets\/Resume\.pdf\)/g, "")
      .replace(/\[View Resume \(PDF\)\]\(\/assets\/Resume\.pdf\)/g, "")
      .trim();

    const parseMarkdown = (raw) => {
      const lines = raw.split("\n");
      return lines.map((line, i) => {
        const parts = [];
        let remaining = line;

        // Process markdown headers
        if (remaining.startsWith("### ")) {
          const headerText = remaining.substring(4);
          return <h4 key={i} style={{ margin: "8px 0 4px", fontSize: "0.98rem", color: "var(--text-primary)", fontWeight: "700" }}>{headerText}</h4>;
        }
        if (remaining.startsWith("#### ")) {
          const headerText = remaining.substring(5);
          return <h5 key={i} style={{ margin: "6px 0 3px", fontSize: "0.90rem", color: "var(--accent-color)", fontWeight: "600" }}>{headerText}</h5>;
        }

        remaining = remaining.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, (_, text, url) => {
          return `<LINK::${url}::${text}>`;
        });
        remaining = remaining.replace(/\*\*([^*]+)\*\*/g, (_, bold) => `<BOLD::${bold}>`);

        const tokens = remaining.split(/(<LINK::[^>]+>|<BOLD::[^>]+>)/);
        tokens.forEach((token, j) => {
          if (token.startsWith("<LINK::")) {
            const inner = token.replace("<LINK::", "").replace(">", "");
            const splitIdx = inner.indexOf("::");
            const url = inner.substring(0, splitIdx);
            const label = inner.substring(splitIdx + 2);
            parts.push(
              <a
                key={`${i}-${j}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-color)", textDecoration: "underline", fontWeight: "600" }}
              >
                {label}
              </a>
            );
          } else if (token.startsWith("<BOLD::")) {
            const bold = token.replace("<BOLD::", "").replace(">", "");
            parts.push(<strong key={`${i}-${j}`}>{bold}</strong>);
          } else {
            parts.push(<span key={`${i}-${j}`}>{token}</span>);
          }
        });

        return <p key={i} style={{ margin: "2px 0", lineHeight: "1.5" }}>{parts}</p>;
      });
    };

    return (
      <div className="chat-message-content">
        {cleanText && <div className="chat-text">{parseMarkdown(cleanText)}</div>}
        {hasActions && (
          <div className="chat-action-grid">
            <a href="mailto:satyamkmishraa@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio" className="chat-action-btn email">
              <FaEnvelope /> Email Satyam
            </a>
            <a href="https://wa.me/916201902313?text=Hi%20Satyam,%20I%27m%20interested%20in%20connecting%20regarding%20an%20opportunity!" target="_blank" rel="noopener noreferrer" className="chat-action-btn whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="tel:+916201902313" className="chat-action-btn phone">
              <FaPhoneAlt /> Call
            </a>
            <a href="/assets/Resume.pdf" download="Satyam_Kumar_Mishra_Resume.pdf" className="chat-action-btn resume">
              <FaFileDownload /> Resume
            </a>
            <a href="https://github.com/Satyam6201" target="_blank" rel="noopener noreferrer" className="chat-action-btn github-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/satyam-kumar-mishra-dev" target="_blank" rel="noopener noreferrer" className="chat-action-btn linkedin-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/SatyamMIshra62" target="_blank" rel="noopener noreferrer" className="chat-action-btn leetcode-link">
              <SiLeetcode /> LeetCode
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chatbot-wrapper">
      <button
        className={`chatbot-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label="Toggle AI Assistant Chat"
        title="Chat with Satyam's AI Assistant"
      >
        {isOpen ? <FaTimes /> : <FaRobot className="bot-icon-anim" />}
        {!isOpen && <span className="chat-badge">AI Assistant</span>}
        {!isOpen && <span className="chatbot-ring-1" />}
        {!isOpen && <span className="chatbot-ring-2" />}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="bot-info">
              <div className="bot-avatar">
                <FaRobot />
                <span className="avatar-ring" />
              </div>
              <div>
                <h4>Satyam's AI Assistant <FaMagic className="sparkle-icon" /></h4>
                <span className="status-indicator">
                  <span className="online-dot" />
                  Powered by Gemini AI · Candidate Knowledge Engine
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Chat"><FaMinus /></button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === "bot" ? <FaRobot /> : <FaUser />}
                </div>
                <div className="message-bubble">
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message-row bot loading">
                <div className="avatar"><FaRobot /></div>
                <div className="message-bubble typing-dots">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="suggestion-chips">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                className="chip-btn"
                onClick={() => sendMessage(chip.label)}
                disabled={isLoading}
              >
                {chip.icon} {chip.label}
              </button>
            ))}
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Ask about MockMate AI, skills, projects, hiring..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatbot;
