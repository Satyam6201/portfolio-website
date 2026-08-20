import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaArrowUp,
  FaTwitter, FaInstagram, FaFacebook, FaPhoneAlt,
  FaMapMarkerAlt, FaWhatsapp, FaDownload, FaHeart,
  FaCode, FaRocket, FaStar,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/footer.css";

/* ── Typewriter hook ── */
function useTypewriter(phrases, speed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIdx];
    if (!deleting && charIdx < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return displayed;
}

/* ── Quick links ── */
const quickLinks = [
  { label: "Home",          hash: "#home" },
  { label: "About",         hash: "#about" },
  { label: "Skills",        hash: "#techstack" },
  { label: "Projects",      hash: "#projects" },
  { label: "Experience",    hash: "#experience" },
  { label: "Education",     hash: "#education" },
  { label: "Certifications",hash: "#certifications" },
  { label: "Blog",          hash: "#blog" },
  { label: "Contact",       hash: "#contact" },
];

/* ── Social links ── */
const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/satyam-kumar-mishra-dev", color: "#0e76a8" },
  { icon: <FaGithub />,   label: "GitHub",   url: "https://github.com/Satyam6201",                       color: "#6e7681" },
  { icon: <SiLeetcode />, label: "LeetCode", url: "https://leetcode.com/u/SatyamMIshra62",               color: "#f89f1b" },
  { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/916201902313",                           color: "#25d366" },
  { icon: <FaTwitter />,  label: "Twitter",  url: "https://x.com/satyamkmishraa",                        color: "#1d9bf0" },
  { icon: <FaInstagram />,label: "Instagram",url: "https://www.instagram.com/satyammishra_467",           color: "#e1306c" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/profile.php?id=100024550755973", color: "#1877f2" },
  { icon: <FaEnvelope />, label: "Email",    url: "mailto:satyamkmishraa@gmail.com",                      color: "#ea4335" },
];

/* ── Stats ── */
const stats = [
  { icon: <FaCode />,   value: "45+",    label: "Projects" },
  { icon: <FaStar />,   value: "1000+",  label: "DSA Solved" },
  { icon: <FaRocket />, value: "2",      label: "Internships" },
  { icon: <FaHeart />,  value: "400+",   label: "Mentored" },
];

const typewriterPhrases = [
  "satyamkmishraa@gmail.com",
  "+91 6201902313",
  "Open for Remote & On-Site",
  "0 Days Notice Period",
  "Let's Build Something Great!",
];

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const location = useLocation();
  const typed = useTypewriter(typewriterPhrases, 55, 1800);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      {/* ── Wave SVG Divider ── */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-card)" />
        </svg>
      </div>

      {/* ── Typewriter Contact Strip ── */}
      <div className="footer-typewriter-bar">
        <span className="typewriter-label">📬 Reach me at →</span>
        <span className="typewriter-text">
          {typed}
          <span className="cursor-blink">|</span>
        </span>
        <a href="mailto:satyamkmishraa@gmail.com" className="footer-contact-cta">
          Contact Now
        </a>
      </div>

      {/* ── Stats Strip ── */}
      <div className="footer-stats-bar">
        {stats.map((s, i) => (
          <motion.div key={i} className="footer-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
            <span className="fstat-icon">{s.icon}</span>
            <span className="fstat-value">{s.value}</span>
            <span className="fstat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="footer-grid">

        {/* Brand Column */}
        <motion.div className="footer-brand" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div className="brand-logo">
            <img src="/assets/image.jpg" alt="Satyam" className="brand-photo" />
            <div>
              <h2 className="brand-name">Satyam Kumar Mishra</h2>
              <span className="brand-role">Full-Stack Dev · AI Builder · RAG Systems</span>
            </div>
          </div>
          <p className="brand-bio">
            Building scalable SaaS platforms, AI-powered applications, and RAG pipelines with MERN & Next.js.
          </p>
          <a href="/assets/Resume.pdf" download className="footer-resume-btn">
            <FaDownload /> Download Resume
          </a>
          <div className="brand-availability">
            <span className="avail-dot" />
            Available for Hire · 0 Days Notice · Delhi, India
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
          <h3 className="footer-section-title">
            <span className="section-title-bar" />
            Quick Links
          </h3>
          <ul className="footer-links-list">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.hash === "#home" ? "/" : link.hash.replace("#", "/")} onClick={() => handleNavClick(link.hash)} className="footer-link">
                  <span className="link-arrow">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          <h3 className="footer-section-title">
            <span className="section-title-bar" />
            Contact Info
          </h3>
          <div className="footer-contact-items">
            <a href="mailto:satyamkmishraa@gmail.com" className="footer-contact-item">
              <span className="fci-icon email-c"><FaEnvelope /></span>
              <div>
                <span className="fci-label">Email</span>
                <span className="fci-value">satyamkmishraa@gmail.com</span>
              </div>
            </a>
            <a href="tel:+916201902313" className="footer-contact-item">
              <span className="fci-icon phone-c"><FaPhoneAlt /></span>
              <div>
                <span className="fci-label">Phone</span>
                <span className="fci-value">+91 6201902313</span>
              </div>
            </a>
            <a href="https://wa.me/916201902313" target="_blank" rel="noreferrer" className="footer-contact-item">
              <span className="fci-icon wa-c"><FaWhatsapp /></span>
              <div>
                <span className="fci-label">WhatsApp</span>
                <span className="fci-value">Chat Directly</span>
              </div>
            </a>
            <a href="https://www.google.com/maps?q=Delhi,+India" target="_blank" rel="noreferrer" className="footer-contact-item">
              <span className="fci-icon loc-c"><FaMapMarkerAlt /></span>
              <div>
                <span className="fci-label">Location</span>
                <span className="fci-value">Delhi, India · Open to Remote</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
          <h3 className="footer-section-title">
            <span className="section-title-bar" />
            Connect & Follow
          </h3>
          <div className="footer-social-grid">
            {socials.map((s, i) => (
              <motion.a key={i} href={s.url} target={s.url.startsWith("mailto") ? "_self" : "_blank"} rel="noreferrer" className="footer-social-btn" style={{ "--sc": s.color }} onMouseEnter={() => setHoveredSocial(i)} onMouseLeave={() => setHoveredSocial(null)} whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 350, damping: 16 }} title={s.label}>
                <span className="fsb-icon">{s.icon}</span>
                <span className="fsb-label">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>© {new Date().getFullYear()} Satyam Kumar Mishra</span>
          <span className="dot-sep">·</span>
          <span>All rights reserved.</span>
        </div>
        <div className="footer-bottom-center">
          Crafted with <FaHeart className="heart-beat" /> using React & Framer Motion
        </div>
        <div className="footer-bottom-right">
          <span className="built-with">Built with passion for great products</span>
        </div>
      </div>

      {/* ── Back to Top ── */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button className="top-btn" onClick={scrollToTop} aria-label="Back to top" initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <FaArrowUp />
            <span className="top-btn-ring" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
