
'use client';

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export function HeroSection() {
  const [text] = useTypewriter({
    words: [
      'WEBSITE DESIGN',
      'WEBSITE DEVELOPMENT',
      'SEO',
      'GRAPHIC DESIGN',
      'SOCIAL MEDIA MANAGEMENT',
      'CRM SOLUTIONS'
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full min-h-[70vh] bg-[#fbf9f6] overflow-hidden flex items-center justify-center font-sans">
      
      {/* Background Image Layer */}
      {/* Ensure you have an image named 'hero-bg.jpg' in your public folder */}
      <div className="absolute inset-0 z-0 bg-[url('/best-digital-marketing-company.webp')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#222222] leading-[1.15] tracking-tight max-w-4xl mb-5 uppercase"
        >
          We Build Digital Experiences That <span className="text-[#ff6b2b]">Connect</span> & <span className="text-[#ff6b2b]">Convert</span>
        </motion.h1>

        {/* Typewriter Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-semibold text-[#222222] mb-6 flex items-center"
        >
          Specializing in:&nbsp;
          <span className="text-[#ff6b2b] uppercase">
            {text}
            <Cursor cursorStyle="|" cursorColor="#ff6b2b" />
          </span>
        </motion.div>

        {/* Paragraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-[#222222] max-w-2xl mb-10 leading-relaxed"
        >
          From initial code to final conversion, we craft data-driven digital solutions that engage audiences and accelerate growth. Your vision, our strategic threads, precisely stitched.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          {/* Orange button */}
          <button className="px-7 py-3 bg-[#ff6b2b] text-white font-semibold rounded-lg shadow-sm hover:bg-[#e85a1f] transition-all text-sm tracking-wide uppercase">
            Request a Consultation
          </button>
          
          {/* Black button */}
          <button className="px-7 py-3 bg-[#222222] text-white font-semibold rounded-lg shadow-sm hover:bg-black transition-all text-sm tracking-wide uppercase">
            Explore Our Portfolio
          </button>
        </motion.div>

      </div>
    </section>
  );
}

