'use client';

import React, { useState, useEffect, useRef } from 'react';

const images = [
  "/assets/foodimages/cb.webp",
  "/assets/foodimages/chillyChicken.webp",
  "/assets/foodimages/daal.webp",
  "/assets/foodimages/friedRice.webp",
  "/assets/foodimages/gheerice.webp",
  "/assets/foodimages/masalaDosa.webp",
  "/assets/foodimages/noodles.webp",
  "/assets/foodimages/poori.webp",
  "/assets/foodimages/porrotta.webp",
  "/assets/foodimages/sambaar.webp",
  "/assets/foodimages/teaSnacks.webp",
  "/assets/foodimages/vada.webp",
];

const RADIUS_X = 450;
const RADIUS_Y = 250;
const ITEM_WIDTH = 280;
const ITEM_HEIGHT = 180;

const itemsData = images.map((src, i) => {
  const angle = (i * 360) / images.length;
  return {
    id: i + 1,
    src,
    baseAngle: angle,
    w: ITEM_WIDTH,
    h: ITEM_HEIGHT,
    z: 1,
    bgColor: "transparent",
  };
});

export default function MenuCarousel() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, rot: 0 });
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const updateScale = () => {
      // Scale down if on smaller screens to ensure visibility
      const minScale = Math.min(window.innerWidth / 1200, window.innerHeight / 1000);
      setScale(Math.max(0.3, Math.min(minScale, 1.2)));
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);



  useEffect(() => {
    const animate = () => {
      if (!isDragging) {
        targetRotation.current += 0.03; // Gentle auto-rotation
      }
      
      // Smooth interpolation for rotation
      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.05;
      setRotation(currentRotation.current);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, rot: targetRotation.current };
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    targetRotation.current = dragStartRef.current.rot + deltaX * 0.15;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetRotation.current += e.deltaY * 0.02;
    };
    el.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleNativeWheel);
  }, []);

  return (
    <div 
      className="relative w-full h-screen bg-[#FF4500] overflow-hidden select-none touch-none"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div 
        className="absolute top-1/2 left-1/2 will-change-transform"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {/* Center Logo/Chef Hat */}
        <div 
          className="absolute top-0 left-0 w-12 h-12 z-10"
          style={{ transform: `translate(-50%, -50%)` }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589c-.26 0-.482-.156-.562-.416a4.996 4.996 0 0 0-9.61 0c-.08.26-.301.416-.562.416a4 4 0 0 0-2.134 7.589c.411.197.727.584.727 1.04V20a1 1 0 0 0 1 1z" />
            <path d="M6 17h12" />
          </svg>
        </div>

        {/* Orbiting Images */}
        {itemsData.map((item) => {
          const currentAngleRad = (item.baseAngle + rotation) * (Math.PI / 180);
          const x = RADIUS_X * Math.cos(currentAngleRad);
          const y = RADIUS_Y * Math.sin(currentAngleRad);
          
          // Calculate dynamic depth so items in front overlap items in back
          const depthZIndex = Math.floor(y + RADIUS_Y);
          
          const isHovered = hoveredId === item.id;
          const isOtherHovered = hoveredId !== null && hoveredId !== item.id;

          return (
            <div
              key={item.id}
              className="absolute will-change-transform"
              style={{
                width: item.w,
                height: item.h,
                left: x,
                top: y,
                zIndex: isHovered ? 9999 : depthZIndex,
                transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.25)' : 'scale(1)'}`,
                filter: isOtherHovered ? 'grayscale(100%) opacity(0.6)' : 'grayscale(0%) opacity(1)',
                transition: 'transform 0.4s ease-out, filter 0.4s ease-out',
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
            <div 
              className="w-full h-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-xl"
              style={{ backgroundColor: item.bgColor || 'transparent' }}
            >
              {item.src && (
                <img 
                  src={item.src} 
                  alt="" 
                  className="w-full h-full object-cover pointer-events-none"
                />
              )}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
