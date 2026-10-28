import Hero from "@/components/Hero";
import SocialShowcase from "@/components/SocialShowcase";
import {
  TrustedBy,
  AboutSection,
  ServicesGrid,
  IndustriesSection,
  SeoSection,
  CtaBanner,
  PortfolioCarouselSection,
} from "@/components/Sections";
import { FaqSection } from "@/components/Bits";
import { faqsHome } from "@/lib/data";

export const metadata = {
  title: { absolute: "Web Design, SEO & Social Media Marketing Agency | Digital Dhaga" },
  description:
    "Digital Dhaga is a digital marketing agency with 10 years of experience. SEO-ready websites, online stores, SEO and social media marketing that bring businesses more customers.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutSection tone="white" />
      <ServicesGrid tone="white" />
      <SocialShowcase />
      <SeoSection tone="white" />
      <IndustriesSection />
      <FaqSection title="Web Design, SEO & Digital Marketing: Frequently Asked Questions" items={faqsHome} tone="white" />
      <CtaBanner />
      <PortfolioCarouselSection tone="white" />
    </>
  );
}
