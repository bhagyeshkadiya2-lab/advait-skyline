'use client';

import React, { useEffect, useState } from 'react';

export default function SocialBottomPopup() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Safely execute window/document API calls inside useEffect to prevent Next.js SSR hydration errors
    const checkViewport = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      
      if (mobileView) {
        // Trigger smooth slide-up animation entry
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 150);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(false);
      }
    };

    checkViewport();

    // Listen to resize events to maintain layout isolation dynamically
    window.addEventListener('resize', checkViewport);
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  // Zero layout effect, zero height, and zero visual presence on desktop or if not mobile
  if (!isMobile) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[99999] md:hidden transform transition-transform duration-500 ease-out pointer-events-auto ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!isVisible}
    >
      {/* Top Bar: Dark row with center pill handle and website domain name */}
      <div className="bg-[#1f1f1f] pt-2 pb-2.5 px-4 text-center border-t border-[#333333]/30 rounded-t-2xl flex flex-col items-center gap-1.5 shadow-[0_-4px_10px_rgba(0,0,0,0.15)]">
        {/* Pill handle matching in-app sheet design */}
        <div className="w-9 h-1 bg-[#555555] rounded-full opacity-60"></div>
        <span className="text-[11px] font-medium text-[#cccccc] font-body block select-none">
          advaitskyline.com
        </span>
      </div>

      {/* Bottom Bar: Deep forest green container with centered value prop text */}
      <div className="bg-[#1a4d36] px-5 py-4 text-center text-white border-t border-[#143e2b] safe-bottom">
        <span className="text-xs font-semibold tracking-wide font-body select-none">
          Trusted by 5 lakh+ Happy Customers
        </span>
      </div>
    </div>
  );
}
