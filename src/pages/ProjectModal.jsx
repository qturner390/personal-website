import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const ProjectModal = ({ project, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleViewFull = () => {
    onClose();
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div>
            <p className="modal-type">{project.type?.replace(/\+/g, ' · ')}</p>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="modal-tags">
            {project.tags.map(tag => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Description */}
        {project.description && (
          <p className="modal-description">{project.description}</p>
        )}

        {/* Dynamic Content Preview */}
        <div className="modal-content">
          <ModalContent project={project} />
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="modal-btn primary view-full-btn" onClick={handleViewFull}>
            View Full Project →
          </button>
          <ModalLinks project={project} />
        </div>

      </div>
    </div>
  );
};

/* ---------- Content renderers ---------- */

const ModalContent = ({ project }) => {
  switch (project.type) {
    case 'notebook+paper':   return <NotebookPaperView project={project} />;
    case 'notebook+youtube': return <NotebookYouTubeView project={project} />;
    case 'github+video':     return <GithubVideoView project={project} />;
    case 'github':
    default:                 return <GithubView project={project} />;
  }
};

const NotebookPaperView = ({ project }) => (
  <div className="modal-split">
    <div className="modal-embed-wrapper">
      <p className="embed-label">Notebook Preview</p>
      <iframe src={project.notebookUrl} title="Notebook" className="modal-iframe" allowFullScreen />
    </div>
    {project.paperUrl && (
      <div className="modal-side-card">
        <p className="embed-label">Research Paper</p>
        <div className="modal-paper-preview">
          <div className="paper-icon">📄</div>
          <p>View the full research paper</p>
          <a href={project.paperUrl} target="_blank" rel="noreferrer" className="modal-btn primary">
            Open Paper ↗
          </a>
        </div>
      </div>
    )}
  </div>
);

const NotebookYouTubeView = ({ project }) => (
  <div className="modal-split">
    <div className="modal-embed-wrapper">
      <p className="embed-label">Notebook Preview</p>
      <iframe src={project.notebookUrl} title="Notebook" className="modal-iframe" allowFullScreen />
    </div>
    {project.youtubeId && (
      <div className="modal-embed-wrapper">
        <p className="embed-label">Demo Video</p>
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title="YouTube demo"
          className="modal-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )}
  </div>
);

const GithubVideoView = ({ project }) => (
  <div className="modal-split">
    <div className="modal-embed-wrapper">
      <p className="embed-label">Demo Preview</p>
      <video src={project.videoSrc} className="modal-video" controls preload="metadata" />
    </div>
    <div className="modal-side-card">
      <p className="embed-label">Repository</p>
      <div className="modal-paper-preview">
        <div className="paper-icon">⌥</div>
        <p>View the full source code on GitHub</p>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-btn primary">
            Open GitHub ↗
          </a>
        )}
      </div>
    </div>
  </div>
);

const GithubView = ({ project }) => (
  <div className="modal-github-only">
    {project.githubUrl && (
      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-btn primary large">
        View on GitHub ↗
      </a>
    )}
  </div>
);

/* ---------- Footer links ---------- */

const ModalLinks = ({ project }) => {
  const links = [
    project.githubUrl   && { label: 'GitHub',   href: project.githubUrl },
    project.notebookUrl && { label: 'Notebook', href: project.notebookUrl },
    project.paperUrl    && { label: 'Paper',    href: project.paperUrl },
    project.youtubeId   && { label: 'YouTube',  href: `https://youtube.com/watch?v=${project.youtubeId}` },
  ].filter(Boolean);

  return links.map(({ label, href }) => (
    <a key={label} href={href} target="_blank" rel="noreferrer" className="modal-btn secondary">
      {label} ↗
    </a>
  ));
};

export default ProjectModal;
