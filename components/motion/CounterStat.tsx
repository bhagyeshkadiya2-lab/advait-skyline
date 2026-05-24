"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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
  duration = 1800,
  className = "",
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || animatedRef.current) return;
    
    animatedRef.current = true;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutQuad easing
      const easeValue = percentage * (2 - percentage);
      const current = Math.floor(easeValue * value);
      
      setCount(current);

      if (percentage < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
