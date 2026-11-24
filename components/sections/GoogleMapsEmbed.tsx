'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Share2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PROJECT_DATA, GBP_MAPS_URL } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

interface GoogleMapsEmbedProps {
  className?: string;
  showCard?: boolean;
}

export default function GoogleMapsEmbed({
  className = '',
  showCard = true,
}: GoogleMapsEmbedProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    pushDataLayerEvent('share_location_click');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Advait Skyline Sales Office Location',
          text: 'Visit Advait Skyline sales office on Naroli–Silvassa Main Road, 200m from Naroli–Bhilad Checkpost.',
          url: GBP_MAPS_URL,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(GBP_MAPS_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const waShareUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, please share the exact Google Maps location pin and driving directions for Advait Skyline.',
    sourceRef: 'maps-embed-whatsapp',
  });

  return (
    <div className={`w-full rounded-3xl overflow-hidden border border-[#7B4F2E]/30 bg-[#271910] shadow-xl ${className}`}>
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gold-gradient" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Left Information Panel */}
        {showCard && (
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#1E130C] border-b lg:border-b-0 lg:border-r border-[#7B4F2E]/30">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-sans font-bold uppercase tracking-wider">
                <CheckCircle2 size={13} />
                <span>Verified Google Business Profile</span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Advait Skyline Sales Office
                </h3>
                <p className="text-xs text-[#F2D27A] font-sans font-medium mt-1">
                  by Dhanasvi Infra · Elevate Your Everyday
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#EADFCB]/85 font-sans leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#D9A21B] shrink-0 mt-0.5" />
                  <span>
                    Naroli–Silvassa Main Road, Opp. Vadfaliya, 200 m from Naroli–Bhilad Checkpost, Dadra &amp; Nagar Haveli – 396235
                  </span>
                </div>
                <div className="text-[11px] text-[#EADFCB]/60 pl-6">
                  Coordinates: 20.2798943° N, 72.920547° E
                </div>
              </div>

              {/* Quick Distance Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-[#271910] border border-[#7B4F2E]/30 p-2.5 rounded-xl text-center">
                  <span className="font-display text-lg font-bold text-[#F2D27A] block leading-none">
                    200 m
                  </span>
                  <span className="text-[10px] uppercase font-sans text-[#EADFCB]/70 tracking-wider">
                    Bhilad Checkpost
                  </span>
                </div>
                <div className="bg-[#271910] border border-[#7B4F2E]/30 p-2.5 rounded-xl text-center">
                  <span className="font-display text-lg font-bold text-[#F2D27A] block leading-none">
                    5.1 km
                  </span>
                  <span className="text-[10px] uppercase font-sans text-[#EADFCB]/70 tracking-wider">
                    Bhilad Railway Stn
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4">
              <a
                href={GBP_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushDataLayerEvent('google_maps_directions_click', { cta_location: 'maps_embed' })}
                className="w-full py-3 px-5 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Navigation size={14} className="fill-[#1E130C]" />
                <span>Open in Google Maps (Live Navigation)</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PROJECT_DATA.contact.primaryCallNumber}`}
                  className="py-2.5 px-3 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 hover:bg-[#7B4F2E] text-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone size={13} className="text-[#F2D27A]" />
                  <span>Call Desk</span>
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="py-2.5 px-3 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 hover:bg-[#7B4F2E] text-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Share2 size={13} className="text-[#F2D27A]" />
                  <span>{copied ? 'Link Copied!' : 'Share Pin'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right Map Canvas (Interactive Lazy-Loaded Embed) */}
        <div className={`${showCard ? 'lg:col-span-7' : 'w-full'} min-h-[360px] sm:min-h-[440px] relative bg-[#1E130C] flex items-center justify-center`}>
          {mapLoaded ? (
            <iframe
              title="Advait Skyline Official Google Maps Location"
              src={PROJECT_DATA.contact.geoCoordinates.embedIframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[460px]"
            />
          ) : (
            <div className="text-center p-8 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#7B4F2E]/40 border border-[#D9A21B]/40 flex items-center justify-center mx-auto text-[#F2D27A] shadow-inner">
                <MapPin size={28} />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Interactive Google Map
                </h4>
                <p className="text-xs text-[#EADFCB]/80 font-sans leading-relaxed">
                  Click to activate the live interactive map with real-time traffic, satellite layers, and street views.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    pushDataLayerEvent('map_load_click', { cta_location: 'maps_embed_component' });
                    setMapLoaded(true);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
                >
                  Click to Load Live Map
                </button>

                <a
                  href={GBP_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#271910] border border-[#D9A21B]/40 hover:bg-[#7B4F2E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open Map Direct</span>
                  <ExternalLink size={13} className="text-[#F2D27A]" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
