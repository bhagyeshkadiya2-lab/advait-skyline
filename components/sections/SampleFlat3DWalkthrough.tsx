'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Sparkles,
  Maximize2,
  ChevronRight,
  Compass,
  MessageSquare,
  ShieldCheck,
  Eye,
  Camera,
  Layers,
  RotateCcw,
} from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

interface Hotspot {
  id: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  title: string;
  detail: string;
}

interface RoomAngle {
  label: string;
  image: string;
  tag: string;
}

interface RoomShowcase {
  id: string;
  title: string;
  dimensions: string;
  description: string;
  angles: RoomAngle[];
  hotspots: Hotspot[];
}

const ROOMS_DATA: RoomShowcase[] = [
  {
    id: 'living',
    title: 'Grand Living Hall & Foyer',
    dimensions: "16' × 10'6\" (2 BHK) / 10' × 15'9\" (1 BHK)",
    description:
      'Expansive living salon with generous natural daylight, premium vitrified tile flooring, and direct access to the scenic sunset balcony.',
    angles: [
      {
        label: 'Front Elevation View',
        image: '/showcase/living-room-main.webp',
        tag: 'Main Lounge View',
      },
      {
        label: 'Panoramic Angle',
        image: '/showcase/living-room-panoramic.webp',
        tag: 'Wide Perspective',
      },
      {
        label: 'Lounge & Dining Corner',
        image: '/showcase/living-room-angle-1.webp',
        tag: 'Dining Corner',
      },
      {
        label: 'Entertainment Wall & TV Unit',
        image: '/showcase/living-room-tv.webp',
        tag: 'Media Feature Wall',
      },
    ],
    hotspots: [
      {
        id: 'floor',
        x: 48,
        y: 78,
        title: 'Premium Vitrified Tiles',
        detail: 'High-gloss vitrified tile flooring offering seamless aesthetics, scratch resistance, and easy maintenance.',
      },
      {
        id: 'ventilation',
        x: 82,
        y: 42,
        title: 'Expansive Cross-Ventilation',
        detail: 'Large anodized aluminum sliding windows usher in fresh hilltop breezes and abundant natural daylight.',
      },
      {
        id: 'electrical',
        x: 26,
        y: 35,
        title: 'Concealed Copper Wiring',
        detail: 'RR Kabel wiring with modular Havells switches, TV/telephone points, and dual AC points configured.',
      },
    ],
  },
  {
    id: 'kitchen',
    title: 'Modern Modular Kitchen & Dining',
    dimensions: "9' × 7' (2 BHK) / 8'9\" × 7' (1 BHK)",
    description:
      'Ergonomically engineered parallel kitchen layout with polished granite platform, SS sink, overhead modular cabinetry, and separate utility wash area.',
    angles: [
      {
        label: 'Master Kitchen Panorama',
        image: '/showcase/modular-kitchen-main.webp',
        tag: 'Executive Modular Setup',
      },
      {
        label: 'Cooking Hob & Backsplash',
        image: '/showcase/modular-kitchen-hob.webp',
        tag: 'Quartz / Hob Platform',
      },
      {
        label: 'Storage & Cabinetry Finish',
        image: '/showcase/modular-kitchen-cabinets.webp',
        tag: 'Soft-Close Storage',
      },
      {
        label: 'Washing Station & Sink Area',
        image: '/showcase/modular-kitchen-sink.webp',
        tag: 'Utility Stainless Sink',
      },
    ],
    hotspots: [
      {
        id: 'platform',
        x: 40,
        y: 68,
        title: 'Granite Platform & SS Sink',
        detail: 'Heavy-duty polished granite platform fitted with premium stainless steel sink and Aris CP fittings.',
      },
      {
        id: 'dado',
        x: 58,
        y: 38,
        title: 'Designer Ceramic Dado',
        detail: 'Glazed wall tiles installed up to lintel height for easy wipe-down cooking cleanliness.',
      },
      {
        id: 'utility',
        x: 85,
        y: 52,
        title: 'Dedicated Utility Wash Area',
        detail: '3\'6" wide utility wash space with plumbing points for washing machine and water purifier.',
      },
    ],
  },
  {
    id: 'bedroom',
    title: 'Master Bedroom Suite',
    dimensions: "10'9\" × 10' (Master) / 10' × 11' (Bedroom)",
    description:
      'Peaceful sanctuary designed with expansive wardrobe alcove, attached master en-suite bathroom, and dedicated AC electrical provision.',
    angles: [
      {
        label: 'Master Bedroom Bed Wall',
        image: '/showcase/master-bedroom.webp',
        tag: 'Master Bed Suite',
      },
      {
        label: 'Wardrobe & Corner Vista',
        image: '/showcase/bedroom-interior.webp',
        tag: 'Interior Perspective',
      },
    ],
    hotspots: [
      {
        id: 'ac',
        x: 75,
        y: 22,
        title: 'Dedicated AC Point Pre-Wired',
        detail: 'Concealed copper drain and high-amperage electrical point ready for split air conditioner installation.',
      },
      {
        id: 'wardrobe',
        x: 22,
        y: 55,
        title: 'Full-Height Wardrobe Niche',
        detail: 'Deep structural recess accommodating custom multi-door sliding wardrobes without sacrificing bedroom space.',
      },
    ],
  },
  {
    id: 'balcony',
    title: 'Private Sunset Balcony',
    dimensions: "5'6\" Wide (2 BHK) / 4' Wide (1 BHK)",
    description:
      'Private outdoor oasis overlooking scenic greenery and Naroli–Silvassa horizons, engineered with anti-skid flooring and weather-sealed finishes.',
    angles: [
      {
        label: 'Balcony Outdoor Vista',
        image: '/showcase/private-balcony.webp',
        tag: 'Sunset Horizon View',
      },
    ],
    hotspots: [
      {
        id: 'railing',
        x: 50,
        y: 70,
        title: 'High-Safety Protective Railing',
        detail: 'Sturdy safety railings engineered to municipal safety codes, allowing unhindered panoramic views.',
      },
      {
        id: 'antiskid',
        x: 50,
        y: 90,
        title: 'Anti-Skid Weather Tiles',
        detail: 'Textured outdoor floor tiles ensuring safe, slip-free footing during monsoon downpours.',
      },
    ],
  },
];

