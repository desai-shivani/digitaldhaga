import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

// Section background: cream is the page colour; the other bands break up the rhythm.
export function toneClass(tone = "cream") {
  return { cream: "", white: "bg-white", dark: "dark", orange: "orange" }[tone] ?? "";
}

export function SectionHead({ title, intro, eyebrow, align = "center", light = false, children }) {
  return (
    <div className={`section-head ${align === "center" ? "center" : ""}${light ? " light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
      {children}
    </div>
  );
}

export function Stars({ n = 5 }) {
  return (
    <span className="stars" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={18} filled strokeWidth={1.2} />
      ))}
    </span>
  );
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
            <Icon name="chevron" size={20} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

// SEO FAQ section: heading + accordion + FAQPage structured data for Google.
export function FaqSection({ title, intro, items, tone = "white" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className={`section ${toneClass(tone)}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container narrow">
        <SectionHead eyebrow="FAQs" title={title} intro={intro} />
        <Faq items={items} />
      </div>
    </section>
  );
}

// Default cards shown on the right of the page header (icon, title, one short line).
const defaultHeroCards = [
  { icon: "layout", t: "Websites", d: "Fast and mobile-first" },
  { icon: "search", t: "SEO", d: "Rank higher on Google" },
  { icon: "users", t: "Social media", d: "Grow your audience" },
];

// Dark page header used on every page. `cards` = up to 3 { icon, t, d }.
// `actions` replaces the default buttons; pass `false` to hide them.
export function PageHero({ title, intro, crumbs = [], cards = defaultHeroCards, actions }) {
  const [c1, c2, c3] = cards;
  const buttons =
    actions === false ? null : actions ?? (
      <div className="btn-row">
        <Link href="/contact" className="btn btn-primary">
          Get a free quote <Icon name="arrow" size={16} />
        </Link>
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
          <Icon name="call" size={16} /> {site.phone}
        </a>
      </div>
    );
  return (
    <section className="ph">
      <div className="ph-glow" aria-hidden="true" />
      <div className="container ph-inner">
        <div className="ph-text">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) =>
              c.href ? (
                <span key={c.label}>
                  <Icon name="chevron" size={14} className="crumb-sep" />
                  <Link href={c.href}>{c.label}</Link>
                </span>
              ) : (
                <span key={c.label} aria-current="page">
                  <Icon name="chevron" size={14} className="crumb-sep" />
                  {c.label}
                </span>
              )
            )}
          </nav>
          <h1>{title}</h1>
          {intro && <p className="lead">{intro}</p>}
          {buttons}
        </div>

        <div className="ph-art" aria-hidden="true">
          <span className="ph-shape" />
          <span className="ph-dot" />
          {c1 && (
            <div className="ph-card ph-card-a">
              <div className="ph-card-top"><Icon name={c1.icon} size={44} strokeWidth={1.6} /></div>
              <div className="ph-card-bottom"><strong>{c1.t}</strong><span>{c1.d}</span></div>
            </div>
          )}
          {c2 && (
            <div className="ph-card ph-card-b">
              <div className="ph-card-top"><Icon name={c2.icon} size={44} strokeWidth={1.6} /></div>
              <div className="ph-card-bottom"><strong>{c2.t}</strong><span>{c2.d}</span></div>
            </div>
          )}
          {c3 && (
            <div className="ph-card ph-card-c">
              <span className="ph-card-icon"><Icon name={c3.icon} size={30} strokeWidth={1.8} /></span>
              <div><strong>{c3.t}</strong><span>{c3.d}</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTA({ tone = "cream", title = "Get a Website & SEO Audit", text = "Tell us about your business. Within one working day we will reply with ideas to rank higher, a timeline and a fixed quote." }) {
  return (
    <section className={`section cta-section ${toneClass(tone)}`}>
      <div className="container">
        <div className="cta-card">
          <div className="cta-sun" aria-hidden="true" />
          <div className="cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-dark">
                Get my audit
              </Link>
              <a href={`mailto:${site.email}`} className="btn btn-ghost-dark">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
