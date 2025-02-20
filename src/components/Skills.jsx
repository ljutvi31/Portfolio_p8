import React from "react";
import "./Skills.css"; // Vérifie que le fichier CSS existe

const Skills = () => {
  return (
    <section className="skills">
      <h2>Mes Compétences</h2>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React / React Router</li>
        <li>Node.js / Express</li>
        <li>MongoDB / Mongoose</li>
        <li>SEO & Accessibilité</li>
      </ul>
    </section>
  );
};

export default Skills; // ✅ Assure-toi que l'export est bien DEFAULT
