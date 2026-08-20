import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaCode,
  FaLaptopCode,
  FaHandsHelping,
  FaCalendarAlt,
  FaLightbulb,
  FaGlobe,
  FaAward,
  FaCheck,
  FaHeart
} from "react-icons/fa";
import "../styles/volunteer.css";

const VOLUNTEER_DATA = [
  {
    id: "workshop-lead",
    title: "Workshop Lead & Instructor",
    organization: "College Tech Society",
    category: "Mentorship & Leadership",
    date: "Apr '23 - Jun '23",
    icon: FaChalkboardTeacher,
    impact: "400+ Students Mentored",
    description:
      "Conducted hands-on technical workshops covering Python, C++, and Web Development. Guided students through live coding exercises, real-world project building, and interactive Q&A sessions.",
    tags: ["Python", "C++", "Web Development", "Live Mentorship"],
    color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    shadow: "rgba(59, 130, 246, 0.35)"
  },
  {
    id: "event-organizer",
    title: "Event Organizer & Co-Host",
    organization: "College Tech Fest",
    category: "Events & Placements",
    date: "Feb '24",
    icon: FaLaptopCode,
    impact: "10+ Tech Events & Hackathons",
    description:
      "Planned, organized, and coordinated college hackathons and technical competitions. Managed event logistics, problem statement curation, and fostered peer collaboration.",
    tags: ["Hackathons", "Event Management", "Problem Curation", "Team Leadership"],
    color: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    shadow: "rgba(139, 92, 246, 0.35)"
  },
  {
    id: "tp-dept",
    title: "T&P Dept. Executive Member",
    organization: "Training & Placement Cell",
    category: "Events & Placements",
    date: "Aug '23 - Present",
    icon: FaUsers,
    impact: "250+ Placements Coordinated",
    description:
      "Assisted visiting recruiters during campus recruitment drives, coordinated drive logistics, and mentored peers on mock interviews, resume formatting, and placement readiness.",
    tags: ["Recruitment Drive", "Placement Coordination", "Mock Interviews", "Peer Guidance"],
    color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    shadow: "rgba(16, 185, 129, 0.35)"
  },
  {
    id: "open-source",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    category: "Open Source & Tech",
    date: "Ongoing",
    icon: FaCode,
    impact: "15+ Repos Contributed",
    description:
      "Actively contributing to open-source software, resolving public GitHub issues, submitting clean pull requests, reviewing community code, and enhancing project documentation.",
    tags: ["GitHub", "Git", "Bug Fixes", "Pull Requests"],
    color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    shadow: "rgba(245, 158, 11, 0.35)"
  },
  {
    id: "global-community",
    title: "Global Coding Mentor",
    organization: "Developer Forums & Communities",
    category: "Open Source & Tech",
    date: "Ongoing",
    icon: FaGlobe,
    impact: "500+ Tech Queries Resolved",
    description:
      "Participating in global developer platforms and coding forums, answering technical questions, sharing debugging insights, and helping beginners solve algorithm challenges.",
    tags: ["Community Q&A", "Code Debugging", "Global Outreach", "Problem Solving"],
    color: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    shadow: "rgba(6, 182, 212, 0.35)"
  },
  {
    id: "peer-support",
    title: "Peer Career & Portfolio Guide",
    organization: "Student Community",
    category: "Mentorship & Leadership",
    date: "Ongoing",
    icon: FaHandsHelping,
    impact: "50+ Resumes & Portfolios Reviewed",
    description:
      "Providing 1-on-1 personalized guidance to junior students on resume crafting, web portfolio optimization, project selection, and career roadmap planning in software engineering.",
    tags: ["Resume Reviews", "Portfolio Audits", "1-on-1 Mentoring", "Career Advice"],
    color: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    shadow: "rgba(236, 72, 153, 0.35)"
  },
  {
    id: "idea-incubator",
    title: "Innovation & MVP Incubator",
    organization: "College Entrepreneurship Cell",
    category: "Mentorship & Leadership",
    date: "Ongoing",
    icon: FaLightbulb,
    impact: "15+ Project MVPs Mentored",
    description:
      "Encouraging innovation by guiding student teams during ideation hackathons, helping them structure system architectures, build working MVPs, and pitch tech solutions.",
    tags: ["Ideation", "MVP Architecture", "Hackathon Mentoring", "Innovation"],
    color: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    shadow: "rgba(168, 85, 247, 0.35)"
  }
];

const CATEGORIES = ["All", "Mentorship & Leadership", "Events & Placements", "Open Source & Tech"];

function Volunteer() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? VOLUNTEER_DATA
      : VOLUNTEER_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="volunteer" className="volunteer">
      {/* Section Header */}
      <div className="volunteer-header">
        <span className="volunteer-badge">
          <FaHeart className="heart-badge-icon" /> Giving Back & Community
        </span>
        <h2>Volunteer & Community Work</h2>
        <p className="volunteer-desc">
          Empowering learners, fostering tech innovation, organizing high-impact campus events, and contributing to the open-source ecosystem.
        </p>

        {/* Stats Summary Banner */}
        <div className="volunteer-stats-banner">
          <div className="volunteer-stat-item">
            <span className="v-stat-num">400+</span>
            <span className="v-stat-lbl">Students Mentored</span>
          </div>
          <div className="v-stat-divider" />
          <div className="volunteer-stat-item">
            <span className="v-stat-num">7</span>
            <span className="v-stat-lbl">Key Initiatives</span>
          </div>
          <div className="v-stat-divider" />
          <div className="volunteer-stat-item">
            <span className="v-stat-num">100%</span>
            <span className="v-stat-lbl">Community Driven</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="volunteer-tabs-container">
        <div className="volunteer-category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`v-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="active-v-tab-indicator"
                  layoutId="activeVolunteerTab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Volunteer Grid */}
      <motion.div className="volunteer-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="volunteer-card"
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  "--card-theme-color": item.color,
                  "--card-shadow-color": item.shadow
                }}
              >
                {/* Card Header Row */}
                <div className="v-card-top">
                  <div className="v-icon-badge" style={{ background: item.color }}>
                    <IconComponent className="v-react-icon" />
                  </div>
                  <span className="v-category-pill">{item.category}</span>
                </div>

                {/* Card Title & Org */}
                <h3 className="v-card-title">{item.title}</h3>
                <span className="v-card-subtitle">{item.organization}</span>

                {/* Date & Impact Pill */}
                <div className="v-meta-row">
                  <span className="v-date-tag">
                    <FaCalendarAlt className="v-meta-icon" /> {item.date}
                  </span>
                  <span className="v-impact-badge" style={{ background: item.color }}>
                    <FaAward className="v-award-icon" /> {item.impact}
                  </span>
                </div>

                {/* Description */}
                <p className="v-card-description">{item.description}</p>

                {/* Highlight Tags */}
                <div className="v-tags-row">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="v-tag">
                      <FaCheck className="v-check-icon" /> {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Volunteer;
