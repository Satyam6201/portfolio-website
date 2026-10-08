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
    fact: "Spent 5 hours debugging code, only to realize I was editing the wrong file!",
    category: "Debugging Saga",
    tag: "Dev Pain"
  },
  {
    fact: "Can solve a Rubik’s Cube in under 60 seconds while waiting for npm install to finish!",
    category: "Secret Talent",
    tag: "Focus"
  },
  {
    fact: "Solved 1000+ DSA problems on LeetCode... still googles 'how to center a div' sometimes!",
    category: "CSS Reality",
    tag: "Relatable"
  },
  {
    fact: "Java is to JavaScript as Car is to Carpet!",
    category: "Tech Trivia",
    tag: "Classic"
  },
  {
    fact: "I talk to my AI Assistant out loud late at night... and it gives surprisingly good advice!",
    category: "AI Companion",
    tag: "Night Owl"
  },
  {
    fact: "99 little bugs in the code... take one down, patch it around... 127 little bugs in the code!",
    category: "Coding Life",
    tag: "Recursion"
  },
  {
    fact: "Accidentally deleted a folder once... rebuilt the whole project 2x better in 1 day!",
    category: "Super Power",
    tag: "Resilience"
  },
  {
    fact: "I love dark mode so much, my eyes hurt when I look at a white piece of real paper!",
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
        <span className="shimmer-badge">
          <FaSmileBeam /> Developer Culture
        </span>
        <h2>Dev Realities & Engineering Humor</h2>
        <p className="funfacts-subtitle">
          A lighthearted look at coding quirks, late-night debugging sagas, and developer life lessons.
        </p>
      </div>

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
            <FaSyncAlt className="spin-icon" /> Next Fact
          </button>
        </div>
      </div>

      <div className="dev-realities-grid">
        <div className="reality-card glass">
          <div className="reality-icon"><FaBug /></div>
          <h3>The Bug Hunting Phase</h3>
          <p>“It's not a bug, it's an undocumented feature that only manifests when the client is watching!”</p>
        </div>

        <div className="reality-card glass">
          <div className="reality-icon"><FaBolt /></div>
          <h3>Continuous Learning</h3>
          <p>Mastering Next.js 15 Server Actions, RAG Architectures, and Distributed Systems.</p>
        </div>

        <div className="reality-card glass">
          <div className="reality-icon"><FaLightbulb /></div>
          <h3>Community Leadership</h3>
          <p>Mentored 400+ students in Web Dev & Java workshops, proving that teaching is the best way to master concepts.</p>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
