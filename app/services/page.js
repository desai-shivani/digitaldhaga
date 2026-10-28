import { PageHero, FaqSection } from "@/components/Bits";
import { ServicesGrid, WhyChoose, ProcessSteps, TechnologySection, CtaBanner } from "@/components/Sections";
import { faqsServices } from "@/lib/data";

export const metadata = {
  title: "Web Design, SEO & Social Media Marketing Services",
  description:
    "Web design and development, e-commerce, UI/UX, SEO, social media marketing and ongoing support from one global team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Web Design, SEO & Social Media Marketing Services"
        intro="Design, development, marketing and support from one team, so nothing falls between suppliers."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesGrid tone="white" title="Our Services" intro="Choose a service to see what is included, how long it takes and the tools we use." />
      <WhyChoose tone="cream" cta={{ href: "/contact", label: "Get a free quote" }} />
      <ProcessSteps tone="white" />
      <TechnologySection tone="cream" />
      <FaqSection title="Web Design, SEO & Social Media Marketing Services: FAQs" items={faqsServices} tone="white" />
      <CtaBanner />
    </>
  );
}
