"use client";

import { useState } from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import { SocialPost, LogoTile } from "./WorkArt";
import BrochureViewer from "./BrochureViewer";
import { socialPosts, logoWork, brochures } from "@/lib/data";

const tabs = [
  { id: "websites", label: "Websites We Built", count: "Websites" },
  { id: "social", label: "Social Media Posts", count: "Posts" },
  { id: "logos", label: "Logos & Branding", count: "Logos" },
  { id: "brochures", label: "Brochures", count: "Brochures" },
];

export default function WorkShowcase({ projects }) {
  const [tab, setTab] = useState("websites");
  const [more, setMore] = useState(false);
  const shownPosts = more ? socialPosts : socialPosts.slice(0, 8);
  return (
    <div className="work">
      <div className="work-tabs" role="tablist" aria-label="Types of work">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`work-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`work-panel-${t.id}`}
            className={tab === t.id ? "on" : ""}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`work-panel-${tab}`} aria-labelledby={`work-tab-${tab}`} className="work-panel" key={tab}>
        {tab === "websites" && <PortfolioCarousel projects={projects} />}
        {tab === "social" && (
          <ul className="post-grid-work">
            {shownPosts.map((p) => (
              <li key={p.image} className="work-item">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="work-img post-img" src={p.image} alt={`${p.brand} social media post`} width="800" height="1000" loading="lazy" />
                ) : (
                  <SocialPost p={p} />
                )}
                <h3>{p.brand}</h3>
              </li>
            ))}
          </ul>
        )}
        {tab === "social" && socialPosts.length > 8 && (
          <div className="section-foot center">
            <button type="button" className="btn btn-dark" onClick={() => setMore((v) => !v)}>
              {more ? "Show fewer posts" : `Show all ${socialPosts.length} posts`}
            </button>
          </div>
        )}
        {tab === "brochures" && brochures.map((b) => <BrochureViewer key={b.slug} b={b} />)}
        {tab === "logos" && (
          <ul className="logo-grid-work">
            {logoWork.map((l) => (
              <li key={l.name} className="work-item">
                {l.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <div className={`logo-img-tile${l.card ? " is-card" : ""}`}>
                    <img src={l.image} alt={l.card ? l.name : `${l.name} logo`} loading="lazy" />
                  </div>
                ) : (
                  <LogoTile l={l} />
                )}
                <h3>{l.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
