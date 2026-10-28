import { LogoMark } from "./Logo";
import Link from "next/link";
import Icon from "./Icon";
import Counter from "./Counter";
import { site, ctaPhoto } from "@/lib/site";
import Tilt from "./Tilt";
import ServiceCard from "./ServiceCard";
import PortfolioCarousel from "./PortfolioCarousel";
import AboutPhoto from "./AboutPhoto";
import WorkShowcase from "./WorkShowcase";
import TechTabs from "./TechTabs";
import { SectionHead, Stars, toneClass } from "./Bits";
import { ServiceArt, ProductArt, BlogArt } from "./Art";
import { Faq } from "./Bits";
import {
  services,
  process,
  why,
  expertise,
  stats,
  trustStats,
  products,
  techGroups,
  projects,
  clients,
  industries,
  faqsGeneral,
  regions,
  posts,
} from "@/lib/data";
import { project, MAP_W, MAP_H, dotsPath } from "@/lib/worldDots";

/* ───────── Why choose us ───────── */
function WhyArt() {
  return (
    <div className="why-logo" role="img" aria-label="Digital Dhaga logo">
      <svg viewBox="0 0 360 400" className="why-art-svg" aria-hidden="true">
        <circle cx="180" cy="200" r="170" fill="#fff4ec" stroke="#f6dccb" strokeWidth="2" />
        <circle cx="180" cy="200" r="130" fill="none" stroke="#f6dccb" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="180" cy="200" r="86" fill="#fff" stroke="#14161b" strokeWidth="3" />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="" className="why-logo-img" width="92" height="128" />
    </div>
  );
}

function WhyPoint({ w }) {
  return (
    <li className="why-point">
      <span className="icon-chip"><Icon name={w.icon} size={22} /></span>
      <div>
        <h3>{w.t}</h3>
        <p>{w.d}</p>
      </div>
    </li>
  );
}

