
"use client"

import React, { useState } from "react"

// Define the structure for tech items
interface TechItem {
  name: string;
}

interface CategoryData {
  category: string;
  items: TechItem[];
}

const techStackData: CategoryData[] = [
  { category: "Mobile", items: [{ name: "Flutter" }, { name: "Swift" }, { name: "Kotlin" }, { name: "Android" }, { name: "iOS" }, { name: "JetPack Compose" }] },
  { category: "Front-end", items: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind" }] },
  { category: "Back-end", items: [{ name: "Node.js" }, { name: "Python" }, { name: "PHP" }] },
  { category: "Database", items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "MySQL" }] },
  { category: "Cloud/Server", items: [{ name: "AWS" }, { name: "Google Cloud" }, { name: "Azure" }] },
  { category: "UI/UX", items: [{ name: "Figma" }, { name: "Adobe XD" }] },
  { category: "Tools", items: [{ name: "Git" }, { name: "Docker" }] },
  { category: "Latest Trends", items: [{ name: "AI/ML" }, { name: "Blockchain" }] },
]

export default function TechnologyStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryData>(techStackData[0])

  return (
    <section className="bg-[#FAF3E1] py-16 md:py-20 font-sans border-y border-gray-200/50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222222] uppercase tracking-tight mb-2">
            Our Technology <span className="text-[#ff6b2b]">Stack</span>
          </h2>
          <p className="text-base md:text-lg text-[#555555] italic">
            Behind every successful digital product is a strong technology foundation.
          </p>
        </div>

        {/* Tabs - Increased font size to text-base */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/50 p-2 rounded-lg shadow-sm border border-gray-200/50">
          {techStackData.map((item) => (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-3 text-base font-bold uppercase tracking-wider rounded-sm transition-all ${
                activeCategory.category === item.category 
                  ? "bg-[#ff6b2b] text-white shadow-md" 
                  : "text-[#222222] hover:bg-white/60"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid - Increased card label to text-base */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {activeCategory.items.map((tech, index) => (
            <div 
              key={index}
              className="bg-[#F5E7C6] p-8 rounded-sm shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 border border-white/20"
            >
              <div className="w-14 h-14 flex items-center justify-center text-2xl font-bold text-[#ff6b2b] bg-white rounded-full mb-4">
                {tech.name.charAt(0)}
              </div>
              <h3 className="font-bold text-[#222222] text-base uppercase tracking-wide">{tech.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

