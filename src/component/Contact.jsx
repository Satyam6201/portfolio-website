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
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 10)
      errs.message = "Message should be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on input change
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleSend = (method) => {
    if (!validate()) {
      showToast("Please fix errors before sending");
      return;
    }
    showToast(`Message sent via ${method}!`);
    setForm({ name: "", email: "", message: "" }); // clear form
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const whatsappLink = `https://wa.me/916201902313?text=Hi%20Satyam!%20My%20name%20is%20${encodeURIComponent(
    form.name
  )},%20and%20my%20email%20is%20${encodeURIComponent(
    form.email
  )}.%20${encodeURIComponent(form.message)}`;

  const mailtoLink = `mailto:satyamkmishraa@gmail.com?subject=Message%20from%20${encodeURIComponent(
    form.name
  )}&body=${encodeURIComponent(form.message)}%0D%0AFrom:%20${encodeURIComponent(
    form.email
  )}`;

  return (
    <section id="contact" className="contact">
      <h2>📞 Get in Touch</h2>
      <p className="contact-subtext">
        Feel free to reach out for{" "}
        <strong>
          collaborations, internships, freelance work, or a friendly chat!
        </strong>
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <div className="contact-btn-copy">
            <a href="mailto:satyamkmishraa@gmail.com" className="contact-btn">
              <FaEnvelope /> Email Me
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
              <FaPhoneAlt /> Call Me
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
            href="https://wa.me/916201902313?text=Hi%20Satyam!%20I%20checked%20your%20portfolio%20and%20would%20love%20to%20connect."
            className="contact-btn"
          >
            <FaWhatsapp /> WhatsApp Me
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
            href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaMapMarkerAlt /> Bhopal, MP
          </a>
          <a href="https://leetcode.com/u/satyammishra62/" target="_blank" rel="noreferrer" 
            className="social-icon"
          >
            <SiLeetcode className="icon leetcode" />
            LeetCode
          </a>
        </div>

        <div className="resume-wrapper">
          <a href="/assets/Resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Message Form */}
        <form className="message-form" onSubmit={(e) => e.preventDefault()} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <small className="error">{errors.message}</small>}

          <div className="send-buttons">
            <button
              type="button"
              className="contact-btn"
              onClick={() => handleSend("Email")}
            >
              <FaEnvelope /> Send via Email
            </button>
            <button
              type="button"
              className="contact-btn"
              onClick={() => handleSend("WhatsApp")}
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>

      {toast && <div className="toast">{toast}</div>}

      <p className="footer-note">🚀 Let’s build something amazing together!</p>
    </section>
  );
}

export default Contact;
