import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { PageHero, Faq, SectionHead } from "@/components/Bits";
import { WhyChoose, ProcessSteps, CtaBanner } from "@/components/Sections";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.intro,
        url: `${site.url}/services/${s.slug}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/services/${s.slug}` },
        ],
      },
      ...(s.faqs?.length
        ? [{ "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title={s.title}
        intro={s.short}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
        cards={[
          { icon: s.icon, t: s.title, d: "Done by one team" },
          { icon: "check", t: s.features[0].t, d: "Included" },
          { icon: "check", t: s.features[1].t, d: "Included" },
        ]}
        actions={
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Get a quote <Icon name="arrow" size={16} />
            </Link>
            <a href="#included" className="btn btn-ghost">What is included</a>
          </div>
        }
      />

      <section className="section bg-white">
        <div className="container detail-grid">
          <div>
            <h2>Overview</h2>
            <p className="section-intro">{s.intro}</p>
            <h3 className="sub-h" id="included">What is included</h3>
            <ul className="feature-grid">
              {s.features.map((f) => (
                <li key={f.t} className="feature">
                  <span className="icon-chip small"><Icon name="check" size={18} strokeWidth={2.6} /></span>
                  <div>
                    <h4>{f.t}</h4>
                    <p>{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-aside">
            <div className="aside-card">
              <h3>You will receive</h3>
              <ul className="mini-checks">
                {s.deliverables.map((d) => (
                  <li key={d}><Icon name="check" size={16} strokeWidth={2.6} /> {d}</li>
                ))}
              </ul>
              <h3>Tools we use</h3>
              <ul className="tags">
                {s.tech.map((t) => (<li key={t}>{t}</li>))}
              </ul>
              <Link href="/contact" className="btn btn-dark btn-block">Discuss your project</Link>
            </div>
          </aside>
        </div>
      </section>

      <WhyChoose tone="cream" cta={{ href: "/contact", label: "Discuss your project" }} />

      <ProcessSteps tone="white" title="How we deliver it" intro="The same four stages for every service, scaled to the size of the job." />

      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="FAQs" title={`${s.title}: Frequently Asked Questions`} />
          <Faq items={s.faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
