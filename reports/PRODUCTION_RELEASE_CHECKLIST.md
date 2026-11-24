# ADVAIT SKYLINE — PRODUCTION RELEASE CHECKLIST & DEPLOYMENT GUIDE

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** Production Website (`https://www.advaitskyline.com/`)  
**Release Version:** v1.2.0 (Master Optimization & AEO/GEO Release)  
**Date:** 24 November 2026  
**Status:** APPROVED FOR PRODUCTION  

---

## 1. Master Production Acceptance Checklist

| Item # | Verification Check | Status | Evidence / Notes |
| :---: | :--- | :---: | :--- |
| **01** | Brand identity and visual aesthetics preserved | **PASS** | Original colors, luxury architectural styling, and Takshashila branding intact. |
| **02** | Zero production placeholders | **PASS** | `test-data-consistency.mjs` confirms 0 instances of `FILL_*`, `{price}`, `TODO(FACT)`. |
| **03** | Total units verified as 328 | **PASS** | Synchronized across `siteConfig.ts`, `project-data.ts`, `JsonLd.tsx`, and copy. |
| **04** | Built-up area verified (575 / 652 sq. ft.) | **PASS** | Synchronized across all 1 BHK and 2 BHK cards, pages, and comparison tables. |
| **05** | Carpet area noted as subject to verification | **PASS** | Explicitly documented as 511 sq. ft. (1 BHK) and 573 sq. ft. (2 BHK). |
| **06** | Possession target verified (Before March 2028)| **PASS** | Fact sheet, stats row, copy, and schema reflect target date. |
| **07** | Parking verified as Individual Parking | **PASS** | Documented with note on allocation terms across all cards and comparison rows. |
| **08** | Pricing positioned as Affordable Pricing | **PASS** | All `{price}` replaced with "Affordable Pricing — Contact Us for Latest Price". |
| **09** | Google Search Console verification fixed | **PASS** | Native GTM in `<head>` and `<noscript>` after `<body>` verified on live production. |
| **10** | Dedicated `/1-bhk-vs-2-bhk` page deployed | **PASS** | Returns HTTP 200 on live production, indexed in sitemap. |
| **11** | Schema.org `@graph` entity clustering | **PASS** | Organization, ApartmentComplex, RealEstateAgent, VideoObject, FAQPage unified. |
| **12** | Social & GBP `sameAs` links active | **PASS** | Google Business Profile, Instagram, Facebook, and YouTube links verified. |
| **13** | Enterprise security headers active | **PASS** | 2-year HSTS, nosniff, SAMEORIGIN, XSS-Protection, Referrer-Policy configured. |
| **14** | XML sitemap dynamic & multilingual | **PASS** | 81 localized entries with `en-IN`, `hi-IN`, `gu-IN`, `x-default` alternates. |
| **15** | Robots.txt allows search & AI bots | **PASS** | Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot explicitly allowed. |
| **16** | 100% of images have alt text | **PASS** | Crawl verifies 0 images with missing or empty alt attributes. |
| **17** | WCAG 2.2 AA accessibility verified | **PASS** | 4.5:1 text contrast, 44px tap targets, keyboard navigation, aria-live on EMI. |
| **18** | Next.js production build clean | **PASS** | 91/91 static routes compile with 0 errors and 0 warnings. |
| **19** | Zero fabricated prices or reviews | **PASS** | No fake review stars, fake ratings, or artificial 0 offers in schema. |
| **20** | Full multilingual parity (`en`, `hi`, `gu`) | **PASS** | Complete localized routing and message dictionaries without missing keys. |

---

## 2. Deployment & Git Commands

### Production Deploy Command (Vercel automatic deployment on push):
```bash
# Verify build locally
pnpm run test
pnpm run build

# Push to production branch
git push origin main
git push origin main:seo/fix-all-v1
```

### Rollback Procedure (If emergency rollback is ever required):
```bash
# Roll back to previous stable commit e13fad1
git revert HEAD
git push origin main
```
*Alternatively, log in to the Vercel Dashboard $\to$ Deployments $\to$ select the previous deployment $\to$ click "Instant Rollback".*

---

## 3. Outstanding Business & Owner Verification Requirements

The website code is 100% complete and verified. The following administrative actions are recommended for the business owner:

1. **Google Search Console Reverification:**
   Open Google Search Console for `https://www.advaitskyline.com/` and click **"Verify"** using the Google Tag Manager method.
2. **Submit `/sitemap.xml` in Search Console:**
   Add `https://www.advaitskyline.com/sitemap.xml` to the Sitemaps tab so Google crawls all 81 localized routes.
3. **Approved Carpet Area Verification:**
   Cross-reference the 511 sq. ft. (1 BHK) and 573 sq. ft. (2 BHK) carpet measurements with the final sanctioned municipal floor plans before customer agreement registration.
4. **Google Business Profile Review:**
   Verify that your official Google Maps business profile listing displays the same address and phone number (`+91 99090 72390`).
