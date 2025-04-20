import React from "react";
import "../styles/hobbies.css";

function Hobbies() {
  const hobbies = [
    {
      emoji: "🏏",
      name: "Playing Cricket",
      desc: "Fun, fitness, and teamwork.",
    },
    {
      emoji: "🎮",
      name: "Gaming",
      desc: "Boosts focus & reflexes.",
    },
    {
      emoji: "🎵",
      name: "Listening to Music",
      desc: "Relaxes and refreshes.",
    },
    {
      emoji: "✈️",
      name: "Traveling & Exploring 🌍",
      desc: "New places, new vibes.",
    },
    {
      emoji: "🎬",
      name: "Watching Movies",
      desc: "Stories that inspire.",
    },
    {
      emoji: "📸",
      name: "Photography",
      desc: "Capturing moments creatively.",
    },
    {
      emoji: "📚",
      name: "Reading Tech Blogs",
      desc: "Stay updated with trends.",
    },
    {
      emoji: "🍳",
      name: "Cooking",
      desc: "Love trying new recipes.",
    },
    {
      emoji: "💻",
      name: "Coding & Tech",
      desc: "Passionate about innovation.",
    },
  ];

  return (
    <section id="hobbies" className="hobbies">
      <h2>Hobbies & Interests</h2>
      <p className="hobbies-desc">
        Outside of coding, these hobbies keep me energized and curious:
      </p>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <span className="hobby-icon">{hobby.emoji}</span>
            <p className="hobby-name">{hobby.name}</p>
            <p className="hobby-desc">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
