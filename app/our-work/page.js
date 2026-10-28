import { PageHero, FaqSection } from "@/components/Bits";
import { faqsWork } from "@/lib/data";
import { PortfolioCarouselSection, CtaBanner } from "@/components/Sections";

export const metadata = {
  title: "Our work",
  description:
    "Websites, social media designs and logos created by Digital Dhaga to help growing brands look professional and get noticed online.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        intro="We design websites, social media content and brand identities that help growing businesses look professional, stay consistent and get noticed online."
        crumbs={[{ label: "Our work" }]}
        cards={[
          { icon: "layout", t: "Websites", d: "Built to convert" },
          { icon: "users", t: "Social posts", d: "Designed to stand out" },
          { icon: "award", t: "Logos & branding", d: "Memorable identities" },
        ]}
      />
      <PortfolioCarouselSection tone="white" showHead={false} showMore={false} />
      <FaqSection title="Our Work: Frequently Asked Questions" items={faqsWork} tone="cream" />
      <CtaBanner />
    </>
  );
}
