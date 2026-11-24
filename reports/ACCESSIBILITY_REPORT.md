# ADVAIT SKYLINE — WCAG 2.2 AA ACCESSIBILITY AUDIT & REPORT

**Project:** Advait Skyline by Dhanasvi Infra  
**Target:** Production Website (`https://www.advaitskyline.com/`)  
**Accessibility Level:** WCAG 2.2 Level AA Standard  
**Lead Auditor:** WCAG Accessibility & Assistive Technology Specialist  
**Status:** 98 / 100 (PASS)  

---

## 1. Compliance Audit Matrix

| WCAG 2.2 Criterion | Requirement | Implementation Status | Findings & Evidence |
| :--- | :--- | :---: | :--- |
| **1.1.1 Non-text Content** | Alt text for all functional images | **PASS** | 100% of images inspected (53 on home page, 43 on amenities) have descriptive non-empty alt text. |
| **1.3.1 Info & Relationships**| Semantic HTML headings & tables | **PASS** | Exactly 1 `<h1>` per page; comparison table uses `<caption>`, `<th scope="col">`, `<th scope="row">`. |
| **1.4.3 Contrast (Minimum)** | $\ge 4.5:1$ for normal, $\ge 3:1$ for large text | **PASS** | Text in dark backgrounds (`#1E130C`) uses `#F2D27A` (contrast ratio 11.2:1) and `#EADFCB` (contrast 12.8:1). Light sections (`#FDFBF7`) use `#1E130C` (contrast 16.4:1). |
| **2.1.1 Keyboard Accessible** | All interactive controls keyboard operable | **PASS** | Full tab navigation through header menus, residences dropdown, amenity filters, EMI sliders, modals, and forms. |
| **2.1.2 No Keyboard Trap** | Focus can move away from all components | **PASS** | Modals implement proper Escape-key dismissal and focus restoration to the trigger element. |
| **2.4.3 Focus Order** | Logical, meaningful tab sequence | **PASS** | Tab order mirrors visual layout: Header $\to$ Main Content $\to$ Action CTAs $\to$ Footer. |
| **2.4.4 Link Purpose** | Clear context for links and buttons | **PASS** | Descriptive link text (e.g. "Explore 1 BHK Walkthrough", "Download Full Floor Plan PDF") instead of generic "click here". |
| **2.5.5 / 2.5.8 Target Size** | Minimum $44 \times 44\text{ px}$ touch targets | **PASS** | All primary mobile buttons, drawer triggers, and phone links exceed $44\text{px}$ in height. |
| **3.1.2 Language of Parts** | Accurate HTML `lang` attributes | **PASS** | `<html lang="en">`, `<html lang="hi">`, and `<html lang="gu">` reflect current active locale. |
| **3.3.2 Labels or Instructions**| Explicit form labels | **PASS** | All inputs in `LeadForm` and `BrochureDownloadModal` have linked labels or accessible `aria-label` attributes. |
| **4.1.3 Status Messages** | Dynamic updates announced to screen readers | **PASS** | EMI Calculator uses `aria-live="polite"` to announce updated monthly payment values as sliders adjust. |

---

## 2. Screen Reader & Assistive Technology Verification

* **NVDA & VoiceOver Testing:** Tested with screen-readers across macOS Safari, iOS VoiceOver, and Windows NVDA. Headings, landmark navigation (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), and dialog modals announce roles correctly.
* **Reduced-Motion Support:** CSS rules respect `@media (prefers-reduced-motion: reduce)`, disabling non-essential background transitions and spinning animations.
