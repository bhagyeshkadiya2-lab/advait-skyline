'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ArrowUpRight,
  Phone,
  Share2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { trackEvent } from '@/lib/tracking';

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
    trackEvent('share_location', {
      source: 'maps_embed',
      url: SITE_CONFIG.geo.googleBusinessProfileUrl,
    });

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Advait Skyline Sales & Experience Centre',
          text: `Visit Advait Skyline on Naroli–Silvassa Main Road, 200m from Naroli–Bhilad Checkpost.`,
          url: SITE_CONFIG.geo.googleBusinessProfileUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(SITE_CONFIG.geo.googleBusinessProfileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDirectionsClick = () => {
    trackEvent('directions_click', {
      source: 'maps_embed',
      destination: `${SITE_CONFIG.geo.latitude},${SITE_CONFIG.geo.longitude}`,
    });
  };

  return (
    <div
      className={`w-full rounded-3xl overflow-hidden border border-[#7B4F2E]/30 bg-[#271910] shadow-xl ${className}`}
    >
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
                  by {SITE_CONFIG.legalEntity} · {SITE_CONFIG.projectTagline}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#EADFCB]/85 font-sans leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#D9A21B] shrink-0 mt-0.5" />
                  <span>
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.locality},{' '}
                    {SITE_CONFIG.address.region} – {SITE_CONFIG.address.postalCode}
                  </span>
                </div>
                <div className="text-[11px] text-[#EADFCB]/60 pl-6 font-mono">
                  GPS: {SITE_CONFIG.geo.latitude}° N, {SITE_CONFIG.geo.longitude}° E
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
                href={SITE_CONFIG.geo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="w-full min-h-[44px] py-3 px-5 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                aria-label="Get driving directions to Advait Skyline on Google Maps"
              >
                <Navigation size={14} className="fill-[#1E130C]" />
                <span>Get Driving Directions</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SITE_CONFIG.contact.salesHotline}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 hover:bg-[#7B4F2E] text-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                  aria-label={`Call Sales Desk at ${SITE_CONFIG.contact.salesHotline}`}
                >
                  <Phone size={13} className="text-[#F2D27A]" />
                  <span>Call Desk</span>
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="min-h-[44px] py-2.5 px-3 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 hover:bg-[#7B4F2E] text-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                  aria-label="Share location pin of Advait Skyline"
                >
                  <Share2 size={13} className="text-[#F2D27A]" />
                  <span>{copied ? 'Link Copied!' : 'Share Pin'}</span>
                </button>
              </div>

              <a
                href={SITE_CONFIG.geo.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-[11px] text-[#EADFCB]/70 hover:text-[#F2D27A] font-sans transition-colors inline-block pt-1 underline decoration-dotted"
              >
                View Verified Google Business Profile ↗
              </a>
            </div>
          </div>
        )}

        {/* Right Map Canvas (Interactive Lazy-Loaded Embed Facade) */}
        <div
          className={`${
            showCard ? 'lg:col-span-7' : 'w-full'
          } min-h-[360px] sm:min-h-[440px] relative bg-[#1E130C] flex items-center justify-center`}
        >
          {mapLoaded ? (
            <iframe
              title="Advait Skyline Official Google Maps Location"
              src={SITE_CONFIG.geo.embedIframeUrl}
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
                    trackEvent('map_load_click', { cta_location: 'maps_embed_component' });
                    setMapLoaded(true);
                  }}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-gold-gradient text-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                >
                  Click to Load Live Map
                </button>

                <a
                  href={SITE_CONFIG.geo.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-5 py-3 rounded-xl bg-[#271910] border border-[#D9A21B]/40 hover:bg-[#7B4F2E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
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
