import React from "react";
import "./Projects.css";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} className="project-link">Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
