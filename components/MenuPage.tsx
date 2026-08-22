'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const menuData = [
  {
    id: "breakfast",
    name: "BREAKFAST",
    items: [
      { name: "TEA", price: "1.50 sr", calories: "45" },
      { name: "COFFEE", price: "2 sr", calories: "60" },
      { name: "PORROTTA", price: "1 sr", calories: "150" },
      { name: "CHAPPATHI", price: "2 sr", calories: "120" },
      { name: "RICE PUTTU", price: "2 sr", calories: "150" },
      { name: "WHEAT PUTTU", price: "3 sr", calories: "160" },
      { name: "IDALI VADA SET", price: "4 sr", calories: "100" },
      { name: "APPAM", price: "4 sr", calories: "95" },
      { name: "DOSA SET", price: "4 sr", calories: "140" },
      { name: "PLAIN DOSA", price: "4 sr", calories: "180" },
      { name: "MASALA DOSA", price: "5 sr", calories: "300" },
      { name: "GHEE DOSA", price: "5 sr", calories: "250" },
      { name: "ONION DOSA", price: "6 sr", calories: "200" },
      { name: "EGG DOSA", price: "6 sr", calories: "120" },
      { name: "POORI BAJJI SET", price: "4 sr", calories: "350" },
      { name: "IDIYAPPAM SET", price: "4 sr", calories: "95" },
      { name: "PATHIRI SET", price: "3 sr", calories: "100" },
      { name: "UPMA", price: "3 sr", calories: "95" }
    ]
  },
  {
    id: "lunch",
    name: "LUNCH",
    items: [
      { name: "PLANE RICE", price: "5 sr", calories: "310" },
      { name: "GHEE RICE", price: "7 sr", calories: "380" },
      { name: "CHICKEN BIRIYANI", price: "12 sr", calories: "750" },
      { name: "BEEF BIRIYANI", price: "14 sr", calories: "550" },
      { name: "FISH BIRIYANI", price: "16 sr", calories: "550" },
      { name: "PRAWNS BIRIYANI", price: "17 sr", calories: "610" },
      { name: "MUTTON BIRIYANI", price: "15 sr", calories: "790" },
      { name: "VEG. MEALS", price: "8 sr", calories: "310" },
      { name: "FISH MEALS", price: "10 sr", calories: "510" },
      { name: "CHICKEN KONDATTAM", price: "12 sr", calories: "380" },
      { name: "KAPPA BIRIYANI", price: "-", calories: "-" },
      { name: "KAPPA", price: "-", calories: "-" },
      { name: "THALAKKARY", price: "-", calories: "-" },
      { name: "PALLIKKARY", price: "-", calories: "-" }
    ]
  },
  {
    id: "chinese",
    name: "CHINESE",
    items: [
      { name: "CHICKEN CHILLY", price: "12 sr", calories: "400" },
      { name: "CHICKEN MANCHURIAN", price: "12 sr", calories: "410" },
      { name: "GARLIC CHICKEN", price: "12 sr", calories: "410" },
      { name: "GINGER CHICKEN", price: "12 sr", calories: "410" },
      { name: "BUTTER CHICKEN", price: "14 sr", calories: "410" },
      { name: "BEEF CHILLY", price: "13 sr", calories: "444" },
      { name: "FISH CHILLY", price: "14 sr", calories: "473" },
      { name: "GOPI MANCHURIAN", price: "10 sr", calories: "255" },
      { name: "GOPI CHILLY", price: "10 sr", calories: "230" },
      { name: "PANEER BUTTER", price: "12 sr", calories: "355" },
      { name: "PANEER CHILLY", price: "12 sr", calories: "370" },
      { name: "PANEER KADAI", price: "12 sr", calories: "375" },
      { name: "MASHROOM MASALA", price: "12 sr", calories: "553" },
      { name: "MASHROOM CHILLY", price: "12 sr", calories: "573" },
      { name: "VEG. FRIED RICE", price: "8 sr", calories: "320" },
      { name: "CHICKEN FRIED RICE", price: "13 sr", calories: "480" },
      { name: "BEEF FRIED RICE", price: "13 sr", calories: "520" },
      { name: "MIXED FRIED RICE", price: "15 sr", calories: "360" },
      { name: "VEG. NOODLES", price: "8 sr", calories: "220" },
      { name: "CHICKEN NOODLES", price: "13 sr", calories: "280" },
      { name: "BEEF NOODLES", price: "13 sr", calories: "220" },
      { name: "MIX NOODLES", price: "15 sr", calories: "245" }
    ]
  },
  {
    id: "nonveg",
    name: "OUR NON VEGS.",
    items: [
      { name: "FISH CURRY PEACE", price: "6 sr", calories: "350" },
      { name: "FISH CURRY SADA", price: "4 sr", calories: "300" },
      { name: "FISH MASALA", price: "10 sr", calories: "410" },
      { name: "PRAWNS MASALA", price: "12 sr", calories: "500" },
      { name: "PRAWNS ROAST", price: "14 sr", calories: "510" },
      { name: "CRAB MASALA", price: "12 sr", calories: "680" },
      { name: "CHICKEN CURRY", price: "10 sr", calories: "650" },
      { name: "CHICKEN MASALA", price: "10 sr", calories: "630" },
      { name: "CHICKEN ROAST", price: "12 sr", calories: "590" },
      { name: "CHICKEN VARATTIYATHU", price: "12 sr", calories: "480" },
      { name: "CHICKEN KURUMA", price: "13 sr", calories: "430" },
      { name: "CHICKEN PEPPER", price: "12 sr", calories: "480" },
      { name: "CHICKEN KADAI", price: "12 sr", calories: "650" },
      { name: "CHICKEN 65", price: "10 sr", calories: "560" },
      { name: "CHICKEN KOLAPURI", price: "12 sr", calories: "520" },
      { name: "CHICKEN KANTHARI", price: "12 sr", calories: "530" },
      { name: "CHICKEN MULAKITTATHU", price: "10 sr", calories: "510" },
      { name: "BEEF CURRY", price: "10 sr", calories: "620" },
      { name: "BEEF MASALA", price: "12 sr", calories: "650" },
      { name: "BEEF FRY", price: "10 sr", calories: "680" },
      { name: "BEEF CHILLY", price: "13 sr", calories: "444" },
      { name: "BEEF ROAST", price: "14 sr", calories: "630" },
      { name: "MUTTON CURRY", price: "14 sr", calories: "640" },
      { name: "MUTTON MASALA", price: "15 sr", calories: "620" },
      { name: "MUTTON CHOPS", price: "15 sr", calories: "580" },
      { name: "MUTTON ROAST", price: "15 sr", calories: "635" },
      { name: "KOTHUPORATTA CHICKEN", price: "12 sr", calories: "625" },
      { name: "KOTHUPORATTA BEEF", price: "13 sr", calories: "615" },
      { name: "KIZHI PORATTA BEEF", price: "14 sr", calories: "350" },
      { name: "BOTTY ROAST", price: "10 sr", calories: "420" },
      { name: "LIVER ROAST", price: "10 sr", calories: "480" }
    ]
  },
  {
    id: "vegcurry",
    name: "VEGETABLE CURRY",
    items: [
      { name: "KADALA", price: "3 sr", calories: "200" },
      { name: "DHAL", price: "2 sr", calories: "160" },
      { name: "CHERU PAYAR", price: "3 sr", calories: "200" },
      { name: "VEG. KURUMA", price: "3 sr", calories: "150" },
      { name: "VEG. CURRY", price: "3 sr", calories: "180" },
      { name: "AALU BAJJI", price: "2 sr", calories: "250" },
      { name: "SAMBAR", price: "2 sr", calories: "160" },
      { name: "EGG CURRY", price: "3 sr", calories: "230" },
      { name: "EGG ROAST", price: "3 sr", calories: "220" },
      { name: "EGG OMLET", price: "3 sr", calories: "180" },
      { name: "EGG GREEN PEACE", price: "3 sr", calories: "220" }
    ]
  }
];

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(menuData[0].id);

  // Intersection Observer to highlight active category in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    menuData.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FF4500] selection:text-white">
      <Header isFixed={true} />
      
      <div className="pt-40 pb-32 px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-16 relative max-w-7xl mx-auto">
        
        {/* Sidebar (20% width on Desktop) */}
        <div className="w-full md:w-[25%] lg:w-[20%] z-40 bg-[#0A0A0A]/90 backdrop-blur-sm sticky top-0 md:top-32 pt-4 md:pt-0 pb-4 md:pb-0 self-start">
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible hide-scrollbar">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`text-left text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap py-2 ${
                  activeSection === cat.id 
                    ? 'text-[#FF4500] scale-105 origin-left' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content (80% width on Desktop) */}
        <div className="w-full md:w-[75%] lg:w-[80%] flex flex-col gap-24">
          {menuData.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-48">
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-white mb-8 uppercase border-b border-gray-800 pb-4">
                {cat.name}
              </h2>
              
              <div className="flex flex-col gap-4">
                {/* Table Headers */}
                <div className="flex justify-between items-end text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">
                  <span>Items</span>
                  <div className="flex gap-4 md:gap-12">
                    <span className="w-16 md:w-20 text-right">Price</span>
                    <span className="w-16 md:w-20 text-right">Calories</span>
                  </div>
                </div>
                
                {/* Menu Items */}
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end group">
                    {/* Item Name & Dotted Leader */}
                    <div className="flex-1 flex items-baseline overflow-hidden">
                      <span className="text-sm md:text-base font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                        {item.name}
                      </span>
                      {/* Dotted line extending to price */}
                      <div className="flex-1 mx-4 border-b border-dotted border-gray-700 opacity-50 relative -top-1" />
                    </div>
                    
                    {/* Price & Calories */}
                    <div className="flex gap-4 md:gap-12 items-baseline shrink-0">
                      <span className="w-16 md:w-20 text-right text-sm md:text-base font-medium text-[#FF4500]">
                        {item.price}
                      </span>
                      <span className="w-16 md:w-20 text-right text-[11px] md:text-xs text-gray-500">
                        {item.calories !== "-" ? item.calories : ""}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Absolute Footer at bottom */}
      <div className="relative mt-auto">
        <Footer />
      </div>
      
      {/* Hide scrollbar styles directly */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}
