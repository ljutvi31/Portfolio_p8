import "./index.css"; // Charge Tailwind pour tout le projet
import React from "react";
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; // Import du style global

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
