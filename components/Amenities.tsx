"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Dumbbell, Users, ShieldCheck, Check } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const FEATURED_AMENITIES = [
  {
    title: "Swimming Pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    desc: "Oasis of tranquility with a separate toddlers' pool.",
  },
  {
    title: "Gym & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    desc: "Fully equipped separate wings for male and female fitness.",
  },
  {
    title: "Club House",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    desc: "Ultra-premium community lounge and multi-purpose hall.",
  },
];

const CATEGORIZED_AMENITIES = [
  {
    id: "sports-wellness",
    label: "Sports & Wellness",
    icon: Dumbbell,
    items: [
      "Swimming Pool",
      "AC Gym (Male)",
      "AC Gym (Female)",
      "Basketball Court",
      "Box Cricket Arena",
      "Yoga & Meditation Space",
      "Jogging & Cycling Track",
      "Reflexology Walkway",
      "Paved Jogging Tracks",
      "Indoor Games Area",
    ],
  },
  {
    id: "social-leisure",
    label: "Social & Family",
    icon: Users,
    items: [
      "Club House",
      "Library & Lounge",
      "Children's Play Area",
      "Toddler Play Zone",
      "Ganesha Temple",
      "Party Lawn",
      "Mini Theater",
      "AC Community Theater",
      "Senior Citizen Sitting",
      "Landscaped Garden Area",
      "Music in Garden",
      "Gazebo Seating Areas",
      "Fountain Feature Wall",
      "Internal Decorative Trees",
    ],
  },
  {
    id: "comfort-safety",
    label: "Safety & Utilities",
    icon: ShieldCheck,
    items: [
      "24×7 CCTV Security",
      "EV Charging Stations",
      "Emergency Power Backup",
      "Ample Double Basement Parking",
      "Grand Entrance Gate",
      "High-speed Branded Lifts",
      "Service/Stretcher Elevator",
      "Fire Fighting System",
      "Solar Water Heating",
      "Intercom Connectivity",
      "Solar Common Streetlights",
      "Sewage Treatment Plant",
      "Rainwater Harvesting",
      "Organic Waste Converter",
      "Automated Security Gates",
      "Basement Ventilation Fans",
      "Grocery & Daily Shop Arcade",
    ],
  },
];

export default function Amenities() {
  const isReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState("sports-wellness");

  // Filter items based on activeTab
  const activeCategory = CATEGORIZED_AMENITIES.find((cat) => cat.id === activeTab) || CATEGORIZED_AMENITIES[0];

  // Grid list parent-child stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2, ease: "easeIn" as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <RevealLine className="mb-4 mx-auto" width="w-24" />
          
          <FloatingEntrance delay={0.1}>
            <h2 className="text-brand-primaryBrown text-section-h2 mb-4 font-display font-semibold">
              39 Lifestyle Amenities
            </h2>
          </FloatingEntrance>
          
          <FloatingEntrance delay={0.2}>
            <p className="text-brand-charcoal/80 font-body text-section-h3 font-medium">
              Everything you need, within your community
            </p>
          </FloatingEntrance>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {FEATURED_AMENITIES.map((amen, idx) => (
            <FloatingEntrance key={idx} delay={0.1 + idx * 0.15}>
              <motion.div
                whileHover={isReduced ? {} : { y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-lg hover:shadow-xl cursor-pointer border border-brand-cream"
              >
                {/* Parallax inner image scale */}
                <motion.div
                  whileHover={isReduced ? {} : { scale: 1.08 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={amen.image}
                    alt={amen.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-all"
                  />
                </motion.div>

                {/* Gradient shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepBrown/85 via-brand-deepBrown/25 to-transparent z-10" />

                {/* Copy content bottom left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-start text-white">
                  <h3 className="text-white font-display text-2xl font-bold mb-2">
                    {amen.title}
                  </h3>
                  <p className="text-brand-cream/80 font-body text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {amen.desc}
                  </p>
                </div>

                {/* Decorative highlight icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-brand-gold z-20">
                  <Sparkles size={16} />
                </div>
              </motion.div>
            </FloatingEntrance>
          ))}
        </div>

        {/* CURATED INTERACTIVE CATALOG ZONE */}
        <div className="bg-brand-cream/45 rounded-[2.5rem] border border-brand-copper/15 p-8 md:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle amber background glows */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-copper/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-col items-center mb-12 relative z-10">
            <FloatingEntrance delay={0.1} className="mb-8">
              <h4 className="text-brand-primaryBrown font-body text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-center">
                Discover the Complete 39 Lifestyle Amenities Catalog
              </h4>
            </FloatingEntrance>

            {/* Pill selector buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 bg-brand-primaryBrown/10 border border-brand-copper/15 p-2 rounded-full md:rounded-full">
              {CATEGORIZED_AMENITIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-body text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover-trigger relative ${
                      isActive
                        ? "bg-brand-primaryBrown text-white shadow-md"
                        : "text-brand-primaryBrown/70 hover:text-brand-primaryBrown hover:bg-brand-primaryBrown/5"
                    }`}
                  >
                    <IconComponent size={14} className={isActive ? "text-brand-gold" : "text-brand-copper"} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Staggered Badge Grid with AnimatePresence */}
          <div className="min-h-[220px] relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap items-center justify-center gap-3.5"
              >
                {activeCategory.items.map((badge) => (
                  <motion.div
                    key={badge}
                    variants={badgeVariants}
                    whileHover={{
                      scale: isReduced ? 1 : 1.05,
                      borderColor: "#C4843A", // brand.copper
                      color: "#C4843A", // brand.copper
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(196, 132, 58, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex items-center gap-2 bg-white text-brand-charcoal font-body text-xs font-semibold px-5 py-3 rounded-full border border-brand-copper/20 cursor-pointer shadow-sm transition-all duration-300"
                  >
                    {/* Sparkling mini icon */}
                    <div className="text-brand-gold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{badge}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
