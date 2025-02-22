import React, { useState } from "react";
import { Mail, Github, ChevronDown } from "lucide-react"; // ✅ Vérifie bien l'importation
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:ljutvi.h@gmail.com";
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    window.open("https://github.com/ljutvi31", "_blank");
  };

  return (
    <section className="hero">
      <h2 className="hero-title" onClick={toggleContent}>
        A PROPOS DE MOI{" "}
        <span className={`arrow-container ${isVisible ? "rotate" : ""}`}>
          <ChevronDown className="arrow-icon" />
        </span>
      </h2>
      <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
        <h3>Développeur Web</h3>
        <p>
          Après avoir exploré divers horizons, je me suis plongé dans le monde fascinant du développement web. 
          En pleine reconversion professionnelle, j’ai suivi une formation intensive de 7 mois en partant de zéro, 
          qui m’a révélé un univers aussi complexe que captivant. Chaque ligne de code est une opportunité d’innover, 
          de créer et d’exprimer ce que l'on est. Aujourd’hui, je souhaite développer des applications modernes et accessibles, 
          avec une ambition claire : améliorer mes compétences, en acquérir de nouvelles avec passion et intérêt.
        </p>
        <div className="hero-links">
          <button className="btn contact" onClick={handleContactClick}>
            <Mail size={20} /> Me contacter
          </button>
          <a
            href="https://github.com/ljutvi31"
            className="btn github"
            onClick={handleGithubClick}
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
