import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="absolute bottom-0 left-0 w-full z-[99999] flex items-center justify-between px-12 pt-10 pb-6 text-white select-none pointer-events-none"
    >
      {/* Left */}
      <div className="flex-1 pointer-events-auto">
        <span className="text-[10px] text-gray-400 font-medium tracking-[0.25em] uppercase">
          For fine dining and culinary excellence
        </span>
      </div>

      {/* Middle */}
      <div className="flex-1 flex justify-center pointer-events-auto">
        <span className="text-[10px] text-gray-200 font-medium tracking-[0.25em] uppercase">
          Saudi Arabia
        </span>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end pointer-events-auto">
        <a 
          href="https://www.google.com/maps/place/Fayalwan+Restaurant/@24.7217452,46.6763653,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f0300630d1b83:0x28c7e61d5b068eb7!8m2!3d24.7217452!4d46.6789402!16s%2Fg%2F11xw3qxwxj?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">Location</span>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
