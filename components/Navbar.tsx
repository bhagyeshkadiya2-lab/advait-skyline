"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

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

const NAV_ITEMS = [
  { label: "Overview", href: "/#overview" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Floor Plans", href: "/#floorplans" },
  { label: "Location", href: "/#location" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isReduced = useReducedMotion();

  // Scroll tracking for logo shrink and backgrounds
  const { scrollY } = useScroll();
  
  // Smoothly maps scroll offset [0 to 100] to a scale [1.0 down to 0.7]
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const logoY = useTransform(scrollY, [0, 100], [0, -2]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stagger entry configurations for mobile drawer
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" as const },
        opacity: { duration: 0.2 },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? "#6B3A1F" : "rgba(107, 58, 31, 0)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
        }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all ${
          isScrolled ? "backdrop-blur-md py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo container styled as a premium compact gold-rimmed plaque */}
          <a href="#overview" className="flex items-center gap-2 hover-trigger">
            <motion.div
              style={{
                scale: isReduced ? 1 : logoScale,
                y: isReduced ? 0 : logoY,
                transformOrigin: "left center",
              }}
              className="relative w-[44px] h-[40px] rounded-lg overflow-hidden border border-brand-gold shadow-md bg-brand-charcoal transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="Advait Skyline Logo"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </motion.div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white font-body text-sm font-medium tracking-wide uppercase group py-1 hover-trigger"
              >
                {item.label}
                {/* Horizontal line expanding from left */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right CTA Button & Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center gap-4 mr-2">
              <a
                href="https://www.instagram.com/advaitskyline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-copper transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590554242765"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-copper transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>

            <a
              href="https://wa.me/919909062363?text=Hello%20Advait%20Skyline%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20and%20get%20more%20details%20about%20the%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger flex items-center"
              aria-label="Contact us on WhatsApp to book a site visit"
            >
              {/* Desktop Button */}
              <motion.button
                whileHover={{ scale: isReduced ? 1 : 1.05 }}
                whileTap={{ scale: isReduced ? 1 : 0.97 }}
                className="hidden md:flex items-center gap-2 bg-brand-copper text-white font-body text-xs font-semibold uppercase tracking-wider rounded-full px-6 py-2.5 shadow-lg border border-brand-copper/30 transition-all duration-300 hover:bg-brand-copper/90"
              >
                <MessageCircle size={14} className="text-white fill-white/10" />
                Book a Visit
              </motion.button>

              {/* Mobile WhatsApp Button */}
              <motion.button
                whileHover={{ scale: isReduced ? 1 : 1.05 }}
                whileTap={{ scale: isReduced ? 1 : 0.97 }}
                className="flex md:hidden items-center justify-center bg-[#25D366] text-white p-2.5 rounded-full shadow-md border border-white/20 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.012 14.096.993 11.474.993c-5.462 0-9.911 4.412-9.915 9.841-.001 1.737.478 3.43 1.387 4.935L1.878 20.3l4.769-1.248zM17.487 14.4c-.327-.162-1.928-.94-2.224-1.047-.297-.108-.512-.162-.729.162-.217.324-.838 1.047-1.028 1.262-.19.216-.381.243-.709.082-.327-.162-1.382-.505-2.633-1.611-.973-.865-1.63-1.933-1.82-2.257-.19-.324-.02-.499.143-.66.147-.144.327-.378.49-.567.163-.189.217-.324.327-.54.109-.216.054-.405-.027-.567-.08-.162-.729-1.74-.997-2.39-.263-.629-.53-.54-.729-.55l-.62-.01c-.217 0-.569.081-.866.405-.297.324-1.135 1.107-1.135 2.7s1.162 3.132 1.325 3.348c.163.216 2.288 3.467 5.541 4.853.774.33 1.378.527 1.849.675.779.245 1.488.211 2.049.128.625-.093 1.928-.782 2.2-1.5s.272-1.334.19-1.458c-.08-.124-.296-.217-.624-.378z" />
                </svg>
              </motion.button>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white hover-trigger p-2 focus:outline-none focus:ring-1 focus:ring-brand-copper/40 rounded"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full left-0 right-0 w-full bg-brand-deepBrown border-t border-brand-primaryBrown/20 shadow-2xl overflow-hidden lg:hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block text-white font-body text-base font-semibold tracking-wide uppercase hover:text-brand-copper transition-colors py-2 border-b border-white/5"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <a
                    href="https://wa.me/919909062363?text=Hello%20Advait%20Skyline%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20and%20get%20more%20details%20about%20the%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Contact us on WhatsApp to book a site visit"
                  >
                    <button className="w-full flex items-center justify-center gap-3 bg-brand-copper text-white font-body text-sm font-bold uppercase tracking-widest rounded-full py-3.5 shadow-md">
                      <MessageCircle size={16} className="text-white fill-white/10" />
                      Book a Visit
                    </button>
                  </a>
                </motion.div>

                {/* Mobile Drawer Socials */}
                <motion.div variants={itemVariants} className="flex items-center gap-6 justify-center py-4 border-t border-white/5 mt-2">
                  <a
                    href="https://www.instagram.com/advaitskyline/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-brand-copper transition-colors flex items-center gap-2"
                  >
                    <Instagram size={18} />
                    <span className="text-sm font-semibold tracking-wider font-body">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590554242765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-brand-copper transition-colors flex items-center gap-2"
                  >
                    <Facebook size={18} />
                    <span className="text-sm font-semibold tracking-wider font-body">Facebook</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
