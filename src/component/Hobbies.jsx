import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGamepad,
  FaHeadphones,
  FaPlane,
  FaFilm,
  FaCamera,
  FaBookOpen,
  FaUtensils,
  FaLaptopCode,
  FaTrophy,
  FaHeart,
  FaTimes,
  FaDice,
  FaFire,
  FaStar,
  FaCheck,
  FaCompass,
  FaLayerGroup
} from "react-icons/fa";
import "../styles/hobbies.css";

const HOBBIES_DATA = [
  {
    id: "cricket",
    name: "Playing Cricket",
    emoji: "🏏",
    icon: FaTrophy,
    category: "Sports & Fitness",
    tagline: "Fun, fitness, team spirit & strategic thinking",
    description:
      "Cricket has been a lifelong passion of mine. Whether it's playing weekend matches, analyzing field placement strategies, or coordinating under clutch situations, it keeps me physically active and sharpens leadership, endurance, and quick decision-making.",
    highlights: ["All-Rounder", "Weekend Matches", "Match Strategy", "Leadership & Teamwork"],
    passionLevel: 95,
    color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    shadowColor: "rgba(245, 158, 11, 0.35)",
    initialLikes: 42
  },
  {
    id: "gaming",
    name: "Gaming & Esports",
    emoji: "🎮",
    icon: FaGamepad,
    category: "Tech & Gaming",
    tagline: "Boosts focus, reflexes & quick problem solving",
    description:
      "Gaming is an interactive workout for reflexes, spatial awareness, and tactical planning. I enjoy immersive open-world RPGs, competitive multiplayer shooters, and strategic puzzles that challenge logic and quick decision-making.",
    highlights: ["Tactical Shooters", "Open-World RPGs", "Reflex Workout", "Strategy & Logic"],
    passionLevel: 90,
    color: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    shadowColor: "rgba(139, 92, 246, 0.35)",
    initialLikes: 58
  },
  {
    id: "music",
    name: "Listening to Music",
    emoji: "🎵",
    icon: FaHeadphones,
    category: "Creative & Media",
    tagline: "Relaxes the mind & fuels deep focus flow state",
    description:
      "Music is the fuel behind my deep coding sessions. From ambient Lo-Fi beats that unlock uninterrupted flow state to energetic synthwave and acoustic tracks that refresh the mind after long hours of development.",
    highlights: ["Lo-Fi Focus Beats", "Synthwave", "Acoustic Vibes", "Coding Playlists"],
    passionLevel: 98,
    color: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    shadowColor: "rgba(6, 182, 212, 0.35)",
    initialLikes: 64
  },
  {
    id: "travel",
    name: "Traveling & Exploring",
    emoji: "✈️",
    icon: FaPlane,
    category: "Lifestyle",
    tagline: "New places, fresh perspectives & cultural vibes",
    description:
      "I love exploring scenic nature trails, discovering unique architecture, experiencing diverse cultures, and trying local street foods. Traveling broadens my horizons, teaches adaptability, and brings fresh creativity to my engineering work.",
    highlights: ["Mountain Trails", "Cultural Stays", "Road Trips", "Wanderlust"],
    passionLevel: 88,
    color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    shadowColor: "rgba(16, 185, 129, 0.35)",
    initialLikes: 39
  },
  {
    id: "movies",
    name: "Watching Movies & Series",
    emoji: "🎬",
    icon: FaFilm,
    category: "Creative & Media",
    tagline: "Inspiring storytelling, cinema & visual arts",
    description:
      "Cinema is a powerful medium of storytelling and imagination. I enjoy mind-bending Sci-Fi thrillers, tech documentaries, high-stakes drama, and cinematic gems that spark new ideas and creative storytelling perspectives.",
    highlights: ["Sci-Fi Thrillers", "Documentaries", "IMAX Cinema", "Storytelling"],
    passionLevel: 85,
    color: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
    shadowColor: "rgba(244, 63, 94, 0.35)",
    initialLikes: 31
  },
  {
    id: "photography",
    name: "Photography",
    emoji: "📸",
    icon: FaCamera,
    category: "Creative & Media",
    tagline: "Capturing moments & composition creatively",
    description:
      "Photography allows me to appreciate visual details, lighting composition, and framing. Finding balance and harmony in real-world shots translates directly into my eye for clean UI layouts, alignment, and aesthetic design.",
    highlights: ["Landscapes", "Color Grading", "Street Shots", "UI Design Inspiration"],
    passionLevel: 86,
    color: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    shadowColor: "rgba(168, 85, 247, 0.35)",
    initialLikes: 47
  },
  {
    id: "techblogs",
    name: "Reading Tech Blogs",
    emoji: "📚",
    icon: FaBookOpen,
    category: "Tech & Gaming",
    tagline: "Staying ahead of trends, AI & modern web tech",
    description:
      "Curiosity keeps me reading technical write-ups, system design blogs, engineering case studies, and GitHub trending projects. Continuous learning ensures I stay aligned with the latest web standards and AI breakthroughs.",
    highlights: ["System Design", "AI & LLMs", "React Ecosystem", "Engineering Case Studies"],
    passionLevel: 96,
    color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    shadowColor: "rgba(59, 130, 246, 0.35)",
    initialLikes: 53
  },
  {
    id: "cooking",
    name: "Culinary & Cooking",
    emoji: "🍳",
    icon: FaUtensils,
    category: "Lifestyle",
    tagline: "Experimenting with flavors & delicious recipes",
    description:
      "Cooking is very similar to writing code—combining raw ingredients with step-by-step logic to produce something enjoyable! I love experimenting with spices, tweaking recipes, and preparing meals for friends & family.",
    highlights: ["Weekend Chef", "Flavor Tweaks", "Indian & Italian", "Recipe Innovation"],
    passionLevel: 82,
    color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    shadowColor: "rgba(249, 115, 22, 0.35)",
    initialLikes: 28
  },
  {
    id: "coding",
    name: "Coding & Open Source",
    emoji: "💻",
    icon: FaLaptopCode,
    category: "Tech & Gaming",
    tagline: "Building cool projects & innovating solutions",
    description:
      "Beyond work, building software is my favorite creative sandbox. Crafting intuitive user interfaces, creating web tools, solving algorithmic challenges, and exploring new tech stacks gives me immense energy and satisfaction.",
    highlights: ["Side Projects", "Open Source", "UI/UX Crafting", "Hackathons"],
    passionLevel: 99,
    color: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    shadowColor: "rgba(99, 102, 241, 0.35)",
    initialLikes: 76
  }
];

