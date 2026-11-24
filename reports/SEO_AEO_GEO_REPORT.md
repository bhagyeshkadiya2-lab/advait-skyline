# ADVAIT SKYLINE — SEO, AEO & GEO MASTER AUDIT & IMPLEMENTATION

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** `https://www.advaitskyline.com/`  
**Lead Strategist:** Technical SEO Architect, AEO Specialist & GEO Engineer  
**Audit Status:** FULLY VERIFIED (Grade A+)  

---

## 1. Technical SEO & Crawlability Matrix

| Technical Parameter | Standard / Expectation | Implementation Status | Verification Details |
| :--- | :--- | :---: | :--- |
| **HTTP Status Codes** | HTTP 200 on all indexable URLs | **PASS** | `curl -sI` confirms 200 OK across all primary routes. |
| **HTTPS Redirection** | 308 Permanent Redirect | **PASS** | `http://` $\to$ `https://` with HSTS 2-year lifetime. |
| **Apex / WWW Canonical** | Single primary host | **PASS** | All non-canonical hosts 308 redirect to `https://www.advaitskyline.com`. |
| **Robots Directives** | `index, follow` on public pages | **PASS** | `<meta name="robots" content="index, follow" />` present on all routes. |
| **Googlebot Meta** | Large image & snippet preview | **PASS** | `max-image-preview:large, max-snippet:-1, max-video-preview:-1`. |
| **XML Sitemap** | Valid XML with localized alternates | **PASS** | `/sitemap.xml` returns 81 entries with `en-IN`, `hi-IN`, `gu-IN`, `x-default`. |
| **Robots.txt** | Clean crawling, AI crawler access | **PASS** | `/robots.txt` explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`. |
| **Hreflang Tags** | Reciprocal bidirectional tags | **PASS** | Header and HTML link elements cross-reference all 3 languages. |
| **Self-Referencing Canonicals**| Absolute URLs matching actual route | **PASS** | Zero canonical mismatches or parameter leaks. |

---

## 2. AEO (Answer Engine Optimization) & Voice Search

AEO optimizes for direct answer extraction by Google Featured Snippets, voice assistants (Siri, Google Assistant), and zero-click answer engines.

### Direct Answer Capsules (40–55 words each):
1. **Project Definition:**
   > "Advait Skyline by Dhanasvi Infra is a residential and commercial development situated on Naroli–Silvassa Main Road, 200 metres from the Naroli–Bhilad Checkpost in Dadra & Nagar Haveli. The project features affordable 1 and 2 BHK homes across G+14 floors with 39+ lifestyle amenities."
2. **1 BHK Floor Specification:**
   > "The 1 BHK flat at Advait Skyline features 575 sq. ft. built-up area (511 sq. ft. carpet area, subject to document verification), 2 full bathrooms (master en-suite and common guest bathroom), a private 4-foot entrance balcony, and dedicated utility wash area."
3. **2 BHK Floor Specification:**
   > "The 2 BHK flat at Advait Skyline offers 652 sq. ft. built-up area (573 sq. ft. carpet area, subject to document verification), an expansive 16-foot living hall, a 5'6\" wide sunset balcony, 2 full bathrooms, and pre-wired split AC provisions."
4. **Possession Commitment:**
   > "The possession target for Advait Skyline is before March 2028 as per construction scheduling and registered agreement for sale terms."
5. **Geographic Disambiguation:**
   > "Advait Skyline is located in Naroli, Union Territory of Dadra & Nagar Haveli (PIN 396235), approximately 10 km from Silvassa and 5.1 km from Bhilad Railway Station. It is distinct from Narol in Ahmedabad, Gujarat."

---

## 3. GEO (Generative Engine Optimization) & Entity Clustering

GEO structures website data so Large Language Models (LLMs)—including **ChatGPT Search, Google AI Overviews, Perplexity AI, Google Gemini, and Microsoft Copilot**—cite Advait Skyline accurately.

### Entity Graph (`@graph` JSON-LD):
* **`Organization` (`#organization`):** Legal entity Dhanasvi Infra with official email, customer care hotlines, and address.
* **`ApartmentComplex` (`#project`):** 328 units, G+14 floors, 3 towers, 39+ verified amenities, RERA ID `PM3000002600013`, and `containsPlace` for 1 BHK (575 sq. ft.) and 2 BHK (652 sq. ft.).
* **`RealEstateAgent` (`#realestateagent`):** Advait Skyline Sales & Experience Centre with daily operating hours (09:30 AM – 07:00 PM).
* **`VideoObject`:** 3D virtual walkthrough reels.
* **`FAQPage`:** 13 direct-answer buyer questions.

### Authority `sameAs` Clustered URLs:
* Google Business Profile: `https://share.google/1BK6JUvV05C14djr3`
* Instagram: `https://www.instagram.com/advaitskyline/`
* Facebook: `https://www.facebook.com/profile.php?id=61590554242765`
* YouTube: `https://www.youtube.com/@ADVAITSKYLINE`

---

## 4. Local SEO & NAP Verification

* **Business Name:** Advait Skyline / Dhanasvi Infra
* **Address:** Naroli–Silvassa Main Road, Opp. Vadfaliya, Naroli, Dadra & Nagar Haveli – 396235 (200m from Naroli–Bhilad Checkpost)
* **Sales Desk:** +91 99090 72390 (WhatsApp) / +91 99090 72363 (Phone Hotline)
* **Precise Coordinates:** `20.2798943, 72.920547`
* **Commute Hubs:**
  * Naroli–Bhilad Checkpost: 200 m (~1 min)
  * Bhilad Railway Station: 5.1 km (~8–10 min)
  * NH-48 Western Express Highway: 7.2 km (~10–12 min)
  * Silvassa City Centre: 9.8 km (~13–15 min)
  * Vapi GIDC / Town: 16.0 km (~22–25 min)
