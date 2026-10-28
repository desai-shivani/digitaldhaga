"use client";

import { useRef, useState } from "react";
import { techIcons } from "@/lib/techIcons";

function TechLogo({ name, abbr }) {
  const icon = techIcons[name];
  return (
    <li className="tech-chip">
      {icon ? (
        <svg viewBox="0 0 24 24" width="36" height="36" fill={icon.hex} aria-hidden="true" focusable="false">
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="tech-badge" aria-hidden="true">{abbr}</span>
      )}
      <span>{name}</span>
    </li>
  );
}

export default function TechTabs({ groups }) {
  const [active, setActive] = useState(groups[0].id);
  const refs = useRef({});

  const onKey = (e, i) => {
    let n = null;
    if (e.key === "ArrowRight") n = (i + 1) % groups.length;
    if (e.key === "ArrowLeft") n = (i - 1 + groups.length) % groups.length;
    if (n === null) return;
    e.preventDefault();
    setActive(groups[n].id);
    refs.current[groups[n].id]?.focus();
  };

  const current = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <div className="tech-tabs-wrap">
      <div className="tech-tablist" role="tablist" aria-label="Technology categories">
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => (refs.current[g.id] = el)}
            type="button"
            role="tab"
            id={`tech-tab-${g.id}`}
            aria-selected={g.id === active}
            aria-controls="tech-panel"
            tabIndex={g.id === active ? 0 : -1}
            className={`btn btn-sm tech-tab${g.id === active ? " on" : ""}`}
            onClick={() => setActive(g.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div id="tech-panel" role="tabpanel" aria-labelledby={`tech-tab-${current.id}`} className="tech-panel-grid">
        <ul key={current.id}>
          {current.items.map(([name, abbr]) => (
            <TechLogo key={name} name={name} abbr={abbr} />
          ))}
        </ul>
      </div>
    </div>
  );
}
