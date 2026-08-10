import React, { useState } from "react";
import "../styles/funfacts.css";
import { 
  FaLaugh, 
  FaLightbulb, 
  FaBolt, 
  FaSmileBeam, 
  FaTerminal, 
  FaBug, 
  FaSyncAlt,
  FaQuoteLeft
} from "react-icons/fa";

const funnyFacts = [
  {
    fact: "🐛 Spent 5 hours debugging code, only to realize I was editing the wrong file!",
    category: "Debugging Saga",
    tag: "Dev Pain"
  },
  {
    fact: "🤹 Can solve a Rubik’s Cube in under 60 seconds while waiting for `npm install` to finish!",
    category: "Secret Talent",
    tag: "Procrastination"
  },
  {
    fact: "🧠 Solved 1000+ DSA problems on LeetCode... still googles 'how to center a div' sometimes! 😂",
    category: "CSS Reality",
    tag: "Relatable"
  },
  {
    fact: "☕ Java is to JavaScript as Car is to Carpet!",
    category: "Tech Trivia",
    tag: "Classic"
  },
  {
    fact: "🎙️ I talk to my AI Assistant out loud late at night... and it gives surprisingly good advice!",
    category: "AI Friend",
    tag: "Night Owl"
  },
  {
    fact: "🤯 99 little bugs in the code... take one down, patch it around... 127 little bugs in the code!",
    category: "Coding Life",
    tag: "Recursion"
  },
  {
    fact: "🗑️ Accidentally deleted a folder once... rebuilt the whole project 2x better in 1 day!",
    category: "Super Power",
    tag: "Resilience"
  },
  {
    fact: "🌑 I love dark mode so much, my eyes hurt when I look at a white piece of real paper!",
    category: "Dark Mode Supremacy",
    tag: "Theme"
  }
];

function FunFacts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextFact = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % funnyFacts.length);
      setIsFlipping(false);
    }, 250);
  };

  const currentFact = funnyFacts[currentIndex];

  return (
    <section id="funfacts" className="funfacts">
      <div className="funfacts-header">
        <h2>
          <FaSmileBeam className="icon-title" /> Funny Facts & Dev Humor
        </h2>
        <p className="funfacts-subtitle">
          A lighthearted look at my coding quirks, late-night debugging sagas, and secret developer superpowers!
        </p>
      </div>

      {/* Main Interactive Flip Fact Card */}
      <div className={`interactive-fact-card ${isFlipping ? "flipping" : ""}`}>
        <div className="card-top-bar">
          <span className="fact-badge">
            <FaTerminal /> {currentFact.category}
          </span>
          <span className="fact-counter">
            {currentIndex + 1} / {funnyFacts.length}
          </span>
        </div>

        <div className="fact-body">
          <FaQuoteLeft className="quote-mark" />
          <p className="fact-text">{currentFact.fact}</p>
        </div>

        <div className="fact-footer">
          <span className="fact-tag">#{currentFact.tag}</span>
          <button className="next-fact-btn" onClick={nextFact}>
            <FaSyncAlt className="spin-icon" /> Next Funny Fact
          </button>
        </div>
      </div>

      {/* Grid of Funny Dev Realities */}
      <div className="dev-realities-grid">
        <div className="reality-card glass">
          <div className="reality-icon"><FaBug /></div>
          <h3>The Bug Hunting Phase</h3>
          <p>“It's not a bug, it's an undocumented feature that only manifests when the client is watching!”</p>
        </div>

        <div className="reality-card glass">
          <div className="reality-icon"><FaBolt /></div>
          <h3>What I'm Currently Learning</h3>
          <p>🚀 Mastering <strong>Next.js 15 Server Actions</strong> & <strong>OpenAI RAG Agents</strong>.</p>
        </div>

        <div className="reality-card glass">
          <div className="reality-icon"><FaLightbulb /></div>
          <h3>Did You Know?</h3>
          <p>💡 I've mentored 250+ students in Web Dev & Java workshops, proving that teaching is the best way to learn!</p>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;

