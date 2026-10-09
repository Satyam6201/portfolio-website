import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";
import TechStack from "./component/TechStack";
import LeetCodeMatrix from "./component/LeetCodeMatrix";
import Projects from "./component/Projects";
import Education from "./component/Education";
import AmbientBackground from "./component/AmbientBackground";
import CommandPalette from "./component/CommandPalette";
import RecruiterModal from "./component/RecruiterModal";
import Footer from "./component/Footer";

const EngineeringPlayground = lazy(() => import("./component/EngineeringPlayground"));
const Achievements = lazy(() => import("./component/Achievements"));
const Certifications = lazy(() => import("./component/Certifications"));
const Hiring = lazy(() => import("./component/Hiring"));
const Blog = lazy(() => import("./component/Blog"));
const Contact = lazy(() => import("./component/Contact"));
const AIChatbot = lazy(() => import("./component/AIChatbot"));
const ThemePicker = lazy(() => import("./component/ThemePicker"));

import "./styles/global.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function FullPortfolio({ onOpenRecruiter }) {
  return (
    <main>
      <Home onOpenRecruiter={onOpenRecruiter} />
      <About />
      <Experience />
      <LeetCodeMatrix />
      <Suspense fallback={<div className="section-lazy-loading" />}>
        <EngineeringPlayground />
      </Suspense>
      <TechStack />
      <Projects />
      <Suspense fallback={<div className="section-lazy-loading" />}>
        <Achievements />
        <Education />
        <Certifications />
        <Hiring />
        <Blog />
        <Contact />
      </Suspense>
    </main>
  );
}

function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        <AmbientBackground />
        <ScrollToTop />
        <Header
          onOpenCmd={() => setCmdOpen(true)}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<FullPortfolio onOpenRecruiter={() => setRecruiterOpen(true)} />} />
          <Route path="/about" element={<main><About /></main>} />
          <Route path="/techstack" element={<main><TechStack /></main>} />
          <Route path="/projects" element={<main><Projects /></main>} />
          <Route path="/experience" element={<main><Experience /></main>} />
          <Route path="/dsa" element={<main><LeetCodeMatrix /></main>} />
          <Route path="/playground" element={<main><Suspense fallback={null}><EngineeringPlayground /></Suspense></main>} />
          <Route path="/education" element={<main><Education /></main>} />
          <Route path="/certifications" element={<main><Suspense fallback={null}><Certifications /></Suspense></main>} />
          <Route path="/blog" element={<main><Suspense fallback={null}><Blog /></Suspense></main>} />
          <Route path="/contact" element={<main><Suspense fallback={null}><Contact /></Suspense></main>} />
          <Route path="/hiring" element={<main><Suspense fallback={null}><Hiring /></Suspense></main>} />
          <Route path="/achievements" element={<main><Suspense fallback={null}><Achievements /></Suspense></main>} />
          <Route path="*" element={<FullPortfolio onOpenRecruiter={() => setRecruiterOpen(true)} />} />
        </Routes>

        <Footer />
        
        <CommandPalette
          isOpen={cmdOpen}
          onClose={() => setCmdOpen(false)}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />

        <RecruiterModal
          isOpen={recruiterOpen}
          onClose={() => setRecruiterOpen(false)}
        />

        <Suspense fallback={null}>
          <AIChatbot />
          <ThemePicker />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
