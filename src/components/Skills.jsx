import React, { useState } from "react";
import { ChevronDown, Code, Globe, Database, Settings, Search } from "lucide-react";
import "./Skills.css";

const skills = [
  { name: "HTML / CSS / JavaScript", icon: <Code /> },
  { name: "React / React Router", icon: <Globe /> },
  { name: "Node.js / Express", icon: <Database /> },
  { name: "MongoDB / Mongoose", icon: <Settings /> },
  { name: "SEO & Accessibilité", icon: <Search /> },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSkills = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="skills">
      <h2 className="skills-title" onClick={toggleSkills}>
        COMPÉTENCES{" "}
        <span className={`arrow-container ${isVisible ? "rotate" : ""}`}>
          <ChevronDown className="arrow-icon" />
        </span>
      </h2>

      <div className={`skills-content ${isVisible ? "fade-in" : ""}`}>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
