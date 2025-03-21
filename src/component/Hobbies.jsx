import React from "react";
import "../styles/hobbies.css";

function Hobbies() {
  const hobbies = [
    { emoji: "🏏", name: "Playing Cricket" },
    { emoji: "🎮", name: "Gaming" },
    { emoji: "🎵", name: "Listening to Music" },
    { emoji: "✈️", name: "Traveling & Exploring New Places 🌍" },
    { emoji: "🎬", name: "Watching Movies & Web Series" },
    { emoji: "📸", name: "Photography" },
    { emoji: "📚", name: "Reading Tech Blogs" },
    { emoji: "🍳", name: "Cooking & Trying New Recipes" },
    { emoji: "💻", name: "Exploring New Tech & Coding" },
  ];

  return (
    <section id="hobbies" className="hobbies">
      <h2>Hobbies & Interests</h2>
      <p className="hobbies-desc">
        Apart from coding, I have a diverse set of interests that keep me
        engaged and inspired. Here are a few of them:
      </p>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <span className="hobby-icon">{hobby.emoji}</span>
            <p className="hobby-name">{hobby.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;

