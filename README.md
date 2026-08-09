<div align="center">

# 🌐 Satyam Kumar Mishra — Full-Stack Developer Portfolio

An ultra-modern, high-performance, and responsive Full-Stack Portfolio application built with **React 19, Vite 6, React Router v7, Framer Motion, Google Gemini AI, and CSS Glassmorphism Design System**.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-satyam--devfolio.vercel.app-4f46e5?style=for-the-badge&logo=vercel&logoColor=white)](https://satyam-devfolio.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/💻_GitHub_Repo-Satyam6201%2Fportfolio--website-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Satyam6201/portfolio-website)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://github.com/Satyam6201/portfolio-website/blob/main/LICENSE)

<br />

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/Gemini_AI-8E75B5?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java_1000+_DSA-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://leetcode.com/u/SatyamMIshra62)

</div>

---

## 🌟 Quick Links

- 🔗 **Live Web Application**: [https://satyam-devfolio.vercel.app/](https://satyam-devfolio.vercel.app/)
- 📦 **Source Code Repository**: [https://github.com/Satyam6201/portfolio-website](https://github.com/Satyam6201/portfolio-website)
- 📄 **Direct Resume PDF**: [Download Satyam's Resume (PDF)](https://satyam-devfolio.vercel.app/assets/Resume.pdf)

---

## 📋 Table of Contents

1. [Key Features & Highlights](#-key-features--highlights)
2. [Tech Stack & Architecture](#%EF%B8%8F-tech-stack--architecture)
3. [Project Directory Structure](#-project-directory-structure)
4. [Getting Started & Local Setup](#-getting-started--local-setup)
5. [Environment Variables](#-environment-variables)
6. [About the Developer](#-about-the-developer)
7. [License](#-license)

---

## ✨ Key Features & Highlights

### ☀️ 1. Day & Night Mode (Theme System)
- **Persistent State**: Theme preference (Light ☀️ vs. Dark 🌙) saved in `localStorage` via custom `ThemeContext`.
- **CSS Tokens**: Tailored CSS variable design system (`--bg-primary`, `--bg-card`, `--accent-color`, `--glass-border`) supporting rich dark modes and crystal-clear light modes.

### 🤖 2. Gemini AI Assistant Chatbot
- **Google Gemini 1.5 Flash API**: Interactive floating chat widget powered by AI.
- **Smart Fallback Engine**: Guaranteed 100% answer reliability for all queries about Satyam's 1000+ DSA problems, work experience, SaaS projects, skills, education, and contact details.
- **Resume Direct Actions**: Generates direct PDF download buttons within chat responses (`/assets/Resume.pdf`).

### 🔀 3. Full-Page React Router Navigation
- **Multi-Route & Single-Page Dual Support**: Clean routes for `/about`, `/projects`, `/techstack`, `/experience`, `/education`, `/certifications`, `/blog`, `/contact`, `/hiring`, and `/achievements` alongside smooth hash scrolling (`#projects`, `#about`).
- **Active Navigation**: Highlights active routes with smooth mobile navigation drawer support.

### 🚀 4. Interactive Projects Gallery
- **Search & Tech Filter**: Instant live search bar and technology category filter dropdown.
- **Project Detail Modals**: High-resolution popup overlays displaying deep project architecture details, tech stack badges, live app links, and GitHub repositories.

### 📖 5. Tech Blog & Reading Modal
- Interactive blog engine with tag filter buttons (`#React`, `#MERN`, `#Java`, `#DSA`), keyword search, and full post reader modal overlays.

### 📞 6. Contact & Resume Action Center
- Real-time form validation with dual dispatch triggers (**Send via Email** & **Send via WhatsApp**).
- One-click clipboard copy handlers for email and phone number with instant toast feedback alerts.

---

## 🛠️ Tech Stack & Architecture

| Category | Technologies & Skills |
| :--- | :--- |
| **Frontend Core** | React 19, Next.js 14/15, TypeScript, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Motion** | Vanilla CSS3 (Custom Theme Tokens & Glassmorphism), Tailwind CSS, Bootstrap, Framer Motion |
| **Generative AI & LLMs** | Google Gemini 1.5 Flash API, OpenAI API, GenAI Agent Workflows, RAG Architecture, Prompt Engineering |
| **Security & Auth** | JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), API Security Middleware |
| **Backend & Systems** | Node.js, Express.js, REST APIs, Redis Caching, Apache Kafka, System Design, Load Balancer, CDN |
| **Databases & ORM** | MongoDB, PostgreSQL, MySQL, Redis, Firebase, Prisma ORM |
| **DevOps & Hosting** | Docker, CI/CD Pipelines (GitHub Actions), Vercel, Netlify, Render, Railway, Git & GitHub |
| **Algorithms & CS** | Java (1000+ LeetCode DSA Problems Solved), OOP Principles, Operating Systems, DBMS |

---

## 📁 Project Directory Structure

```text
Portfolio/
├── public/
│   └── assets/                  # Images, project screenshots, certificates & Resume.pdf
├── src/
│   ├── component/               # UI Components
│   │   ├── Header.jsx           # Navbar with Day/Night toggle, logo & React Router links
│   │   ├── Home.jsx             # Hero section with animated typewriter effect
│   │   ├── About.jsx            # Bio, animated counters (1000+ DSA) & achievements
│   │   ├── TechStack.jsx        # Skills grid with category filter tabs
│   │   ├── Projects.jsx         # Projects gallery with live search & detail modal
│   │   ├── Experience.jsx       # Career timeline (Code Innovative & Software Beatz)
│   │   ├── Education.jsx        # Academic journey & college topper badges
│   │   ├── Certifications.jsx    # Verified internship & course certificates
│   │   ├── Blog.jsx             # Tech articles with search & reading preview modal
│   │   ├── Contact.jsx          # Contact form, email/WhatsApp dispatchers & toasts
│   │   ├── AIChatbot.jsx        # Gemini AI Assistant widget & fallback knowledge engine
│   │   └── Footer.jsx           # Social links & smooth back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme provider for Light & Dark mode state
│   ├── styles/                  # Modular CSS stylesheets
│   │   ├── global.css           # CSS variables, glassmorphism tokens & reset rules
│   │   └── chatbot.css          # AI Chatbot drawer & toggle button styles
│   ├── App.jsx                  # Main router configuration & layout wrapper
│   └── main.jsx                 # Application entry point with BrowserRouter
├── .env                         # Local environment variables (VITE_GEMINI_API_KEY)
├── .gitignore                   # Excluded files (node_modules, dist, .env)
├── package.json                 # Project dependencies & npm scripts
└── vite.config.js               # Vite build configuration
```

---

## ⚡ Getting Started & Local Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

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
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 6. Build for Production
```bash
npm run build
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
| :--- | :--- | :---: |
| `VITE_GEMINI_API_KEY` | Google Gemini AI Studio API key for powering the AI Chatbot | Yes |

> [!NOTE]
> `.env` is listed in `.gitignore` to keep API keys secure and out of public Git commits.

---

## 👨‍💻 About the Developer

<div align="left">

**Satyam Kumar Mishra** — *Full-Stack MERN & Next.js Engineer*

- 📧 **Email**: [satyamkmishraa@gmail.com](mailto:satyamkmishraa@gmail.com)
- 📱 **Phone / WhatsApp**: [+91 6201902313](https://wa.me/916201902313)
- 🌐 **Portfolio**: [https://satyam-devfolio.vercel.app/](https://satyam-devfolio.vercel.app/)
- 💻 **GitHub**: [github.com/Satyam6201](https://github.com/Satyam6201)
- 🔗 **LinkedIn**: [linkedin.com/in/satyam-kumar-mishra-dev](https://www.linkedin.com/in/satyam-kumar-mishra-dev)
- 🏆 **LeetCode**: [leetcode.com/u/SatyamMIshra62](https://leetcode.com/u/SatyamMIshra62)

</div>

---

<div align="center">

Crafted with ❤️ by **Satyam Kumar Mishra** | Distributed under the **ISC License**.

</div>
