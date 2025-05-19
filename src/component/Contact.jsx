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
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const whatsappLink = `https://wa.me/916201902313?text=Hi%20Satyam!%20My%20name%20is%20${encodeURIComponent(
    form.name
  )},%20and%20my%20email%20is%20${encodeURIComponent(
    form.email
  )}.%20${encodeURIComponent(form.message)}`;

  const mailtoLink = `mailto:satyamkmishraa@gmail.com?subject=Message%20from%20${encodeURIComponent(
    form.name
  )}&body=${encodeURIComponent(form.message)}%0D%0AFrom:%20${encodeURIComponent(form.email)}`;

  return (
    <section id="contact" className="contact">
      <h2>📞 Get in Touch</h2>
      <p className="contact-subtext">
        Feel free to reach out for <strong>collaborations, internships, freelance work, or a friendly chat!</strong>
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <a href="mailto:satyamkmishraa@gmail.com" className="contact-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="tel:+916201902313" className="contact-btn">
            <FaPhoneAlt /> Call Me
          </a>
          <a
            href="https://wa.me/916201902313?text=Hi%20Satyam!%20I%20checked%20your%20portfolio%20and%20would%20love%20to%20connect."
            className="contact-btn"
          >
            <FaWhatsapp /> WhatsApp Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Satyam6201" target="_blank" rel="noopener noreferrer" className="social-icon">
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
        </div>

        <div className="resume-wrapper">
          <a href="/assets/Resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Message Form */}
        <form className="message-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="send-buttons">
            <a href={mailtoLink} className="contact-btn" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Send via Email
            </a>
            <a href={whatsappLink} className="contact-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Send via WhatsApp
            </a>
          </div>
        </form>
      </div>

      <p className="footer-note">🚀 Let’s build something amazing together!</p>
    </section>
  );
}

export default Contact;
