
"use client"

import React from "react"

// --- FEATURE GRID DATA ---
const featuresData = [
  {
    id: "01",
    titleLine1: "STRATEGIC",
    titleLine2: "THINKING",
    description: "We create solutions that combine creativity, business understanding, and modern digital strategy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 21h12" />
        <path d="M8 21v-4l-3-2.5c-.7-.5-1-1.3-.8-2.1.2-.8.8-1.4 1.6-1.4h.4c.5 0 1-.2 1.4-.6l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0 .7.7 1.4 1.8 1.8 3v4.9l4 3.5v2.5H8z" />
        <path d="M12 9v1" />
        <path d="M8 17h8" />
      </svg>
    )
  },
  {
    id: "02",
    titleLine1: "MODERN",
    titleLine2: "DESIGN APPROACH",
    description: "Clean, premium, and high-performing visual systems crafted for modern digital brands.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 22h8" />
        <path d="M12 18v4" />
        <path d="M12 7l-2 3v2l2 2 2-2v-2l-2-3z" stroke="#ff6b2b" />
        <circle cx="12" cy="11" r="0.5" fill="#ff6b2b" stroke="none" />
      </svg>
    )
  },
  {
    id: "03",
    titleLine1: "TECHNICAL",
    titleLine2: "EXPERTISE",
    description: "Scalable development solutions using modern technologies and performance-driven systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <polyline points="9 12 6 15 9 18" stroke="#ff6b2b" />
        <polyline points="15 12 18 15 15 18" stroke="#ff6b2b" />
        <line x1="13" y1="11" x2="11" y2="19" stroke="#ff6b2b" />
      </svg>
    )
  },
  {
    id: "04",
    titleLine1: "COMPLETE",
    titleLine2: "DIGITAL SOLUTIONS",
    description: (
      <>
        From branding and websites to SEO, CRM, and social media management — everything under one company.
      </>
    ),
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="6" rx="1" stroke="#ff6b2b" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M12 9v3" strokeDasharray="2 2" />
        <path d="M12 12H6v3" strokeDasharray="2 2" />
        <path d="M12 12h6v3" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: "05",
    titleLine1: "CLIENT-FOCUSED",
    titleLine2: "PROCESS",
    description: "Tailored digital strategies designed around each business's identity, audience, and growth goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 5H5v2" stroke="#ff6b2b" />
        <path d="M17 5h2v2" stroke="#ff6b2b" />
        <path d="M7 19H5v-2" stroke="#ff6b2b" />
        <path d="M17 19h2v-2" stroke="#ff6b2b" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 18c0-3 2.5-4 5-4s5 1 5 4" />
      </svg>
    )
  },
  {
    id: "06",
    titleLine1: "LONG-TERM",
    titleLine2: "BRAND GROWTH",
    description: "Solutions designed not only for visibility, but for sustainable digital growth and brand positioning.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="7 14 11 10 14 13 18 7" stroke="#ff6b2b" />
        <polyline points="14 7 18 7 18 11" stroke="#ff6b2b" />
      </svg>
    )
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="font-sans flex flex-col bg-white py-12 md:py-16 relative overflow-hidden">
      
      {/* Large faint watermark text effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none z-0">
        <span className="text-[100px] md:text-[160px] font-black text-gray-50 leading-[0.8] tracking-tighter">DIGITAL</span>
        <span className="text-[100px] md:text-[160px] font-black text-gray-50 leading-[0.8] tracking-tighter">DHAGA</span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222222] uppercase tracking-tight mb-2">
            Why Choose <span className="text-[#ff6b2b]">Digital Dhaga</span>
          </h2>
          <p className="text-sm md:text-base text-[#555555]">
            Creative strategy, Mordern technology, and performance focused digital solutions under one vision
          </p>
        </div>

        {/* Features Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className="relative p-6 md:p-8 flex flex-col items-start transition-colors hover:bg-[#FAF3E1]/60"
            >
              <div className="flex flex-row items-center gap-4 mb-4 w-full">
                <div className="w-14 h-14 rounded-xl border border-[#ff6b2b]/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-4xl font-light text-[#ff6b2b] leading-none mb-1">
                    {feature.id}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-[#222222] uppercase tracking-wider leading-snug">
                    <span className="block">{feature.titleLine1}</span>
                    <span className="block">{feature.titleLine2}</span>
                  </h3>
                </div>
              </div>
              <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

