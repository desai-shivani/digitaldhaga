"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";
import PortfolioCarousel from "./PortfolioCarousel";

// One brochure: a swipeable row of page previews. Tap a page to read it full size.
export default function BrochureViewer({ b }) {
  const [open, setOpen] = useState(null); // index of the page shown in the viewer
  const total = b.pages.length;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + total) % total)), [total]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden"; // lock <html>, not <body> (see Header.js)
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <div className="brochure">
      <div className="brochure-head">
        <h3>{b.title}</h3>
        <a className="btn btn-dark btn-sm" href={b.pdf} target="_blank" rel="noopener noreferrer">
          Open full PDF <Icon name="arrow" size={16} />
        </a>
      </div>

      <PortfolioCarousel
        items={b.pages}
        label={`${b.title} pages`}
        slideClass="brochure-slide"
        renderItem={(pg, i) => (
          <button type="button" className="brochure-page" onClick={() => setOpen(i)} aria-label={`Read page ${i + 1} of ${total}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pg.thumb} alt={`${b.title}, page ${i + 1}`} width="560" height="792" loading="lazy" />
            <span className="brochure-num">{i + 1}</span>
          </button>
        )}
      />

      {open !== null &&
        // rendered on <body> so it always covers the whole screen (a parent with an animation would otherwise clip it)
        createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${b.title}, page ${open + 1} of ${total}`} onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            <Icon name="close" size={24} />
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous page"
          >
            <Icon name="arrow" size={22} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.pages[open].full} alt={`${b.title}, page ${open + 1}`} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next page"
          >
            <Icon name="arrow" size={22} />
          </button>
          <span className="lightbox-count">{open + 1} / {total}</span>
        </div>
      , document.body)}
    </div>
  );
}
