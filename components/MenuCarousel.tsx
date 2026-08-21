'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const images = [
  "https://images.unsplash.com/photo-1542304928-86088d8b4e70?q=80&w=600",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600",
  "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=600",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600",
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=600",
  "https://images.unsplash.com/photo-1594035987173-16c810fb594b?q=80&w=600",
  "https://images.unsplash.com/photo-1572018861314-5d5d852a392b?q=80&w=600",
  "https://images.unsplash.com/photo-1600109961912-3269b6dcba44?q=80&w=600",
  "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=600",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600",
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
      className="relative w-full h-screen bg-black overflow-hidden select-none touch-none"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <Header />
      <Footer />
      <div 
        className="absolute top-1/2 left-1/2 will-change-transform"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {/* Center Logo/Atom */}
        <div 
          className="absolute top-0 left-0 w-16 h-8 z-10"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation * 0.5}deg)` }}
        >
          <svg width="100%" height="100%" viewBox="0 0 60 30" fill="none" stroke="white" strokeWidth="1">
            <ellipse cx="30" cy="15" rx="28" ry="6" transform="rotate(-30 30 15)" />
            <ellipse cx="30" cy="15" rx="28" ry="6" transform="rotate(30 30 15)" />
            <ellipse cx="30" cy="15" rx="28" ry="6" transform="rotate(0 30 15)" />
          </svg>
        </div>

        {/* Orbiting Images */}
        {itemsData.map((item) => {
          const currentAngleRad = (item.baseAngle + rotation) * (Math.PI / 180);
          const x = RADIUS_X * Math.cos(currentAngleRad);
          const y = RADIUS_Y * Math.sin(currentAngleRad);

          return (
            <div
              key={item.id}
              className="absolute will-change-transform"
              style={{
                width: item.w,
                height: item.h,
                left: x,
                top: y,
                zIndex: item.z,
                transform: `translate(-50%, -50%)`,
              }}
            >
            <div 
              className="w-full h-full overflow-hidden transition-transform duration-300 ease-out hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
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
