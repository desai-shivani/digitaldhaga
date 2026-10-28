import Icon from "@/components/Icon";
import { PageHero, FaqSection } from "@/components/Bits";
import AboutHeroPhoto from "@/components/AboutHeroPhoto";
import { WhyChoose, ProcessSteps, GlobalPresence, SupportSection, CtaBanner } from "@/components/Sections";
import { faqsAbout } from "@/lib/data";

export const metadata = {
  title: "About us",
  description:
    "Meet Digital Dhaga: a global team of designers, developers and marketers building fast, results-focused websites, stores and apps.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Digital Dhaga"
        intro="Digital Dhaga designs and builds websites, online stores and software for growing businesses around the world."
        crumbs={[{ label: "About" }]}
        cards={[
          { icon: "users", t: "Small senior team", d: "One point of contact" },
          { icon: "globe", t: "Global clients", d: "Every time zone" },
          { icon: "award", t: "Craft first", d: "Care in the details" },
        ]}
      />

      <section className="section bg-white">
        <div className="container story-grid">
          <AboutHeroPhoto />
          <div className="story-copy">
            <h2>Who we are</h2>
            <p>
              We are designers, developers and marketers who like building things that work. Our clients range from local
              clinics and family restaurants to funded start-ups, and they have one thing in common: they want their website
              to earn its keep.
            </p>
            <p>
              We keep the team small and senior on purpose. The person who scopes your project is the person who answers your
              questions, and everyone working on your site understands what you are trying to achieve.
            </p>
            <p>
              We work remotely with clients across several continents, plan meetings around your time zone and write everything
              down, so a project never depends on one person&apos;s memory.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <article className="mv">
              <span className="icon-chip"><Icon name="target" size={24} /></span>
              <h2>Our mission</h2>
              <p>
                To give every business, whatever its size, a website that is fast, clear and built to grow, without agency
                mystery or inflated bills.
              </p>
            </article>
            <article className="mv">
              <span className="icon-chip"><Icon name="globe" size={24} /></span>
              <h2>Our vision</h2>
              <p>
                To be the web partner businesses recommend to each other: reliable at launch, and still helping years later.
              </p>
            </article>
          </div>
        </div>
      </section>

      <WhyChoose tone="white" cta={null} />

      <ProcessSteps tone="cream" variant="timeline" />
      <SupportSection />
      <GlobalPresence />

      <FaqSection title="About Digital Dhaga: Frequently Asked Questions" items={faqsAbout} tone="white" />

      <CtaBanner />
    </>
  );
}
