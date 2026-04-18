import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = ({ projects = [] }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <p className="projects-eyebrow">Selected Work</p>
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const typeLabel = {
    'notebook+paper': 'Notebook · Paper',
    'notebook+youtube': 'Notebook · Video',
    'github+video': 'GitHub · Demo',
    'github': 'GitHub',
  }[project.type] ?? project.type;

  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={onClick}
    >
      <div
        className="card-thumbnail"
        style={{'--thumb': project.thumbnail ? `url(${project.thumbnail})` 
        : (project.gradient || `linear-gradient(135deg, #7301ff 0%, #820360 40%, #045d3c 100%)`)}}
      >
        <h2 className="card-clipped-title">{project.title}</h2>
      </div>

      <div className="card-body">
        <span className="card-type-badge">{typeLabel}</span>
        <h2 className="card-title">{project.title}</h2>
        <p className="card-description">{project.description}</p>
        <div className="card-tags">
          {(project.tags ?? []).map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
