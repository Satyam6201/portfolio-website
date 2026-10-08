<div align="center">

# Satyam Kumar Mishra — Senior Full-Stack & GenAI Engineer Portfolio

An enterprise-grade, high-performance portfolio application built with **React 19, Vite 6, Framer Motion, Google Gemini AI, and a Custom Glassmorphism Multi-Theme Design System**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-satyam--devfolio.vercel.app-4f46e5?style=for-the-badge&logo=vercel&logoColor=white)](https://satyam-devfolio.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub_Repo-Satyam6201%2Fportfolio--website-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Satyam6201/portfolio-website)
[![LeetCode Profile](https://img.shields.io/badge/LeetCode-1000+_DSA_Solved-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/SatyamMIshra62)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://github.com/Satyam6201/portfolio-website/blob/main/LICENSE)

<br />

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Google Gemini API](https://img.shields.io/badge/Gemini_1.5_Flash-8E75B5?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Java](https://img.shields.io/badge/Java_DSA-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://leetcode.com/u/SatyamMIshra62)

</div>

---

## Quick Links

- **Live Deployment**: [https://satyam-devfolio.vercel.app/](https://satyam-devfolio.vercel.app/)
- **Source Code Repository**: [https://github.com/Satyam6201/portfolio-website](https://github.com/Satyam6201/portfolio-website)
- **Direct Resume PDF**: [Download Satyam's Resume](https://satyam-devfolio.vercel.app/assets/Resume.pdf)
- **LeetCode Profile**: [SatyamMIshra62](https://leetcode.com/u/SatyamMIshra62)

---

## Table of Contents

1. [Architectural Highlights & Key Features](#architectural-highlights--key-features)
2. [Proof-of-Work Simulators & Engineering Modules](#proof-of-work-simulators--engineering-modules)
3. [Tech Stack & System Architecture](#tech-stack--system-architecture)
4. [Project Directory Structure](#project-directory-structure)
5. [Getting Started & Local Setup](#getting-started--local-setup)
6. [Environment Variables](#environment-variables)
7. [About the Developer](#about-the-developer)
8. [License](#license)

---

## Architectural Highlights & Key Features

### 1. Recruiter Fast-Track Executive View
- High-efficiency modal tailored for technical recruiters and hiring managers.
- Provides a **30-second executive summary**, core competencies, quantifiable production metrics (latency reduction, RPS scalability, test coverage), and 1-click candidate actions (copy direct email, download resume PDF, schedule call, view GitHub).

### 2. Spotlight Command Palette (`Cmd+K` / `Ctrl+K`)
- Global keyboard-accessible spotlight palette supporting instant search filtering, keyboard arrow navigation (`Up`/`Down`/`Enter`), quick section jump links, and direct external shortcuts.

### 3. 3-Tier Production Project Architecture
- **Tier 1 (Flagship Enterprise & AI Systems)**: Multi-tenant SaaS AI Website Builder and Automated Research Paper Synthesizer featuring interactive **System Architecture Flows** and deep **Engineering Trade-Offs Analysis** (e.g., Vector DB selection, WebSocket vs. SSE, Caching topologies).
- **Tier 2 (Real-Time & Full-Stack Apps)**: Scalable multi-room collaboration systems with sub-50ms sync latencies.
- **Tier 3 (Early Prototypes & Mini-Apps)**: Clean collapsible archive keeping the portfolio focused on senior-level engineering while demonstrating career breadth.

### 4. 1000+ Java DSA Solutions Matrix & Algorithmic Rigor
- Comprehensive algorithmic mastery tracker showcasing 1000+ LeetCode solutions in Java.
- Detailed difficulty distribution (Easy, Medium, Hard) and interactive topic mastery cards covering **Dynamic Programming, Graph Theory, Binary Trees, Sliding Window, Monotonic Stacks, Priority Queues, and Backtracking**.

### 5. Google Gemini 1.5 Flash AI Assistant
- Conversational portfolio agent powered by the Google Gemini API with smart fallback heuristic mechanisms for 100% response reliability.
- Answers recruiter inquiries regarding system architecture, LeetCode performance, tech stack, and direct resume requests.

### 6. Multi-Theme Token Engine
- Persistent theme system with 6 developer-grade themes: **Cyberpunk Neon, Tokyo Night, Dracula Dark, Obsidian Gold, Matrix Cyber, and Clean Light**.
- Zero flash on load via custom `ThemeContext` and CSS custom properties.

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
| **Frontend Core** | React 19, Next.js 14/15, TypeScript, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Motion** | CSS Custom Properties, Glassmorphism Design Tokens, Tailwind CSS, Framer Motion, React Icons |
| **Generative AI & LLMs** | Google Gemini 1.5 Flash API, OpenAI API, LangChain, RAG Architecture, Prompt Engineering |
| **Security & Auth** | JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), Helmet, Rate Limiting |
| **Backend & Microservices** | Node.js, Express.js, REST APIs, WebSockets, Redis In-Memory Caching, Apache Kafka |
| **Databases & Storage** | MongoDB, PostgreSQL, MySQL, Redis, Firebase Firestore, Prisma ORM |
| **DevOps & Cloud** | Docker, GitHub Actions (CI/CD), Vercel, Render, Railway, Git & GitHub |
| **Algorithms & CS** | Java (1000+ LeetCode DSA Problems Solved), OOP, System Design, Operating Systems, DBMS |

---

## Project Directory Structure

```text
Portfolio/
├── public/
│   └── assets/                         # Images, project assets, certificates & Resume.pdf
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
│   │   ├── Header.jsx                  # Navigation bar with Recruiter Mode and Theme toggle
│   │   ├── Hiring.jsx                  # Value proposition for recruiters and engineering leads
│   │   ├── Hobbies.jsx                 # Personal interests, tech reading, and music
│   │   ├── Home.jsx                    # Hero section with animated typewriter effect
│   │   ├── LeetCodeMatrix.jsx          # 1000+ Java DSA solutions & Topic Mastery Matrix
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
│   │   ├── leetcodematrix.css          # DSA matrix cards, progress bars, and badges
│   │   ├── recruitermodal.css          # Executive view modal and quick-action buttons
│   │   ├── header.css                  # Header, recruiter badge, and mobile drawer
│   │   ├── projects.css                # Tiered project cards and architecture diagrams
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
