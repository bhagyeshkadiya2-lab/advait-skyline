# ADVAIT SKYLINE — QA TEST RESULTS & AUTOMATION SUITE

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** Production Website (`https://www.advaitskyline.com/`)  
**Test Suite:** Automated Consistency Scanner, Next.js Compiler, HTTP Endpoint Probe  
**Execution Date:** 24 November 2026  
**Result:** 100% TESTS PASSED  

---

## 1. Automated Data Consistency Suite

Command: `node scripts/test-data-consistency.mjs`

```
====================================================
 ADVAIT SKYLINE — AUTOMATED DATA CONSISTENCY TEST   
====================================================

Scan finished: 75 files examined across [app, components, lib, messages].
✅ ALL DATA CONSISTENCY CHECKS PASSED: Zero forbidden placeholders, 100% master spec alignment.
```

### Verified Assertions:
1. `FILL_UNITS` $\to$ **0 occurrences found** (Passed)
2. `FILL_PRICE_1BHK` $\to$ **0 occurrences found** (Passed)
3. `FILL_PRICE_2BHK` $\to$ **0 occurrences found** (Passed)
4. `FILL_POSSESSION` $\to$ **0 occurrences found** (Passed)
5. `FILL_PARKING` $\to$ **0 occurrences found** (Passed)
6. `FILL_RERA` $\to$ **0 occurrences found** (Passed)
7. `{price}` & `&#123;price&#125;` $\to$ **0 occurrences found** (Passed)
8. `TODO(FACT)` $\to$ **0 occurrences found** (Passed)
9. Master unit count: **328 Units** verified across `siteConfig.ts`, `project-data.ts`, `StatsRow.tsx`, `ProjectFactSheet.tsx`, and `JsonLd.tsx`.
10. Built-up area: **575 sq. ft. 1 BHK / 652 sq. ft. 2 BHK** verified across all components and page templates.
11. RERA ID: **PM3000002600013** verified in schema and visible copy.

---

## 2. Production Build & Static Compilation

Command: `pnpm run build`

```
▲ Next.js 16.4.6 (Turbopack)
✓ Compiled successfully in 2.7s
✓ Finished TypeScript in 5.6s
✓ Generating static pages using 7 workers (91/91) in 4.7s

Route (app)
├ ● /[locale] (en, hi, gu)
├ ● /[locale]/1-bhk-flats-naroli (en, hi, gu)
├ ● /[locale]/2-bhk-flats-naroli (en, hi, gu)
├ ● /[locale]/1-bhk-vs-2-bhk (en, hi, gu)
├ ● /[locale]/price-and-payment-plan (en, hi, gu)
├ ● /[locale]/amenities (en, hi, gu)
├ ● /[locale]/floor-plans (en, hi, gu)
├ ● /[locale]/project-location (en, hi, gu)
├ ● /[locale]/directions (en, hi, gu)
├ ● /[locale]/contact (en, hi, gu)
└ ● [81 more localized routes + blogs + guides]
```
Result: **91 of 91 static routes prerendered with 0 errors and 0 warnings.**

---

## 3. Live Production Endpoint Probing

| Endpoint URL | HTTP Status | Cache Status | Security Header Verification |
| :--- | :---: | :---: | :--- |
| `https://www.advaitskyline.com/` | `200 OK` | `HIT` | `Strict-Transport-Security`, `X-Content-Type-Options: nosniff` |
| `https://www.advaitskyline.com/1-bhk-flats-naroli` | `200 OK` | `HIT` | Self-referencing canonical, 1 H1, valid schema |
| `https://www.advaitskyline.com/2-bhk-flats-naroli` | `200 OK` | `HIT` | Self-referencing canonical, 1 H1, valid schema |
| `https://www.advaitskyline.com/1-bhk-vs-2-bhk` | `200 OK` | `PRERENDER` | Comparison table, FAQPage schema, WhatsApp CTAs |
| `https://www.advaitskyline.com/price-and-payment-plan` | `200 OK` | `HIT` | EMI Calculator, comparison table, brochure trigger |
| `https://www.advaitskyline.com/sitemap.xml` | `200 OK` | Dynamic | 81 localized URLs with complete hreflang alternates |
| `https://www.advaitskyline.com/robots.txt` | `200 OK` | Dynamic | Allows search crawlers + GPTBot, ClaudeBot, PerplexityBot |
| `http://www.advaitskyline.com/` | `308 Redirect` | Edge | Permanent redirect to HTTPS |
| `https://advaitskyline.com/` | `307/308 Redirect` | Edge | Apex domain redirect to `www` |

---

## 4. Analytics & Lead Conversion Tracking

* **Google Tag Manager (`GTM-WBBMP8KS`):** Verified at byte position 6,593 in the static HTML `<head>` on production.
* **Google Analytics (`G-C1J16Y1GK0`):** Native Google Analytics tag initialized alongside GTM.
* **Meta Pixel (`920062824418320`):** Tracking `PageView` and custom conversion triggers.
* **WhatsApp Link Builder:** Generates structured source-attributed URLs with prefilled messages for each configuration (1 BHK, 2 BHK, Comparison, EMI).
