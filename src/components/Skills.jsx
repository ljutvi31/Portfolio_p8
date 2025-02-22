import React from "react";
import { Code, Globe, Database, Settings, Search } from "lucide-react";
import "./Skills.css";

const skills = [
  { name: "HTML / CSS / JavaScript", icon: <Code /> },
  { name: "React / React Router", icon: <Globe /> },
  { name: "Node.js / Express", icon: <Database /> },
  { name: "MongoDB / Mongoose", icon: <Settings /> },
  { name: "SEO & Accessibilité", icon: <Search /> },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
