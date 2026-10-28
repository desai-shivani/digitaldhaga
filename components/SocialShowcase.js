import Link from "next/link";
import Icon from "./Icon";
import { SocialPost } from "./WorkArt";
import { socialPosts } from "@/lib/data";

// Aceternity-style "3D marquee": a tilted wall of posts that keeps drifting up and down,
// each post with a soft reflection underneath.
function Column({ items, reverse = false }) {
  const loop = [...items, ...items];
  return (
    <div className={`s3d-col${reverse ? " reverse" : ""}`}>
      <div className="s3d-track">
        {loop.map((p, i) => (
          <div className="s3d-card" key={i} aria-hidden={i >= items.length}>
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="work-img" src={p.image} alt="" loading="lazy" />
            ) : (
              <SocialPost p={p} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialShowcase() {
  // Deal every post into one of 5 columns so each post appears once and brands are mixed.
  const cols = Array.from({ length: 5 }, (_, c) => socialPosts.filter((_, i) => i % 5 === c));
  return (
    <section className="s3d" aria-labelledby="s3d-title">
      <div className="s3d-view" aria-hidden="true">
        <div className="s3d-stage">
          {cols.map((c, i) => (
            <Column key={i} items={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
      <div className="s3d-shade" aria-hidden="true" />
      <div className="container s3d-copy">
        <span className="s3d-chip"><Icon name="users" size={16} /> Social media marketing</span>
        <h2 id="s3d-title">Scroll-Stopping Posts That Grow Your Brand</h2>
        <p>
          Eye-catching graphics, reels and campaigns for Instagram, Facebook and LinkedIn, designed to get noticed,
          shared and turned into enquiries.
        </p>
        <Link href="/services/social-media-marketing" className="btn btn-primary btn-lg">
          Grow on social media <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
