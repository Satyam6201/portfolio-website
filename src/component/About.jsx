// About.jsx
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../styles/about.css";

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚀 About Me
      </motion.h2>

      <motion.p
        className="about-intro"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Hi there! I'm a <strong>Full-Stack Web Developer</strong> driven by curiosity and creativity.  
        I bring ideas to life with <code>React.js</code>, <code>Node.js</code>, <code>Express.js</code>, and <code>MongoDB</code>.  
        Whether it's a sleek UI or a powerful API—<strong>I build both ends.</strong>
      </motion.p>

      {/* Animated Counters */}
      <div className="counters">
        <motion.div
          className="counter-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3>👨‍💻 <CountUp end={25} duration={3} />+</h3>
          <p>Projects Completed</p>
        </motion.div>

        <motion.div
          className="counter-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h3>🌟 <CountUp end={4.9} decimals={1} duration={3} />/5</h3>
          <p>Peer Review Rating</p>
        </motion.div>

        <motion.div
          className="counter-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h3>📅 <CountUp end={3} duration={3} />+ yrs</h3>
          <p>Hands-on Experience</p>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="about-content">
        {[
          {
            title: "🎓 Academic Achievements",
            content: (
              <>
                🥇 <strong>1st Rank</strong> (1st–3rd Semesters)<br />
                🥉 <strong>3rd Rank</strong> (4th–5th Semesters)<br />
                🥇 <strong>1st Rank</strong> (6th Semesters)<br />
                📚 Strong in <strong>Java, DSA</strong> & <strong>Web Dev</strong>
              </>
            ),
          },
          {
            title: "⚡ What Drives Me",
            content: (
              <ul>
                <li>🚀 Creating immersive user experiences</li>
                <li>🧠 Exploring AI, Next.js, Firebase</li>
                <li>📦 Writing clean, scalable code</li>
                <li>🤝 Collaborating with creative teams</li>
              </ul>
            ),
          },
          {
            title: "🛠️ My Tech Stack",
            content: (
              <ul>
                <li>✅ React.js, Next.js, JavaScript, TypeScript</li>
                <li>✅ Node.js, Express.js, MongoDB, MySQL</li>
                <li>✅ Firebase, REST APIs, Git, Netlify</li>
                <li>✅ CSS, Sass, Responsive Design, Figma</li>
              </ul>
            ),
          },
          {
            title: "🎮 Fun Projects & Interests",
            content: (
              <ul>
                <li>🧠 Games like Simon Says, Brick Breaker</li>
                <li>🧩 Solving DSA problems using Java</li>
                <li>🎬 Full-stack clones (Netflix, Amazon)</li>
                <li>🎤 Hosting workshops & mentoring juniors</li>
              </ul>
            ),
          },
          {
            title: "🌟 Career Vision",
            content: (
              <p>
                Passionate about working with <strong>innovative teams</strong> to solve real-world challenges.  
                Open to <strong>internships</strong> and <strong>full-time opportunities</strong> in web development.  
                Let's build the future together! 🚀
              </p>
            ),
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            className="about-section"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 5}
          >
            <h3>{section.title}</h3>
            {section.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
