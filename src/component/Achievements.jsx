import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaProjectDiagram,
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaRocket,
  FaStar,
  FaCheck,
  FaAward
} from "react-icons/fa";
import "../styles/achievements.css";

const ACHIEVEMENTS_DATA = [
  {
    id: "rank-1st-sem",
    title: "University Rank #1",
    subtitle: "1st, 2nd & 3rd Semesters",
    category: "Academics & Ranks",
    metric: "Rank #1",
    icon: FaTrophy,
    description:
      "Secured 1st Rank across University examinations for three consecutive semesters with outstanding academic merit.",
    tags: ["University Topper", "Academic Merit", "Top Consistent"],
    color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    shadow: "rgba(245, 158, 11, 0.35)"
  },
  {
    id: "rank-3rd-sem",
    title: "Top Academic Merit",
    subtitle: "4th & 5th Semesters",
    category: "Academics & Ranks",
    metric: "Rank #3",
    icon: FaMedal,
    description:
      "Maintained top-tier academic performance, securing 3rd Rank in 4th and 5th Semesters with high GPA consistency.",
    tags: ["High GPA", "Academic Excellence", "Core Computer Science"],
    color: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    shadow: "rgba(236, 72, 153, 0.35)"
  },
  {
    id: "projects-count",
    title: "10+ Real-World Projects",
    subtitle: "Full-Stack Web Applications",
    category: "Projects & Tech",
    metric: "10+ Built",
    icon: FaProjectDiagram,
    description:
      "Designed, engineered, and deployed 10+ real-world applications showcasing responsive UI/UX, robust APIs, and database design.",
    tags: ["MERN Stack", "Full Stack", "Clean Architecture", "UI/UX"],
    color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    shadow: "rgba(59, 130, 246, 0.35)"
  },
  {
    id: "mern-proficiency",
    title: "MERN Stack Mastery",
    subtitle: "Full-Stack Web Engineering",
    category: "Projects & Tech",
    metric: "Full Stack",
    icon: FaCode,
    description:
      "Demonstrated strong proficiency in building reactive frontends in React 19, RESTful Node/Express backends, and MongoDB optimizations.",
    tags: ["React 19", "Node.js", "Express.js", "MongoDB"],
    color: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    shadow: "rgba(99, 102, 241, 0.35)"
  },
  {
    id: "workshop-mentorship",
    title: "Tech Workshop Instructor",
    subtitle: "Web Dev & DSA Mentorship",
    category: "Leadership & Community",
    metric: "400+ Students",
    icon: FaLaptopCode,
    description:
      "Conducted hands-on coding bootcamps and interactive workshops, mentoring 400+ students in Web Development and DSA fundamentals.",
    tags: ["Live Bootcamps", "DSA Mentorship", "Web Dev", "Guidance"],
    color: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    shadow: "rgba(16, 185, 129, 0.35)"
  },
  {
    id: "tech-events",
    title: "College Tech Fest Leader",
    subtitle: "Clubs & Training Placement Cell",
    category: "Leadership & Community",
    metric: "10+ Events",
    icon: FaUsers,
    description:
      "Organized and hosted multiple technical hackathons, coding contests, and placement preparation drives for college students.",
    tags: ["Hackathon Host", "Event Management", "T&P Cell", "Leadership"],
    color: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    shadow: "rgba(139, 92, 246, 0.35)"
  },
  {
    id: "certifications-milestone",
    title: "Professional Certifications",
    subtitle: "DSA, React & Web Stack",
    category: "Academics & Ranks",
    metric: "Certified",
    icon: FaCertificate,
    description:
      "Earned industry-recognized certificates in Data Structures & Algorithms, Advanced React Development, and Full-Stack Engineering.",
    tags: ["DSA Certified", "React Certified", "Continuous Learning"],
    color: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
    shadow: "rgba(6, 182, 212, 0.35)"
  },
  {
    id: "open-source-milestone",
    title: "Open-Source & GitHub Growth",
    subtitle: "Global Developer Ecosystem",
    category: "Projects & Tech",
    metric: "Open Source",
    icon: FaRocket,
    description:
      "Actively contributing to open-source GitHub repositories, collaborating with developers globally, and building public tech tools.",
    tags: ["GitHub", "Open Source", "Global Collaboration", "Side Projects"],
    color: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
    shadow: "rgba(244, 63, 94, 0.35)"
  }
];

const CATEGORIES = ["All", "Academics & Ranks", "Projects & Tech", "Leadership & Community"];

function Achievements() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? ACHIEVEMENTS_DATA
      : ACHIEVEMENTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="achievements" className="achievements">
      {/* Section Header */}
      <div className="achievements-header">
        <span className="achievements-badge">
          <FaStar className="star-badge-icon" /> Track Record & Impact
        </span>
        <h2>Achievements & Milestones</h2>
        <p className="subtitle">
          A glimpse into my journey of academic excellence, full-stack project milestones, leadership, and community impact 🚀
        </p>

        {/* Stats Summary Banner */}
        <div className="achievements-stats-banner">
          <div className="ach-stat-item">
            <span className="ach-stat-num">Rank #1</span>
            <span className="ach-stat-lbl">University Semesters</span>
          </div>
          <div className="ach-stat-divider" />
          <div className="ach-stat-item">
            <span className="ach-stat-num">10+</span>
            <span className="ach-stat-lbl">Full-Stack Projects</span>
          </div>
          <div className="ach-stat-divider" />
          <div className="ach-stat-item">
            <span className="ach-stat-num">400+</span>
            <span className="ach-stat-lbl">Students Mentored</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="achievements-tabs-container">
        <div className="achievements-category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ach-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="active-ach-tab-indicator"
                  layoutId="activeAchieveTab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <motion.div className="achievements-list" layout>
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
                className="achievement-card"
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  "--ach-theme-color": item.color,
                  "--ach-shadow-color": item.shadow
                }}
              >
                {/* Top Row: Icon Badge & Metric Pill */}
                <div className="ach-card-top">
                  <div className="ach-icon-badge" style={{ background: item.color }}>
                    <IconComponent className="ach-react-icon" />
                  </div>
                  <span className="ach-metric-pill" style={{ background: item.color }}>
                    <FaAward className="ach-award-icon" /> {item.metric}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="ach-card-title">{item.title}</h3>
                <span className="ach-card-subtitle">{item.subtitle}</span>

                {/* Description */}
                <p className="ach-card-description">{item.description}</p>

                {/* Tags Row */}
                <div className="ach-tags-row">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="ach-tag">
                      <FaCheck className="ach-check-icon" /> {tag}
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

export default Achievements;
