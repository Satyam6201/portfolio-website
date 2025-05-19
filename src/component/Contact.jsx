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
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simulated form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API call delay
    setTimeout(() => {
      // Here you can integrate actual backend API or email service
      console.log("Form data submitted:", formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <h2>📞 Get in Touch</h2>
      <p className="contact-subtext">
        Feel free to reach out for{" "}
        <strong>collaborations, internships, freelance work, or a friendly chat!</strong>
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <a href="mailto:satyamkmishraa@gmail.com" className="contact-btn" aria-label="Send Email">
            <FaEnvelope /> Email Me
          </a>
          <a href="tel:+916201902313" className="contact-btn" aria-label="Call Phone">
            <FaPhoneAlt /> Call Me
          </a>
          <a href="https://wa.me/916201902313" className="contact-btn" aria-label="WhatsApp Chat">
            <FaWhatsapp /> WhatsApp Me
          </a>
          <a href="https://goo.gl/maps/XQY7jhLbzFJzHMCa8" target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="Location Map">
            <FaMapMarkerAlt /> View Location
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Satyam6201" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="resume-wrapper">
          <a href="/assets/Resume.pdf" download className="resume-btn" aria-label="Download Resume">
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-wrapper">
        <h3>Or send me a message directly:</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
          ></textarea>

          <button type="submit" className="submit-btn" aria-label="Send Message" disabled={status === "sending"}>
            <FaPaperPlane />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="form-success">Thank you! Your message has been sent.</p>
        )}
      </div>

      <p className="footer-note">🚀 Let’s build something amazing together!</p>
      <blockquote className="contact-quote">
        "The best way to predict the future is to create it." – Peter Drucker
      </blockquote>
    </section>
  );
}

export default Contact;
