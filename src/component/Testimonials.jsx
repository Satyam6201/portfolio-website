import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaThLarge,
  FaSlidersH,
  FaComments,
  FaCheckCircle,
  FaHeart
} from "react-icons/fa";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Web Developer Intern",
    company: "College Tech Lab",
    feedback:
      "Satyam is a fantastic collaborator. His React 19 architecture, attention to UI details, and problem-solving skills brought our team's project to life in record time!",
    rating: 5,
    tag: "React & Frontend",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    color: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    shadow: "rgba(99, 102, 241, 0.4)"
  },
  {
    id: "aman-verma",
    name: "Aman Verma",
    role: "DSA & Algos Peer",
    company: "Coding Club",
    feedback:
      "Satyam helped me understand complex Data Structures & Algorithms concepts with remarkable clarity. Highly recommended as a mentor and coding partner!",
    rating: 5,
    tag: "DSA & Problem Solving",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    shadow: "rgba(59, 130, 246, 0.4)"
  },
  {
    id: "sneha-joshi",
    name: "Sneha Joshi",
    role: "College Club Lead",
    company: "Tech Society",
    feedback:
      "An excellent speaker, workshop lead, and event organizer. His live guidance inspired 400+ students during our campus technical coding bootcamps.",
    rating: 5,
    tag: "Leadership & Bootcamps",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    shadow: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: "rahul-singh",
    name: "Rahul Singh",
    role: "Project Lead",
    company: "Campus Incubator",
    feedback:
      "Satyam’s commitment to deadlines, clean code standards, and architectural attention to detail is unmatched. A true professional in every sense.",
    rating: 5,
    tag: "Full-Stack Dev",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    shadow: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: "neha-gupta",
    name: "Neha Gupta",
    role: "UI/UX Designer",
    company: "Design Guild",
    feedback:
      "Collaborating with Satyam made the design implementation seamless. His sharp eye for micro-interactions and layout math elevated our app’s overall look & feel.",
    rating: 5,
    tag: "UI/UX Craftsmanship",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    color: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    shadow: "rgba(236, 72, 153, 0.4)"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' | 'grid'
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  // Auto-play for 3D Carousel Stage
  useEffect(() => {
    if (viewMode !== "carousel" || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [viewMode, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Touch Swipe Handlers for mobile 3D stage
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Header Section */}
      <div className="testimonials-header">
        <span className="testimonials-badge">
          <FaComments className="comments-icon" /> Peer Endorsements
        </span>
        <h2 className="testimonials-title">🌟 What People Say</h2>
        <p className="testimonials-subtitle">
          Real feedback and recommendations from peers, project leads, UI designers, and workshop attendees.
        </p>

        {/* Trust Metrics Banner */}
        <div className="testimonials-stats-banner">
          <div className="t-stat-item">
            <span className="t-stat-num">5.0 ★</span>
            <span className="t-stat-lbl">Average Rating</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat-item">
            <span className="t-stat-num">100%</span>
            <span className="t-stat-lbl">Recommendation Rate</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat-item">
            <span className="t-stat-num">5+</span>
            <span className="t-stat-lbl">Peer Endorsements</span>
          </div>
        </div>
      </div>

      {/* Controls: View Switcher & Nav Buttons */}
      <div className="testimonials-controls">
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "carousel" ? "active" : ""}`}
            onClick={() => setViewMode("carousel")}
          >
            <FaSlidersH /> 3D Stage Carousel
          </button>
          <button
            className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <FaThLarge /> 3D Grid View
          </button>
        </div>

        {viewMode === "carousel" && (
          <div className="carousel-nav-arrows">
            <button className="nav-arrow" onClick={handlePrev} title="Previous Testimonial">
              <FaChevronLeft />
            </button>
            <button className="nav-arrow" onClick={handleNext} title="Next Testimonial">
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Mode 1: 3D Stage Carousel View */}
      {viewMode === "carousel" && (
        <div
          className="td-carousel-stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="td-3d-track">
            {testimonialsData.map((item, index) => {
              // Calculate offset relative to active index
              const count = testimonialsData.length;
              let offset = (index - currentIndex + count) % count;
              if (offset > count / 2) offset -= count;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (currentIndex === 0 && index === count - 1);
              const isNext = offset === 1 || (currentIndex === count - 1 && index === 0);

              let positionClass = "hidden";
              if (isActive) positionClass = "active-3d";
              else if (isPrev) positionClass = "prev-3d";
              else if (isNext) positionClass = "next-3d";

              return (
                <div
                  key={item.id}
                  className={`td-3d-card ${positionClass}`}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    "--t-accent": item.color,
                    "--t-shadow": item.shadow
                  }}
                >
                  <div className="td-card-inner">
                    <div className="td-card-top">
                      <span className="td-tag-pill">
                        <FaCheckCircle className="check-icon" /> {item.tag}
                      </span>
                      <div className="stars">
                        {Array(item.rating)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} className="star" />
                          ))}
                      </div>
                    </div>

                    <div className="td-quote-wrapper">
                      <FaQuoteLeft className="td-quote-icon" style={{ color: item.shadow }} />
                      <p className="td-feedback">"{item.feedback}"</p>
                    </div>

                    <div className="td-user-row">
                      <div className="td-avatar-wrapper" style={{ background: item.color }}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="td-user-meta">
                        <h4>{item.name}</h4>
                        <span>
                          {item.role} • <strong>{item.company}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="td-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mode 2: 3D Cards Grid View */}
      {viewMode === "grid" && (
        <motion.div className="testimonials-grid" layout>
          <AnimatePresence mode="popLayout">
            {testimonialsData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
                className="td-grid-card"
                whileHover={{ y: -8, scale: 1.03 }}
                style={{
                  "--t-accent": item.color,
                  "--t-shadow": item.shadow
                }}
              >
                <div className="td-card-inner">
                  <div className="td-card-top">
                    <span className="td-tag-pill">
                      <FaCheckCircle className="check-icon" /> {item.tag}
                    </span>
                    <div className="stars">
                      {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} className="star" />
                        ))}
                    </div>
                  </div>

                  <div className="td-quote-wrapper">
                    <FaQuoteLeft className="td-quote-icon" />
                    <p className="td-feedback">"{item.feedback}"</p>
                  </div>

                  <div className="td-user-row">
                    <div className="td-avatar-wrapper" style={{ background: item.color }}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="td-user-meta">
                      <h4>{item.name}</h4>
                      <span>
                        {item.role} • <strong>{item.company}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default Testimonials;
