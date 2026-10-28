"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

// Things that fade and rise into place as they scroll into view.
const REVEAL = [
  ".section-head",
  ".service-grid > li",
  ".why-intro",
  ".why-card",
  ".stats-band",
  ".steps > li",
  ".product-grid > li",
  ".tech-art",
  ".tech-copy",
  ".project-grid > li",
  ".map-wrap",
  ".region-facts > div",
  ".region-list > li",
  ".post-grid > li",
  ".feature-post",
  ".story-art",
  ".story-copy",
  ".mv",
  ".value",
  ".feature",
  ".related-grid > li",
  ".faq details",
  ".form-card",
  ".contact-info > *",
  ".post-cover",
  ".prose > *",
  ".post-note",
  ".cta-card",
].join(",");

const TILT = ".service-card, .project, .product, .post-card, .related";

export default function Interactions() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  /* ───── scroll reveal (re-runs on every page change) ───── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll(REVEAL)].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92
    );
    // stagger siblings that appear together
    const seen = new Map();
    els.forEach((el) => {
      const n = seen.get(el.parentElement) || 0;
      seen.set(el.parentElement, n + 1);
      el.style.setProperty("--d", `${Math.min(n, 6) * 90}ms`);
      el.classList.add("reveal");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add("in");
          // hand control back to normal hover styles once the entrance is done
          setTimeout(() => el.classList.remove("reveal", "in"), 1300);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  /* ───── scroll progress, back-to-top, parallax variable ───── */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scroll", String(Math.round(y)));
      setShowTop(y > 800);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  /* ───── pointer effects: hero parallax, card tilt, spotlight, magnetic buttons ───── */
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let tilted = null;
    let magnet = null;

    const reset = (el) => {
      el.style.removeProperty("--rx");
      el.style.removeProperty("--ry");
    };

    const onMove = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;

      // hero parallax
      const hero = t.closest(".hero");
      if (hero) {
        const hv = hero.querySelector(".hv");
        if (hv) {
          const r = hero.getBoundingClientRect();
          hv.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
          hv.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
        }
      }

      // spotlight on dark and orange bands
      const band = t.closest(".dark, .orange");
      if (band) {
        const r = band.getBoundingClientRect();
        band.style.setProperty("--sx", `${e.clientX - r.left}px`);
        band.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }

      // glow cards: cursor-following spotlight + border glow
      const glow = t.closest(".glow-card");
      if (glow) {
        const r = glow.getBoundingClientRect();
        glow.style.setProperty("--mx", `${e.clientX - r.left}px`);
        glow.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      // card tilt
      const card = t.closest(TILT);
      if (tilted && tilted !== card) reset(tilted);
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
      }
      tilted = card;

      // magnetic large buttons
      const btn = t.closest(".btn-lg, .header-cta .btn");
      if (magnet && magnet !== btn) {
        magnet.style.removeProperty("--bx");
        magnet.style.removeProperty("--by");
      }
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--bx", `${((e.clientX - (r.left + r.width / 2)) * 0.18).toFixed(1)}px`);
        btn.style.setProperty("--by", `${((e.clientY - (r.top + r.height / 2)) * 0.28).toFixed(1)}px`);
      }
      magnet = btn;
    };

    const onLeaveDoc = () => {
      if (tilted) reset(tilted);
      tilted = null;
      document.querySelectorAll(".hv").forEach((hv) => {
        hv.style.setProperty("--mx", "0");
        hv.style.setProperty("--my", "0");
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveDoc);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeaveDoc);
    };
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        className={`to-top${showTop ? " show" : ""}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="arrow" size={22} strokeWidth={2.4} className="to-top-icon" />
      </button>
    </>
  );
}
