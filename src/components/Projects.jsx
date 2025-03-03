import React, { useState } from "react";
import { Github, Code, ChevronDown } from "lucide-react";
import "./Projects.css";
import projects from "../data/projects";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-chip">
                  <Code size={14} /> {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} /> Voir sur GitHub
            </a>

            {/* Affichage des détails seulement si le projet a hasDetails: true */}
            {project.hasDetails && (
              <>
                <button className="toggle-details" onClick={() => toggleDetails(index)}>
                  <ChevronDown size={16} /> {expandedProject === index ? "Masquer" : "Voir plus"}
                </button>
                {expandedProject === index && (
                  <div className="project-details">
                    <h4>Objectif</h4>
                    <p>{project.details.objectif}</p>
                    
                    <h4>Compétences acquises</h4>
                    <ul>
                      {project.details.competences.map((comp, i) => (
                        <li key={i}>✔ {comp}</li>
                      ))}
                    </ul>

                    <h4>Difficultés rencontrées et solutions</h4>
                    <ul>
                      {project.details.difficultes.map((diff, i) => (
                        <li key={i}>
                          <strong>Problème :</strong> {diff.probleme} <br />
                          <strong>Solution :</strong> {diff.solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
