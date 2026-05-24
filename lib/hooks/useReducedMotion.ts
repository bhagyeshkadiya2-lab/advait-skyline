"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsReduced(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return isReduced;
}
