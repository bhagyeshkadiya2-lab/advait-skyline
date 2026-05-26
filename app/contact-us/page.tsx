"use client";

import { Phone, MapPin, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import MagneticCard from "@/components/motion/MagneticCard";

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactUs() {
  const whatsappUrl = "https://wa.me/919909062363?text=Hello%2C%20I%20am%20interested%20in%20Advait%20Skyline%20project.";
  const callUrl = "tel:+919909072363";
  const emailUrl = "mailto:Dhanasviinfra@gmail.com";
  
  const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.729111425126!2d72.90993077598687!3d20.22956271477435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb68b5555555%3A0x6b149b18366914!2sNaroli%20Checkpost!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="pt-32 pb-24 bg-brand-cream relative min-h-screen overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-brand-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <FloatingEntrance delay={0.05}>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brand-copper hover:text-brand-primaryBrown transition-colors font-body text-sm font-bold uppercase tracking-wider mb-8 hover-trigger"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </FloatingEntrance>

        {/* Page Header */}
        <div className="mb-16">
          <RevealLine className="mb-4" width="w-32" />
          <FloatingEntrance delay={0.1}>
            <h1 className="text-brand-primaryBrown text-display-hero font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-brand-copper font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
              DHANASVI INFRA · WE ARE READY TO CONNECT WITH YOU
            </p>
          </FloatingEntrance>
        </div>

        {/* Grid: Contact Options & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Project & Developer Context Plaque */}
            <FloatingEntrance delay={0.2}>
              <div className="bg-brand-deepBrown text-brand-cream rounded-3xl p-6 border border-brand-gold/30">
                <span className="block text-brand-gold font-body text-[10px] uppercase font-bold tracking-widest mb-1">
                  Landmark Real Estate Project
                </span>
                <h2 className="text-white font-display text-xl font-bold mb-1">
                  Advait Skyline
                </h2>
                <p className="text-brand-cream/60 font-body text-xs uppercase tracking-wider">
                  by DHANASVI INFRA
                </p>
              </div>
            </FloatingEntrance>

            {/* Phone (WhatsApp) Card */}
            <FloatingEntrance delay={0.25}>
              <MagneticCard className="bg-white border border-brand-copper/30 hover:border-brand-copper p-6 rounded-3xl transition-all duration-300 shadow-sm flex items-start gap-4 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageSquare size={22} className="fill-[#25D366]/10" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                    WhatsApp Chat Hotline
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primaryBrown hover:text-brand-copper font-body text-base font-bold transition-colors block break-words"
                  >
                    +91 99090 62363
                  </a>
                  <p className="text-brand-charcoal/60 font-body text-xs mt-1">
                    Chat with our sales managers directly to book a site visit.
                  </p>
                </div>
              </MagneticCard>
            </FloatingEntrance>

            {/* Phone (Call) Card */}
            <FloatingEntrance delay={0.3}>
              <MagneticCard className="bg-white border border-brand-copper/30 hover:border-brand-copper p-6 rounded-3xl transition-all duration-300 shadow-sm flex items-start gap-4 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper shrink-0">
                  <Phone size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                    Voice Calling
                  </span>
                  <a
                    href={callUrl}
                    className="text-brand-primaryBrown hover:text-brand-copper font-body text-base font-bold transition-colors block break-words"
                  >
                    +91 99090 72363
                  </a>
                  <p className="text-brand-charcoal/60 font-body text-xs mt-1">
                    Direct call booking support lines are open daily from 9 AM to 7 PM.
                  </p>
                </div>
              </MagneticCard>
            </FloatingEntrance>

            {/* Email Card */}
            <FloatingEntrance delay={0.35}>
              <MagneticCard className="bg-white border border-brand-copper/30 hover:border-brand-copper p-6 rounded-3xl transition-all duration-300 shadow-sm flex items-start gap-4 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper shrink-0">
                  <Mail size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                    Email Correspondence
                  </span>
                  <a
                    href={emailUrl}
                    className="text-brand-primaryBrown hover:text-brand-copper font-body text-sm font-bold transition-colors block break-words"
                  >
                    Dhanasviinfra@gmail.com
                  </a>
                  <p className="text-brand-charcoal/60 font-body text-xs mt-1">
                    Write to us for formal proposals, vendor applications, or feedback.
                  </p>
                </div>
              </MagneticCard>
            </FloatingEntrance>

            {/* Social Channels Plaque */}
            <FloatingEntrance delay={0.4}>
              <div className="bg-white border border-brand-copper/20 rounded-3xl p-6 shadow-sm">
                <span className="block text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider mb-3">
                  Follow Our Social Channels
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/advaitskyline/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-cream border border-brand-copper/30 flex items-center justify-center text-brand-primaryBrown hover:text-brand-copper hover:border-brand-copper hover:bg-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590554242765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-cream border border-brand-copper/30 flex items-center justify-center text-brand-primaryBrown hover:text-brand-copper hover:border-brand-copper hover:bg-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </FloatingEntrance>

          </div>

          {/* Right Column: Google Maps and Office Address */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Address Card */}
            <FloatingEntrance delay={0.25}>
              <div className="bg-white border border-brand-copper/20 rounded-3xl p-6 md:p-8 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                    Corporate Office Address
                  </span>
                  <p className="text-brand-primaryBrown font-body text-base font-bold leading-relaxed">
                    Shop No.1, Survey No.685, Naroli Check Post,<br />
                    Opp Pushpak Hotel, Vadfaliya, Naroli,<br />
                    Dadra And Nagar Haveli - 396235
                  </p>
                </div>
              </div>
            </FloatingEntrance>

            {/* Responsive Embedded Map */}
            <FloatingEntrance delay={0.35} className="flex-1 flex min-h-[350px]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-2 border-brand-copper/30 shadow-md relative group flex-1">
                <iframe
                  title="Advait Skyline Location Map (Naroli Checkpost)"
                  src={mapIframeSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </FloatingEntrance>

          </div>

        </div>

      </div>
    </section>
  );
}