const CATEGORIES = ["All", "Tech & Gaming", "Sports & Fitness", "Creative & Media", "Lifestyle"];

function Hobbies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [likes, setLikes] = useState(() => {
    const initial = {};
    HOBBIES_DATA.forEach((h) => {
      initial[h.id] = h.initialLikes;
    });
    return initial;
  });
  const [userLiked, setUserLiked] = useState({});

  const filteredHobbies =
    activeCategory === "All"
      ? HOBBIES_DATA
      : HOBBIES_DATA.filter((hobby) => hobby.category === activeCategory);

  const handleLike = (e, hobbyId) => {
    e.stopPropagation();
    const isLiked = userLiked[hobbyId];
    setUserLiked((prev) => ({ ...prev, [hobbyId]: !isLiked }));
    setLikes((prev) => ({
      ...prev,
      [hobbyId]: isLiked ? prev[hobbyId] - 1 : prev[hobbyId] + 1
    }));
  };

  const handleSurpriseMe = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let count = 0;
    const maxSpins = 12;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * HOBBIES_DATA.length);
      setSelectedHobby(HOBBIES_DATA[randomIndex]);
      count++;
      if (count >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <section id="hobbies" className="hobbies">
      {/* Section Header */}
      <div className="hobbies-header">
        <span className="hobbies-badge">
          <FaCompass /> Beyond the Code
        </span>
        <h2>Hobbies & Interests</h2>
        <p className="hobbies-desc">
          Outside of developing software, these passions keep me creative, curious, energized, and balanced in life.
        </p>

        {/* Stats Highlights Banner */}
        <div className="hobbies-stats-banner">
          <div className="stat-item">
            <span className="stat-number">9+</span>
            <span className="stat-label">Active Passions</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Diverse Domains</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Curiosity & Energy</span>
          </div>
        </div>
      </div>

      {/* Controls: Categories & Random Spinner */}
      <div className="hobbies-controls">
        <div className="category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="active-tab-indicator"
                  layoutId="activeHobbyTab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className={`surprise-btn ${isSpinning ? "spinning" : ""}`}
          onClick={handleSurpriseMe}
          title="Pick a random hobby"
        >
          <FaDice className="dice-icon" />
          <span>{isSpinning ? "Shuffling..." : "Surprise Me!"}</span>
        </button>
      </div>

      {/* Hobbies Grid */}
      <motion.div className="hobbies-list" layout>
        <AnimatePresence mode="popLayout">
          {filteredHobbies.map((hobby) => {
            const IconComponent = hobby.icon;
            const isLiked = userLiked[hobby.id];
            const currentLikes = likes[hobby.id];

            return (
              <motion.div
                key={hobby.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="hobby-card"
                onClick={() => setSelectedHobby(hobby)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  "--card-accent": hobby.color,
                  "--card-shadow-color": hobby.shadowColor
                }}
              >
                <div className="hobby-card-top">
                  <span className="hobby-category-pill">{hobby.category}</span>
                  <button
                    className={`cheer-btn ${isLiked ? "liked" : ""}`}
                    onClick={(e) => handleLike(e, hobby.id)}
                    title={isLiked ? "Unlike" : "Give a Cheer"}
                  >
                    <FaHeart className="heart-icon" />
                    <span>{currentLikes}</span>
                  </button>
                </div>

                <div className="hobby-icon-wrapper" style={{ background: hobby.color }}>
                  <span className="hobby-emoji">{hobby.emoji}</span>
                  <IconComponent className="hobby-react-icon" />
                </div>

                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-tagline">{hobby.tagline}</p>

                {/* Progress bar preview */}
                <div className="passion-meter-container">
                  <div className="passion-meter-header">
                    <span>Passion Level</span>
                    <span>{hobby.passionLevel}%</span>
                  </div>
                  <div className="passion-bar-bg">
                    <motion.div
                      className="passion-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${hobby.passionLevel}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{ background: hobby.color }}
                    />
                  </div>
                </div>

                <div className="card-click-hint">
                  <span>Explore Details</span>
                  <FaStar className="sparkle-icon" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Spotlight Detail Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <motion.div
            className="hobby-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHobby(null)}
          >
            <motion.div
              className="hobby-modal-content"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                "--modal-accent": selectedHobby.color,
                "--modal-shadow": selectedHobby.shadowColor
              }}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedHobby(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-header-banner" style={{ background: selectedHobby.color }}>
                <div className="modal-icon-badge">
                  <span className="modal-emoji">{selectedHobby.emoji}</span>
                </div>
                <div className="modal-title-group">
                  <span className="modal-category-badge">{selectedHobby.category}</span>
                  <h2>{selectedHobby.name}</h2>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-tagline">
                  <FaFire className="fire-icon" /> {selectedHobby.tagline}
                </p>

                <div className="modal-description-box">
                  <h4>Why I Love It & How It Inspires Me</h4>
                  <p>{selectedHobby.description}</p>
                </div>

                {/* Passion Meter Detailed */}
                <div className="modal-passion-section">
                  <div className="passion-label-row">
                    <span>
                      <FaStar /> Energy & Focus Meter
                    </span>
                    <strong>{selectedHobby.passionLevel}% Passion</strong>
                  </div>
                  <div className="modal-passion-bar-bg">
                    <motion.div
                      className="modal-passion-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedHobby.passionLevel}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{ background: selectedHobby.color }}
                    />
                  </div>
                </div>

                {/* Highlights Tags */}
                <div className="modal-highlights">
                  <h4>Key Aspects & Highlights</h4>
                  <div className="highlights-pills">
                    {selectedHobby.highlights.map((tag, idx) => (
                      <span key={idx} className="highlight-pill">
                        <FaCheck className="check-icon" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cheer Action Footer */}
                <div className="modal-footer-actions">
                  <button
                    className={`modal-cheer-btn ${userLiked[selectedHobby.id] ? "liked" : ""}`}
                    onClick={(e) => handleLike(e, selectedHobby.id)}
                  >
                    <FaHeart className="heart-icon" />
                    <span>
                      {userLiked[selectedHobby.id] ? "You Cheered This!" : "Send a Cheer!"} (
                      {likes[selectedHobby.id]})
                    </span>
                  </button>
                  <button className="modal-close-action" onClick={() => setSelectedHobby(null)}>
                    Done Exploring
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hobbies;
