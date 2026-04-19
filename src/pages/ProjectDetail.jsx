import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import CustomPdfViewer from '../components/CustomPdfViewer';

import { projects } from './../data/projectData';


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate('/projects')} className="detail-back-btn">
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">

      {/* Back nav */}
      <button className="detail-back-btn" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </button>

      {/* Hero */}
      <header className="detail-hero">
        <div className="detail-hero-text">
          <p className="detail-eyebrow">{project.type?.replace(/\+/g, ' · ')}</p>
          <h1 className="detail-title">{project.title}</h1>
          {project.date && <p className="detail-date">{project.date}</p>}
        </div>
        {project.tags?.length > 0 && (
          <div className="detail-tags">
            {project.tags.map(tag => <span key={tag} className="detail-tag">{tag}</span>)}
          </div>
        )}
      </header>

      <div className="detail-divider" />

      {/* Body — sections driven by project.sections array */}
      <main className="detail-body">
        {project.sections?.map((section, i) => (
          <DetailSection key={i} section={section} project={project} />
        ))}
      </main>

      {/* Writeup */}
      {project.writeup && (
        <section className="detail-writeup">
          <h2 className="detail-writeup-heading">Write-up</h2>
          <div className="detail-writeup-body">
            {project.writeup.map((block, i) => (
              <WriteupBlock key={i} block={block} />
            ))}
          </div>
        </section>
      )}

      {/* Footer links */}
      <footer className="detail-footer">
        <DetailLinks project={project} />
      </footer>

    </div>
  );
};

/* ─── Section renderer ───────────────────────────────────── */

const DetailSection = ({ section, project }) => {
  switch (section.type) {
    case 'notebook':
      const handleIframeLoad = (e) => {
        const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
        if (!iframeDoc) return;

        // 1. Grab the current theme from the main website and push it into the iframe
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        iframeDoc.documentElement.setAttribute('data-theme', currentTheme);

        // 2. Set up a listener so that if the user clicks the toggle button AFTER the iframe loads,
        // the iframe instantly updates to match.
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
              const newTheme = document.documentElement.getAttribute('data-theme');
              iframeDoc.documentElement.setAttribute('data-theme', newTheme);
            }
          });
        });

        // Watch the main website's HTML tag for theme changes
        observer.observe(document.documentElement, { attributes: true });
      };
      return (
        <div className="detail-section">
          {section.label && <p className="detail-section-label">{section.label}</p>}
          {section.commentary && <p className="detail-commentary">{section.commentary}</p>}
          <div className="detail-embed-wrapper">
            <iframe
              src={section.url ?? project.notebookUrl}
              title={section.label ?? 'Notebook'}
              className="detail-iframe detail-iframe--tall"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      );

    case 'youtube':
      return (
        <div className="detail-section">
          {section.label && <p className="detail-section-label">{section.label}</p>}
          {section.commentary && <p className="detail-commentary">{section.commentary}</p>}
          <div className="detail-embed-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${section.youtubeId ?? project.youtubeId}`}
              title={section.label ?? 'Video'}
              className="detail-iframe detail-iframe--video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );

    case 'video':
      return (
        <div className="detail-section">
          {section.label && <p className="detail-section-label">{section.label}</p>}
          {section.commentary && <p className="detail-commentary">{section.commentary}</p>}
          <video
            src={section.src ?? project.videoSrc}
            className="detail-video"
            controls
            preload="metadata"
          />
        </div>
      );

    case 'paper':
      return (
        <div className="detail-section">
          {section.label && <p className="detail-section-label">{section.label}</p>}
          {section.commentary && <p className="detail-commentary">{section.commentary}</p>}
          <div className="detail-embed-wrapper">
            <CustomPdfViewer fileUrl={section.url ?? project.paperUrl} />
          </div>
        </div>
      );

    case 'commentary':
      return (
        <div className="detail-section detail-section--commentary-only">
          {section.label && <p className="detail-section-label">{section.label}</p>}
          <p className="detail-commentary">{section.text}</p>
        </div>
      );

    default:
      return null;
  }
};

/* ─── Writeup blocks ─────────────────────────────────────── */

const WriteupBlock = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="writeup-paragraph">{block.text}</p>;
    case 'heading':
      return <h3 className="writeup-heading">{block.text}</h3>;
    case 'list':
      return (
        <ul className="writeup-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
};

/* ─── Footer links ───────────────────────────────────────── */

const DetailLinks = ({ project }) => {
  const links = [
    project.githubUrl   && { label: 'GitHub',   href: project.githubUrl },
    project.notebookUrl && { label: 'Notebook', href: project.notebookUrl },
    project.paperUrl    && { label: 'Paper',    href: project.paperUrl },
    project.youtubeId   && { label: 'YouTube',  href: `https://youtube.com/watch?v=${project.youtubeId}` },
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <div className="detail-links">
      <p className="detail-section-label">External Links</p>
      <div className="detail-links-row">
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="detail-link-btn">
            {label} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
