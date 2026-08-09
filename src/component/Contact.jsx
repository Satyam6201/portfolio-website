import React, { useState } from "react";
import "../styles/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCopy,
  FaPaperPlane,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email format";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 8)
      errs.message = "Message should be at least 8 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fill in all required fields correctly.");
      return;
    }
    const mailtoLink = `mailto:satyamkmishraa@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(
      form.name
    )}%20(${encodeURIComponent(form.email)})`;
    window.location.href = mailtoLink;
    showToast("Opening your mail client...");
    setForm({ name: "", email: "", message: "" });
  };

  const handleSendWhatsApp = () => {
    if (!validate()) {
      showToast("Please fill in all required fields correctly.");
      return;
    }
    const whatsappLink = `https://wa.me/916201902313?text=Hi%20Satyam!%20My%20name%20is%20${encodeURIComponent(
      form.name
    )}%20(${encodeURIComponent(
      form.email
    )}).%20Message:%20${encodeURIComponent(form.message)}`;
    window.open(whatsappLink, "_blank");
    showToast("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", message: "" });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section id="contact" className="contact">
      <h2>📞 Get in Touch</h2>
      <p className="contact-subtext">
        Whether you have a project idea, job opportunity, freelance query, or just want to say hi — feel free to reach out!
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <div className="contact-btn-copy">
            <a href="mailto:satyamkmishraa@gmail.com" className="contact-btn">
              <FaEnvelope /> satyamkmishraa@gmail.com
            </a>
            <button
              onClick={() => copyToClipboard("satyamkmishraa@gmail.com", "Email")}
              title="Copy Email"
              className="copy-btn"
            >
              <FaCopy />
            </button>
          </div>

          <div className="contact-btn-copy">
            <a href="tel:+916201902313" className="contact-btn">
              <FaPhoneAlt /> +91 6201902313
            </a>
            <button
              onClick={() => copyToClipboard("+916201902313", "Phone Number")}
              title="Copy Phone"
              className="copy-btn"
            >
              <FaCopy />
            </button>
          </div>

          <a
            href="https://wa.me/916201902313?text=Hi%20Satyam!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-direct"
          >
            <FaWhatsapp /> WhatsApp Direct Chat
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Satyam6201"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-kumar-mishra-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/SatyamMIshra62"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiLeetcode /> LeetCode
          </a>
          <a
            href="https://www.google.com/maps/place/Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaMapMarkerAlt /> Delhi
          </a>
        </div>

        <div className="resume-wrapper">
          <a href="/assets/Resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume (PDF)
          </a>
        </div>

        {/* Message Form */}
        <form className="message-form" onSubmit={handleSendEmail} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <small className="error">{errors.message}</small>}
          </div>

          <div className="send-buttons">
            <button type="submit" className="send-action-btn email-send">
              <FaPaperPlane /> Send via Email
            </button>
            <button
              type="button"
              className="send-action-btn whatsapp-send"
              onClick={handleSendWhatsApp}
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>

      {toast && <div className="toast-notification">{toast}</div>}

      <p className="footer-note">🚀 Let’s build something incredible together!</p>
    </section>
  );
}

export default Contact;
