import React, { useState } from "react";
import "../styles/funfacts.css";
import { FaLaugh, FaLightbulb } from "react-icons/fa";

const facts = [
  "I can solve a Rubik’s Cube in under 1 minute!",
  "I can code in 3+ programming languages!",
  "I enjoy solving DSA problems in my free time.",
  "I once debugged a program for 5 hours just to find a missing semicolon!",
  "I love dark mode so much that I wish real life had one!",
  "I sometimes talk to my code like it's a real person!",
  "The first program I ever wrote was 'Hello World' and I felt like a hacker!",
  "I once deleted my own project by accident and had to rebuild it from scratch!",
  "I use GitHub more than social media!",
  "I enjoy debugging more than actual coding sometimes!"
];

function FunFacts() {
  const [fact, setFact] = useState(facts[0]);

  const generateFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <section id="funfacts" className="funfacts">
      <h2>🎉 Fun Facts About Me</h2>
      <div className="fact-card">
        <FaLaugh className="icon" />
        <p>{fact}</p>
        <button onClick={generateFact}>🔄 Show Another</button>
      </div>

      <h3>🚀 What I'm Currently Learning</h3>
      <div className="learning-card">
        <FaLightbulb className="icon" />
        <p>Exploring **Next.js** for Server-Side Rendering!</p>
        <p>Deep diving into **DSA & Competitive Programming**.</p>
      </div>
    </section>
  );
}

export default FunFacts;
