"use client";

import { useState } from "react";

export function ProjectCard({ p }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="project card-hard glow-card project-compact">
      <a className="project-art site-shot" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.domain}`}>
        {p.image && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`${p.title} website homepage`} width="1100" height="688" loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <span className="site-shot-fallback" style={{ "--site-accent": p.accent }}>{p.title}</span>
        )}
      </a>
      <div className="project-body">
        <h3>{p.title}</h3>
        <a className="site-link" href={p.url} target="_blank" rel="noopener noreferrer">
          {p.domain} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function PortfolioGrid({ projects, limit }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <ul className="project-grid">
      {list.map((p) => (
        <li key={p.slug}>
          <ProjectCard p={p} />
        </li>
      ))}
    </ul>
  );
}
