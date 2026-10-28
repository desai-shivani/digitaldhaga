"use client";

import Link from "next/link";
import Icon from "./Icon";
import ServiceIcon from "./ServiceIcon";

// Card with a cursor-following spotlight and glowing border on hover.
export default function ServiceCard({ s }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Link href={`/services/${s.slug}`} className="service-card spot" onMouseMove={move}>
      <span className="spot-glow" aria-hidden="true" />
      <span className="svc-icon"><ServiceIcon slug={s.slug} /></span>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      <ul className="mini-checks">
        {(s.benefits || []).map((b) => (
          <li key={b}><Icon name="check" size={16} strokeWidth={2.8} /> <span>{b}</span></li>
        ))}
      </ul>
      <span className="link-arrow">Learn more <Icon name="arrow" size={16} /></span>
    </Link>
  );
}
