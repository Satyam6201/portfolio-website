import React from "react";
import "../src/styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: satyamkmishraa@gmail.com</p>
      <p>GitHub: <a href="https://github.com/Satyam6201" target="_blank">Satyam6201</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/satyam-kumar-mishra-9bb980291/" target="_blank" rel="noopener noreferrer">Satyam Kumar Mishra</a></p>
      <a href="public/New_Resume_Satyam.pdf" download className="resume-button">Download Resume</a>
    </section>
  );
}

export default Contact;