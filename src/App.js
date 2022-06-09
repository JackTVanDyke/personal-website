import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
