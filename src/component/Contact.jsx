import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/contact.css";
import {
  FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin,
  FaDownload, FaWhatsapp, FaMapMarkerAlt, FaCopy,
  FaPaperPlane, FaCheck, FaRocket, FaHeart,
  FaTwitter, FaCode, FaClock, FaBolt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* ── Availability status ── */
const STATUS = {
  icon: <FaBolt />,
  label: "Available for Hire",
  color: "#22c55e",
};

/* ── Social cards data ── */
const socials = [
  { icon: <FaGithub />, label: "GitHub", sub: "45+ Projects", url: "https://github.com/Satyam6201", color: "#333" },
  { icon: <FaLinkedin />, label: "LinkedIn", sub: "Let's Connect", url: "https://www.linkedin.com/in/satyam-kumar-mishra-dev", color: "#0e76a8" },
  { icon: <SiLeetcode />, label: "LeetCode", sub: "1000+ Solved", url: "https://leetcode.com/u/SatyamMIshra62", color: "#f89f1b" },
  { icon: <FaWhatsapp />, label: "WhatsApp", sub: "Direct Chat", url: "https://wa.me/916201902313?text=Hi%20Satyam!%20I%20visited%20your%20portfolio.", color: "#25d366" },
  { icon: <FaMapMarkerAlt />, label: "Delhi, India", sub: "Open to Remote", url: "https://www.google.com/maps/place/Delhi", color: "#ef4444" },
];

/* ── Quick facts strip ── */
const quickFacts = [
  { icon: <FaClock />, text: "Replies within 24h" },
  { icon: <FaBolt />, text: "0 Days Notice Period" },
  { icon: <FaCode />, text: "Open to Freelance" },
  { icon: <FaHeart />, text: "Loves Collaboration" },
];

/* ── Floating particle component ── */
function Particles() {
  return (
    <div className="contact-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="particle" style={{ "--delay": `${(i * 0.4) % 6}s`, "--x": `${(i * 17 + 5) % 100}%`, "--size": `${4 + (i % 5) * 3}px` }} />
      ))}
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ msg: "", type: "success" });
  const [copied, setCopied]   = useState("");
  const [sending, setSending] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [activeField, setActiveField] = useState("");
  const formRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = "Name is required";
    if (!form.email)          errs.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email format";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 8) errs.message = "At least 8 characters needed";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (name === "message") setCharCount(value.length);
  };

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: "success" }), 3500);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) { showToast("Please fix the errors below.", "error"); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate send delay
    const mailtoLink = `mailto:satyamkmishraa@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry from " + form.name)}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(form.name)}%20(${encodeURIComponent(form.email)})`;
    window.location.href = mailtoLink;
    showToast("📬 Mail client opening...", "success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setCharCount(0);
    setSending(false);
  };

  const handleSendWhatsApp = () => {
    if (!validate()) { showToast("Please fix the errors below.", "error"); return; }
    const wa = `https://wa.me/916201902313?text=Hi%20Satyam!%20My%20name%20is%20${encodeURIComponent(form.name)}%20(${encodeURIComponent(form.email)}).%20Message:%20${encodeURIComponent(form.message)}`;
    window.open(wa, "_blank");
    showToast("💬 Opening WhatsApp...", "success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setCharCount(0);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    showToast(`✅ ${label} copied!`, "success");
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="contact" className="contact">
      <Particles />

      {/* Header */}
      <motion.div className="contact-header" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="contact-status-badge">
          <span className="status-dot" />
          {STATUS.icon} {STATUS.label}
        </div>
        <h2 className="contact-title">Let's <span className="highlight-text">Connect</span> 🚀</h2>
        <p className="contact-subtext">
          Whether you have a project, job opportunity, freelance query, or just want to say hi — I'd love to hear from you!
        </p>
      </motion.div>

      {/* Quick Facts Strip */}
      <motion.div className="quick-facts-strip" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        {quickFacts.map((f, i) => (
          <div key={i} className="quick-fact">
            <span className="qf-icon">{f.icon}</span>
            {f.text}
          </div>
        ))}
      </motion.div>

      <div className="contact-grid">

        {/* ── LEFT PANEL ── */}
        <motion.div className="contact-left" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>

          {/* Direct Contact Cards */}
          <div className="direct-contact-section">
            <h3 className="section-mini-title">📩 Direct Contact</h3>

            <div className="contact-card" onClick={() => copyToClipboard("satyamkmishraa@gmail.com", "Email")}>
              <div className="cc-icon email-icon"><FaEnvelope /></div>
              <div className="cc-body">
                <span className="cc-label">Email</span>
                <span className="cc-value">satyamkmishraa@gmail.com</span>
              </div>
              <button className="cc-copy" title="Copy Email">
                {copied === "Email" ? <FaCheck /> : <FaCopy />}
              </button>
            </div>

            <div className="contact-card" onClick={() => copyToClipboard("+916201902313", "Phone Number")}>
              <div className="cc-icon phone-icon"><FaPhoneAlt /></div>
              <div className="cc-body">
                <span className="cc-label">Phone / WhatsApp</span>
                <span className="cc-value">+91 6201902313</span>
              </div>
              <button className="cc-copy" title="Copy Phone">
                {copied === "Phone Number" ? <FaCheck /> : <FaCopy />}
              </button>
            </div>

            <a href="https://wa.me/916201902313?text=Hi%20Satyam!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="whatsapp-card">
              <FaWhatsapp className="wa-icon" />
              <div>
                <span className="wa-title">Chat on WhatsApp</span>
                <span className="wa-sub">Tap to message directly</span>
              </div>
              <span className="wa-arrow">→</span>
            </a>
          </div>

          {/* Social Links Grid */}
          <div className="socials-section">
            <h3 className="section-mini-title">🌐 Find Me Online</h3>
            <div className="social-grid">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card" whileHover={{ y: -6, scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} style={{ "--social-color": s.color }}>
                  <span className="sc-icon">{s.icon}</span>
                  <span className="sc-label">{s.label}</span>
                  <span className="sc-sub">{s.sub}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <motion.a href="/assets/Resume.pdf" download className="resume-download-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <FaDownload className="dl-icon" />
            <div>
              <span className="dl-title">Download Resume</span>
              <span className="dl-sub">PDF · Updated 2026</span>
            </div>
            <span className="dl-sparkle">✨</span>
          </motion.a>
        </motion.div>

        {/* ── RIGHT PANEL — FORM ── */}
        <motion.div className="contact-right" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <div className="form-card">
            <div className="form-card-header">
              <FaRocket className="form-header-icon" />
              <div>
                <h3>Send a Message</h3>
                <span>I'll respond within 24 hours</span>
              </div>
            </div>

            <form ref={formRef} className="message-form" onSubmit={handleSendEmail} noValidate>

              <div className="form-row">
                <div className={`form-group ${activeField === "name" ? "focused" : ""} ${errors.name ? "has-error" : form.name ? "has-value" : ""}`}>
                  <label className="floating-label">Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} onFocus={() => setActiveField("name")} onBlur={() => setActiveField("")} placeholder=" " autoComplete="name" />
                  <span className="input-border-anim" />
                  {errors.name && <small className="error"><FaCheck style={{ opacity: 0 }} /> {errors.name}</small>}
                </div>

                <div className={`form-group ${activeField === "email" ? "focused" : ""} ${errors.email ? "has-error" : form.email ? "has-value" : ""}`}>
                  <label className="floating-label">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setActiveField("email")} onBlur={() => setActiveField("")} placeholder=" " autoComplete="email" />
                  <span className="input-border-anim" />
                  {errors.email && <small className="error">{errors.email}</small>}
                </div>
              </div>

              <div className={`form-group ${activeField === "subject" ? "focused" : ""} ${form.subject ? "has-value" : ""}`}>
                <label className="floating-label">Subject (Optional)</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} onFocus={() => setActiveField("subject")} onBlur={() => setActiveField("")} placeholder=" " />
                <span className="input-border-anim" />
              </div>

              <div className={`form-group ${activeField === "message" ? "focused" : ""} ${errors.message ? "has-error" : form.message ? "has-value" : ""}`}>
                <label className="floating-label">Your Message *</label>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} onFocus={() => setActiveField("message")} onBlur={() => setActiveField("")} placeholder=" " />
                <span className="input-border-anim" />
                <span className="char-count">{charCount} chars</span>
                {errors.message && <small className="error">{errors.message}</small>}
              </div>

              <div className="send-buttons">
                <motion.button type="submit" className="send-action-btn email-send" disabled={sending} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  {sending ? (
                    <span className="sending-anim"><span /><span /><span /></span>
                  ) : (
                    <><FaPaperPlane /> Send via Email</>
                  )}
                </motion.button>
                <motion.button type="button" className="send-action-btn whatsapp-send" onClick={handleSendWhatsApp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <FaWhatsapp /> WhatsApp
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.p className="footer-note" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
        🚀 Let's build something incredible together! <FaHeart className="heart-icon" />
      </motion.p>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.msg && (
          <motion.div className={`toast-notification ${toast.type}`} initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
