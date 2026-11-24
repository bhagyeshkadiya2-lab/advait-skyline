"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in milliseconds
  className?: string;
}

export default function CounterStat({
  value,
  suffix = "",
  prefix = "",
  duration = 1500, // optimized 1500ms duration for high-end scrolling
  className = "",
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect(); // Trigger animation once
        }
      },
      { threshold: 0.3 } // triggers when 30% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected || animatedRef.current) return;

    animatedRef.current = true;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      // easeOutQuart easing formula: 1 - (1 - x)^4
      const easeValue = 1 - Math.pow(1 - percentage, 4);
      const current = Math.floor(easeValue * value);

      setCount(current);

      if (percentage < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [hasIntersected, value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
