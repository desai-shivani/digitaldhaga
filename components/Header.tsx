'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { 
      label: 'Services', 
      href: '#',
      subItems: [
        { label: 'Web Development', href: '#' },
        { label: 'SEO', href: '#' },
        { label: 'Digital Marketing', href: '#' },
        { label: 'CRM', href: '#' },
      ]
    },
    { label: 'Blogs', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" // Replace with your actual image path
                alt="Digital Dhaga" 
                width={50} 
                height={50} 
                className="object-contain cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2 py-2 text-gray-800 font-medium hover:text-orange-500 transition-colors"
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 rounded-xl py-2 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+919723701925"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#ff6b2b] text-white font-semibold rounded-full hover:bg-[#e85a1f] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              <span>+91 9723701925</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-600"
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <div className="pl-8 pb-2 space-y-1 bg-gray-50/50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}