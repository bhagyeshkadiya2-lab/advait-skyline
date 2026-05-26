"use client";

import React from "react";
import { ArrowLeft, Mail, Globe, Calendar } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";

export default function PrivacyPolicy() {
  const effectiveDate = "25 May 2026";
  const email = "Dhanasviinfra@gmail.com";
  const website = "https://www.advaitskyline.com";

  return (
    <section className="pt-32 pb-24 bg-brand-cream relative min-h-screen overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
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
        <div className="mb-12">
          <RevealLine className="mb-4" width="w-32" />
          <FloatingEntrance delay={0.1}>
            <h1 className="text-brand-primaryBrown text-display-hero font-display font-bold mb-4">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-brand-copper uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Effective Date: {effectiveDate}
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} /> Website: {website}
              </span>
            </div>
          </FloatingEntrance>
        </div>

        {/* Privacy Content Card */}
        <FloatingEntrance delay={0.2}>
          <div className="bg-white border border-brand-copper/20 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="prose prose-stone max-w-none text-brand-charcoal/80 font-body text-sm md:text-base leading-relaxed space-y-8 text-justify">
              
              {/* 1. Introduction */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  1. Introduction
                </h2>
                <p>
                  Welcome to the official website of <strong>Advait Skyline</strong>, developed by <strong>DHANASVI INFRA</strong> {"('we', 'us', or 'our')."} We respects your privacy and is deeply committed to protecting your personal data. This Privacy Policy details how we collect, use, disclose, and secure your information when you visit our website (<strong>https://www.advaitskyline.com</strong>) or when you interact with us via our web forms, WhatsApp integration, or other digital communication channels.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  2. Information We Collect
                </h2>
                <p>
                  We may collect and process the following categories of personal information when you interact with our platforms:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Identity Data:</strong> First name, last name, and preferences when you submit queries.</li>
                  <li><strong>Contact Data:</strong> Mobile phone number (including WhatsApp contact details) and email address.</li>
                  <li><strong>Interactive Data:</strong> The content of the messages or questions you write in our contact or site booking forms.</li>
                  <li><strong>Technical & Usage Data:</strong> Internet Protocol (IP) address, browser type, page views, and website navigation statistics.</li>
                </ul>
              </div>

              {/* 3. How We Use Your Information */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  3. How We Use Your Information
                </h2>
                <p>
                  We collect and use your personal details strictly to fulfill your inquiries and provide high-value customer service. The legal bases and business purposes include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Responding to Inquiries:</strong> Processing contact forms or WhatsApp chats regarding pricing, unit configurations, and commercial slots.</li>
                  <li><strong>Scheduling Site Visits:</strong> Setting up appointments for physical site inspection tours at our Naroli checkpost location.</li>
                  <li><strong>Updates & Marketing:</strong> Sending occasional project progress reports, new amenities launches, construction phases updates, and special booking incentives.</li>
                  <li><strong>Regulatory & Legal Compliance:</strong> Maintaining audit compliance as per Dadra & Nagar Haveli Real Estate Regulatory Authority (RERA) rules.</li>
                </ul>
              </div>

              {/* 4. Cookies & Analytics */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  4. Cookies & Analytics
                </h2>
                <p>
                  Our website uses cookies (small text files saved on your terminal) and basic analytic codes to study site traffic. Cookies help optimize page load performance, remember site preferences, and track which parts of our project (Overview, Amenities, Floor Plans) generate the most user interest. You can instruct your browser to refuse cookies, but note that some interactive functionalities of the site may not run optimally as a result.
                </p>
              </div>

              {/* 5. Third-Party Links */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  5. Third-Party Links
                </h2>
                <p>
                  This website includes links to third-party services and APIs, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>WhatsApp Business API:</strong> To let you chat with our booking hotlines with one click.</li>
                  <li><strong>Google Maps:</strong> To show you precise location maps and driving coordinates for the Naroli site.</li>
                  <li><strong>Social Media channels:</strong> Direct connection buttons for our official Instagram profile and Facebook page.</li>
                </ul>
                <p className="mt-2">
                  Please be aware that these external platforms have their own independent privacy policies. We do not control these third-party websites and are not responsible for their individual data processing behaviors.
                </p>
              </div>

              {/* 6. Data Security */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  6. Data Security
                </h2>
                <p>
                  We have implemented strict electronic, managerial, and physical security measures to shield your data from accidental loss, alterations, unauthorized access, or leakage. All customer communications are encrypted using secure Secure Sockets Layer (SSL) systems, ensuring high security standards when information flows from your device to our servers.
                </p>
              </div>

              {/* 7. Your Rights */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  7. Your Rights
                </h2>
                <p>
                  Depending on applicable data privacy laws, you possess legal rights concerning your personal information, which include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>The right to request access to and receive copies of your stored personal details.</li>
                  <li>The right to request immediate correction or updates of any inaccurate or outdated information.</li>
                  <li>The right to demand deletion of your personal data from our databases when it is no longer required for booking or site-visit communications.</li>
                  <li>The right to opt-out of marketing communications at any point by emailing us or clicking unsubscribe.</li>
                </ul>
              </div>

              {/* 8. Contact Information */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  8. Contact Information
                </h2>
                <p>
                  If you have questions, feedback, or request related to this Privacy Policy, or want to exercise your data protection rights, please contact our legal office at:
                </p>
                <div className="bg-brand-cream p-5 rounded-2xl border border-brand-copper/20 mt-3 space-y-2">
                  <p className="text-brand-primaryBrown font-bold">DHANASVI INFRA</p>
                  <p className="text-xs md:text-sm">
                    <strong>Address:</strong> Shop No.1, Survey No.685, Naroli Check Post, Opp Pushpak Hotel, Vadfaliya, Naroli, Dadra And Nagar Haveli - 396235
                  </p>
                  <p className="text-xs md:text-sm flex items-center gap-1.5">
                    <Mail size={16} className="text-brand-copper" /> <strong>Email:</strong> 
                    <a href={`mailto:${email}`} className="text-brand-copper hover:underline">{email}</a>
                  </p>
                </div>
              </div>

              {/* 9. Changes to This Policy */}
              <div>
                <h2 className="text-brand-primaryBrown font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 border-b border-brand-cream pb-2">
                  9. Changes to This Policy
                </h2>
                <p>
                  We reserve the right to revise or update this Privacy Policy periodically to reflect changes in legal mandates, RERA guidelines, or data processing activities. Any updates will be published immediately on this page with the modified Effective Date. We encourage you to check this page occasionally to stay informed.
                </p>
              </div>

            </div>
          </div>
        </FloatingEntrance>

      </div>
    </section>
  );
}
