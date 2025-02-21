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
      <h2>Développeur Web Full Stack</h2>
      <p>
        Passionné par le développement web et les nouvelles technologies, je
        crée des applications web performantes et accessibles.
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
