import Link from "next/link";
import Icon from "./Icon";

// Benefit tiles shown on the right of the hero. Edit freely.
const tiles = [
  { icon: "target", t: "Reach your targeted audience" },
  { icon: "search", t: "Rank on page one of Google" },
  { icon: "users", t: "Grow your social media following" },
  { icon: "bolt", t: "Fast, SEO-ready websites" },
  { icon: "award", t: "Measurable results every month" },
];

function Tile({ icon, t }) {
  return (
    <div className="bt glow-card">
      <span className="bt-icon"><Icon name={icon} size={34} strokeWidth={1.7} /></span>
      <p>{t}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero hero-dark" aria-labelledby="hero-title">
      {/* decorative line-art background: flowing lines + dashed orange curve (left), design wireframe (right) */}
      <div className="hero-art hero-art-lines" aria-hidden="true" />
      <div className="hero-art hero-art-wire" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Performance-Driven <span className="hl">Digital Marketing</span> &amp; Web Design Company
          </h1>
          <p className="lead">
            At Digital Dhaga, we do not just promise results, we deliver measurable growth. With 10 years of
            experience, our ROI-focused SEO, social media marketing and website services help you climb Google rankings,
            drive traffic and generate leads that convert.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary btn-lg btn-glow">
              Connect with us <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Benefits of working with Digital Dhaga">
          <div className="bt-wrap">
            <span className="bt-badge" aria-hidden="true">
              <Icon name="rocket" size={30} strokeWidth={1.6} />
              <small>Benefits</small>
            </span>
            <div className="bt-col bt-col-1">
              <Tile {...tiles[0]} />
              <Tile {...tiles[2]} />
            </div>
            <div className="bt-col bt-col-2">
              <Tile {...tiles[1]} />
              <Tile {...tiles[4]} />
            </div>
            <div className="bt-col bt-col-3">
              <Tile {...tiles[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
