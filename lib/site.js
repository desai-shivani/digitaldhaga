// ─────────────────────────────────────────────────────────────
//  Central site settings. Edit once, updates everywhere.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: "Digital Dhaga",
  short: "Digital Dhaga",
  tagline: "Web design, SEO and social media marketing that grow your business.",
  description:
    "Digital Dhaga is a web design, SEO and social media marketing agency. We build fast, search-friendly websites and run the marketing that brings you more customers, in every time zone.",
  // TODO: set this to your real website address before going live (used for SEO, sitemap and share links)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digitaldhaga.com",

  // Contact details (used in the header, footer, contact page, buttons and SEO data)
  email: "digitaldhaga1@gmail.com",
  phone: "+91 9723701925",
  address: "Valsad, Gujarat, India",
  addressParts: { locality: "Valsad", region: "Gujarat", country: "IN" },
  // WhatsApp number in international format, digits only (used by the floating chat button)
  whatsapp: "919723701925",
  hours: "Mon – Sat, 9:30 am – 7:00 pm IST",

  social: [
    { label: "Instagram", short: "ig", href: "https://www.instagram.com/digital_dhaga/" },
    { label: "Facebook", short: "fb", href: "https://www.facebook.com/digitaldhaga" },
  ],

  // While true, sections that hold placeholder reviews, projects and figures
  // show a small "Sample content" tag. Replace the data in lib/data.js with
  // real client work, then set this to false.
  sampleContent: false,
};

// About-us photo on the home page. Replace with your own team photo by saving it as
// public/images/about-team.jpg and setting this to "/images/about-team.jpg".
export const aboutPhoto = {
  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  alt: "Digital Dhaga team working together on computers",
  fallback: "/images/about-team.svg",
};

// Photo behind the call-to-action banner (people working on computers, with a black overlay).
// Replace with your own photo, e.g. "/images/cta-team.jpg".
export const ctaPhoto = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=70";
