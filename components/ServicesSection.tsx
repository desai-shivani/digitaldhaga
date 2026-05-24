
"use client"

import React from "react"

const servicesData = [
  {
    id: "01",
    titleLine1: "WEBSITE",
    titleLine2: "DESIGN",
    description: "Modern, responsive, and user-focused website designs crafted to align with brand identity and enhance digital experience.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#222222" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="#222222" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="#222222" />
        <rect x="5" y="6" width="6" height="4" fill="#ff6b2b" stroke="none" />
        <line x1="13" y1="7" x2="19" y2="7" stroke="#222222" />
        <line x1="13" y1="10" x2="17" y2="10" stroke="#222222" />
      </svg>
    )
  },
  {
    id: "02",
    titleLine1: "WEBSITE",
    titleLine2: "DEVELOPMENT",
    description: "Fast, scalable, and secure websites built using modern technologies including React, Next.js, PHP, Laravel, WordPress, and Shopify.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" stroke="#222222" />
        <line x1="2" y1="8" x2="22" y2="8" stroke="#222222" />
        <circle cx="5" cy="6" r="0.5" fill="#222222" />
        <circle cx="7" cy="6" r="0.5" fill="#222222" />
        <circle cx="9" cy="6" r="0.5" fill="#222222" />
        <polyline points="8 12 5 15 8 18" stroke="#ff6b2b" />
        <polyline points="16 12 19 15 16 18" stroke="#ff6b2b" />
        <line x1="13" y1="11" x2="11" y2="19" stroke="#222222" />
      </svg>
    )
  },
  {
    id: "03",
    titleLine1: "SEO",
    titleLine2: "OPTIMIZATION",
    description: "Strategic SEO solutions focused on improving visibility, rankings, organic traffic, and digital growth.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7" stroke="#222222" />
        <polyline points="16 7 21 7 21 12" stroke="#ff6b2b" />
        <circle cx="10" cy="10" r="6" stroke="#222222" />
        <line x1="14.24" y1="14.24" x2="19" y2="19" stroke="#222222" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "04",
    titleLine1: "CRM",
    titleLine2: "SOLUTIONS",
    description: "Smart workflow systems designed to manage leads, automate processes, and streamline business operations.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="#222222" />
        <line x1="3" y1="8" x2="21" y2="8" stroke="#222222" />
        <circle cx="6" cy="6" r="0.5" fill="#222222" />
        <circle cx="8" cy="6" r="0.5" fill="#222222" />
        <circle cx="10" cy="6" r="0.5" fill="#222222" />
        <path d="M12 14c-2.5 0-4.5 1.5-5 3v1h10v-1c-.5-1.5-2.5-3-5-3z" stroke="#ff6b2b" fill="none" />
        <circle cx="12" cy="11" r="2" stroke="#ff6b2b" fill="none" />
      </svg>
    )
  },
  {
    id: "05",
    titleLine1: "GRAPHIC",
    titleLine2: "DESIGN",
    description: "Premium visual communication systems including branding, social media creatives, promotional materials, and digital assets.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="#222222" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="#222222" />
        <path d="M2 2l7.586 7.586" stroke="#222222" />
        <circle cx="11" cy="11" r="2" stroke="#ff6b2b" fill="none" />
        <line x1="12.5" y1="12.5" x2="16.5" y2="16.5" stroke="#ff6b2b" />
      </svg>
    )
  },
  {
    id: "06",
    titleLine1: "SOCIAL MEDIA",
    titleLine2: "MANAGEMENT",
    description: "Creative content strategy and platform management focused on engagement, visibility, and brand growth.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#222222" />
        <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1l-2 2v-2H10a1 1 0 0 1-1-1v-2z" stroke="#ff6b2b" />
      </svg>
    )
  }
]

export default function ServicesSection() {
  return (
    <section className="bg-[#FAF3E1] py-16 md:py-20 font-sans border-y border-gray-200/50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222222] uppercase tracking-tight mb-2">
            Services & <span className="text-[#ff6b2b]">Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-[#555555] italic">
            Strategic digital solutions for modern brands.
          </p>
        </div>

        {/* CSS Grid Area: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-[#F5E7C6] p-8 md:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 overflow-hidden flex flex-col h-full rounded-sm"
            >
              {/* Top-Left Corner Accent */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#ff6b2b] opacity-80"></div>
              
              {/* Icon */}
              <div className="mb-6 relative z-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-wide mb-4 relative z-10">
                <span className="block text-[#222222]">{service.titleLine1}</span>
                <span className="block text-[#ff6b2b]">{service.titleLine2}</span>
              </h3>

              {/* Short Divider Line */}
              <div className="w-10 h-[3px] bg-[#ff6b2b] mb-5 relative z-10"></div>

              {/* Description text */}
              <p className="text-[#444444] text-sm md:text-base leading-relaxed relative z-10">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

