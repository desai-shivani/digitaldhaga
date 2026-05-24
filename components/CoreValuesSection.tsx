"use client"

import React from "react"

// --- CORE VALUES DATA ---
const coreValuesData = [
  { label: "CREATIVITY", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2v1" /><path d="M12 15v3" /><path d="M4.9 4.9l.7.7" /><path d="M18.4 18.4l.7.7" /><path d="M2 12h1" /><path d="M21 12h1" /><path d="M4.9 19.1l.7-.7" /><path d="M18.4 5.6l.7-.7" /><path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
    </svg>
  )},
  { label: "STRATEGY", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="#222222" /><line x1="22" y1="2" x2="13" y2="11" stroke="#ff6b2b" /><polyline points="16 2 22 2 22 8" stroke="#ff6b2b" />
    </svg>
  )},
  { label: "INNOVATION", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1 1l-.5.5s-.5 3.74-2 5c0 0 3.74-.5 5-2l2.5-2.5c2.34-2.34 2.87-5.59 1.5-8.5l-4-4c-2.91-1.37-6.16-.84-8.5 1.5L4.5 16.5z" /><path d="M12 15l-3-3" /><path d="M15 12l-3-3" /><path d="M13 5l2 2" stroke="#ff6b2b" /><path d="M17 9l2 2" stroke="#ff6b2b" />
    </svg>
  )},
  { label: "CONSISTENCY", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" stroke="#ff6b2b" />
    </svg>
  )},
  { label: "PERFORMANCE", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="4" height="6" rx="1" /><rect x="10" y="10" width="4" height="10" rx="1" /><rect x="16" y="6" width="4" height="14" rx="1" /><path d="M3 12l5-5 4 4 8-8" stroke="#ff6b2b" />
    </svg>
  )},
  { label: "PROFESSIONALISM", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="8" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h6" /><polygon points="18 13 19.5 16 23 16.5 20.5 19 21 22.5 18 21 15 22.5 15.5 19 13 16.5 16.5 16" stroke="#ff6b2b" />
    </svg>
  )}
]

export default function CoreValuesSection() {
  return (
    <section className="font-sans bg-[#FAF3E1] py-16 border-t border-[#ff6b2b]/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-0">
          
          {/* Left: Quote */}
          <div className="flex-1 lg:pr-16 relative">
            <span className="absolute -top-4 left-0 text-7xl text-[#ff6b2b] font-serif leading-none opacity-80">“</span>
            <h3 className="text-3xl md:text-4xl text-[#222222] font-serif italic pl-14 pt-4 leading-snug">
              We don't just build <br />
              digital <span className="text-[#ff6b2b] not-italic font-bold">products</span>.<br />
              We build <br />
              digital <span className="text-[#ff6b2b] not-italic font-bold">identities</span>.
              <span className="text-[#ff6b2b] font-serif text-6xl leading-none relative top-4 left-2">”</span>
            </h3>
          </div>

          {/* Right: Core Values */}
          <div className="flex-1 lg:pl-10 flex flex-col justify-center">
            <div className="mb-8 pl-4 border-l-2 border-[#222222]">
              <h4 className="text-xl font-bold tracking-tight leading-none uppercase">
                <span className="block text-[#222222] mb-1">OUR</span>
                <span className="block text-[#ff6b2b]">CORE VALUES</span>
              </h4>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4">
              {coreValuesData.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center group cursor-default">
                  <div className="mb-3 p-3 bg-white rounded-full shadow-sm border border-transparent group-hover:border-[#ff6b2b]/30 transition-all duration-300">
                    {val.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold text-[#222222] uppercase tracking-wider">
                    {val.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}