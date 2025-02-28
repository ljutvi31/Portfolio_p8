import React from "react";
import { Github, Code } from "lucide-react";
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
