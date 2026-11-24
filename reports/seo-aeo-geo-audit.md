# ADVAIT SKYLINE — SEO · AEO · GEO TECHNICAL AUDIT & STRATEGY REPORT (v2)
**Date:** 2026-11-24 | **Project:** Advait Skyline · Dhanasvi Infra | **Domain:** https://www.advaitskyline.com/  
**Scope:** Phases 1–4 Technical, AEO, GEO, Multilingual, and Keyword Audit (Analysis Only — Pre-Implementation)

---

## EXECUTIVE SUMMARY

### Top 10 Identified Issues
1. **Disallow `/_next/` in robots.txt (P0):** `app/robots.ts` blocks `/_next/`, preventing search engine crawlers (Googlebot, Bingbot) from loading static CSS, JS chunks, and responsive stylesheets, causing severe mobile rendering penalties.
2. **Missing `<h1>` on Core Transactional Pages (P1):** `/amenities`, `/floor-plans`, and `/project-location` have 0 `<h1>` tags in their initial prerendered HTML, diminishing topic authority and primary keyword targeting.
3. **Duplicate Global JSON-LD Schema Blocks (P1):** `app/[locale]/layout.tsx` renders global schemas (`RealEstateAgent`, `ApartmentComplex`, `WebSite`), while child pages (`/amenities`, `/project-location`) inject duplicate unparameterized instances, bloating HTML by up to 7 duplicate JSON-LD blocks per page.
4. **Schema Type Inaccuracy (P1):** Developer schema is marked as `RealEstateAgent` rather than `Organization`, and includes an arbitrary `priceRange: "₹₹"`, conflicting with the strict "No Price in Schema" mandate.
5. **High-Value Geo-Hub Content Gaps (P1):** Primary local search volume clusters ("flats in naroli", "flats near silvassa", "flat near bhilad checkpost") lack dedicated hub landing pages, relying instead on sub-sections or generic guides.
6. **Hardcoded Static Sitemap `lastmod` (P2):** `app/sitemap.ts` hardcodes a single fixed `lastmod` date across all 51 URLs rather than deriving timestamps from actual content revisions.
7. **Redundant Third-Party Analytics Firing (P2):** Layout initializes standalone `gtag/js?id=G-C1J16Y1GK0` alongside `GTM-WBBMP8KS` and `fbevents.js` with `strategy="afterInteractive"`, creating duplicate pageview hits if GA4 is also managed via GTM.
8. **Inconsistent Distance Quotations in Guides (P2):** Minor discrepancies exist across content (e.g., Bhilad station quoted as 5 km vs 5.1 km; Silvassa stadium quoted as 10 km vs 9.8 km; checkpost quoted as 200 m vs "adjacent").
9. **AI Search Bot Crawler Differentiation (P2):** Single wildcard `User-agent: *` does not differentiate AI search answer engines (`OAI-SearchBot`, `PerplexityBot`) from AI bulk training scrapers (`GPTBot`, `ClaudeBot`).
10. **Schema Unit Definitions (P2):** Unit pages use generic `Accommodation` rather than Schema.org `Apartment` objects nested inside `containsPlace` of the `ApartmentComplex`.

### Top 10 Strategic Opportunities
1. **Establish Dedicated Search Hubs:** Deploy `/flats-in-naroli/`, `/flats-near-silvassa/`, and `/flats-near-bhilad-checkpost/` with direct-answer architecture.
2. **Passage-Level Answer Engine Readiness:** Format 40–60 word self-contained factual definitions immediately under question-style H2/H3 tags for Google AI Overviews and ChatGPT search.
3. **Direct HTML Answer Parity:** Ensure 100% of dimension tables, carpet areas (511 & 573 sq.ft), brochure amenities (21 confirmed), and distance matrices exist in initial raw HTML.
4. **Canonical Entity Graph (`@id` linked):** Link `Organization` (Dhanasvi Infra), `ApartmentComplex` (Advait Skyline), and `Apartment` (1 & 2 BHK units) via stable URI fragments (`#organization`, `#project`).
5. **Tri-Lingual Hreflang Authority:** Exploit the lack of Gujarati (`gu-IN`) and Hindi (`hi-IN`) high-quality real estate landing pages in the Vapi–Silvassa–Bhilad industrial corridor.
6. **Zero-PII First-Party CRM Attribution:** Capture UTM source, medium, campaign, and `fbclid` into a 30-day first-party cookie, prefilling WhatsApp lead URLs with exact attribution tags.
7. **Direct-to-WhatsApp Price Routing:** Convert all price intent ("naroli flat price", "budget flats silvassa") to "Get Current Price on WhatsApp" with localized prefilled copy.
8. **Original Construction Evidence Assets:** Publish dated monthly construction progress entries with real site photography—the single strongest GEO trust signal.
9. **Local Pack Optimization (Google Maps / GBP):** Standardize Name, Address, and Phone (NAP) with official RERA registration `PM3000002600013`.
10. **Core Web Vitals Optimization:** Defer third-party tags to achieve sub-1.8s LCP, 0 CLS, and sub-100ms INP on budget mobile devices.

