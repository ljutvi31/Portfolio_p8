import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;  // ✅ Vérifie que c'est bien exporté
