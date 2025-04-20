import React, { useState } from "react";
import "../styles/funfacts.css";
import { FaLaugh, FaLightbulb, FaBolt, FaSmileBeam } from "react-icons/fa";

const facts = [
  "🤹 I can solve a Rubik’s Cube in under 1 minute!",
  "💻 I can code in 5+ languages and counting!",
  "🧠 I find DSA problems oddly satisfying.",
  "🤯 Debugged 5 hrs just to fix a missing semicolon!",
  "🌑 I love dark mode so much, I dream in it!",
  "🎙️ I sometimes talk to my code... it listens! 👀",
  "👨‍💻 My first 'Hello World' made me feel like a hacker.",
  "🗑️ Accidentally deleted my entire project once — rebuilt it stronger!",
  "🧑‍🚀 GitHub > Social Media any day!",
  "🛠️ Debugging is therapy — fight me 😤!"
];

function FunFacts() {
  const [fact, setFact] = useState(facts[0]);

  const generateFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <section id="funfacts" className="funfacts">
      <h2><FaSmileBeam className="icon-title" /> Fun Facts About Me</h2>

      <div className="fact-card glass">
        <FaLaugh className="icon" />
        <p className="fact-text">{fact}</p>
        <button onClick={generateFact}>🔄 Show Another</button>
      </div>

      <h3><FaBolt className="icon-sub" /> What I'm Currently Learning</h3>
      <div className="learning-card glass">
        <FaLightbulb className="icon" />
        <p>📘 Exploring <strong>Next.js</strong> for SSR & SEO!</p>
        <p>📚 Deep diving into <strong>DSA</strong> & <strong>Competitive Programming</strong>.</p>
        <div className="progress-line"></div>
      </div>
    </section>
  );
}

export default FunFacts;