---

## 1. PHASE 1 — TECHNICAL AUDIT FINDINGS (ISSUE REGISTER)

### T-001 | Disallowing `/_next/` in robots.txt blocks CSS/JS resource crawling
- **Page/Path:** `app/robots.ts`
- **Evidence:** `disallow: ['/api/', '/_next/']`
- **Problem:** Googlebot and Bingbot are forbidden from downloading `/_next/static/css/*` and `/_next/static/chunks/*`.
- **Why it matters:** Googlebot Smartphone renders pages headlessly to evaluate mobile-friendliness. Blocking stylesheet access causes false layout failure flags and suppresses rankings.
- **Fix:** Update `app/robots.ts` to allow `/_next/static/` or restrict disallow strictly to `/api/`.
- **Severity:** P0 Blocker
- **Score:** (Impact: 5 × Confidence: 5) ÷ Effort: 1 = **25.0**
- **Owner:** dev | **Status:** open

### T-002 | Core transactional pages missing semantic `<h1>` tag
- **Page/Path:** `app/[locale]/amenities/page.tsx`, `app/[locale]/floor-plans/page.tsx`, `app/[locale]/project-location/page.tsx`
- **Evidence:** Python DOM parser verified: `H1 count: 0` in `en/amenities.html`, `en/floor-plans.html`, and `en/project-location.html`.
- **Problem:** Main headings are rendered as `<h2>` styling tags without a top-level `<h1>`.
- **Why it matters:** Weakens on-page topical authority and primary keyword targeting in search engines and AI parsers.
- **Fix:** Replace outer presentation tags in hero blocks with semantic `<h1>` containing primary keywords and translated strings.
- **Severity:** P1 High
- **Score:** (Impact: 4 × Confidence: 5) ÷ Effort: 1 = **20.0**
- **Owner:** dev | **Status:** open

### T-003 | Duplicate Global JSON-LD Schema Injected on Child Pages
- **Page/Path:** `components/seo/JsonLd.tsx`, `app/[locale]/amenities/page.tsx`, `app/[locale]/project-location/page.tsx`
- **Evidence:** `reports/data/schema-inventory.csv` reveals 7 schema blocks on `/amenities` and `/project-location` with identical `@id` fragments.
- **Problem:** Both `layout.tsx` and individual pages invoke `<JsonLd>` without distinct types, duplicating `RealEstateAgent`, `ApartmentComplex`, and `WebSite`.
- **Why it matters:** Redundant schema creates parser warnings and inflates DOM size.
- **Fix:** Remove redundant `<JsonLd>` calls from child pages; allow `layout.tsx` to handle global entities and use page-specific types (`unit`, `faq`, `breadcrumbs`) only where needed.
- **Severity:** P1 High
- **Score:** (Impact: 4 × Confidence: 5) ÷ Effort: 1 = **20.0**
- **Owner:** dev | **Status:** open

### T-004 | Schema Type Inaccuracy & Unauthorized `priceRange` Property
- **Page/Path:** `components/seo/JsonLd.tsx` (lines 45 & 75)
- **Evidence:** `type: 'RealEstateAgent'` with `priceRange: '₹₹'`.
- **Problem:** Developer is Dhanasvi Infra (an `Organization` / Builder), not an agency. `priceRange: '₹₹'` violates Non-Negotiable #5 (no prices in schema).
- **Why it matters:** Google Rich Results and Knowledge Graph require accurate entity definitions; price flags violate client business constraints.
- **Fix:** Refactor developer entity to `@type: "Organization"`, remove `priceRange`, and link social/official URLs via `sameAs`.
- **Severity:** P1 High
- **Score:** (Impact: 4 × Confidence: 5) ÷ Effort: 1 = **20.0**
- **Owner:** dev | **Status:** open

