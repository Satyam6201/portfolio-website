# 🚀 Modern Developer Portfolio — Satyam Kumar Mishra

An ultra-modern, high-performance, and responsive Full-Stack Developer Portfolio built with **React 19, Vite, React Router v7, Framer Motion, Google Gemini AI, and CSS Glassmorphism Design System**.

---

## ✨ Key Features & Highlights

### ☀️ 1. Day & Night Mode (Theme System)
- Persistent Light/Dark theme switching stored in `localStorage` via custom `ThemeContext`.
- Fully tailored CSS variables (`--bg-primary`, `--bg-card`, `--accent-color`, `--text-primary`) supporting glassmorphism cards, vibrant gradients, and smooth theme transitions.

### 🤖 2. Gemini AI Assistant Chatbot
- Floating AI Assistant widget powered by **Google Gemini 1.5 Flash API**.
- Smart fallback knowledge engine guaranteeing 100% answer reliability even during network offline states.
- Answers questions about Satyam's **1000+ DSA problem solutions**, work experience, projects, skills, education, and provides direct **Resume Download (`/assets/Resume.pdf`)** buttons within chat messages.

### 🔀 3. Full-Page React Router Navigation
- Dual navigation support for direct sub-page routes (`/about`, `/projects`, `/techstack`, `/experience`, `/education`, `/certifications`, `/blog`, `/contact`, `/hiring`, `/achievements`) and single-page hash scrolling (`#projects`, `#about`).
- Active link highlighting and mobile navigation drawer menu.

### 🚀 4. Interactive Projects Showcase
- Instant search input bar and technology category filter dropdown.
- Featured project badges and **View Full Details** popup modals showcasing project architecture, live demos, and GitHub source code.

### 📖 5. Tech Blog & Reading Preview
- Interactive article search, tag filter buttons (`#React`, `#MERN`, `#Java`, `#DSA`), and full post reader modal overlays.

### 📞 6. Direct Contact & Resume Actions
- Form validation with dual dispatch buttons (**Send via Email** & **Send via WhatsApp**).
- One-click clipboard copy handlers for Email and Phone with toast notification alerts.

---

## 🛠️ Tech Stack & Architecture

| Category | Technologies & Tools |
| :--- | :--- |
| **Frontend Core** | React 19, Next.js 14/15, TypeScript, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Motion** | Vanilla CSS3 (CSS Variables & Glassmorphism), Tailwind CSS, Bootstrap, Framer Motion |
| **Generative AI & LLMs** | Google Gemini API, OpenAI API, LLM Context Processing, RAG Architecture, Prompt Engineering |
| **Security & Auth** | JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), API Security Middleware |
| **Backend & Systems** | Node.js, Express.js, REST APIs, Redis Caching, Apache Kafka, System Design, Load Balancer, CDN |
| **Databases & ORM** | MongoDB, PostgreSQL, MySQL, Redis, Firebase, Prisma ORM |
| **DevOps & Cloud** | Docker, CI/CD Pipelines (GitHub Actions), Vercel, Netlify, Render, Railway, Git & GitHub |
| **Algorithms & CS** | Java (1000+ LeetCode DSA Problems Solved), OOP Principles, Operating Systems, DBMS |

---

## 📁 Directory Structure

```text
Portfolio/
├── public/
│   └── assets/             # Project screenshots, logos, certificates & Resume.pdf
├── src/
│   ├── component/          # Reusable UI components
│   │   ├── Header.jsx      # Sticky navbar with Day/Night toggle & React Router links
│   │   ├── Home.jsx        # Hero section with animated typewriter effect
│   │   ├── About.jsx       # About bio, statistics counter & achievements
│   │   ├── TechStack.jsx   # Skills grid with category filter tabs
│   │   ├── Projects.jsx    # Projects gallery with search & detail modals
│   │   ├── Experience.jsx  # Interactive professional career timeline
│   │   ├── Education.jsx   # Academic background & topper badges
│   │   ├── Certifications.jsx # Verified internship & course certificates
│   │   ├── Blog.jsx        # Tech articles with search & reading modal
│   │   ├── Contact.jsx     # Contact form, copy buttons & toast alerts
│   │   ├── AIChatbot.jsx   # Gemini AI assistant widget & fallback engine
│   │   └── Footer.jsx      # Social links & back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx # Day/Night mode state manager
│   ├── styles/             # Modular CSS stylesheets per component
│   │   ├── global.css      # Core theme variables, glassmorphism & reset rules
│   │   └── chatbot.css     # AI Chatbot drawer & toggle button styles
│   ├── App.jsx             # Main Router configuration & layout wrapper
│   └── main.jsx            # React root renderer with BrowserRouter
├── .env                    # Environment variables (VITE_GEMINI_API_KEY)
├── .gitignore              # Git ignore rules (includes .env & build output)
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite build configuration
```

---

## ⚡ Getting Started

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
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 5. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Build for Production
```bash
npm run build
```

---

## 👨‍💻 About the Author

- **Name**: Satyam Kumar Mishra
- **Role**: Full-Stack MERN & Next.js Developer
- **Email**: [satyamkmishraa@gmail.com](mailto:satyamkmishraa@gmail.com)
- **Phone / WhatsApp**: [+91 6201902313](https://wa.me/916201902313)
- **GitHub**: [github.com/Satyam6201](https://github.com/Satyam6201)
- **LinkedIn**: [linkedin.com/in/satyam-kumar-mishra-dev](https://www.linkedin.com/in/satyam-kumar-mishra-dev)
- **LeetCode**: [leetcode.com/u/SatyamMIshra62](https://leetcode.com/u/SatyamMIshra62)

---

## 📄 License
Distributed under the ISC License. See `LICENSE` for more details.
