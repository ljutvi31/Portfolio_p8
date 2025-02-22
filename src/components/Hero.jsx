import React from "react";
import { Mail, Github } from "lucide-react"; // ✅ Vérifie bien l'importation
import "./Hero.css";

const Hero = () => {
  const handleContactClick = () => {
    // Ouvre la fenêtre de mail
    window.location.href = "mailto:ljutvi.h@gmail.com";

    // Ajoute un léger délai avant de scroller vers la section Contact
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const handleGithubClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    window.open("https://github.com/ljutvi31", "_blank");
  };

  return (
    <section className="hero">
      <h2>Développeur Web</h2>
      <p>
      Après avoir pu explorer divers horizons, je me suis plongé dans le monde fascinant du développement web. En pleine reconversion professionnelle, j’ai suivi une formation intensive de 7 mois tout en partant de zéro, qui m’a révélé un univers aussi complexe que captivant. Chaque ligne de code est une opportunité d’innover, de créer et d’exprimer ce qu'on l'on est. Aujourd’hui, je souhaite développer des applications, modernes et accessibles, avec une ambition claire : améliorer mes compétences, en acquérir de nouvelles avec passion et interêt.
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
    </section>
  );
};

export default Hero;
