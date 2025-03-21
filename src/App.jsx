import React from "react";
import Header from "./component/Hearder";
import Home from "./component/Home";
import About from "./component/About";
import TechStack from "./component/TechStack";
import FunFacts from "./component/FunFacts";
import Hobbies from "./component/Hobbies";
import Volunteer from "./component/Volunteer";
import Certifications from "./component/Certifications";
import Hiring from "./component/Hiring";
import Projects from "./component/Projects";
import Goal from "./component/Goal";
import Achievements from "./component/Achievements";
import Education from "./component/Education";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "../src/styles/global.css"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <TechStack />
      <FunFacts />
      <Hobbies />
      <Volunteer />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Goal />
      <Hiring />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
