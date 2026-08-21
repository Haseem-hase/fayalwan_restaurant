import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-10 text-white font-sans select-none pointer-events-none">
      {/* Left */}
      <div className="flex-1 pointer-events-auto">
        <h1 className="flex items-baseline gap-2 uppercase">
          <span className="text-2xl md:text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Fayalwan
          </span>
          <span className="text-sm md:text-base font-light tracking-[0.2em] text-gray-400">
            Restaurant
          </span>
        </h1>
      </div>

      {/* Middle */}
      <div className="flex-1 flex justify-center pointer-events-auto">
        <span className="text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:text-gray-400 transition-colors uppercase">
          Menu
        </span>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end gap-10 md:gap-16 pointer-events-auto">
        <span className="text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:text-gray-400 transition-colors uppercase">
          Contact
        </span>
        <span className="text-[11px] font-medium tracking-[0.25em] cursor-pointer hover:text-gray-400 transition-colors uppercase">
          About
        </span>
      </div>
    </header>
  );
};

export default Header;
