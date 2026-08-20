import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";
import TechStack from "./component/TechStack";
import FunFacts from "./component/FunFacts";
import Hobbies from "./component/Hobbies";
import Volunteer from "./component/Volunteer";
import Certifications from "./component/Certifications";
import Hiring from "./component/Hiring";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Goal from "./component/Goal";
import Achievements from "./component/Achievements";
import Education from "./component/Education";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AIChatbot from "./component/AIChatbot";
import ThemePicker from "./component/ThemePicker";

import "./styles/global.css";

// Helper component to scroll to top or target hash on route changes
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

// All-in-one landing view for main route
function FullPortfolio() {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <TechStack />
      <FunFacts />
      <Hobbies />
      <Volunteer />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Testimonials />
      <Goal />
      <Hiring />
      <Blog />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={<FullPortfolio />} />
          <Route path="/about" element={<main><About /></main>} />
          <Route path="/techstack" element={<main><TechStack /></main>} />
          <Route path="/projects" element={<main><Projects /></main>} />
          <Route path="/experience" element={<main><Experience /></main>} />
          <Route path="/education" element={<main><Education /></main>} />
          <Route path="/certifications" element={<main><Certifications /></main>} />
          <Route path="/blog" element={<main><Blog /></main>} />
          <Route path="/contact" element={<main><Contact /></main>} />
          <Route path="/hiring" element={<main><Hiring /></main>} />
          <Route path="/achievements" element={<main><Achievements /></main>} />
          <Route path="*" element={<FullPortfolio />} />
        </Routes>

        <Footer />
        <AIChatbot />
        <ThemePicker />
      </div>
    </ThemeProvider>
  );
}

export default App;
