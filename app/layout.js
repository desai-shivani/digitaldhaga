import "@fontsource-variable/plus-jakarta-sans/index.css";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Interactions from "@/components/Interactions";
import { site } from "@/lib/site";
import { services } from "@/lib/data";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web Design, SEO & Digital Marketing Agency`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital marketing agency",
    "web design company",
    "website development",
    "SEO services",
    "social media marketing",
    "ecommerce development",
    "Next.js developers",
    "web app development",
    "Google Ads management",
    "global web agency",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.tagline}`, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#12141a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      logo: `${site.url}/images/logo.png`,
      telephone: site.phone,
      address: { "@type": "PostalAddress", addressLocality: site.addressParts.locality, addressRegion: site.addressParts.region, addressCountry: site.addressParts.country },
      image: `${site.url}/opengraph-image`,
      priceRange: "$$",
      areaServed: "Worldwide",
      sameAs: site.social.map((x) => x.href),
      knowsAbout: ["Web design", "Web development", "Search engine optimization", "Social media marketing", "E-commerce development"],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${site.url}/services/${s.slug}` },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-26CW67F032" strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-26CW67F032');`}
        </Script>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <Interactions />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
