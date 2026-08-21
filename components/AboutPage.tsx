import React from 'react';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#FF4500] text-white overflow-hidden font-sans select-none flex flex-col justify-between">
      <Header />
      
      {/* Center Content: Poetic Editorial Text Layout */}
      <div className="flex-1 flex items-center justify-center w-full px-4 mt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">
          <p className="text-sm md:text-base lg:text-lg font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-white leading-[2] md:leading-[2.5]">
            FAYALWAN RESTAURANT<br/>
            IS A KERALA-BASED HERITAGE RESTAURANT<br/>
            RUNNING IN RIYADH, SAUDI ARABIA. WE HAVE BEEN<br/>
            SERVING AUTHENTIC, PREMIUM FOOD FOR OVER A YEAR,<br/>
            PROVIDING THE FINEST TRADITIONAL KERALA DISHES TO OUR GUESTS.<br/>
            WE PRIDE OURSELVES ON BEING EXCEPTIONALLY NEAT, IMPECCABLY CLEAN,<br/>
            AND MAINTAINING THE HIGHEST STANDARDS OF PROFESSIONAL HYGIENE.<br/>
            WELCOME TO A TRUE CULINARY EXPERIENCE<br/>
            WHERE TRADITION MEETS<br/>
            PURE PASSION.
          </p>
        </div>
      </div>

      {/* Footer / Bottom Content (Consistent with Contact Page) */}
      <div className="w-full z-50 flex items-end justify-between px-12 pb-10 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gray-200 mt-auto">
        
        {/* Left: Address */}
        <div className="flex flex-col gap-1">
          <span className="text-white">FAYALWAN RESTAURANT</span>
          <div className="w-full max-w-[300px] leading-relaxed mt-1">
             <span>6910 3179 AL MUHANDIS MASAID AL ANQARI, AL WURUD, RIYADH 12251</span>
          </div>
        </div>

        {/* Middle: Phone Numbers */}
        <div className="flex flex-col gap-1 text-center">
          <span className="text-white">+966 50 123 4567</span>
          <span className="text-white">+966 50 765 4321</span>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col gap-1 text-right">
          <a href="#" className="hover:text-gray-300 transition-colors cursor-pointer">INSTAGRAM</a>
          <a href="#" className="hover:text-gray-300 transition-colors cursor-pointer">FACEBOOK</a>
        </div>
        
      </div>
    </main>
  );
}
