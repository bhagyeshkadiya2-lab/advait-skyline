"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Landmark,
  Activity,
  Milestone,
  Train,
  Trophy,
  BookOpen,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";

const CONNECTIVITY_ITEMS = [
  {
    icon: MapPin,
    name: "Naroli–Bhilad Checkpost",
    time: "1 Min",
    dist: "200m",
  },
  {
    icon: GraduationCap,
    name: "Naroli High School",
    time: "4 Min",
    dist: "2.4 km",
  },
  {
    icon: Landmark,
    name: "SBI / BOB / HDFC Bank",
    time: "3 Min",
    dist: "2.5 km",
  },
  {
    icon: Activity,
    name: "Primary Health Centre",
    time: "5 Min",
    dist: "3.0 km",
  },
  {
    icon: Milestone,
    name: "BAPS Swaminarayan Mandir",
    time: "9 Min",
    dist: "7.2 km",
  },
  {
    icon: Train,
    name: "Bhilad Railway Station",
    time: "10 Min",
    dist: "5.1 km",
  },
  {
    icon: Trophy,
    name: "Silvassa Stadium",
    time: "13 Min",
    dist: "9.8 km",
  },
  {
    icon: BookOpen,
    name: "Laxmi Vidyapeet Campus",
    time: "21 Min",
    dist: "9.0 km",
  },
  {
    icon: Stethoscope,
    name: "Namo Medical College",
    time: "21 Min",
    dist: "14.0 km",
  },
  {
    icon: Train,
    name: "Vapi Railway Station",
    time: "25 Min",
    dist: "16.0 km",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-brand-deepBrown relative overflow-hidden text-white">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-copper/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <RevealLine className="mb-4 bg-brand-copper" width="w-24" />
          <FloatingEntrance delay={0.1}>
            <h2 className="text-white text-section-h2 mb-4 font-display font-semibold">
              Everything You Need, Just Minutes Away
            </h2>
          </FloatingEntrance>
          <FloatingEntrance delay={0.2}>
            <p className="text-brand-cream/70 font-body text-section-h3 font-medium">
              Perfect equilibrium of tranquil living and direct urban proximity
            </p>
          </FloatingEntrance>
        </div>

        {/* Map and Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Google Maps Embed (5 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <FloatingEntrance delay={0.2} className="h-full min-h-[350px] lg:min-h-[500px] flex">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-brand-copper/30 bg-brand-charcoal relative">
                <iframe
                  title="Advait Skyline Location Map (Naroli–Bhilad Checkpost)"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.729111425126!2d72.90993077598687!3d20.22956271477435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb68b5555555%3A0x6b149b18366914!2sNaroli%20Checkpost!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full filter grayscale contrast-[1.1] brightness-[0.95]"
                />
              </div>
            </FloatingEntrance>
          </div>

          {/* Right Column - Connectivity Lists (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex flex-col gap-3.5 h-full">
              {CONNECTIVITY_ITEMS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <FloatingEntrance key={idx} delay={0.1 + idx * 0.06}>
                    <motion.div
                      whileHover={{ scale: 1.015, x: 6, backgroundColor: "rgba(255,255,255,0.04)" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl shadow-sm hover:border-brand-copper/50 cursor-pointer"
                    >
                      {/* Left icon wrapper */}
                      <div className="w-10 h-10 rounded-xl bg-brand-copper/15 flex items-center justify-center text-brand-gold">
                        <IconComponent size={18} />
                      </div>

                      {/* Landmark name */}
                      <span className="text-white font-body text-xs md:text-sm font-semibold tracking-wide">
                        {item.name}
                      </span>

                      {/* Distance / travel time tag */}
                      <div className="ml-auto flex items-center gap-2">
                        <span className="text-[10px] md:text-xs text-brand-cream/60 font-body uppercase tracking-wider font-semibold">
                          {item.dist}
                        </span>
                        <div className="bg-brand-copper/20 border border-brand-copper/30 px-3.5 py-1.5 rounded-full">
                          <span className="text-brand-copper font-body text-[10px] md:text-xs font-bold whitespace-nowrap">
                            {item.time}
                          </span>
                        </div>
                        <ChevronRight size={14} className="text-white/30 hidden md:block" />
                      </div>
                    </motion.div>
                  </FloatingEntrance>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
