'use client';

import { Header } from '@/components/Header';

import { HeroSection } from '@/components/HeroSection';
import { FullWidthImageSection } from '@/components/FullWidthImageSection';
import CTASection from '@/components/CTASection';
import ServicesSection from '@/components/ServicesSection'; 

// Import the split components
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import  Footer  from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <HeroSection />
      <FullWidthImageSection />
      <ServicesSection />
      
      {/* Insert the split sections here */}
      <WhyChooseUsSection />
      <TechnologyStackSection />
      
      <CTASection />
      <Footer />
    </main>
  );
}