export default function SampleFlat3DWalkthrough() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeRoom = ROOMS_DATA[activeRoomIndex];
  const activeAngle = activeRoom.angles[activeAngleIndex] || activeRoom.angles[0];

  // 3D Spring Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  // Transforms for 3D card tilt
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const sheenX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleRoomChange = (idx: number) => {
    setActiveRoomIndex(idx);
    setActiveAngleIndex(0);
    setSelectedHotspot(null);
    pushDataLayerEvent('room_walkthrough_view', {
      room_name: ROOMS_DATA[idx].title,
      room_id: ROOMS_DATA[idx].id,
    });
  };

  const waVisitUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello Dhanasvi Infra team, I was exploring the interactive 3D virtual tour of the ${activeRoom.title} at Advait Skyline. I would like to schedule an in-person visit to inspect the actual sample flat.`,
    sourceRef: `3d-walkthrough-${activeRoom.id}`,
  });

  return (
    <section id="3d-tour" className="py-24 sm:py-32 bg-[#1E130C] text-[#FBF8F2] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B4F2E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#F2D27A_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-[#F2D27A]">
                Interactive 3D Spatial Tour
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Experience the Actual Sample Flat
            </h2>
            <p className="font-sans text-[#EADFCB]/80 text-sm sm:text-base leading-relaxed">
              Step inside our on-site furnished sample flat at Naroli–Bhilad Checkpost. Move your mouse or finger to tilt in 3D perspective and click the golden markers to inspect architectural fittings and specifications.
            </p>
          </div>

          {/* Quick RERA / Ready Badge */}
          <div className="flex flex-wrap items-center gap-3 bg-[#271910] border border-[#7B4F2E]/50 px-5 py-3 rounded-2xl shrink-0">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <span className="text-xs uppercase font-sans tracking-wider text-[#F2D27A] font-bold block">
                Sample Flat Ready on Site
              </span>
              <span className="text-[11px] font-sans text-[#EADFCB]/70 block">
                Vadfaliya, Naroli–Silvassa Main Road
              </span>
            </div>
          </div>
        </div>

        {/* Room Navigation Pills */}
        <div data-lenis-prevent className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ROOMS_DATA.map((room, idx) => {
            const isActive = idx === activeRoomIndex;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => handleRoomChange(idx)}
                className={`px-5 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F2D27A] via-[#D9A21B] to-[#A8680F] text-[#1E130C] shadow-lg shadow-[#D9A21B]/20 scale-[1.02]'
                    : 'bg-[#271910]/80 text-[#EADFCB]/80 hover:text-white hover:bg-[#271910] border border-[#7B4F2E]/40'
                }`}
              >
                <span>{room.title.split(' ')[0]} {room.title.split(' ')[1]}</span>
                {isActive && <Sparkles size={14} className="fill-[#1E130C]" />}
              </button>
            );
          })}
        </div>

        {/* Main 3D Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Perspective Card (8 cols) */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="lg:col-span-8 relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#D9A21B]/40 shadow-[0_30px_90px_rgba(0,0,0,0.8)] bg-[#120B07] group"
            >
              {/* Dynamic Camera Perspective Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAngle.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeAngle.image}
                    alt={`${activeRoom.title} — ${activeAngle.label} at Advait Skyline`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Ambient 3D Glass Sheen on Pointer Tilt */}
              <motion.div
                style={{
                  background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(242, 210, 122, 0.18) 0%, transparent 60%)`,
                }}
                className="absolute inset-0 pointer-events-none"
              />

              {/* Vignette & Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C]/90 via-transparent to-[#1E130C]/40 pointer-events-none" />

              {/* Top Bar on 3D Card */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2 bg-[#1E130C]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D9A21B]/30 text-white font-sans text-xs">
                  <Camera size={13} className="text-[#F2D27A]" />
                  <span className="font-semibold">{activeAngle.tag}</span>
                </div>

                <div className="flex items-center gap-2 bg-[#1E130C]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[#EADFCB]/80 font-sans text-xs">
                  <Compass size={13} className="text-[#F2D27A] animate-spin" style={{ animationDuration: '14s' }} />
                  <span className="hidden sm:inline">3D Gyro Tilt Enabled</span>
                  <span className="sm:hidden">Tilt Active</span>
                </div>
              </div>

              {/* Interactive 3D Hotspot Pins floating in Z-space */}
              {activeRoom.hotspots.map((hotspot) => {
                const isSelected = selectedHotspot?.id === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%) translateZ(40px)',
                    }}
                    className="absolute z-30"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedHotspot(isSelected ? null : hotspot);
                        pushDataLayerEvent('hotspot_click', {
                          hotspot_id: hotspot.id,
                          room_id: activeRoom.id,
                          hotspot_title: hotspot.title,
                        });
                      }}
                      className="relative group/pin flex items-center justify-center cursor-pointer p-2 outline-none"
                      aria-label={hotspot.title}
                    >
                      {/* Pulsing Outer Rings */}
                      <span className="absolute w-8 h-8 rounded-full bg-[#D9A21B]/40 animate-ping" />
                      <span className="absolute w-6 h-6 rounded-full bg-[#F2D27A]/60 animate-pulse" />
                      
                      {/* Core Golden Button */}
                      <span
                        className={`relative w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-transform duration-300 shadow-xl ${
                          isSelected
                            ? 'bg-[#1E130C] text-[#F2D27A] border-[#F2D27A] scale-125'
                            : 'bg-gold-gradient text-[#1E130C] border-white group-hover/pin:scale-110'
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Bottom Card Bar: Room Dimensions & Hint */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="bg-[#1E130C]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#7B4F2E]/50">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#F2D27A] font-bold block">
                    Carpet Dimensions
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-white">
                    {activeRoom.dimensions}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-sans text-[#EADFCB]/70 bg-[#1E130C]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <Eye size={12} className="text-[#F2D27A]" />
                  <span>Click golden pins for specs</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Viewpoint Switcher & Spec Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Viewpoint Angles Grid */}
            <div className="bg-[#271910] border border-[#7B4F2E]/40 rounded-2xl p-5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs uppercase tracking-wider text-[#F2D27A] font-bold flex items-center gap-2">
                  <Layers size={14} />
                  Camera Angles ({activeRoom.angles.length})
                </span>
                <span className="text-[11px] font-sans text-[#EADFCB]/60">Select viewpoint</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {activeRoom.angles.map((angle, aIdx) => {
                  const isSelected = aIdx === activeAngleIndex;
                  return (
                    <button
                      key={angle.label}
                      type="button"
                      onClick={() => setActiveAngleIndex(aIdx)}
                      className={`relative aspect-[16/11] rounded-xl overflow-hidden border-2 text-left p-2 transition-all duration-300 group cursor-pointer ${
                        isSelected
                          ? 'border-[#D9A21B] shadow-md ring-2 ring-[#D9A21B]/30 scale-[1.02]'
                          : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <Image
                        src={angle.image}
                        alt={angle.label}
                        fill
                        sizes="180px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C] via-[#1E130C]/30 to-transparent" />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-sans font-semibold text-white truncate leading-tight">
                        {angle.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Hotspot Detail Card OR Room Overview */}
            <AnimatePresence mode="wait">
              {selectedHotspot ? (
                <motion.div
                  key={selectedHotspot.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-gradient-to-br from-[#271910] to-[#1E130C] border-2 border-[#D9A21B] rounded-2xl p-6 space-y-3 shadow-xl relative"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedHotspot(null)}
                    className="absolute top-3 right-3 text-xs text-[#EADFCB]/60 hover:text-white px-2 py-1 rounded bg-[#1E130C]/60"
                  >
                    Close
                  </button>
                  <div className="flex items-center gap-2 text-[#F2D27A]">
                    <ShieldCheck size={16} />
                    <span className="text-[11px] uppercase font-sans tracking-wider font-bold">
                      Verified Construction Specification
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {selectedHotspot.title}
                  </h3>
                  <p className="font-sans text-sm text-[#EADFCB]/85 leading-relaxed">
                    {selectedHotspot.detail}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="room-overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#271910] border border-[#7B4F2E]/40 rounded-2xl p-6 space-y-4"
                >
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#F2D27A] font-bold block mb-1">
                      Room Architecture
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {activeRoom.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-[#EADFCB]/80 leading-relaxed">
                    {activeRoom.description}
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-sans text-[#EADFCB]/70 border-t border-white/10">
                    <div>
                      <span className="text-[#F2D27A] font-bold block">Structure</span>
                      <span>G+14 Earthquake Resistant</span>
                    </div>
                    <div>
                      <span className="text-[#F2D27A] font-bold block">Status</span>
                      <span>Ready for Site Inspection</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* In-Person Site Visit CTA Button */}
            <a
              href={waVisitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushDataLayerEvent('whatsapp_click', {
                  cta_location: '3d_walkthrough_sidebar',
                  room_name: activeRoom.title,
                })
              }
              className="px-6 py-4 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-center"
            >
              <MessageSquare size={17} className="fill-[#1E130C]" />
              <span>Book Tour for this Flat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
