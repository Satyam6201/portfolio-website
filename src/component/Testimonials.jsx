import React from "react";
import "../styles/Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "Web Developer Intern",
    feedback:
      "Satyam is a fantastic collaborator. His React and design skills brought our project to life in record time.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aman Verma",
    role: "DSA Peer",
    feedback:
      "Satyam helped me understand complex DSA concepts with great clarity. Highly recommended as a mentor!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sneha Joshi",
    role: "College Club Lead",
    feedback:
      "An excellent speaker and organizer. His guidance helped many students during our coding workshop.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Singh",
    role: "Project Manager",
    feedback:
      "Satyam’s commitment to deadlines and attention to detail is unmatched. A true professional in every sense.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Gupta",
    role: "UI/UX Designer",
    feedback:
      "Collaborating with Satyam made the design process seamless. His eye for detail elevated our app’s look & feel.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">🌟 What People Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="feedback">"{testimonial.feedback}"</p>
            <div className="user-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
            <div className="stars">
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
