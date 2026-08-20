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
} from "react-icons/fa";
import "../styles/chatbot.css";

const SYSTEM_PROMPT = `
You are Satyam's AI Assistant, a friendly, intelligent, and professional virtual assistant embedded on Satyam Kumar Mishra's portfolio website. Your goal is to answer visitors' questions about Satyam accurately, concisely, and enthusiastically.

SATYAM KUMAR MISHRA - COMPLETE PORTFOLIO DETAILS:

1. ABOUT SATYAM:
   - Full Name: Satyam Kumar Mishra
   - Title: Full-Stack MERN & Next.js Developer | Generative AI Integrator | RAG Systems Builder
   - Summary: Dedicated Full-Stack Engineer specializing in scalable SaaS platforms, AI-powered applications, RAG architectures, secure authentication systems, and production-ready web applications using React.js, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
   - Key Strength: Solved 1000+ DSA problems on LeetCode using Java. Strong fundamentals in System Design, OOP, DBMS, and OS.
   - Notice Period: Immediate Joining (0 Days Notice)
   - Preferred Roles: Full-Time Software Engineer / Full-Stack Developer / Frontend & MERN Engineering Internship
   - Location: Bhopal, MP, India (Open for Remote, Hybrid, & On-Site roles)
   - Resume Download URL: /assets/Resume.pdf

2. EDUCATION:
   - Degree: B.Tech in Computer Science & Engineering (2022 - 2026) - Completed
   - Institution: Radharaman Institute of Technology and Science, Bhopal
   - Performance: CGPA 8.17 (Secured 1st Rank in 1st to 3rd semesters - College Topper)

3. WORK EXPERIENCE:
   - Full Stack Development Intern – Code Innovative Technologies (Remote, Feb 2026 – May 2026)
     * Developed scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.
     * Implemented RESTful APIs, responsive UI components, Git workflows, and Agile sprint planning.
   - Software Development Intern – Software Beatz (Remote, Oct 2025 – Feb 2026)
     * Built MERN stack modules, JWT authentication, protected routes, and database query optimizations.
     * Conducted API testing with Postman and deployed production-ready web features.

4. FEATURED PROJECTS:

   A. MockMate AI (Latest & Most Advanced):
   - Description: Full-stack AI-powered mock interview platform that generates personalized interview questions from resumes.
   - Tech Stack: React, Tailwind CSS, Framer Motion, React Router DOM, Axios, React Hot Toast, Lucide React (Frontend); Node.js, Express, MongoDB Atlas, Mongoose, JWT, Multer (Backend); OpenAI API, OpenRouter API, text-embedding-3-small, FAISS Vector Store, pdf-parse, LangChain-style Chunking (AI/RAG); Stripe, Razorpay (Payments); Vercel (Frontend), Render (Backend), MongoDB Atlas (Database).
   - Features: PDF resume parsing, FAISS vector embeddings for semantic search, real-time AI answer evaluation (correctness, confidence, communication), personalized question generation, secure JWT auth, Multer file uploads, Stripe/Razorpay payment integrations, interview history tracking, performance dashboards.
   - GitHub: https://github.com/Satyam6201/MockMate-AI

   B. DentAIva:
   - Description: AI-Powered healthcare SaaS with voice assistants for automated appointment handling.
   - Tech: Next.js, TypeScript, PostgreSQL, Prisma ORM, Clerk Authentication, Vapi AI, Tailwind CSS, OpenAI API, RBAC.
   - Live: https://dentwise-henna.vercel.app/ | GitHub: https://github.com/Satyam6201/DentAIva

   C. Grocerin:
   - Description: Full-stack grocery e-commerce platform with cart, wishlist, seller dashboard, JWT auth, and Stripe payments.
   - Tech: MongoDB, Express.js, React.js, Node.js, JWT, Stripe API, Cloudinary.
   - Live: https://grocerinx.vercel.app | GitHub: https://github.com/Satyam6201/Grocerin

   D. Medi-Connect:
   - Description: MERN healthcare platform with patient booking, doctor schedules, admin analytics, Razorpay/Stripe payments.
   - Tech: React.js, Node.js, Express.js, MongoDB, JWT, Stripe/Razorpay.
   - Live: https://prescripto.vercel.app/ | GitHub: https://github.com/Satyam6201/Medi-Connect

   E. Employee Manager Pro:
   - Description: Enterprise HRMS built with Next.js 14, Prisma ORM, PostgreSQL, NextAuth, and Framer Motion.
   - Tech: Next.js 14, Prisma, PostgreSQL, NextAuth, Framer Motion, Tailwind CSS.
   - Live: https://employee-manager-pro-chi.vercel.app/ | GitHub: https://github.com/Satyam6201/employee-manager-pro

   F. Connectify:
   - Description: Real-time chat & video calling web app using MERN, Socket.io, WebRTC, and Zustand.
   - Tech: React.js, Node.js, Express.js, MongoDB, JWT, Socket.io, WebRTC, Zustand, Tailwind CSS.
   - GitHub: https://github.com/Satyam6201/Connectify

5. TECHNICAL SKILLS:
   - Generative AI & LLMs: OpenAI API, OpenRouter API, RAG Architecture, FAISS Vector Store, text-embedding-3-small, LangChain-style Chunking, LLM Context Processing, Prompt Engineering, Python.
   - API Security & Auth: JWT Auth, OAuth 2.0, RBAC (Role-Based Access Control), API Security (CORS, Rate Limiting, Sanitization), Clerk Auth, NextAuth, Middleware.
   - Backend & Systems: Node.js, Express.js, REST APIs, Redis Caching, Apache Kafka, System Design, Load Balancer, CDN Integration, Multer, pdf-parse.
   - Frontend: React.js, Next.js 14/15, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, React Router DOM, Axios, Bootstrap, HTML5/CSS3, Lucide React.
   - Databases: MongoDB Atlas, PostgreSQL, MySQL, Redis, Firebase, Prisma ORM, Mongoose, FAISS Vector Store.
   - DevOps & Cloud: Docker, CI/CD Pipelines (GitHub Actions), Vercel, Netlify, Render, Railway, Git & GitHub, Postman.
   - CS Fundamentals: Java (1000+ DSA Solved on LeetCode), OOP Principles, Operating Systems, DBMS, System Design.
   - Payments: Stripe Gateway, Razorpay Integration.

6. ACHIEVEMENTS & MILESTONES:
   - 1000+ DSA Problems Solved on LeetCode (Java)
   - University Rank #1 / College Topper (Semesters 1-3, CGPA 8.17)
   - 45+ Full-Stack Web Projects & SaaS Applications Built
   - 400+ Students Mentored as Training & Placement Cell Member
   - 10+ Tech Events Organized (Hackathons, Tech Fests)
   - Multiple College Competition Winner (Coding, Project Expo)

7. VOLUNTEER & COMMUNITY:
   - Training & Placement (T&P) Cell Member – Radharaman Institute: Mentored 400+ students in placements & technical skills.
   - Tech Fest Organizer – Radharaman Tech Fest: Organized 10+ technical events, workshops, hackathons.
   - Campus Ambassador – GeeksForGeeks: Promoted coding culture on campus.
   - Coding Community Lead: Led coding sessions, projects, and peer-learning groups.

8. CONTACT & HIRING CHANNELS:
   - Email: satyamkmishraa@gmail.com
   - Phone / WhatsApp: +91 6201902313
   - Location: Bhopal, Madhya Pradesh, India
   - GitHub: https://github.com/Satyam6201
   - LinkedIn: https://www.linkedin.com/in/satyam-kumar-mishra-dev
   - LeetCode: https://leetcode.com/u/SatyamMIshra62

RESPONSE RULES:
- Be polite, concise, enthusiastic, and helpful. Use emojis moderately.
- When answering hiring/job/internship queries, emphasize: 0 Days Notice, 1000+ DSA, 45+ Projects, MERN/Next.js/GenAI/RAG expertise, immediate availability.
- Include [DIRECT_CONTACT_ACTIONS] tag when answering hiring, contact, resume inquiries.
- For MockMate AI, emphasize RAG pipeline, FAISS vector embeddings, OpenAI/OpenRouter, pdf-parse, Stripe/Razorpay, MongoDB Atlas, full-stack Node+React architecture.
- Always sound human, warm, and proud of Satyam's achievements.
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Complete Smart Fallback Knowledge Base Engine
function getFallbackResponse(query) {
  const q = query.toLowerCase();

  if (q.includes("hire") || q.includes("hiring") || q.includes("job") || q.includes("intern") || q.includes("recruiter") || q.includes("opportunity") || q.includes("role") || q.includes("fulltime") || q.includes("available")) {
    return `💼 **Hire Satyam Kumar Mishra:**\n\nSatyam is **Available for Immediate Joining** (0 Days Notice Period) for:\n- 🚀 **Full-Time Software / Full-Stack Engineer**\n- 🎓 **Frontend / MERN / Next.js Engineering Internship**\n- 🤖 **GenAI / RAG Systems Integration Role**\n\n**Key Highlights:**\n- ⚡ **1000+ DSA Solved** on LeetCode (Java)\n- 🛠️ **45+ Web Projects & SaaS Apps** (Next.js, React, Node, MongoDB, GenAI, RAG)\n- 🏆 **University Rank #1** – CGPA 8.17 (College Topper)\n- 🤖 **RAG Architecture** – MockMate AI with FAISS, OpenAI, MongoDB Atlas\n- 📍 **Remote / On-Site / Hybrid** – Bhopal, MP\n\n[DIRECT_CONTACT_ACTIONS]`;
  }

  if (q.includes("mockmate") || q.includes("mock mate") || q.includes("interview") || q.includes("rag") || q.includes("faiss") || q.includes("vector")) {
    return `🤖 **MockMate AI – RAG Interview Platform:**\n\nSatyam's most advanced AI project — a **full-stack RAG-powered mock interview platform**.\n\n🔧 **Architecture:**\n- **Frontend**: React, Tailwind CSS, Framer Motion, React Router DOM, Axios, Lucide React\n- **Backend**: Node.js, Express, MongoDB Atlas, Mongoose, JWT, Multer\n- **AI/RAG**: OpenAI API + OpenRouter, text-embedding-3-small, **FAISS Vector Store**, pdf-parse, LangChain-style chunking\n- **Payments**: Stripe + Razorpay\n- **Deployment**: Vercel (Frontend), Render (Backend), MongoDB Atlas\n\n✨ **Features**: PDF resume parsing → FAISS embeddings → AI question generation → real-time answer scoring (correctness, confidence, communication) → session history tracking\n\n🔗 GitHub: https://github.com/Satyam6201/MockMate-AI`;
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return `📄 You can view and download Satyam's official Resume below:\n\n[DIRECT_CONTACT_ACTIONS]`;
  }

  if (q.includes("experience") || q.includes("work") || q.includes("internship") || q.includes("intern")) {
    return `💼 **Satyam's Work Experience:**\n\n1. **Full Stack Dev Intern** – Code Innovative Technologies (Feb 2026 – May 2026)\n   - React, Next.js, Node.js, Express, MongoDB, PostgreSQL\n   - REST APIs, Git workflows, Agile sprints\n\n2. **Software Dev Intern** – Software Beatz (Oct 2025 – Feb 2026)\n   - MERN stack modules, JWT Auth, protected routes\n   - Postman API testing, production deployments\n\n[DIRECT_CONTACT_ACTIONS]`;
  }

  if (q.includes("project") || q.includes("dentalva") || q.includes("grocerin") || q.includes("medi") || q.includes("connectify") || q.includes("employee")) {
    return `🚀 **Satyam's Top Featured Projects:**\n\n1. 🤖 **MockMate AI** – RAG AI interview platform (Node, React, OpenAI, FAISS, MongoDB Atlas, Stripe/Razorpay)\n2. 🏥 **DentAIva** – AI healthcare SaaS (Next.js, Vapi AI, Clerk, Prisma, PostgreSQL)\n3. 🛒 **Grocerin** – E-commerce app (MERN, Stripe, Cloudinary)\n4. 🩺 **Medi-Connect** – MERN healthcare platform (JWT, Razorpay/Stripe)\n5. 👔 **Employee Manager Pro** – HRMS (Next.js 14, Prisma, PostgreSQL, NextAuth)\n6. 💬 **Connectify** – Real-time chat & video (MERN, Socket.io, WebRTC, Zustand)\n\n45+ total projects built!`;
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("dsa") || q.includes("java") || q.includes("ai") || q.includes("security") || q.includes("language") || q.includes("tool")) {
    return `💻 **Satyam's Complete Technical Stack:**\n\n🤖 **AI/RAG**: OpenAI, OpenRouter, FAISS Vector, text-embedding-3-small, pdf-parse, Prompt Engineering, Python\n🔐 **Auth & Security**: JWT, OAuth 2.0, RBAC, CORS, Rate Limiting, Clerk, NextAuth\n⚙️ **Backend**: Node.js, Express, REST APIs, Redis, Apache Kafka, System Design, Multer\n⚛️ **Frontend**: React, Next.js 14/15, TypeScript, Tailwind CSS, Framer Motion, Axios\n🗄️ **Databases**: MongoDB Atlas, PostgreSQL, MySQL, Prisma ORM, Mongoose, Redis, FAISS\n💳 **Payments**: Stripe, Razorpay\n☁️ **DevOps**: Docker, CI/CD, Vercel, Render, GitHub Actions\n📐 **CS Fundamentals**: Java (1000+ DSA on LeetCode), OOP, OS, DBMS`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("whatsapp") || q.includes("call") || q.includes("mail")) {
    return `📞 **Get in Touch with Satyam:**\n\n- ✉️ **Email**: satyamkmishraa@gmail.com\n- 📱 **Phone / WhatsApp**: +91 6201902313\n- 📍 **Location**: Bhopal, MP, India (Open for Remote)\n- 💻 **GitHub**: [github.com/Satyam6201](https://github.com/Satyam6201)\n- 🔗 **LinkedIn**: [linkedin.com/in/satyam-kumar-mishra-dev](https://www.linkedin.com/in/satyam-kumar-mishra-dev)\n- 📊 **LeetCode**: [leetcode.com/u/SatyamMIshra62](https://leetcode.com/u/SatyamMIshra62)\n\n[DIRECT_CONTACT_ACTIONS]`;
  }

  if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("btech") || q.includes("degree") || q.includes("university")) {
    return `🎓 **Satyam's Academic Background:**\n\n- **Degree**: B.Tech in Computer Science & Engineering\n- **Duration**: 2022 – 2026 (Completed)\n- **Institution**: Radharaman Institute of Technology & Science, Bhopal\n- **CGPA**: 8.17 ⭐\n- 🏆 **College Topper** – Rank #1 in Semesters 1, 2 & 3`;
  }

  if (q.includes("achievement") || q.includes("award") || q.includes("rank") || q.includes("topper") || q.includes("milestone") || q.includes("1000") || q.includes("leetcode")) {
    return `🏆 **Satyam's Key Achievements:**\n\n- ⚡ **1000+ DSA Problems** Solved on LeetCode (Java)\n- 🥇 **University Rank #1** – CGPA 8.17 (College Topper, Semesters 1-3)\n- 🛠️ **45+ Full-Stack Projects** Built (SaaS, AI, MERN)\n- 🎓 **400+ Students Mentored** as T&P Cell Member\n- 🎯 **10+ Tech Events** Organized (Hackathons, Tech Fests)\n- 🤖 **RAG AI System** – MockMate AI with FAISS & OpenAI`;
  }

  if (q.includes("volunteer") || q.includes("community") || q.includes("mentor") || q.includes("placement") || q.includes("t&p") || q.includes("event")) {
    return `🌟 **Satyam's Volunteer & Community Work:**\n\n- 🎓 **T&P Cell Member** – Mentored 400+ students in placements & technical interviews\n- 🎪 **Tech Fest Organizer** – Organized 10+ hackathons, workshops, and tech events\n- 📣 **Campus Ambassador** – GeeksForGeeks coding culture promotion\n- 👥 **Coding Community Lead** – Led peer-learning sessions and project groups`;
  }

  if (q.includes("stripe") || q.includes("razorpay") || q.includes("payment")) {
    return `💳 **Satyam's Payment Integration Experience:**\n\n- **Stripe**: Integrated in MockMate AI & Grocerin for subscription and order payments.\n- **Razorpay**: Integrated in MockMate AI & Medi-Connect for Indian payment gateway.\n- Features implemented: Webhooks, subscription plans, secure checkout, refund handling.`;
  }

  if (q.includes("goal") || q.includes("career") || q.includes("future") || q.includes("plan") || q.includes("ambition")) {
    return `🎯 **Satyam's Career Goals:**\n\n- **Phase 1 (0-1 yr)**: Secure Full-Stack / MERN / GenAI role, contribute to real-world SaaS products, sharpen System Design.\n- **Phase 2 (1-2 yrs)**: Architect scalable platforms, become a RAG AI Systems expert, contribute to open-source.\n- **Phase 3 (2-4 yrs)**: Lead engineering teams, build & launch personal SaaS products.\n- **Phase 4 (4+ yrs)**: Found a tech startup or become a Principal Engineer at a top tech company.\n\n[DIRECT_CONTACT_ACTIONS]`;
  }

  return `Hi! 👋 I'm Satyam's AI Assistant. I can tell you about:\n\n- 🤖 **MockMate AI** – RAG AI interview platform (FAISS, OpenAI, Node, React, MongoDB)\n- 🚀 **45+ Full-Stack Projects** – SaaS, Healthcare, E-commerce, HRMS\n- ⚡ **1000+ DSA** solved on LeetCode\n- 🏆 **University Rank #1** – CGPA 8.17\n- 💼 **Work Experience** – 2 Internships\n- 💳 **Stripe/Razorpay** payment integrations\n- 📞 **Contact & Hire** Satyam directly\n\nJust ask me anything!\n\n[DIRECT_CONTACT_ACTIONS]`;
}

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi there! 👋 I'm Satyam's AI Assistant.\n\nI know everything about Satyam — his **MockMate AI RAG system**, **1000+ DSA problems**, **45+ projects**, **2 internships**, **University Rank #1**, and more!\n\nHow can I help you today?`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    { icon: <FaBriefcase />, label: "Hire Satyam" },
    { icon: <FaPhoneAlt />, label: "Contact Info" },
    { icon: <FaFileDownload />, label: "Get Resume" },
    { icon: <FaProjectDiagram />, label: "Top Projects" },
    { icon: <FaBriefcase />, label: "Work Experience" },
    { icon: <FaCode />, label: "Technical Skills" },
    { icon: <FaRobot />, label: "MockMate AI" },
    { icon: <FaGraduationCap />, label: "Education" },
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
            generationConfig: { temperature: 0.7, maxOutputTokens: 600 },
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
      console.warn("Gemini AI API fallback triggered:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: getFallbackResponse(query) }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") sendMessage(); };

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

    // Parse basic markdown: **bold**, [text](url)
    const parseMarkdown = (raw) => {
      const lines = raw.split("\n");
      return lines.map((line, i) => {
        const parts = [];
        let remaining = line;
        let key = 0;

        // Replace [text](url)
        remaining = remaining.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, (_, text, url) => {
          return `<LINK::${url}::${text}>`;
        });
        // Replace **bold**
        remaining = remaining.replace(/\*\*([^*]+)\*\*/g, (_, bold) => `<BOLD::${bold}>`);

        const tokens = remaining.split(/(<LINK::[^>]+>|<BOLD::[^>]+>)/);
        tokens.forEach((token, j) => {
          if (token.startsWith("<LINK::")) {
            const [, url, label] = token.replace("<LINK::", "").replace(">", "").split("::");
            parts.push(<a key={`${i}-${j}`} href={`${url}::${label}`.split("::")[0] + "::" + `${url}::${label}`.split("::")[1] } href={url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-color)", textDecoration: "underline" }}>{label}</a>);
          } else if (token.startsWith("<BOLD::")) {
            const bold = token.replace("<BOLD::", "").replace(">", "");
            parts.push(<strong key={`${i}-${j}`}>{bold}</strong>);
          } else {
            parts.push(<span key={`${i}-${j}`}>{token}</span>);
          }
        });

        return <p key={i} style={{ margin: "2px 0" }}>{parts}</p>;
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
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
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
                  Powered by Gemini AI · Knows All Details
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Chat"><FaMinus /></button>
          </div>

          {/* Messages Body */}
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

          {/* Quick Suggestion Chips */}
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

          {/* Input Footer */}
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