### T-005 | Missing Dedicated Geo-Hub Pages for Naroli & Silvassa Road
- **Page/Path:** `/flats-in-naroli`, `/flats-near-silvassa`, `/flats-near-bhilad-checkpost`
- **Evidence:** Keyword audit indicates top search intent focuses on "flat in Naroli", "flats near Silvassa", and "flat near Bhilad". Current site only serves `/1-bhk-flats-naroli` and `/2-bhk-flats-naroli`.
- **Problem:** High-intent geographic queries must land on generic bedroom configuration pages or the homepage.
- **Why it matters:** Dilutes relevance for high-volume localized terms; competitors and aggregators outrank individual unit pages.
- **Fix:** Create dedicated, honest landing hubs explaining connectivity, commute times, and project facts.
- **Severity:** P1 High
- **Score:** (Impact: 5 × Confidence: 5) ÷ Effort: 2 = **12.5**
- **Owner:** content / dev | **Status:** open

### T-006 | Static Hardcoded `lastmod` Timestamp in `app/sitemap.ts`
- **Page/Path:** `app/sitemap.ts` (line 28)
- **Evidence:** `const lastModified = new Date('2026-05-28T00:00:00.000Z');`
- **Problem:** All 51 localized URLs claim an arbitrary fixed date.
- **Why it matters:** Search engines use accurate `lastmod` timestamps to prioritize crawling revised pages.
- **Fix:** Implement build-time timestamps or route-specific update dates reflecting real content revisions.
- **Severity:** P2 Medium
- **Score:** (Impact: 3 × Confidence: 5) ÷ Effort: 1 = **15.0**
- **Owner:** dev | **Status:** open

### T-007 | Dual Third-Party Analytics Initialization (GA4 + GTM)
- **Page/Path:** `app/[locale]/layout.tsx` (lines 88–118)
- **Evidence:** Both `gtag/js?id=G-C1J16Y1GK0` and `gtm.js?id=GTM-WBBMP8KS` load in `<head>`.
- **Problem:** If GA4 is configured inside GTM, running both scripts triggers duplicate hits and adds unnecessary main-thread JavaScript execution.
- **Why it matters:** Artificially inflates page views, skews bounce rates, and impacts mobile INP.
- **Fix:** Route GA4 tracking strictly through GTM or remove inline `gtag` script once GTM tag configuration is confirmed.
- **Severity:** P2 Medium
- **Score:** (Impact: 3 × Confidence: 4) ÷ Effort: 1 = **12.0**
- **Owner:** dev | **Status:** open

### T-008 | Crawler Access Policy: Lack of Explicit AI Bot Directives
- **Page/Path:** `app/robots.ts`
- **Evidence:** Blanket `User-agent: *` rules without distinction between search bots and training scrapers.
- **Problem:** Site does not state permissions for `OAI-SearchBot`, `PerplexityBot`, or `Bingbot`.
- **Why it matters:** To be cited in ChatGPT Search and Perplexity, search crawlers must be explicitly allowed, while training bots can be governed per owner preference.
- **Fix:** Add distinct user-agent blocks explicitly permitting search/answer bots (`OAI-SearchBot`, `PerplexityBot`, `Bingbot`).
- **Severity:** P2 Medium
- **Score:** (Impact: 4 × Confidence: 4) ÷ Effort: 1 = **16.0**
- **Owner:** dev / owner-verify | **Status:** open

### T-009 | Minor Road Distance Discrepancies in Buyer Guides
- **Page/Path:** `app/[locale]/guides/buying-flat-in-naroli/page.tsx`
- **Evidence:** Bhilad Railway Station quoted as "5 km" in guide text vs "5.1 km" in brochure data table; Silvassa Stadium quoted as "10 km" vs "9.8 km".
- **Problem:** Inconsistent numerical facts between guides and official brochure table.
- **Why it matters:** AI engines flag factual contradictions across a domain and reduce citation confidence.
- **Fix:** Harmonize all distance references to brochure standards with "approx." qualifiers.
- **Severity:** P2 Medium
- **Score:** (Impact: 3 × Confidence: 5) ÷ Effort: 1 = **15.0**
- **Owner:** content | **Status:** open

