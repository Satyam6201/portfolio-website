import React, { useState } from "react";
import "../styles/hiring.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaBriefcase,
  FaUserGraduate,
  FaLightbulb,
  FaRocket,
  FaBolt,
  FaRobot,
  FaShieldAlt,
  FaFileDownload,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaLaptopCode,
  FaCheckCircle,
  FaStar,
  FaCodeBranch,
  FaHandshake,
  FaPaperPlane
} from "react-icons/fa";

function Hiring() {
  const [activeTab, setActiveTab] = useState("all");

  const whyHireMe = [
    {
      icon: <FaBolt />,
      title: "1000+ DSA Solved",
      desc: "Strong problem-solving mindset with LeetCode mastery in Java, System Design & Algorithms."
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Mastery",
      desc: "Expertise in React.js, Next.js 14/15, Node.js, Express, MongoDB, PostgreSQL & Prisma ORM."
    },
    {
      icon: <FaRobot />,
      title: "Generative AI Integrator",
      desc: "Experience building AI SaaS, RAG systems, OpenAI API & AI voice assistant workflows."
    },
    {
      icon: <FaShieldAlt />,
      title: "API Security & Performance",
      desc: "Proficient in JWT, RBAC, OAuth 2.0, Redis caching, rate limiting, and Stripe payments."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Connect",
      desc: "Reach out via Email, WhatsApp, or Phone for an intro chat or role overview.",
      icon: <FaHandshake />
    },
    {
      step: "02",
      title: "Tech Alignment",
      desc: "Review code samples, DSA skills (1000+ solved), live SaaS projects, or technical round.",
      icon: <FaCodeBranch />
    },
    {
      step: "03",
      title: "Immediate Joining",
      desc: "0 Days notice period — ready to join your team and contribute from Day 1.",
      icon: <FaRocket />
    }
  ];

  const quickMessages = [
    {
      label: "📅 Schedule Intro Call",
      subject: "Invitation%20for%20Intro%20Call",
      text: "Hi%20Satyam,%20we%20would%20like%20to%20schedule%20a%2015-minute%20introductory%20call%20with%20you!"
    },
    {
      label: "💼 Full-Time Job Offer",
      subject: "Full-Time%20Opportunity",
      text: "Hi%20Satyam,%20we%20have%20a%20Full-Time%20Software%20Developer%20opportunity%20we'd%20love%20to%20discuss."
    },
    {
      label: "🎓 Internship Opening",
      subject: "Internship%20Opportunity",
      text: "Hi%20Satyam,%20we%20are%20interested%20in%20considering%20you%20for%20an%20Engineering%20Internship."
    }
  ];

  return (
    <section className="hiring-container" id="hiring">
      {/* Header Banner */}
      <div className="hiring-header">
        <div className="live-status-pill">
          <span className="live-dot"></span>
          <span>Open to Work — Immediate Joining (0 Days Notice)</span>
        </div>
        
        <h1 className="hiring-title">
          <FaLightbulb className="title-icon" /> Let's Build Something Great Together
        </h1>
        <p className="hiring-subtext">
          Full-Stack MERN & Next.js Developer | Generative AI Integrator | Ready for Full-Time Roles & Internships
        </p>

        <div className="hiring-meta-info">
          <span><FaMapMarkerAlt /> Remote / On-Site / Hybrid</span>
          <span><FaCalendarCheck /> Availability: Immediate</span>
        </div>
      </div>

      {/* Filter / Category Selector */}
      <div className="hiring-tabs-wrapper">
        <button 
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          🌟 All Cards
        </button>
        <button 
          className={`tab-btn ${activeTab === "fulltime" ? "active" : ""}`}
          onClick={() => setActiveTab("fulltime")}
        >
          💼 Full-Time (FTE)
        </button>
        <button 
          className={`tab-btn ${activeTab === "internship" ? "active" : ""}`}
          onClick={() => setActiveTab("internship")}
        >
          🎓 Internship
        </button>
        <button 
          className={`tab-btn ${activeTab === "saas" ? "active" : ""}`}
          onClick={() => setActiveTab("saas")}
        >
          🤖 GenAI & SaaS MVP
        </button>
      </div>

      {/* Why Hire Satyam Highlight Section */}
      <div className="why-hire-section">
        <h2><FaRocket /> Why Hire Satyam?</h2>
        <div className="why-hire-grid">
          {whyHireMe.map((item, idx) => (
            <div key={idx} className="why-hire-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Role Cards Grid (Card Ways Look) */}
      <div className="hiring-cards-grid">
        {/* Full-Time Card */}
        {(activeTab === "all" || activeTab === "fulltime") && (
          <div className="card-item fte-card-item">
            <div className="card-top-header">
              <span className="card-badge fte">Full-Time Software Engineer</span>
              <span className="notice-badge"><FaCheckCircle /> 0 Days Notice</span>
            </div>

            <div className="card-body">
              <h2><FaBriefcase className="card-title-icon" /> Full-Stack / SDE Developer</h2>
              <p className="card-summary">
                Designed to bring immediate value to product engineering teams by building high-scale MERN & Next.js applications with robust API security and GenAI capabilities.
              </p>

              <div className="card-highlights">
                <h4><FaStar className="star-icon" /> Core Competencies:</h4>
                <ul>
                  <li><FaCheckCircle className="chk" /> Next.js 14/15, TypeScript, React.js</li>
                  <li><FaCheckCircle className="chk" /> Node.js, Express.js REST APIs & Microservices</li>
                  <li><FaCheckCircle className="chk" /> PostgreSQL, Prisma ORM, MongoDB & Redis</li>
                  <li><FaCheckCircle className="chk" /> JWT Auth, RBAC, Rate Limiting & Stripe Gateways</li>
                </ul>
              </div>

              <div className="card-metrics-row">
                <div className="metric-pill">⚡ 1000+ DSA Solved</div>
                <div className="metric-pill">🏆 CGPA 8.17</div>
                <div className="metric-pill">🚀 45+ Web Apps</div>
              </div>

              <div className="card-footer-actions">
                <a href="mailto:satyamkmishraa@gmail.com?subject=Full-Time%20Opportunity" className="action-btn primary">
                  <FaEnvelope /> Email Satyam
                </a>
                <a href="https://wa.me/916201902313?text=Hi%20Satyam,%20we%20have%20a%20Full-Time%20Software%20Engineer%20opportunity!" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="tel:+916201902313" className="action-btn outline">
                  <FaPhoneAlt /> Call
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Internship Card */}
        {(activeTab === "all" || activeTab === "internship") && (
          <div className="card-item intern-card-item">
            <div className="card-top-header">
              <span className="card-badge intern">Engineering Internship</span>
              <span className="notice-badge gold"><FaStar /> College Topper</span>
            </div>

            <div className="card-body">
              <h2><FaUserGraduate className="card-title-icon" /> Frontend & MERN Intern</h2>
              <p className="card-summary">
                High-energy developer with internship experience at Code CIT & Software Beatz, ready to deliver feature tickets, fix bugs, and build responsive interfaces rapidly.
              </p>

              <div className="card-highlights">
                <h4><FaStar className="star-icon" /> What I Bring:</h4>
                <ul>
                  <li><FaCheckCircle className="chk" /> Fast feature delivery & clean UI components</li>
                  <li><FaCheckCircle className="chk" /> State management with Redux & Context API</li>
                  <li><FaCheckCircle className="chk" /> Git PR workflows & Agile sprint collaboration</li>
                  <li><FaCheckCircle className="chk" /> Hands-on REST API integration & Postman testing</li>
                </ul>
              </div>

              <div className="card-metrics-row">
                <div className="metric-pill">📚 Rank #1 Sem 1-3</div>
                <div className="metric-pill">💼 2 Internships Done</div>
                <div className="metric-pill">⚡ Fast Learner</div>
              </div>

              <div className="card-footer-actions">
                <a href="mailto:satyamkmishraa@gmail.com?subject=Internship%20Opportunity" className="action-btn primary">
                  <FaEnvelope /> Email Satyam
                </a>
                <a href="https://wa.me/916201902313?text=Hi%20Satyam,%20we'd%20like%20to%20discuss%20an%20Engineering%20Internship%20role!" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="/assets/Resume.pdf" download="Satyam_Kumar_Mishra_Resume.pdf" className="action-btn resume">
                  <FaFileDownload /> Get Resume
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SaaS & GenAI MVP Card */}
        {(activeTab === "all" || activeTab === "saas") && (
          <div className="card-item saas-card-item">
            <div className="card-top-header">
              <span className="card-badge saas">GenAI & SaaS MVP</span>
              <span className="notice-badge purple"><FaRobot /> Production Ready</span>
            </div>

            <div className="card-body">
              <h2><FaRobot className="card-title-icon" /> Full 0-to-1 SaaS Creation</h2>
              <p className="card-summary">
                Need a full SaaS product built from scratch? I specialize in building complete AI-powered platforms (like DentAIva), multi-tenant databases, Clerk RBAC auth, and Stripe monetization.
              </p>

              <div className="card-highlights">
                <h4><FaStar className="star-icon" /> SaaS Stack Features:</h4>
                <ul>
                  <li><FaCheckCircle className="chk" /> OpenAI API, LLM Agents & Voice Assistant</li>
                  <li><FaCheckCircle className="chk" /> Next.js 14 Server Actions & Tailwind CSS</li>
                  <li><FaCheckCircle className="chk" /> Stripe Subscriptions & Billing Dashboards</li>
                  <li><FaCheckCircle className="chk" /> PostgreSQL, Prisma ORM & Vercel Deployments</li>
                </ul>
              </div>

              <div className="card-metrics-row">
                <div className="metric-pill">🤖 GenAI Specialist</div>
                <div className="metric-pill">💳 Stripe & Auth</div>
                <div className="metric-pill">⚡ MVP in Weeks</div>
              </div>

              <div className="card-footer-actions">
                <a href="https://wa.me/916201902313?text=Hi%20Satyam,%20I%20have%20a%20SaaS%20MVP%20project%20I'd%20like%20to%20discuss!" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                  <FaWhatsapp /> Discuss SaaS Project
                </a>
                <a href="mailto:satyamkmishraa@gmail.com?subject=SaaS%20MVP%20Inquiry" className="action-btn primary">
                  <FaEnvelope /> Email Satyam
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* How We Collaborate Process Cards */}
      <div className="collaboration-process-section">
        <h2><FaHandshake /> Simple 3-Step Hiring Process</h2>
        <div className="process-cards-container">
          {processSteps.map((p, idx) => (
            <div key={idx} className="process-card">
              <div className="process-step-badge">{p.step}</div>
              <div className="process-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-written Quick Action Card */}
      <div className="quick-action-card-banner">
        <h3><FaPaperPlane /> Fast-Track Recruiter Outreach</h3>
        <p>Click below to open pre-filled contact templates in 1 tap:</p>
        <div className="quick-msg-buttons">
          {quickMessages.map((msg, index) => (
            <a
              key={index}
              href={`https://wa.me/916201902313?text=${msg.text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-msg-btn"
            >
              {msg.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hiring;


