"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { ProjectCard } from "./PortfolioGrid";

// Scroll-snap carousel: swipe on touch, arrows + dots on desktop.
export default function PortfolioCarousel({ projects, items, renderItem, label = "Recent projects", slideClass = "" }) {
  const list = items ?? projects;
  const render = renderItem ?? ((p) => <ProjectCard p={p} />);
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  // arrows and dots only appear when there are more cards than fit on screen
  const [scrollable, setScrollable] = useState(false);

  const slides = () => Array.from(track.current?.children ?? []);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const items = Array.from(el.children);
    if (!items.length) return;
    setScrollable(el.scrollWidth > el.clientWidth + 4);
    // the slide whose left edge is nearest the viewport's left edge
    let best = 0;
    let bestDist = Infinity;
    items.forEach((it, i) => {
      const d = Math.abs(it.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (d < bestDist) {
        best = i;
        bestDist = d;
      }
    });
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = items.length - 1;
    setIndex(best);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const goTo = (i) => {
    const items = slides();
    const target = items[Math.max(0, Math.min(items.length - 1, i))];
    if (!target) return;
    track.current.scrollTo({ left: target.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className={`carousel${scrollable ? "" : " no-scroll"}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <button type="button" className="btn btn-sm carousel-nav prev" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous">
        <Icon name="arrow" size={20} />
      </button>
      <ul className="carousel-track" ref={track} tabIndex={0}>
        {list.map((p, i) => (
          <li key={p.slug ?? i} className={`carousel-slide ${slideClass}`} aria-roledescription="slide" aria-label={`${i + 1} of ${list.length}`}>
            {render(p, i)}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-sm carousel-nav next" onClick={() => goTo(index + 1)} disabled={index >= list.length - 1} aria-label="Next">
        <Icon name="arrow" size={20} />
      </button>
      <div className="carousel-dots">
        {list.map((p, i) => (
          <button key={p.slug ?? i} type="button" className={i === index ? "on" : ""} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}
