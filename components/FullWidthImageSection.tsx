import Image from 'next/image';

export function FullWidthImageSection() {
  return (
    <section className="relative w-full bg-[#fbf9f6]">
      <Image
        src="/best-web-development-company-in-valsad.webp" // Ensure this matches your file name in the public folder
        alt="Digital Dhaga Project Showcase"
        width={1920} 
        height={1080} 
        className="w-full h-auto object-contain" 
        quality={100}
        priority
      />
    </section>
  );
}