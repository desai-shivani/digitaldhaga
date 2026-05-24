"use client"

import React from "react"

const features = [
  {
    titleLine1: "CREATIVE",
    titleLine2: "STRATEGY",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 21h12" />
        <path d="M8 21v-4l-3-2.5c-.7-.5-1-1.3-.8-2.1.2-.8.8-1.4 1.6-1.4h.4c.5 0 1-.2 1.4-.6l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0 .7.7 1.4 1.8 1.8 3v4.9l4 3.5v2.5H8z" />
        <path d="M12 9v1" />
        <path d="M8 17h8" />
      </svg>
    )
  },
  {
    titleLine1: "PREMIUM",
    titleLine2: "BRANDING",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4.5 10v6L12 22l7.5-6v-6L12 2z" />
        <path d="M12 2v10" />
        <circle cx="12" cy="14" r="2" />
        <path d="M7 14h10" />
      </svg>
    )
  },
  {
    titleLine1: "WEB",
    titleLine2: "SOLUTIONS",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <rect x="5" y="11" width="8" height="6" rx="1" />
        <rect x="15" y="11" width="4" height="2" rx="0.5" />
        <rect x="15" y="15" width="4" height="2" rx="0.5" />
        <circle cx="6" cy="6" r="0.5" />
        <circle cx="8" cy="6" r="0.5" />
      </svg>
    )
  },
  {
    titleLine1: "SEO",
    titleLine2: "GROWTH",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <line x1="15" y1="15" x2="21" y2="21" strokeWidth="2" />
        <polyline points="7 12 10 9 13 12" stroke="#ff6b2b" />
        <line x1="13" y1="12" x2="13" y2="6" stroke="#ff6b2b" />
        <line x1="13" y1="6" x2="7" y2="6" stroke="#ff6b2b" />
      </svg>
    )
  },
  {
    titleLine1: "CRM",
    titleLine2: "AUTOMATION",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    )
  },
  {
    titleLine1: "SOCIAL MEDIA",
    titleLine2: "MANAGEMENT",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
        <path d="M15 8h-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l1 2 1-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z" />
        <path d="M12 11c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2l2 2 2-2c.5-.5.5-1.5 0-2s-1.5-.5-2 0z" stroke="#ff6b2b" strokeWidth="1" />
      </svg>
    )
  }
]

export default function CTASection() {
  return (
    <section className="font-sans flex flex-col">
      
      {/* Top Text Section (White Background) */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        
        {/* Large Faint Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none z-0">
          <span className="text-[120px] md:text-[200px] font-black text-gray-50 leading-[0.8] tracking-tighter">LET'S</span>
          <span className="text-[120px] md:text-[200px] font-black text-gray-50 leading-[0.8] tracking-tighter">BUILD</span>
          <span className="text-[120px] md:text-[200px] font-black text-gray-50 leading-[0.8] tracking-tighter">DIGITAL</span>
          <span className="text-[120px] md:text-[200px] font-black text-gray-50 leading-[0.8] tracking-tighter">GROWTH</span>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            
            {/* Left Column: Heading & Paragraphs */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#222222] uppercase leading-[0.95] tracking-tighter mb-8 flex flex-col">
                <span>Let's</span>
                <span>Build</span>
                <span>Something</span>
                <span className="text-[#ff6b2b]">Powerful</span>
                <span className="text-[#ff6b2b]">Together</span>
              </h2>
              
              <div className="w-16 h-1 bg-[#ff6b2b] mb-8"></div>
              
              <div className="space-y-6 text-[#444444] text-lg font-medium max-w-lg">
                <p>
                  DigitalDhaga combines creativity, technology, and strategy to help brands create meaningful digital experiences that grow, connect, and perform.
                </p>
                <p>
                  From websites and branding to SEO, CRM systems, and social media management — we create complete digital ecosystems tailored for modern businesses.
                </p>
              </div>
            </div>

            {/* Right Column: Quote Box */}
            <div className="lg:pb-12">
               <div className="relative border border-[#ff6b2b]/30 p-8 md:p-12">
                  {/* Decorative corner markers */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#ff6b2b]"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#ff6b2b]"></div>
                  
                  {/* Large Quotes */}
                  <span className="absolute -top-6 left-6 text-6xl text-[#ff6b2b] font-serif leading-none">“</span>
                  <span className="absolute -bottom-10 right-6 text-6xl text-[#ff6b2b] font-serif leading-none">”</span>

                  <p className="text-2xl md:text-3xl text-[#222222] font-serif italic leading-snug relative z-10">
                    Great brands<br/>
                    are not just <span className="text-[#ff6b2b] not-italic font-bold">seen</span>.<br/>
                    They are<br/>
                    <span className="text-[#ff6b2b] not-italic font-bold">remembered</span>.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Features Strip (Cream Background) */}
      

    </section>
  )
}