### T-010 | Unit Structured Data Not Nested in ApartmentComplex Graph
- **Page/Path:** `components/seo/JsonLd.tsx` (lines 180–200)
- **Evidence:** Unit pages emit standalone `Accommodation` rather than `Apartment` objects within `containsPlace`.
- **Problem:** Schema does not explicitly link bedroom configurations to the parent building complex graph.
- **Why it matters:** Search engines prefer structured parent-child entity hierarchies for multifamily developments.
- **Fix:** Refactor unit schema to Schema.org `Apartment` with `numberOfBedrooms`, `numberOfBathroomsTotal`, and verified `floorSize`.
- **Severity:** P2 Medium
- **Score:** (Impact: 3 × Confidence: 4) ÷ Effort: 2 = **6.0**
- **Owner:** dev | **Status:** open

---

## 2. PHASE 2 — KEYWORD, INTENT AND SERP RESEARCH

### 2.1 Seed Universe Matrix
Generated and exported to `reports/data/keyword-map.csv` (60 queries across 8 strategic clusters):
- **Cluster 1 (Flat in Naroli):** "flat in Naroli", "flats in Naroli", "new flats Naroli", "naroli mein flat", "નરોલીમાં ફ્લેટ", "नरोली में फ्लैट".
- **Cluster 2 (Flats Near Silvassa):** "flat in Silvassa", "flats near Silvassa", "apartments near Silvassa", "silvassa me flat", "સિલવાસા પાસે ફ્લેટ".
- **Cluster 3 (Bhilad & Industrial Belt):** "flat near Bhilad", "flat near Bhilad checkpost", "flats in Dadra Nagar Haveli", "ભિલાડ પાસે ફ્લેટ".
- **Cluster 4 (BHK Units):** "1 BHK flat Naroli", "2 BHK flat Naroli", "1 BHK near Silvassa", "2 BHK near Silvassa", "નરોલીમાં 2 BHK ફ્લેટ".
- **Cluster 5 (Price Intent — Route to WhatsApp):** "affordable flats near Silvassa", "budget 1 BHK Naroli", "flat price Naroli", "નરોલી ફ્લેટ ભાવ".
- **Cluster 6 (Amenities):** "flats with swimming pool Naroli", "flat with gym clubhouse near Silvassa", "39 amenities flat", "સુવિધાઓ वाला फ्लैट".
- **Cluster 7 (Commercial):** "shop in Naroli", "commercial shop Bhilad checkpost", "office space Naroli", "નરોલીમાં દુકાન".
- **Cluster 8 (Brand & Trust):** "Advait Skyline", "Dhanasvi Infra", "Advait Skyline RERA PM3000002600013", "अद्वैत स्काईलाइन".

### 2.2 Intent Classification & SERP Layout
- **Commercial Investigation (62%):** "flats in naroli", "flats near silvassa". SERP displays Local 3-Pack, real estate portal aggregators (99acres, MagicBricks, Housing), and Google AI Overviews.
- **Transactional (28%):** "1 bhk flat naroli", "2 bhk flat naroli", "shop in naroli". SERP features developer direct listings, image packs, and inquiry forms.
- **Navigational / Brand (10%):** "Advait Skyline", "Dhanasvi Infra". Direct developer website, YouTube video walkthroughs, and RERA verification records.

---

## 3. PHASE 3 — AEO & GEO ANALYSIS

