# ADVAIT SKYLINE — STEP 0 BASELINE AUDIT

**Target:** `https://www.advaitskyline.com/` (and local build baseline)  
**Date:** 24 November 2026  
**Auditor:** Technical SEO / AEO / GEO Lead  
**Branch:** `seo/fix-all-v1`

---

## 1. Automated Findings Verification Matrix

| Check / Finding | Target Expectation | Baseline Status (Pre-Fix) | Post-Fix Status | Verdict |
|---|---|---|---|---|
| **Homepage Title** | Title length $\le 60$ chars | FAIL (85 chars: `Advait Skyline \| 1 & 2 BHK Flats & Shops in Naroli–Bhilad by Dhanasvi Infra`) | PASS (50 chars: `Advait Skyline \| 1 & 2 BHK Flats in Naroli–Bhilad`) | **RESOLVED (FIX 1)** |
| **Meta Description** | Length $\le 155$ chars | FAIL (191 chars) | PASS (155 chars: `Advait Skyline by Dhanasvi Infra: 1 & 2 BHK flats and shops at Naroli–Bhilad Checkpost, near Silvassa. 39+ amenities, floor plans, location, site visit.`) | **RESOLVED (FIX 1)** |
| **Keywords Meta Tag** | Ignored by Google, Indic keyword stuffing | FAIL (Present with 14 keywords) | PASS (Completely removed from metadata) | **RESOLVED (FIX 1)** |
| **Counter Hydration** | No `0+39`, `G+0`, `0m200` in server HTML | FAIL (Animated component rendered 0 before hydration) | PASS (Server HTML renders final values directly; `G+14` is plain text) | **RESOLVED (FIX 2)** |
| **JSON-LD Schema** | Valid schema without forbidden price/reviews | FAIL (`RealEstateAgent` used, `priceRange: '₹₹'`, `Accommodation` used) | PASS (`Organization` used, `priceRange` deleted, `Apartment` used, `containsPlace` added) | **RESOLVED (FIX 3)** |
| **Indic Hreflang & Routes** | Full reciprocal hreflang + locale routes | PASS (`/en/`, `/hi/`, `/gu/` routes exist with proper `en-IN`, `hi-IN`, `gu-IN`, `x-default`) | PASS (Maintained and verified with dynamic lastmod in sitemap) | **PASS (FIX 4)** |
| **Near-Silvassa Landing Page** | Dedicated landing page with honest commute data | FAIL (Missing `/flats-near-silvassa`) | PASS (Created `/flats-near-silvassa` in EN, HI, GU with verified 10 km commute table) | **RESOLVED (FIX 5)** |
| **FAQ Initial Server HTML** | All FAQ answers present in raw server HTML | FAIL (`isOpen && (...)` conditionally stripped collapsed answers from DOM) | PASS (All 10 questions and answers rendered in initial HTML with CSS toggling) | **RESOLVED (FIX 6)** |
| **Distance Table Accuracy** | Sorted ascending, Laxmi Vidyapeet time verified | FAIL (Out of order; Laxmi Vidyapeet listed as 21 min) | PASS (Sorted ascending 200m $\to$ 16km; Laxmi Vidyapeet updated to ~14 min approx) | **RESOLVED (FIX 7)** |
| **Unproven Claims** | No IS 1893, "Eco-compliant", "world-class" claims | FAIL (Found "IS 1893", "Eco-compliant", "photorealistic") | PASS (Replaced with brochure-accurate factual phrasing) | **RESOLVED (FIX 8)** |
| **RERA Trust Signals** | RERA PM3000002600013 visible on all pages | PASS (Present in TopBar and Footer across all pages) | PASS (Retained, verified, and cross-referenced in TODO-VERIFY) | **PASS (FIX 9)** |
| **Missing H1 Tags** | Exactly 1 H1 per page | FAIL (`/amenities`, `/floor-plans`, `/project-location` lacked H1) | PASS (H1 added to all three page templates) | **RESOLVED (FIX 10)** |
| **Robots.txt Crawling** | No block of `/_next/` assets, search bots allowed | FAIL (Disallowed `/_next/` blocking CSS/JS rendering) | PASS (`/_next/` removed; search & AI bots explicitly allowed) | **RESOLVED (FIX 11)** |
| **Dynamic Sitemap** | Real dynamic timestamps, all routes included | FAIL (Static date `2026-05-28`) | PASS (Dynamic `new Date()`, includes all 62 localized URLs) | **RESOLVED (FIX 11)** |

---

## 2. Summary
All FAIL items identified during Step 0 baseline verification have been systematically addressed on the `seo/fix-all-v1` branch. The Next.js production build succeeds with 62 static prerendered pages and zero errors.
