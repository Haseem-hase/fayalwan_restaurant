import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-10 text-white font-sans select-none pointer-events-none">
      {/* Left */}
      <div className="flex-1 pointer-events-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
          Fayalwan Restaurant
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
