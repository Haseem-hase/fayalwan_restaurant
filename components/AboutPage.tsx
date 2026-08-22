import React from 'react';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <main className="relative bg-[#FF4500] text-white font-sans select-none">
      <Header />
      
      {/* First Section: About Text */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32">
        <div className="flex-1 flex items-center justify-center w-full px-4">
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
      <div className="w-full z-50 flex items-end justify-between px-12 pb-10 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gray-200 mt-12">
        
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
      </section>

      {/* Second Section: Full Screen Image */}
      <section className="relative h-screen w-full">
         <img 
           src="/assets/Frames/wallPic.webp" 
           alt="Restaurant Wall" 
           className="w-full h-full object-cover"
         />
      </section>

      {/* Third Section: Founders */}
      <section className="relative min-h-screen w-full bg-[#FF4500] flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-white mb-16 text-center">
          Our Founders
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24 w-full max-w-7xl">
          {/* Founder 1 */}
          <div className="flex flex-col items-center text-center group md:translate-y-8 lg:translate-y-12">
            <div className="w-56 h-72 md:w-60 md:h-[20rem] lg:w-64 lg:h-[22rem] rounded-md overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-105">
              <img src="/assets/founders/saudi.png" alt="Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-[0.15em] text-white">Firoz</h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-200 mt-2 opacity-80">CEO</p>
          </div>
          
          {/* Founder 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-56 h-72 md:w-60 md:h-[20rem] lg:w-64 lg:h-[22rem] rounded-md overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-105">
              <img src="/assets/founders/saudi.png" alt="Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-[0.15em] text-white">Abdullah</h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-200 mt-2 opacity-80">Founder</p>
          </div>
          
          {/* Founder 3 */}
          <div className="flex flex-col items-center text-center group md:translate-y-8 lg:translate-y-12">
            <div className="w-56 h-72 md:w-60 md:h-[20rem] lg:w-64 lg:h-[22rem] rounded-md overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-105">
              <img src="/assets/founders/saudi.png" alt="Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-[0.15em] text-white">Jawad</h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-200 mt-2 opacity-80">CEO</p>
          </div>
        </div>
      </section>
    </main>
  );
}