export function WhyChoose({ showStats = false, tone = "white", cta = { href: "/about", label: "About us" } }) {
  const left = why.slice(0, 3);
  const right = why.slice(3);
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container">
        <SectionHead
          align="center"
          eyebrow="Why us"
          title="Why Choose Digital Dhaga"
          intro="You are not hiring a template shop. You are getting a small, senior team that plans your site around revenue, builds it properly and stays around when it launches."
        />
        <div className="why-center">
          <ul className="why-side why-left">{left.map((w) => <WhyPoint key={w.t} w={w} />)}</ul>
          <div className="why-art"><WhyArt /></div>
          <ul className="why-side why-right">{right.map((w) => <WhyPoint key={w.t} w={w} />)}</ul>
        </div>
        {cta && (
          <div className="section-foot center">
            <Link href={cta.href} className="btn btn-primary">{cta.label}</Link>
          </div>
        )}

        {showStats && (
          <div className="stats-band">
            <dl>
              {stats.map((s) => (
                <div key={s.label}>
                  <dt><Counter value={s.value} suffix={s.suffix} /></dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────── Services ───────── */
export function ServicesGrid({ tone = "cream", title = "Our Services", intro = "Web design, SEO, social media marketing and ongoing support. One team handles everything that brings customers to your business." }) {
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container">
        <SectionHead eyebrow="What we do" title={title} intro={intro} light={tone === "dark"} />
        <ul className="service-grid">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard s={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Process ───────── */
export function ProcessSteps({ tone = "white", title = "Our Process", intro = "A simple 4-step process from first conversation to measurable results. You stay involved at every step.", variant = "cards" }) {
  if (variant === "timeline") {
    return (
      <section className={`section ${toneClass(tone)}`}>
        <div className="container">
          <SectionHead title={title} intro={intro} />
          <ol className="tl">
            {process.map((p, i) => (
              <li key={p.t} className="tl-item">
                <span className="tl-num" aria-hidden="true">{i + 1}</span>
                <div className="tl-card">
                  <small>Step {i + 1}</small>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container">
        <SectionHead title={title} intro={intro} />
        <ol className="process">
          {process.map((p, i) => (
            <li key={p.t} className="process-step">
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── Products ───────── */
export function ProductsSection() {
  return (
    <section className="section orange">
      <div className="container">
        <SectionHead
          title="Ready-Made Website Products"
          intro="Not everything needs a custom build. These proven tools get you online fast and can be tailored to your brand."
        >
        </SectionHead>
        <ul className="product-grid">
          {products.map((p) => (
            <li key={p.slug} className="product">
              <div className="product-art"><ProductArt variant={p.variant} /></div>
              <div className="product-body">
                <div className="product-top">
                  <h3>{p.name}</h3>
                  <span className="pill">{p.tag}</span>
                </div>
                <p>{p.d}</p>
                <ul className="mini-checks">
                  {p.points.map((pt) => (
                    <li key={pt}><Icon name="check" size={16} strokeWidth={2.6} /> {pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className="link-arrow">Ask about {p.name} <Icon name="arrow" size={16} /></Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Technology (tabs) ───────── */
export function TechnologySection({ tone = "white" }) {
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container">
        <SectionHead
          align="center"
          eyebrow="Our toolkit"
          title="Technologies We Use"
          intro="We choose tools for the job, not for fashion. Modern frameworks keep sites fast, proven databases keep data safe, and cloud hosting keeps everything online."
        />
        <TechTabs groups={techGroups} />
      </div>
    </section>
  );
}

/* ───────── Our expertise ───────── */
export function ExpertiseSection({ tone = "white" }) {
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container">
        <SectionHead eyebrow="Our Expertise" title="What We Help You Achieve" intro="Four things we do for every client: get you found, get you followed, get you enquiries and prove the results." />
        <ul className="expertise-grid">
          {expertise.map((x) => (
            <li key={x.t} className="expertise-card">
              <span className="icon-chip"><Icon name={x.icon} size={28} /></span>
              <div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Portfolio ───────── */
export function PortfolioCarouselSection({ tone = "white", title = "Our Work", intro = "A glimpse of the websites, social media designs and brand identities we create to help growing businesses look professional and get noticed.", showHead = true, showMore = true }) {
  return (
    <section className={`section ${toneClass(tone)}`} id="work">
      <div className="container">
        {showHead && <SectionHead title={title} intro={intro} />}
        <WorkShowcase projects={projects} />
        {showMore && (
          <div className="section-foot center">
            <Link href="/our-work" className="btn btn-primary">View all projects</Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────── Trusted by: text on the left, auto-moving logo carousel on the right ───────── */
export function TrustedBy() {
  // Add or swap client logos in lib/data.js (clients). Repeated so the marquee always fills the width.
  const list = clients;
  const row = [...list, ...list, ...list, ...list];
  return (
    <section className="brands" aria-labelledby="brands-title">
      <div className="container brands-split">
        <div className="brands-copy">
          <h2 id="brands-title" className="brands-title">Brands We Proudly Work With</h2>
          <p>Growing businesses trust us with their websites, social media and branding.</p>
        </div>
        <div className="brands-marquee" aria-label="Logos of brands we work with">
          <ul className="brands-track">
            {row.map((c, i) => (
              <li key={i} aria-hidden={i >= list.length}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={i >= list.length ? "" : c.name} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────── About us ───────── */
export function AboutSection({ tone = "white" }) {
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container about-split">
        <div className="about-copy">
          <span className="eyebrow">About us</span>
          <h2>We Help Businesses Grow Online With Websites and Marketing That Work</h2>
          <p>
            Digital Dhaga is a web design and digital marketing agency with 10 years of experience. We are a small,
            senior team of designers, developers and marketers who plan every project around one goal: more customers for
            your business.
          </p>
          <p>
            From a fast, SEO-ready website to Google rankings and social media campaigns, we handle it all under one roof,
            with one point of contact and clear monthly reports, so you always know what your investment is earning.
          </p>
          <ul className="about-points">
            <li><Icon name="check" size={18} strokeWidth={2.8} /> 250+ projects delivered</li>
            <li><Icon name="check" size={18} strokeWidth={2.8} /> Clients in 6+ countries</li>
            <li><Icon name="check" size={18} strokeWidth={2.8} /> Transparent, ROI-focused reporting</li>
          </ul>
          <Link href="/about" className="btn btn-primary btn-lg">Read more <Icon name="arrow" size={18} /></Link>
        </div>
        <div className="about-image">
          <AboutPhoto />
        </div>
      </div>
    </section>
  );
}

/* ───────── SEO feature ───────── */
const seoPoints = [
  "Technical SEO audit and fixes",
  "Keyword research by country and language",
  "On-page optimisation and content plan",
  "Local SEO and Google Business Profile",
  "Quality link building",
  "Monthly ranking and lead reports",
];

export function SeoSection({ tone = "cream" }) {
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container about-split seo-split">
        <div className="about-copy">
          <span className="eyebrow">SEO services</span>
          <h2>SEO That Puts Your Business on Page One of Google</h2>
          <p>
            Most customers start with a search. We make sure they find you first. Our SEO combines technical fixes,
            useful content and trusted links, so you get steady organic traffic that turns into enquiries, without paying
            for every click.
          </p>
          <ul className="seo-points">
            {seoPoints.map((p) => (
              <li key={p}><Icon name="check" size={18} strokeWidth={2.8} /> {p}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link href="/services/seo-digital-marketing" className="btn btn-ghost btn-lg">Explore SEO services</Link>
          </div>
        </div>
        <Tilt className="seo-visual-wrap"><div className="seo-visual" role="img" aria-label="Example of a website ranking first on Google search results">
          <div className="serp">
            <div className="serp-bar"><Icon name="search" size={18} /> <span>best web design company near me</span></div>
            <div className="serp-item serp-top">
              <span className="serp-rank">#1</span>
              <div>
                <p className="serp-site">digitaldhaga.com</p>
                <p className="serp-title">Web Design &amp; SEO Company | Digital Dhaga</p>
                <p className="serp-desc">Fast, SEO-ready websites and marketing that bring you more customers.</p>
              </div>
            </div>
            <div className="serp-item"><span className="serp-rank">#2</span><div><span className="serp-line w70" /><span className="serp-line w90" /></div></div>
            <div className="serp-item"><span className="serp-rank">#3</span><div><span className="serp-line w60" /><span className="serp-line w80" /></div></div>
          </div>
          <div className="serp-stat serp-stat-a"><strong>+187%</strong><small>organic traffic</small></div>
          <div className="serp-stat serp-stat-b"><strong>342</strong><small>page-one keywords</small></div>
        </div></Tilt>
      </div>
    </section>
  );
}

/* ───────── Full-width CTA with background image ───────── */
export function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-banner-title" style={{ "--cta-photo": `url("${ctaPhoto}")` }}>
      <div className="container cta-banner-grid">
        <div className="cta-banner-copy">
          <h2 id="cta-banner-title">Ready to Grow Your Business Online?</h2>
          <p>
            Tell us about your goals. Within one working day we will reply with an SEO audit, ideas to rank higher and a
            fixed quote.
          </p>
        </div>
        <div className="cta-person">
          <span className="cta-person-avatar" aria-hidden="true"><LogoMark size={72} /></span>
          <strong>Digital Dhaga</strong>
          <span>Digital Marketing Experts</span>
          <Link href="/contact" className="btn btn-primary btn-consult">Consultation <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Industries we specialize in ───────── */
export function IndustriesSection({ tone = "cream" }) {
  return (
    <section className={`section ${toneClass(tone)} industries`}>
      <div className="container">
        <SectionHead eyebrow="Industries" title="Industries We Serve" intro="We have built websites for businesses in these fields, so we already know what their customers look for.">
        </SectionHead>
        <ul className="industry-grid">
          {industries.map((x) => (
            <li key={x.name} className="glow-card">
              <span className="industry-icon"><Icon name={x.icon} size={34} strokeWidth={1.6} /></span>
              <span className="industry-name">{x.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Trust bar ───────── */
export function TrustBar() {
  return (
    <section className="section trustbar" aria-label="Digital Dhaga in numbers">
      <div className="container">
        <dl className="trustbar-grid">
          {trustStats.map((s) => (
            <div key={s.label}>
              <span className="trustbar-icon"><Icon name={s.icon} size={26} /></span>
              <dt><Counter value={s.value} suffix={s.suffix} /></dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ───────── Global presence ───────── */
export function GlobalPresence() {
  return (
    <section className="section dark global">
      <div className="container">
        <SectionHead
          light
          title="Our Global Presence"
          intro="Our team works across time zones so that your project keeps moving while you sleep. Calls, support and delivery are planned around your working hours."
        >
        </SectionHead>

        <div className="map-wrap map-simple">
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="map" role="img" aria-label="World map showing the countries where Digital Dhaga has clients">
            <path d={dotsPath} className="map-dots" />
            {regions.map((r) => {
              const p = project(r.lon, r.lat);
              return (
                <g key={r.name} transform={`translate(${p.x} ${p.y})`}>
                  <title>{r.name}</title>
                  <circle r={r.hq ? 7 : 5} className={r.hq ? "map-pin hq" : "map-pin"} />
                </g>
              );
            })}
          </svg>
        </div>

        <ul className="country-grid">
          {regions.map((r) => (
            <li key={r.name} className={r.hq ? "hq" : ""}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/flags/${r.flag}.svg`} alt="" width="36" height="24" loading="lazy" />
              <strong>{r.name}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Blog ───────── */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

export function BlogCard({ post }) {
  return (
    <article className="post-card card-hard">
      <Link href={`/blog/${post.slug}`} className="post-link">
        <div className="post-art"><BlogArt index={post.cover} /></div>
        <div className="post-body">
          <p className="post-meta">
            <span className="pill">{post.category}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime} min read</span>
          </p>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span className="link-arrow">Read article <Icon name="arrow" size={16} /></span>
        </div>
      </Link>
    </article>
  );
}

export function BlogPreview() {
  const latest = posts.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <SectionHead title="Website Tips & Articles" intro="Simple advice on websites, speed, SEO and selling online." />
        <ul className="post-grid">
          {latest.map((p) => (
            <li key={p.slug}><BlogCard post={p} /></li>
          ))}
        </ul>
        <div className="section-foot">
          <Link href="/blog" className="btn btn-ghost">Read more articles</Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ (home) ───────── */
export function FaqSection({ tone = "cream" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsGeneral.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className={`section ${toneClass(tone)}`}>
      <div className="container narrow">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" intro="Straight answers about cost, timelines, ownership and support." />
        <Faq items={faqsGeneral} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}


/* ───────── 24x7 support ───────── */
export function SupportSection() {
  const wa = `https://wa.me/${site.whatsapp}`;
  return (
    <section className="section bg-white support-section">
      <div className="container">
        <div className="support-card">
          <div className="support-badge" aria-hidden="true">
            <Icon name="headset" size={34} strokeWidth={1.7} />
            <strong>24x7</strong>
            <small>Support</small>
          </div>
          <div className="support-copy">
            <h2>24x7 Support, Whenever You Need Us</h2>
            <p>
              Site down at midnight or a campaign question on a Sunday? Our team is on call around the clock, so
              problems get fixed fast and you never wait for the next working day.
            </p>
            <div className="btn-row">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-white"><Icon name="call" size={18} /> Call us</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">WhatsApp</a>
              <a href={`mailto:${site.email}`} className="btn btn-outline-white"><Icon name="mail" size={18} /> Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
