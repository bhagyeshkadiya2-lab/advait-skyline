'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize2,
  MessageSquare,
  Building2,
  Waves,
  Dumbbell,
  Compass,
  Home,
  Store,
  CheckCircle2,
} from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

interface VideoReel {
  id: string;
  category: 'tower' | 'amenities' | 'lobby' | 'clubhouse' | 'residences' | 'location';
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  tag: string;
  highlights: string[];
}

const REELS: VideoReel[] = [
  {
    id: 'tower-elevation',
    category: 'tower',
    title: 'G+14 Landmark Elevation & Sunset',
    subtitle: 'Naroli–Silvassa Main Road Landmark',
    description:
      'Sweeping 3D drone simulation showcasing the modern G+14 architecture, sunset reflections, double-height ground commercial spaces, and panoramic valley views.',
    videoSrc: '/videos/3d/tower-elevation-sunset.mp4',
    tag: 'Tower Elevation 3D',
    highlights: ['G+14 Earthquake-Resistant RCC', 'Sunset Balcony Orientations', 'Main Arterial Highway Frontage'],
  },
  {
    id: 'resort-pool',
    category: 'amenities',
    title: 'Resort Swimming Pool & Sun Deck',
    subtitle: 'Rooftop Lifestyle Amenity',
    description:
      'Immersive 3D fly-through around the crystal-clear swimming pool, poolside gazebos, sun loungers, kids splash pool, and tranquil temple alcove.',
    videoSrc: '/videos/3d/swimming-pool-resort.mp4',
    tag: 'Resort Pool 3D',
    highlights: ['Separate Kids Pool Zone', 'Perimeter Sun Loungers', 'Dedicated Poolside Changing Suites'],
  },
  {
    id: 'grand-lobby',
    category: 'lobby',
    title: 'Double-Height Grand Entrance Lobby',
    subtitle: 'Italian Marble & Crystal Chandelier',
    description:
      'Step into an expansive double-height reception lobby finished in book-matched Italian marble, bespoke designer lighting, and air-conditioned guest waiting lounge.',
    videoSrc: '/videos/3d/grand-entrance-lobby.mp4',
    tag: 'Entrance Lobby 3D',
    highlights: ['Air-Conditioned Visitors Lounge', 'Concierge & Security Desk', 'Access-Controlled Turnstiles'],
  },
  {
    id: 'high-speed-elevators',
    category: 'lobby',
    title: 'Branded High-Speed Elevators',
    subtitle: 'Granite Lift Facia & Touchless Panels',
    description:
      'High-speed branded passenger elevators and dedicated stretcher/service lifts with stainless steel mirror finishes, battery rescue backup, and granite portal framing.',
    videoSrc: '/videos/3d/high-speed-elevators.mp4',
    tag: 'Elevators 3D',
    highlights: ['Automatic Rescue Device (ARD)', 'Stretcher Lift for Emergencies', 'High-Speed Vertical Transit'],
  },
  {
    id: 'sky-gymnasium',
    category: 'clubhouse',
    title: 'Commercial Sky Gymnasium & Cardio',
    subtitle: 'Dual-Wing Fitness Arena',
    description:
      '3D tour of the fully equipped modern fitness facility featuring international-grade cardio treadmills, cross trainers, free-weight stations, and separate zones for men and women.',
    videoSrc: '/videos/3d/sky-gymnasium.mp4',
    tag: 'Fitness Gym 3D',
    highlights: ['Separate Male & Female Zones', 'Rubberised Impact-Absorbing Floor', 'Acoustic Sound Insulation'],
  },
  {
    id: 'clubhouse-banquet',
    category: 'clubhouse',
    title: 'Clubhouse & Banquet Lounge',
    subtitle: 'Celebration & Indoor Community Spaces',
    description:
      'Double-height private community banquet hall with grand chandeliers, plush sofa seating, indoor game stations, and pantry provisions for family functions.',
    videoSrc: '/videos/3d/clubhouse-banquet.mp4',
    tag: 'Clubhouse 3D',
    highlights: ['Air-Conditioned Banquet Facility', 'Table Tennis & Billiards Hub', 'Private Catering Pantry'],
  },
  {
    id: 'central-gardens',
    category: 'amenities',
    title: 'Landscaped Gardens & Water Cascade',
    subtitle: 'Central Greens & Children Play Arena',
    description:
      'Relax in the landscaped central podium with architectural water fountain, box cricket arena, jogging loop, gazebos, and senior citizen seating pavilions.',
    videoSrc: '/videos/3d/central-gardens-fountain.mp4',
    tag: 'Podium Garden 3D',
    highlights: ['Architectural Fountain Feature', 'Box Cricket & Turf Arena', 'Acupressure Walkway'],
  },
  {
    id: 'commercial-boulevard',
    category: 'tower',
    title: 'Ground & 1st Floor Retail Boulevard',
    subtitle: 'Shops 1–20 with 5\' Wide Otta',
    description:
      '3D retail simulation showing prime ground-floor retail shops with high visibility, 5-foot wide otta, dedicated customer parking, and direct access from Naroli–Silvassa main road.',
    videoSrc: '/videos/3d/commercial-boulevard.mp4',
    tag: 'Commercial Retail 3D',
    highlights: ['5\' Wide Frontage Otta', 'Unobstructed Road Visibility', 'High Footfall Industrial Catchment'],
  },
  {
    id: 'multilevel-parking',
    category: 'lobby',
    title: 'Multi-Level Covered Basement Parking',
    subtitle: 'EV Charging & Fire Sprinkler System',
    description:
      'Spacious covered basement car parking with epoxy floor coatings, automated boom barriers, directional signage, CCTV surveillance, and designated EV charging stations.',
    videoSrc: '/videos/3d/multilevel-parking.mp4',
    tag: 'Basement Parking 3D',
    highlights: ['Dedicated EV Charging Bays', 'Wide Paved Driveways', 'Fire Sprinklers & Smoke Extractors'],
  },
  {
    id: 'living-residence-flow',
    category: 'residences',
    title: '1 & 2 BHK Interior Flow & Living Hall',
    subtitle: 'Spacious Sunlight & Cross-Ventilation',
    description:
      '3D interior tour displaying the seamless layout between living lounge, dining area, and modular kitchen, highlighting the open vistas through wide balcony glass doors.',
    videoSrc: '/videos/3d/apartment-interior-flow.mp4',
    tag: 'Apartment Layout 3D',
    highlights: ['16\' Long Living Hall', 'Dual Bathroom Convenience', 'Full-Width Sunset Balcony'],
  },
  {
    id: 'master-bedroom-walk',
    category: 'residences',
    title: 'Master Bedroom Suite Walkthrough',
    subtitle: 'Attached Bathroom & Wardrobe Niche',
    description:
      'Walk through the master bedroom suite designed for maximum tranquility with dedicated wardrobe space, attached en-suite bathroom, and pre-wired AC electrical points.',
    videoSrc: '/videos/3d/master-bedroom-tour.mp4',
    tag: 'Master Bedroom 3D',
    highlights: ['Attached Master En-Suite', 'Spacious Wardrobe Recess', 'Pre-Wired Split AC Provision'],
  },
  {
    id: 'aerial-location',
    category: 'location',
    title: '3D Aerial Location & Transit Map',
    subtitle: '200m from Naroli–Bhilad Checkpost',
    description:
      '3D satellite topography visualizing Advait Skyline\'s strategic position on the Naroli–Silvassa highway, linking to Bhilad Railway Station (5 mins), NH-48 (10 mins), and Silvassa (15 mins).',
    videoSrc: '/videos/3d/aerial-location-3d-map.mp4',
    tag: '3D Connectivity Map',
    highlights: ['5 Mins to Bhilad Station', '10 Mins to NH-48 Highway', 'Central Naroli Industrial Belt'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All 3D Videos', icon: Sparkles },
  { id: 'tower', label: 'Tower & Façade', icon: Building2 },
  { id: 'amenities', label: 'Pool & Gardens', icon: Waves },
  { id: 'lobby', label: 'Lobby & Parking', icon: Home },
  { id: 'clubhouse', label: 'Clubhouse & Gym', icon: Dumbbell },
  { id: 'residences', label: 'Residences 3D', icon: Store },
  { id: 'location', label: 'Location 3D Map', icon: Compass },
];

export default function Cinematic3DReels() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeReelIndex, setActiveReelIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredReels =
    activeCategory === 'all'
      ? REELS
      : REELS.filter((r) => r.category === activeCategory);

  const activeReel = filteredReels[activeReelIndex] || filteredReels[0];

  const handleVideoSelect = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    pushDataLayerEvent('3d_video_play', {
      video_title: filteredReels[index].title,
      video_category: filteredReels[index].category,
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const waInquiryUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello, I was watching the 3D Architectural Video Tour of "${activeReel.title}" at Advait Skyline. Please share more details and floor plans.`,
    sourceRef: `3d-video-${activeReel.id}`,
  });

  return (
    <section id="3d-videos" className="py-24 sm:py-32 bg-[#120B07] text-[#FBF8F2] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#7B4F2E]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#D9A21B]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-[#F2D27A]">
                3D Architectural Cinematic Reels
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Experience Advait Skyline in 3D Motion
            </h2>
            <p className="font-sans text-[#EADFCB]/80 text-sm sm:text-base leading-relaxed">
              Watch 3D architectural animated walkthroughs of our G+14 residential tower, rooftop infinity pool, commercial shopping arcade, grand entrance lobbies, and modern apartments.
            </p>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#271910] border border-[#D9A21B]/30 px-5 py-2.5 rounded-full text-xs font-sans font-semibold text-[#F2D27A] shadow-md shrink-0">
            <Sparkles size={14} className="text-[#F2D27A] animate-spin" style={{ animationDuration: '6s' }} />
            <span>31 Official 3D Walkthrough Reels Available</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div data-lenis-prevent className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveReelIndex(0);
                }}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F2D27A] via-[#D9A21B] to-[#A8680F] text-[#1E130C] shadow-lg shadow-[#D9A21B]/20 scale-[1.02]'
                    : 'bg-[#1E130C]/90 text-[#EADFCB]/70 hover:text-white hover:bg-[#271910] border border-[#7B4F2E]/30'
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Reel Player (Vertical 9:16 aspect ratio styled for cinema) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-[#D9A21B]/50 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-black group">
              <video
                ref={videoRef}
                key={activeReel.videoSrc}
                src={activeReel.videoSrc}
                poster="/renders/advait-skyline-three-towers-day.jpg"
                preload="metadata"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top Bar on Video Player */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#1E130C]/80 backdrop-blur-md border border-[#D9A21B]/40 text-[#F2D27A] font-sans text-[11px] font-bold uppercase tracking-wider">
                  {activeReel.tag}
                </span>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="w-8 h-8 rounded-full bg-[#1E130C]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D9A21B] hover:text-[#1E130C] transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
              </div>

              {/* Bottom Play/Pause Overlay Control */}
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
              >
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="w-16 h-16 rounded-full bg-gold-gradient text-[#1E130C] flex items-center justify-center shadow-2xl pl-1"
                    >
                      <Play size={28} className="fill-[#1E130C]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Bar Info */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F2D27A] font-bold block mb-0.5">
                  {activeReel.subtitle}
                </span>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  {activeReel.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Playlist & Details Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Active Reel Information Card */}
            <div className="bg-[#1E130C] border border-[#7B4F2E]/50 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-[#F2D27A] font-bold block mb-1">
                  Now Playing · 3D Architectural Reel
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activeReel.title}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#EADFCB]/85 leading-relaxed">
                {activeReel.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] uppercase font-sans tracking-wider text-[#F2D27A] font-bold block">
                  Key Architectural Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeReel.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#EADFCB]/90">
                      <CheckCircle2 size={14} className="text-[#D9A21B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={waInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushDataLayerEvent('whatsapp_click', {
                      cta_location: '3d_video_inquiry',
                      video_title: activeReel.title,
                    })
                  }
                  className="px-6 py-3.5 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:brightness-105 active:scale-[0.98] transition-all inline-flex items-center gap-2.5"
                >
                  <MessageSquare size={16} className="fill-[#1E130C]" />
                  <span>Inquire about this on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Reel Playlist Selector */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-sans tracking-wider text-[#F2D27A] font-bold block">
                Select 3D Reel ({filteredReels.length} available):
              </span>

              <div data-lenis-prevent className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto pr-1">
                {filteredReels.map((reel, rIdx) => {
                  const isSelected = rIdx === activeReelIndex;
                  return (
                    <button
                      key={reel.id}
                      type="button"
                      onClick={() => handleVideoSelect(rIdx)}
                      className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#271910] border-[#D9A21B] shadow-md ring-1 ring-[#D9A21B]'
                          : 'bg-[#1E130C]/80 border-[#7B4F2E]/30 hover:bg-[#271910] hover:border-[#D9A21B]/40'
                      }`}
                    >
                      <span className="text-[10px] font-sans uppercase tracking-wider text-[#F2D27A] block truncate font-semibold">
                        {reel.tag}
                      </span>
                      <span className="font-sans text-xs text-white font-bold line-clamp-1 mt-1">
                        {reel.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