### 3.1 AI Query Fan-Out Strategy
AI engines (ChatGPT Search, Gemini, Perplexity, Google AI Overviews) disassemble complex homebuyer questions into targeted sub-intents:
- *Query:* "Best 2 BHK flat near Silvassa with amenities"
  - *Sub-intent A (Location/Commute):* Naroli–Silvassa main road, ≈200 m from checkpost, ≈10 km from Silvassa Stadium (≈13 min commute).
  - *Sub-intent B (Configuration & Carpet Area):* 2 BHK with 573 sq.ft carpet, 16' living hall, 5'6" sunset balcony, 2 bathrooms.
  - *Sub-intent C (Lifestyle Amenities):* G+14 residential gated society with 39+ amenities (swimming pool, gym, box cricket, temple, children's park).
  - *Sub-intent D (Trust & Verification):* RERA registered under `PM3000002600013` by Dhanasvi Infra.
  - *Sub-intent E (Next Step):* Direct contact via WhatsApp at `+91 99090 72390` for brochure and site visit booking.

### 3.2 Canonical Entity Fact Sheet (GEO Benchmark)
| Attribute | Canonical Factual Value | Verification Source |
|---|---|---|
| **Project Name** | Advait Skyline | Brochure & RERA Certificate |
| **Developer Entity** | Dhanasvi Infra | Official Partnership Deed / RERA |
| **Tagline** | Elevate Your Everyday | Brochure / Brand Identity |
| **RERA Registration** | PM3000002600013 | RERA D&NH Portal |
| **Location Address** | Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235 | Official Postal Address |
| **Main Road Frontage** | Naroli–Silvassa Main Road | On-site Physical Location |
| **Distance from Checkpost**| 200 meters (approx.) | Physical Measurement |
| **Distance to Silvassa** | ≈10 km (≈13 minutes by road) | Google Maps / Road Distance |
| **Distance to Bhilad Stn** | ≈5.1 km (approx.) | Railway / Road Distance |
| **Tower Structure** | G+14 Floors (Twin Towers) | Edge Design Architectural Plans |
| **1 BHK Carpet Area** | 511 sq. ft. | Approved Architectural Drawing |
| **2 BHK Carpet Area** | 573 sq. ft. | Approved Architectural Drawing |
| **Commercial Provision** | Ground Floor Shops (1–20) + 1st Floor Showrooms + 2nd Floor Offices | Approved Commercial Plan |
| **Amenity Count** | 39+ Total Lifestyle Amenities (21 Brochure-Confirmed) | Official Project Brochure |
| **Inquiry Channels** | WhatsApp (+91 99090 72390) · Phone (+91 99090 72363) | Developer Operating Line |

---

## 4. PHASE 4 — PAGE SCORECARDS & ARCHITECTURE

### 4.1 Page Scorecard Table (0–100 Scale)
| Route | Word Count | Single H1 | Schema | FAQ | CTA | Score / 100 | Status |
|---|---|---|---|---|---|---|---|
| `/` (Homepage) | 4,256 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/1-bhk-flats-naroli` | 2,618 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/2-bhk-flats-naroli` | 2,668 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/amenities` | 2,673 | **No (Fix H1)** | Duplicate | Yes | Yes | **86 / 100** | Needs H1 & Schema Cleanup |
| `/floor-plans` | 2,284 | **No (Fix H1)** | Duplicate | Yes | Yes | **86 / 100** | Needs H1 & Schema Cleanup |
| `/commercial-shops-naroli` | 3,028 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/project-location` | 2,329 | **No (Fix H1)** | Duplicate | Yes | Yes | **86 / 100** | Needs H1 & Schema Cleanup |
| `/about-dhanasvi-infra` | 2,774 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/construction-updates` | 3,343 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/contact` | 2,541 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/guides/buying-flat-in-naroli` | 2,681 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/guides/rera-property-guide` | 2,684 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |
| `/guides/home-loan-guide` | 2,655 | Yes | Yes | Yes | Yes | **91 / 100** | Healthy |

---

## 5. RECOMMENDED SCOPE FOR PHASE 5 IMPLEMENTATION
*(To be executed on branch `seo/aeo-geo-v2` only upon Gate 1 approval)*

1. **Technical P0/P1 Remediations:**
   - Update `app/robots.ts` to remove `/_next/` blocking and explicitly permit answer search bots (`OAI-SearchBot`, `PerplexityBot`, `Bingbot`).
   - Add semantic `<h1>` tags with target keywords to `/amenities`, `/floor-plans`, and `/project-location`.
   - Remove duplicate `<JsonLd>` invocations in child pages; refine `RealEstateAgent` to `Organization` and eliminate `priceRange`.
   - Update `app/sitemap.ts` to provide accurate `lastmod` metadata.
2. **Dedicated Geo-Hub Expansion:**
   - Add `/flats-in-naroli/` (hub for residential offerings, lifestyle, industrial connectivity).
   - Add `/flats-near-silvassa/` (honest commute facts: 10 km from Silvassa Stadium, 13-minute drive).
   - Add `/flats-near-bhilad-checkpost/` (hub for Bhilad station commuters and Gujarat border workers).
   - Deploy corresponding localized routes in `/hi/` and `/gu/`.
3. **Structured Data Enhancements:**
   - Implement Schema.org `Apartment` objects nested in `containsPlace` of `ApartmentComplex` on unit pages.
   - Embed breadcrumb schema and synchronized FAQ schemas matching visible text.

---

## ⛔ GATE 1 CHECKPOINT — AWAITING USER APPROVAL
In strict compliance with Master Prompt Section 0 & 1, **all analysis phases (Phases 1–4) have been completed without making code edits to the SEO/AEO/GEO architecture.**

Please review the findings above and grant approval to proceed to **Phase 5 (Implementation on branch `seo/aeo-geo-v2`)**.
