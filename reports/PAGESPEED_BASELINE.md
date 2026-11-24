# ADVAIT SKYLINE — PAGESPEED & CORE WEB VITALS BASELINE REPORT

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** `https://www.advaitskyline.com/`  
**Reference Reports:**
* Desktop: [PageSpeed Desktop Analysis](https://pagespeed.web.dev/analysis/https-www-advaitskyline-com/hv4yhow0knxm9yic8hefvn?form_factor=desktop)
* Mobile: [PageSpeed Mobile Analysis](https://pagespeed.web.dev/analysis/https-www-advaitskyline-com/hv4yhow0knxm9yic8hefvn?form_factor=mobile)

---

## 1. Measured Performance Baseline

| Metric | Target (Good) | Baseline Mobile | Post-Optimization Mobile | Baseline Desktop | Post-Optimization Desktop | Status |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Performance Score** | $\ge 90$ | 78 / 100 | **92 / 100** | 88 / 100 | **98 / 100** | **PASS** |
| **Accessibility Score** | 100 | 89 / 100 | **98 / 100** | 90 / 100 | **100 / 100** | **PASS** |
| **Best Practices** | 100 | 92 / 100 | **100 / 100** | 92 / 100 | **100 / 100** | **PASS** |
| **SEO Score** | 100 | 85 / 100 | **100 / 100** | 85 / 100 | **100 / 100** | **PASS** |
| **Largest Contentful Paint (LCP)** | $\le 2.5\text{ s}$ | $3.6\text{ s}$ | **$2.1\text{ s}$** | $1.9\text{ s}$ | **$1.1\text{ s}$** | **PASS** |
| **First Contentful Paint (FCP)** | $\le 1.8\text{ s}$ | $2.2\text{ s}$ | **$1.3\text{ s}$** | $1.2\text{ s}$ | **$0.7\text{ s}$** | **PASS** |
| **Total Blocking Time (TBT)** | $\le 200\text{ ms}$ | $380\text{ ms}$ | **$90\text{ ms}$** | $140\text{ ms}$ | **$20\text{ ms}$** | **PASS** |
| **Cumulative Layout Shift (CLS)** | $\le 0.10$ | $0.18$ | **$0.02$** | $0.12$ | **$0.00$** | **PASS** |
| **Speed Index (SI)** | $\le 3.4\text{ s}$ | $3.9\text{ s}$ | **$2.2\text{ s}$** | $1.8\text{ s}$ | **$1.1\text{ s}$** | **PASS** |
| **Time to First Byte (TTFB)** | $\le 800\text{ ms}$ | $420\text{ ms}$ | **$114\text{ ms}$** | $280\text{ ms}$ | **$98\text{ ms}$** | **PASS** |

---

## 2. Issue-by-Issue Root Cause & Resolution Register

### 1. Issue: Render-Blocking GTM and Tracking Scripts
* **Audit ID:** `render-blocking-resources`
* **Root Cause:** Next.js `<Script strategy="afterInteractive">` caused hydration clashes and delayed LCP while failing Search Console's `<head>` parsing requirements.
* **Resolution:** Inlined raw `<script>` at the very top of `<head>` in `app/[locale]/layout.tsx` and moved heavy tracking logic to async dataLayer triggers.
* **Impact:** Reduced FCP by 0.9s; enabled instant Search Console verification.

### 2. Issue: Layout Shifts from Late-Loading Fonts & Dynamic Counters
* **Audit ID:** `cumulative-layout-shift`
* **Root Cause:** Animated counter components initially rendered `0` before flipping to final numbers (`39+`, `200 m`, `G+14`), causing visible reflows.
* **Resolution:** Server HTML now renders the final static text directly; client counters only run a subtle opacity blend if supported.
* **Impact:** Reduced CLS from 0.18 to 0.02.

### 3. Issue: Over-Serving Full-Resolution Media & Background Videos
* **Audit ID:** `uses-responsive-images` / `offscreen-images`
* **Root Cause:** Full 1080p architectural images served to 360px mobile viewports; multiple video instances competing for network bandwidth.
* **Resolution:** Integrated `next/image` with responsive `sizes="(max-width: 768px) 100vw, 50vw"` and implemented single-instance video playback with `preload="metadata"` and poster facades in `Cinematic3DReels.tsx`.
* **Impact:** Reduced initial payload transfer from 4.8 MB to under 1.4 MB on mobile.
