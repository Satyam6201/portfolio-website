<div align="center">

# Satyam Kumar Mishra — Senior Full-Stack & GenAI Engineer Portfolio

An enterprise-grade, high-performance portfolio application built with **React 19, Vite 6/7, Next.js 15, Framer Motion, Google Gemini AI, and a Custom Glassmorphism Multi-Theme Design System**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-satyam--devfolio.vercel.app-4f46e5?style=for-the-badge&logo=vercel&logoColor=white)](https://satyam-devfolio.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub_Repo-Satyam6201%2Fportfolio--website-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Satyam6201/portfolio-website)
[![LeetCode Profile](https://img.shields.io/badge/LeetCode-1064+_DSA_Solved-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/SatyamMIshra62)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://github.com/Satyam6201/portfolio-website/blob/main/LICENSE)

<br />

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js_v20+-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Google Gemini API](https://img.shields.io/badge/Gemini_1.5/2.0_Flash-8E75B5?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Redis](https://img.shields.io/badge/Redis_ioredis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL_Neon_DB-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Docker](https://img.shields.io/badge/Docker_Alpine-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com/)

</div>

---

## Quick Links

- **Live Deployment**: [https://satyam-devfolio.vercel.app/](https://satyam-devfolio.vercel.app/)
- **Source Code Repository**: [https://github.com/Satyam6201/portfolio-website](https://github.com/Satyam6201/portfolio-website)
- **Direct Resume PDF**: [Download Satyam's Resume](https://satyam-devfolio.vercel.app/assets/Resume.pdf)
- **LeetCode Profile**: [SatyamMIshra62 (Rank #28,349)](https://leetcode.com/u/SatyamMIshra62)

---

## Table of Contents

1. [Architectural Highlights & Key Features](#architectural-highlights--key-features)
2. [Featured Production Systems & Architecture](#featured-production-systems--architecture)
3. [Proof-of-Work Simulators & Engineering Modules](#proof-of-work-simulators--engineering-modules)
4. [Tech Stack & System Architecture](#tech-stack--system-architecture)
5. [Responsive Design Architecture](#responsive-design-architecture)
6. [Project Directory Structure](#project-directory-structure)
7. [Getting Started & Local Setup](#getting-started--local-setup)
8. [Environment Variables](#environment-variables)
9. [About the Developer](#about-the-developer)
10. [License](#license)

---

## Architectural Highlights & Key Features

### 1. Recruiter Fast-Track Executive View
- High-efficiency modal tailored for technical recruiters and engineering leaders.
- Provides a **30-second executive summary**, core competencies, quantifiable production metrics (latency reduction, RPS scalability, test coverage), and 1-click candidate actions (copy direct email, download resume PDF, schedule call, view GitHub).

### 2. Spotlight Command Palette (`Cmd+K` / `Ctrl+K`)
- Global keyboard-accessible spotlight palette supporting instant search filtering, keyboard arrow navigation (`Up`/`Down`/`Enter`), quick section jump links, and direct external shortcuts.

### 3. Automated Live LeetCode Sync (1064+ Java Solutions)
- **Automated Real-Time Polling**: Fetches live profile stats from LeetCode every 5 minutes with zero-downtime cached fallback.
- **Verified Profile Metrics**: Live counter for **1,064+ Problems Solved in Java**, Global Rank **#28,349**, **26 Badges** (500-Days, 100-Days), **359 Active Days**, and **223 Max Day Streak**.
- **Live Recent Submissions Stream**: Real-time feed of recently accepted Java problem submissions.
- **Topic Mastery Breakdown**: 6 algorithmic domains (Dynamic Programming, Graph Theory, Binary Trees, Sliding Window, Monotonic Stacks, Backtracking) with time/space complexity analysis.

### 4. Google Gemini 1.5 Flash AI Assistant
- Conversational portfolio agent powered by the Google Gemini API with smart fallback heuristic mechanisms for 100% response reliability.
- Answers recruiter inquiries regarding system design, LeetCode performance, tech stack, and direct resume requests.

### 5. Multi-Theme Token Engine
- Persistent theme system with 6 developer-grade themes: **Cyberpunk Neon, Tokyo Night, Dracula Dark, Obsidian Gold, Matrix Cyber, and Clean Light**.
- Zero flash on load via custom `ThemeContext` and CSS custom properties.

---

## Featured Production Systems & Architecture

### 1. MockMate AI — Full-Stack AI Interview & ATS Resume Architect
- **Stack**: React 19, Node.js (Clustering), Express.js, MongoDB Atlas, Redis Pub/Sub, OpenRouter LLMs, LangChain, Tailwind CSS, Docker, CI/CD
- **System Highlights**:
  - Node clustering processing **10,000+ requests/min** with **<45ms API response latency**.
  - Distributed Redis caching layer slashing database load by **68%** and sustaining **5,000+ simultaneous WebSockets** via Socket.IO Pub/Sub.
  - Intelligent RAG resume-parsing pipeline with OpenRouter LLMs achieving **98.4% contextual question accuracy**.
  - ATS AI Resume Builder with real-time scoring (**99% ATS compatibility**) and vector PDF rendering scaling to **2,500+ exports/hour**.

### 2. DentAIva — Enterprise AI Dental Voice & Clinical Triage SaaS
- **Stack**: Next.js 15 (App Router, Turbopack, Server Actions), TypeScript 5, Tailwind CSS v4, PostgreSQL (Neon DB), Prisma ORM 6, Clerk Auth, Vapi Web SDK, Resend, TanStack React Query v5, Biome
- **System Highlights**:
  - Conversational AI voice agent using Vapi Web SDK for sub-300ms latency voice triage and automated appointment booking.
  - Serverless PostgreSQL with Prisma ORM 6 on Neon DB with connection pooling and strict relational integrity.
  - Multi-tenant role-based access control (Doctor, Clinic Staff, Patient) and optimistic UI mutations via TanStack Query v5.

### 3. Grocren (Grocerin) — Scalable Grocery SaaS & AI Commerce Engine
- **Stack**: React 19, Vite 7, Tailwind CSS 4, React Router v7, Node.js v20+, Express.js, ioredis, MongoDB Atlas (100-connection pooled cluster), Google Gemini API (1.5-flash, 2.0-flash, 1.5-pro), Stripe API & COD, Docker Alpine, NGINX
- **System Highlights**:
  - Sub-15ms query caching layer via `ioredis` with in-memory TTL dictionary fallback, slashing database reads by **80%**.
  - Google Gemini AI integration for automated recipe generation, smart grocery substitution, and personalized cart recommendations.
  - Hardened with Helmet, Express Rate Limit, JWT auth, Stripe API webhooks, and multi-stage Alpine Docker containers behind NGINX.

### 4. Connectify — Real-Time Chat & HD Video Platform
- **Stack**: React 19, Node.js, Express.js, MongoDB, Redis, Stream SDK (WebRTC/Chat), Tailwind CSS, DaisyUI, Zustand, TanStack Query, JWT, Docker
- **System Highlights**:
  - Scalable backend infrastructure supporting **10,000+ concurrent users** and **1,000+ req/sec**.
  - Sub-second communication via Stream WebRTC/Chat SDK with distributed Redis query caching cutting latency by **45%**.
  - Redis sliding-window rate limiting (**100 req/min**) and zero-downtime Docker Compose deployment.

### 5. AI Resume Parser — Production PDF-to-JSON Extraction Engine
- **Stack**: Node.js (LTS), Express.js, Multer, `pdf-parse` (Custom Pagerender Image Buffer Interceptor), Vanilla HTML5/CSS3 Glassmorphism, Regex Engine
- **System Highlights**:
  - Automated PDF resume-to-JSON extraction with zero external API dependencies and sub-100ms local parse latency.
  - Intercepts raw PDF rendering operator streams to automatically extract and save embedded candidate profile pictures.
  - Modular isolated parsers with heuristic section boundary detection eliminating section data bleeding.

---

## Proof-of-Work Simulators & Engineering Modules

The portfolio includes live in-browser engineering simulators to demonstrate core backend and distributed system patterns directly to recruiters:

| Simulator | Architecture & Principles Demonstrated |
| :--- | :--- |
| **RAG Vector Search Simulator** | Cosine similarity scoring over high-dimensional vector embeddings, Top-K chunk retrieval, and relevance threshold filtering. |
| **JWT RBAC & Claims Inspector** | Header/Payload/Signature validation, role-based access permission evaluation (Admin, Lead Engineer, Member, Guest), and tamper detection. |
| **Token-Bucket Rate Limiter** | Distributed rate limiting algorithm simulation with configurable burst capacity, token refill rates, and live request status metrics (200 OK vs 429 Too Many Requests). |

---

## Tech Stack & System Architecture

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Frontend Core** | React 19, Next.js 14/15, TypeScript 5, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Motion** | CSS Custom Properties, Glassmorphism Design Tokens, Tailwind CSS v4, Framer Motion, React Icons |
| **Generative AI & LLMs** | Google Gemini API (1.5/2.0 Flash, 1.5 Pro), OpenAI API, OpenRouter, LangChain, RAG Architecture, Vapi Web SDK |
| **Security & Auth** | JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), Helmet, Express Rate Limit, Clerk |
| **Backend & Microservices** | Node.js (v20+), Express.js, REST APIs, WebSockets (Socket.IO), Redis In-Memory Caching (ioredis), Stream SDK |
| **Databases & Storage** | MongoDB Atlas (Pooled Cluster), PostgreSQL (Neon DB), MySQL, Redis, Firebase, Prisma ORM 6 |
| **DevOps & Cloud** | Docker (Alpine Multi-Stage), Docker Compose, NGINX Reverse Proxy, GitHub Actions (CI/CD), Vercel, Render |
| **Algorithms & CS** | Java 17/21 (1064+ LeetCode DSA Problems Solved), OOP, System Design, Operating Systems, DBMS |

---

## Responsive Design Architecture

The entire portfolio is engineered with a mobile-first, multi-breakpoint responsive layout:
- **Navbar**: Adaptive layout scaling from desktop horizontal links to a slide-out drawer on `< 1024px` with icon-only controls on `< 640px` and compact logo scaling on `< 400px`.
- **DSA Section**: Dynamic 4-column $\to$ 2-column $\to$ 1-column grid scaling for metric cards, live sync badges, difficulty progress bars, and recent submission stream.
- **Projects Section**: Horizontal category scrolling, stacked search/filter dropdowns, responsive 3D carousel track, and layer-by-layer architectural case study modals with code block scroll containers.

---

## Project Directory Structure

```text
Portfolio/
├── public/
│   └── assets/                         # Project screenshots, resume-parser.png, certificates & Resume.pdf
├── src/
│   ├── component/                      # Senior UI & Engineering Components
│   │   ├── About.jsx                   # Bio, background, and quantifiable career stats
│   │   ├── Achievements.jsx            # Hackathon rankings, awards, and milestones
│   │   ├── AIChatbot.jsx               # Gemini 1.5 Flash interactive assistant widget
│   │   ├── Blog.jsx                    # Technical articles with search and reader modal
│   │   ├── Certifications.jsx          # Verified course and professional certificates
│   │   ├── CommandPalette.jsx          # Cmd+K Spotlight search with keyboard navigation
│   │   ├── Contact.jsx                 # Real-time contact dispatcher (Email & WhatsApp)
│   │   ├── Education.jsx               # Academic credentials and achievements
│   │   ├── EngineeringPlayground.jsx   # Live RAG, JWT RBAC & Rate Limiter simulators
│   │   ├── Experience.jsx              # Timeline with Google X-Y-Z quantifiable impact
│   │   ├── Footer.jsx                  # Footer with navigation and social channels
│   │   ├── FunFacts.jsx                # Engineering quirks, setup, and fun stats
│   │   ├── Goal.jsx                    # Engineering roadmap and career aspirations
│   │   ├── Header.jsx                  # Responsive navbar with Recruiter Mode and Theme toggle
│   │   ├── Hiring.jsx                  # Value proposition for recruiters and engineering leads
│   │   ├── Hobbies.jsx                 # Personal interests, tech reading, and music
│   │   ├── Home.jsx                    # Hero section with animated typewriter effect
│   │   ├── LeetCodeMatrix.jsx          # Automated Live LeetCode sync & Topic Mastery Matrix
│   │   ├── Projects.jsx                # 3-Tier project hierarchy with System Architecture flows
│   │   ├── RecruiterModal.jsx          # 30-second Executive Summary modal for recruiters
│   │   ├── TechStack.jsx               # Filterable skill matrix with proficiency ratings
│   │   ├── Testimonials.jsx            # Peer and mentor recommendations
│   │   ├── ThemePicker.jsx             # Multi-theme selector dropdown
│   │   └── Volunteer.jsx               # Tech community volunteering and mentorship
│   ├── context/
│   │   └── ThemeContext.jsx            # 6-theme global provider and persistence
│   ├── styles/                         # Modular stylesheets with CSS token architecture
│   │   ├── global.css                  # Core CSS variables, typography, and reset rules
│   │   ├── commandpalette.css          # Spotlight modal and search styling
│   │   ├── engineeringplayground.css   # Interactive simulator layouts and animations
│   │   ├── leetcodematrix.css          # DSA matrix cards, progress bars, and responsive styling
│   │   ├── recruitermodal.css          # Executive view modal and quick-action buttons
│   │   ├── header.css                  # Responsive header, recruiter badge, and mobile drawer
│   │   ├── projects.css                # Tiered project cards, modals, and architecture diagrams
│   │   └── chatbot.css                 # AI Chatbot drawer and bubble styles
│   ├── App.jsx                         # Application router, keyboard bindings, and layout
│   └── main.jsx                        # Entry point with BrowserRouter wrapper
├── .env                                # Environment variables (VITE_GEMINI_API_KEY)
├── .gitignore                          # Excluded files and directories
├── package.json                        # Project metadata and dependencies
├── README.md                           # Documentation and project overview
└── vite.config.js                      # Vite build configuration
```

---

## Getting Started & Local Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Satyam6201/portfolio-website.git
cd portfolio-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the project root:
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 5. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 6. Build for Production
```bash
npm run build
```

---

## Environment Variables

| Variable | Description | Required |
| :--- | :--- | :---: |
| `VITE_GEMINI_API_KEY` | Google Gemini AI Studio API key for powering the AI Chatbot | Yes |

> [!NOTE]
> `.env` is listed in `.gitignore` to keep API keys secure. For public deployments on Vercel or Netlify, configure `VITE_GEMINI_API_KEY` in the hosting provider's Environment Variables dashboard.

---

## About the Developer

**Satyam Kumar Mishra** — *Full-Stack MERN & Next.js Engineer*

- **Email**: [satyamkmishraa@gmail.com](mailto:satyamkmishraa@gmail.com)
- **WhatsApp**: [+91 6201902313](https://wa.me/916201902313)
- **Portfolio**: [https://satyam-devfolio.vercel.app/](https://satyam-devfolio.vercel.app/)
- **GitHub**: [github.com/Satyam6201](https://github.com/Satyam6201)
- **LinkedIn**: [linkedin.com/in/satyam-kumar-mishra-dev](https://www.linkedin.com/in/satyam-kumar-mishra-dev)
- **LeetCode**: [leetcode.com/u/SatyamMIshra62](https://leetcode.com/u/SatyamMIshra62)

---

<div align="center">

Distributed under the **ISC License**.

</div>
