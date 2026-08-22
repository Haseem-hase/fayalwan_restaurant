import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  theme?: 'light' | 'dark';
  isFixed?: boolean;
}

const Header = ({ theme = 'dark', isFixed = false }: HeaderProps) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-gray-900' : 'text-white';
  const logoGradient = isLight ? 'from-gray-900 to-gray-500' : 'from-white to-gray-400';
  const subtextColor = isLight ? 'text-gray-600' : 'text-gray-400';
  
  const positionClass = isFixed ? 'fixed bg-[#0A0A0A]/90 backdrop-blur-md' : 'absolute';

  return (
    <header 
      className={`${positionClass} top-0 left-0 w-full z-[99999] flex items-center justify-between px-12 py-10 ${textColor} font-sans select-none pointer-events-none transition-all duration-300`}
    >
      {/* Left */}
      <div className="flex-1 pointer-events-auto cursor-pointer">
        <Link href="/">
          <h1 className="flex items-baseline gap-2 uppercase">
            <span className={`text-2xl md:text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${logoGradient}`}>
              Fayalwan
            </span>
            <span className={`text-sm md:text-base font-light tracking-[0.2em] ${subtextColor}`}>
              Restaurant
            </span>
          </h1>
        </Link>
      </div>

      {/* Middle */}
      <div className="flex-1 flex justify-center pointer-events-auto">
        <Link href="/menu">
          <span className={`text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:opacity-70 transition-opacity uppercase`}>
            Menu
          </span>
        </Link>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end gap-10 md:gap-16 pointer-events-auto">
        <Link href="/contact">
          <span className={`text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:opacity-70 transition-opacity uppercase`}>
            Contact
          </span>
        </Link>
        <Link href="/about">
          <span className={`text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:opacity-70 transition-opacity uppercase`}>
            About
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
