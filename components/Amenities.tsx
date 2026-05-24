"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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

const CHIP_AMENITIES = [
  "Swimming Pool",
  "AC Gym (Male)",
  "AC Gym (Female)",
  "Club House",
  "Library & Lounge",
  "Basketball Court",
  "Box Cricket Arena",
  "Children's Play Area",
  "Toddler Play Zone",
  "Ganesha Temple",
  "Indoor Games Area",
  "Party Lawn",
  "Mini Theater",
  "Senior Citizen Sitting",
  "24×7 CCTV Security",
  "AC Community Theater",
  "Landscaped Garden Area",
  "Yoga & Meditation Space",
  "Emergency Power Backup",
  "Music in Garden",
  "Jogging & Cycling Track",
  "EV Charging Stations",
  "Sewage Treatment Plant",
  "Rainwater Harvesting",
  "Ample Double Basement Parking",
  "Grand Entrance Gate",
  "High-speed Branded Lifts",
  "Service/Stretcher Elevator",
  "Fire Fighting System",
  "Solar Water Heating",
  "Intercom Connectivity",
  "Paved Jogging Tracks",
  "Solar Common Streetlights",
  "Gazebo Seating Areas",
  "Organic Waste Converter",
  "Automated Security Gates",
  "Reflexology Walkway",
  "Grocery & Daily Shop Arcade",
  "Basement Ventilation Fans",
  "Internal Decorative Trees",
  "Fountain Feature Wall"
];

export default function Amenities() {
  const isReduced = useReducedMotion();

  // Badge grid parent variant to orchestrate children stagger
  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 15 },
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
              39+ World-Class Amenities
            </h2>
          </FloatingEntrance>
          
          <FloatingEntrance delay={0.2}>
            <p className="text-brand-charcoal/80 font-body text-section-h3 font-medium">
              Everything you need, within your community
            </p>
          </FloatingEntrance>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                    sizes="(max-width: 768px) 100vw, 380px"
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

        {/* 39+ Badges Grid */}
        <div className="bg-brand-cream/40 rounded-[2rem] border border-brand-copper/15 p-8 md:p-12">
          <FloatingEntrance delay={0.2} className="mb-8">
            <h4 className="text-brand-primaryBrown font-body text-sm font-bold uppercase tracking-wider text-center">
              Discover the Complete 39+ Amenities Catalog
            </h4>
          </FloatingEntrance>

          {/* Staggered badge rendering */}
          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-center justify-center gap-3.5"
          >
            {CHIP_AMENITIES.map((badge, idx) => (
              <motion.div
                key={idx}
                variants={badgeVariants}
                whileHover={{ scale: 1.04, backgroundColor: "#FFFFFF" }}
                className="bg-brand-cream text-brand-charcoal font-body text-xs font-semibold px-4.5 py-2.5 rounded-full border border-brand-copper/25 cursor-pointer shadow-sm hover:shadow transition-shadow hover:text-brand-copper"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
