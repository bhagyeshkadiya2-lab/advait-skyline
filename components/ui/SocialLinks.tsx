'use client';

import React from 'react';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent } from '@/lib/tracking';

export function InstagramIcon({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: 'footer' | 'topbar' | 'card';
}

export default function SocialLinks({
  className = '',
  iconSize = 16,
  variant = 'footer',
}: SocialLinksProps) {
  const socials = [
    {
      name: 'Instagram',
      url: PROJECT_DATA.contact.social.instagram,
      icon: InstagramIcon,
      hoverClass: 'hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10',
      label: 'Follow Advait Skyline on Instagram',
    },
    {
      name: 'Facebook',
      url: PROJECT_DATA.contact.social.facebook,
      icon: FacebookIcon,
      hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10',
      label: 'Connect with Advait Skyline on Facebook',
    },
    {
      name: 'YouTube',
      url: PROJECT_DATA.contact.social.youtube,
      icon: YoutubeIcon,
      hoverClass: 'hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10',
      label: 'Watch 3D Walkthroughs on YouTube',
    },
  ];

  if (variant === 'topbar') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              onClick={() => pushDataLayerEvent('social_click', { platform: item.name.toLowerCase(), location: 'topbar' })}
              className="p-1 rounded text-[#EADFCB]/70 hover:text-[#F2D27A] transition-colors"
            >
              <Icon size={13} />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`grid grid-cols-3 gap-3 ${className}`}>
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              onClick={() => pushDataLayerEvent('social_click', { platform: item.name.toLowerCase(), location: 'contact_card' })}
              className={`p-3 rounded-xl border border-[#7B4F2E]/30 bg-[#271910] text-[#EADFCB] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group ${item.hoverClass}`}
            >
              <Icon size={20} className="transition-transform group-hover:scale-110" />
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-white">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            onClick={() => pushDataLayerEvent('social_click', { platform: item.name.toLowerCase(), location: 'footer' })}
            className={`w-9 h-9 rounded-xl bg-[#271910] border border-[#7B4F2E]/40 text-[#EADFCB] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm ${item.hoverClass}`}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
