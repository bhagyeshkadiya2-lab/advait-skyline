import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Amenities from "@/components/Amenities";
import Commercial from "@/components/Commercial";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Specifications from "@/components/Specifications";
import Builder from "@/components/Builder";

export default function Home() {
  return (
    <>
      {/* 1. Hero banner parallax and load-time intro */}
      <Hero />
      
      {/* 2. Core project introduction & principle modules */}
      <About />
      
      {/* 3. Numerical highlights & spring counters */}
      <Stats />
      
      {/* 4. Complete 39+ world-class amenities grid */}
      <Amenities />
      
      {/* 5. Strategic retail storefront opportunity */}
      <Commercial />
      
      {/* 6. Dynamic floor plans and room dimensions toggle */}
      <FloorPlans />
      
      {/* 7. Interactive location maps and travel connectivity */}
      <Location />
      
      {/* 8. Structural specifications & construction brands strip */}
      <Specifications />
      
      {/* 9. Dhanasvi Infra profile and trust values */}
      <Builder />
    </>
  );
}
