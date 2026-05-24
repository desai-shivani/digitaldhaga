import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaldhaga.com"),

  title: {
    default: "DigitalDhaga | Web Development, SEO & Digital Solutions",
    template: "%s | DigitalDhaga",
  },

  description:
    "DigitalDhaga provides professional web development, SEO optimization, branding, UI/UX design, and scalable digital solutions to help businesses grow worldwide.",

  keywords: [
    "DigitalDhaga",
    "Web Development",
    "SEO Services",
    "Next.js Development",
    "Website Design",
    "Digital Marketing",
    "UI UX Design",
    "Business Website",
    "React Development",
    "Brand Growth",
    "SEO Optimization",
    "India Web Agency",
  ],

  authors: [{ name: "DigitalDhaga" }],
  creator: "DigitalDhaga",
  publisher: "DigitalDhaga",

  openGraph: {
    title: "DigitalDhaga | Web Development & SEO Solutions",
    description:
      "Grow your business worldwide with modern websites, SEO optimization, and scalable digital experiences by DigitalDhaga.",
    url: "https://digitaldhaga.com",
    siteName: "DigitalDhaga",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigitalDhaga",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DigitalDhaga | Web Development & SEO Solutions",
    description:
      "Modern websites, SEO optimization, branding, and scalable digital solutions for businesses worldwide.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://digitaldhaga.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}