import React from "react";
import Header from "./Hearder";
import Home from "./Home";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Education from "./Education";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import "./styles.css";
import "../src/styles/global.css"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <TechStack />
      <About />
      <Projects />
      <Achievements />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
