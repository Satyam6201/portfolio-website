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
  FaBriefcase
} from "react-icons/fa";
import "../styles/chatbot.css";

const SYSTEM_PROMPT = `
You are Satyam's AI Assistant, a friendly, intelligent, and professional virtual assistant embedded on Satyam Kumar Mishra's portfolio website. Your goal is to answer visitors' questions about Satyam accurately, concisely, and enthusiastically.

SATYAM KUMAR MISHRA'S PORTFOLIO DETAILS:

1. ABOUT SATYAM:
   - Full Name: Satyam Kumar Mishra
   - Title: Full-Stack MERN & Next.js Developer | Generative AI Integrator
   - Summary: Dedicated Full-Stack Engineer specializing in scalable SaaS platforms, secure authentication systems, and production-ready web applications using React.js, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
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

4. TOP FEATURED PROJECTS:
   - DentAIva: AI-Powered healthcare SaaS with voice assistants for automated appointment handling, AI consultations, Clerk auth, RBAC, and Prisma/PostgreSQL. (Live: https://dentwise-henna.vercel.app/ | GitHub: https://github.com/Satyam6201/DentAIva)
   - Grocerin: Full-stack grocery e-commerce app with cart, wishlist, seller dashboard, JWT auth, and Stripe payment gateway. (Live: https://grocerinx.vercel.app | GitHub: https://github.com/Satyam6201/Grocerin)
   - Medi-Connect: MERN healthcare platform with patient online booking, doctor schedule management, admin analytics, and Razorpay/Stripe payments. (Live: https://prescripto.vercel.app/ | GitHub: https://github.com/Satyam6201/Medi-Connect)
   - Employee Manager Pro: Enterprise HRMS built with Next.js 14, Prisma ORM, PostgreSQL, NextAuth, and Framer Motion. (Live: https://employee-manager-pro-chi.vercel.app/ | GitHub: https://github.com/Satyam6201/employee-manager-pro)
   - Connectify: Real-time chat & video calling app using MERN, Socket.io, WebRTC, and Zustand. (GitHub: https://github.com/Satyam6201/Connectify)

5. TECHNICAL SKILLS:
   - Generative AI & LLMs: OpenAI API, GenAI Agent Workflows, LLM Context Processing, RAG Architecture, Vector Embeddings, Prompt Engineering, Python.
   - API Security & Auth: JWT Auth, OAuth 2.0, RBAC (Role-Based Access Control), API Security (CORS, Rate Limiting, Sanitization), Authentication & Authorization Middleware.
   - Backend & Systems: Node.js, Express.js, REST APIs, Redis Caching, Apache Kafka, System Design, Load Balancer, CDN Integration.
   - Frontend: React.js, Next.js 14/15, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5/CSS3.
   - Databases: MongoDB, PostgreSQL, MySQL, Redis, Firebase, Prisma ORM.
   - DevOps & Cloud: Docker, CI/CD Pipelines (GitHub Actions), Vercel, Netlify, Render, Railway, Git & GitHub, Postman.
   - CS Fundamentals: Java (1000+ DSA Solved), OOP Principles, Operating Systems, DBMS.

6. CONTACT & HIRING CHANNELS:
   - Email: satyamkmishraa@gmail.com
   - Phone / WhatsApp: +91 6201902313
   - Location: Bhopal, Madhya Pradesh, India
   - GitHub: https://github.com/Satyam6201
   - LinkedIn: https://www.linkedin.com/in/satyam-kumar-mishra-dev
   - LeetCode: https://leetcode.com/u/SatyamMIshra62

RULES FOR RESPONSE:
- Be polite, concise, and helpful.
- If asked about hiring, job opportunities, internships, or contacting Satyam, enthusiastically confirm Satyam's immediate availability (0 Days Notice), summarize his key highlights (1000+ DSA solved, 45+ projects, MERN/Next.js/GenAI expertise), and encourage direct contact via Email or WhatsApp.
- Include [DIRECT_CONTACT_ACTIONS] tag when answering hiring or contact inquiries.
`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Smart Fallback Knowledge Base Engine
function getFallbackResponse(query) {
  const q = query.toLowerCase();

  if (q.includes("hire") || q.includes("hiring") || q.includes("job") || q.includes("intern") || q.includes("recruiter") || q.includes("opportunity") || q.includes("role") || q.includes("fulltime")) {
    return "💼 **Hire Satyam Kumar Mishra:**\n\nSatyam is **Available for Immediate Joining** (0 Days Notice Period) for:\n- 🚀 **Full-Time Software / Full-Stack Engineer**\n- 🎓 **Frontend / MERN Stack Engineering Internship**\n\n**Key Highlights:**\n- ⚡ **1000+ DSA Solved** on LeetCode (Java)\n- 🛠️ **45+ Web Projects & SaaS Apps** (Next.js, React, Node, PostgreSQL, GenAI)\n- 📍 **Remote / On-Site / Hybrid**\n\n[DIRECT_CONTACT_ACTIONS]";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return "📄 You can view and download Satyam's official Resume here:\n\n[DIRECT_CONTACT_ACTIONS]";
  }

  if (q.includes("experience") || q.includes("work") || q.includes("internship")) {
    return "💼 **Satyam's Work Experience:**\n\n1. **Full Stack Development Intern** – Code Innovative Technologies (Feb 2026 – May 2026)\n   - Built scalable web apps using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.\n\n2. **Software Development Intern** – Software Beatz (Oct 2025 – Feb 2026)\n   - Built full-stack MERN modules, REST APIs, JWT authentication, and database query optimizations.\n\n[DIRECT_CONTACT_ACTIONS]";
  }

  if (q.includes("project") || q.includes("dentalva") || q.includes("grocerin") || q.includes("medi")) {
    return "🚀 **Satyam's Top Featured Projects:**\n\n- **DentAIva**: AI-Powered healthcare SaaS with voice assistant & RBAC.\n- **Grocerin**: Full-stack e-commerce app with Stripe payments & admin dashboard.\n- **Medi-Connect**: MERN healthcare platform for doctor appointments.\n- **Employee Manager Pro**: Next.js 14 HRMS with Prisma & PostgreSQL.\n- **Connectify**: Real-time chat & video calling web app.";
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("dsa") || q.includes("java") || q.includes("ai") || q.includes("security")) {
    return "💻 **Satyam's Technical Stack:**\n\n- **Generative AI & LLMs**: OpenAI API, LLM Integration, RAG Architecture\n- **API Security & Auth**: JWT Auth, OAuth 2.0, RBAC, API Security\n- **Backend Systems**: Node.js, Express, REST APIs, Redis, Kafka, System Design\n- **Frontend**: React.js, Next.js 14/15, TypeScript, Tailwind CSS\n- **Databases**: MongoDB, PostgreSQL, MySQL, Prisma ORM\n- **DevOps**: Docker, CI/CD, Vercel, Netlify, Render, Railway\n- **CS Fundamentals**: Java (1000+ DSA solved on LeetCode)";
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("whatsapp") || q.includes("call") || q.includes("mail")) {
    return "📞 **Get in Touch with Satyam:**\n\nYou can reach out directly via Email, WhatsApp, or Phone:\n\n- ✉️ **Email**: satyamkmishraa@gmail.com\n- 📱 **Phone / WhatsApp**: +91 6201902313\n- 📍 **Location**: Bhopal, MP, India\n- 💻 **GitHub**: [github.com/Satyam6201](https://github.com/Satyam6201)\n- 🔗 **LinkedIn**: [linkedin.com/in/satyam-kumar-mishra-dev](https://www.linkedin.com/in/satyam-kumar-mishra-dev)\n\n[DIRECT_CONTACT_ACTIONS]";
  }

  if (q.includes("education") || q.includes("college") || q.includes("cgpa")) {
    return "🎓 **Satyam's Academic Background:**\n\n- **B.Tech in Computer Science & Engineering** (2022 - 2026) - **Completed**\n- **Radharaman Institute of Technology & Science, Bhopal**\n- **CGPA**: 8.17 (College Topper in semesters 1 to 3)";
  }

  return "Hi! I am Satyam's AI Assistant. I can tell you all about Satyam's **1000+ DSA problems solved**, **Work Experience**, **Featured SaaS Projects**, **Technical Skills**, or help you **Hire / Contact** him directly!\n\n[DIRECT_CONTACT_ACTIONS]";
}

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! 👋 I'm Satyam's AI Assistant. Ask me anything about Satyam's projects, technical skills, experience, or click below to connect with Satyam directly!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    "💼 Hire Satyam",
    "📞 Contact Info",
    "📥 Get Resume",
    "🚀 Top Projects",
    "💼 Work Experience",
    "💻 Technical Skills"
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
      // Format chat history for Gemini API
      const conversationContents = messages.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));

      conversationContents.push({
        role: "user",
        parts: [{ text: query }],
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: conversationContents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const botReply = data.candidates[0].content.parts[0].text;
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        throw new Error("No candidate content");
      }
    } catch (error) {
      console.warn("Gemini AI API fallback triggered:", error);
      // Smart Fallback Engine response
      const fallbackReply = getFallbackResponse(query);
      setMessages((prev) => [...prev, { sender: "bot", text: fallbackReply }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const renderMessageContent = (text) => {
    const hasActions = text.includes("[DIRECT_CONTACT_ACTIONS]") || text.includes("/assets/Resume.pdf") || text.toLowerCase().includes("contact") || text.toLowerCase().includes("hire");
    const cleanText = text.replace("[DIRECT_CONTACT_ACTIONS]", "").replace(/\[Download Resume \(PDF\)\]\(\/assets\/Resume\.pdf\)/g, "").replace(/\[View Resume \(PDF\)\]\(\/assets\/Resume\.pdf\)/g, "").trim();

    return (
      <div className="chat-message-content">
        {cleanText && <p>{cleanText}</p>}
        
        {hasActions && (
          <div className="chat-action-grid">
            <a
              href="mailto:satyamkmishraa@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio"
              className="chat-action-btn email"
            >
              <FaEnvelope /> Email Satyam
            </a>
            <a
              href="https://wa.me/916201902313?text=Hi%20Satyam,%20I'm%20interested%20in%20connecting%20regarding%20an%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-action-btn whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+916201902313"
              className="chat-action-btn phone"
            >
              <FaPhoneAlt /> Call
            </a>
            <a
              href="/assets/Resume.pdf"
              download="Satyam_Kumar_Mishra_Resume.pdf"
              className="chat-action-btn resume"
            >
              <FaFileDownload /> Resume
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
      </button>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="bot-info">
              <div className="bot-avatar">
                <FaRobot />
              </div>
              <div>
                <h4>Satyam's AI Assistant <FaMagic className="sparkle-icon" /></h4>
                <span className="status-indicator">
                  <span className="online-dot"></span> Powered by Gemini AI
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Chat">
              <FaMinus />
            </button>
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
                <div className="avatar">
                  <FaRobot />
                </div>
                <div className="message-bubble typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
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
                onClick={() => sendMessage(chip)}
                disabled={isLoading}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Ask about Satyam's resume, skills, work..."
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
