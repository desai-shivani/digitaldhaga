"use client"

import React from "react"

export default function FooterSection() {
  return (
    <footer className="bg-[#222222] text-white py-16 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wider">
              DIGITAL<span className="text-[#ff6b2b]">DHAGA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We don't just build digital products. We build digital identities that stand out in a crowded market.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {["Services", "Our Journey", "Portfolio", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#ff6b2b] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {["Web Design", "Development", "SEO Optimization", "CRM Solutions"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[#ff6b2b] transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Valsad, Gujarat, India</li>
              <li>📧 digitaldhaga1@gmail.com</li>
              <li>📞 +91 9723701925</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Digital Dhaga. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}