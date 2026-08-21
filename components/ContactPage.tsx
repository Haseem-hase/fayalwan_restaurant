import React from 'react';
import Header from '@/components/Header';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans select-none">
      <Header />
      
      {/* Center Content: Two panels */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] md:max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        
        {/* Left Side: Restaurant Image */}
        <div className="flex-1 w-full aspect-[4/3] md:aspect-video relative overflow-hidden flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
          />
        </div>

        {/* Right Side: Google Map iframe */}
        <div className="flex-1 w-full aspect-[4/3] md:aspect-video relative overflow-hidden filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://maps.google.com/maps?q=24.7217452,46.6789402&z=15&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* Footer / Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full z-50 flex items-end justify-between px-12 pb-10 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400">
        
        {/* Left: Address */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-200">FAYALWAN RESTAURANT</span>
          <div className="flex justify-between w-full min-w-[200px]">
             <span>RIYADH</span>
             <span>KSA</span>
          </div>
        </div>

        {/* Middle: Phone Numbers */}
        <div className="flex flex-col gap-1 text-center">
          <span className="text-gray-200">+966 50 123 4567</span>
          <span className="text-gray-200">+966 50 765 4321</span>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col gap-1 text-right">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">FACEBOOK</a>
        </div>
        
      </div>
    </main>
  );
}
