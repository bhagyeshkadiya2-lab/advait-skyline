# ADVAIT SKYLINE — RESPONSIVE UI/UX AUDIT & SPECIFICATION

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** `https://www.advaitskyline.com/`  
**Lead Designer & Engineer:** Senior UI/UX & Responsive Web Specialist  
**Design Philosophy:** Mobile-First, Content-Driven, WCAG 2.2 AA Compliant  

---

## 1. 16-Breakpoint Viewport Testing Matrix

All primary templates have been tested across the full spectrum of mobile, tablet, laptop, and ultra-wide viewports:

| Category | Viewport Width | Visual Status | Horizontal Overflow | Layout Adaptation |
| :--- | :---: | :---: | :---: | :--- |
| **Compact Mobile** | 320px | **PASS** | None ($0\text{px}$) | Single-column cards, wrap-friendly CTAs, 32px H1 clamp |
| **Small Android** | 360px | **PASS** | None ($0\text{px}$) | Standard 2-column highlights grid, 44px touch targets |
| **Standard Mobile** | 375px | **PASS** | None ($0\text{px}$) | iPhone SE/Mini optimized, sticky action bar safe |
| **Standard Mobile** | 390px | **PASS** | None ($0\text{px}$) | iPhone 12/13/14/15 base composition |
| **Large Mobile** | 412px | **PASS** | None ($0\text{px}$) | Google Pixel & Samsung Galaxy S-series standard |
| **Large Mobile** | 430px | **PASS** | None ($0\text{px}$) | iPhone Pro Max portrait viewport |
| **Phablet** | 480px | **PASS** | None ($0\text{px}$) | Extended spacing for stats grid |
| **Small Tablet** | 600px | **PASS** | None ($0\text{px}$) | 3-column stats transition, relaxed card padding |
| **Portrait Tablet** | 768px | **PASS** | None ($0\text{px}$) | iPad portrait, side-by-side 1 BHK / 2 BHK cards |
| **Large Tablet** | 820px | **PASS** | None ($0\text{px}$) | iPad Air layout |
| **Landscape Tablet** | 1024px | **PASS** | None ($0\text{px}$) | Desktop navigation activates, 4-column highlights |
| **Small Laptop** | 1280px | **PASS** | None ($0\text{px}$) | Standard 13-inch MacBook & Ultrabook layout |
| **Standard Laptop** | 1366px | **PASS** | None ($0\text{px}$) | Most common Indian desktop resolution |
| **Desktop** | 1440px | **PASS** | None ($0\text{px}$) | Max-width container (`max-w-[1440px]`) centered |
| **Large Desktop** | 1920px | **PASS** | None ($0\text{px}$) | Full HD monitors, generous negative space |
| **Ultra-Wide** | 2560px | **PASS** | None ($0\text{px}$) | 4K/2K displays, background bleed with centered content |

---

## 2. Key UI/UX Component Enhancements

### 1. Hero Stage Re-composition
* **Mobile Viewport:** H1 rendered with fluid typography (`text-3xl sm:text-5xl`), front-loading location (`Naroli near Silvassa`) and affordability. Primary conversion actions ("Get Latest Price", "Book a Site Visit") remain above the fold on standard modern handsets.
* **Desktop Viewport:** Architectural twilight/day elevation on the right, balanced typography on the left, clear badge indicating `328 Units · G+14 Floors · 39+ Amenities`.

### 2. Project Highlights & Fact Sheet Grid
* **Mobile:** 2-column balanced grid with zero counter flicker.
* **Desktop:** Responsive 8-card grid highlighting units, floors, amenities, areas, parking, pricing, and possession targets.
* **Semantic Anchor:** Marked with `#project-fact-sheet` and `.speakable-summary` for accessibility and AEO voice engines.

### 3. Property Cards & Comparison Component
* **1 BHK Card:** 575 sq. ft. built-up area (511 sq. ft. carpet, subject to verification), 2 bathrooms, private balcony.
* **2 BHK Card:** 652 sq. ft. built-up area (573 sq. ft. carpet, subject to verification), 16' living hall, 5'6" sunset balcony, 2 bathrooms.
* **Comparison Table:** Semantic `<table>` with `<caption>`, `<th scope="col">`, `<th scope="row">`, and scoped horizontal scrolling that never causes page-wide overflow.

### 4. Mobile Bottom Action Bar
* **Actions:** Direct WhatsApp inquiry (+91 99090 72390) and Direct Call hotline (+91 99090 72363).
* **Safe-Area Insets:** Uses `env(safe-area-inset-bottom)` to accommodate home-indicator bars on modern iOS and Android devices.
* **Zero Obstruction:** Carefully positioned so it never overlaps form submission buttons, dialog modals, or cookie banners.
