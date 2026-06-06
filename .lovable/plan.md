
# Campus Counsel — Full Rebrand & Content Expansion

## 1. Brand identity swap
- Replace every "XTN Admissions" / "Xplorevo Tech Network" string with **Campus Counsel** across:
  - `index.html` (title, meta description, OG tags, JSON-LD Organization, sitewide schema)
  - `src/components/Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx`, `Contact.tsx`, `WhyChooseUs.tsx`, `Packages.tsx`, `Faq.tsx`, `Features.tsx`, `Loader.tsx`, `CookieConsent.tsx`
  - `src/pages/Index.tsx`, `NotFound.tsx`
  - `public/manifest.json`, `public/llms.txt`, `public/sitemap.xml`, `public/robots.txt`, `README.md`, `netlify.toml`
- Tagline: *"Guiding Your Engineering Journey"*
- Brand positioning copy (used in hero subtitle, footer about, meta description):
  > Campus Counsel is Maharashtra's trusted engineering admission and career guidance platform helping students with MHT-CET, JEE, CAP Rounds, college selection, and career planning.

## 2. Logo replacement
- Upload the attached image as a Lovable Asset via `lovable-assets create` → `src/assets/campus-counsel-logo.png.asset.json`
- Replace all `/xtn-logo.png` references with imported asset URL (Navbar, Footer, Hero, Loader, manifest icon — manifest will point to a `/public` copy or new URL).
- Update favicon in `index.html` to the new logo.

## 3. Color/theme tune-up
- Shift accents toward the logo's **deep navy (#0a1f3d) + teal (#1cb5b8)** with retained gold accent for premium feel. Update tokens in `src/index.css` and `tailwind.config.ts` (`learntech-blue`, `learntech-green` tokens repointed; class names kept to avoid sprawling refactor).

## 4. Why Choose Campus Counsel? (rewrite `WhyChooseUs.tsx`)
- New section title + subtitle as supplied.
- Expand feature grid from 6 → **12 cards** exactly as listed (NEC Finalist, LearnTech & E-CELL, Topmate, Xplorevo CEO, Campus Ambassador, Faculty Network, 1:1 Mentorship, Direct Faculty Consultation, CAP Round Strategy, Career Guidance, 24×7 Support, Success Framework). Icons from lucide-react.

## 5. New section: Our Mentorship Ecosystem
- Create `src/components/MentorshipEcosystem.tsx` with intro paragraph + 10-item bullet grid (College Prediction, Branch Guidance, CAP Strategy, Faculty Consultation, Career Roadmap, Scholarship, Hostel insights, Placement support, Alumni insights, Dedicated Mentor).
- Mount in `Index.tsx` between Packages and FAQ.

## 6. Trust badges strip
- Create `src/components/TrustBadges.tsx` — horizontal pill row with the 8 trust badges. Mount under hero.

## 7. CTA section refresh
- Update final CTA copy to: *"Ready to Secure Your Engineering Admission?"* with two buttons:
  - **Book Free Counselling Session** → existing Microsoft Form
  - **Talk to a Mentor** → WhatsApp group link

## 8. Footer updates
- Replace Instagram handle/link with `@campus_counsel_1` → `https://www.instagram.com/campus_counsel_1/` in Footer, Contact, llms.txt, and JSON-LD `sameAs`.

## 9. SEO refresh
- Update `<title>`: *"Campus Counsel — Maharashtra Engineering Admission & CAP Round Counselling"*
- Meta description with target keywords.
- Keywords meta + JSON-LD `Organization` name/url/logo/sameAs.
- Refresh `public/llms.txt`, `public/sitemap.xml` (name only — URL unchanged), `public/manifest.json` name/short_name/icons.
- Add `EducationalOrganization` JSON-LD with new brand details.

## 10. Verification
- Visual check in preview (mobile + desktop viewports).
- Confirm no remaining "XTN" / "Xplorevo" string via ripgrep.
- Confirm logo loads, links open in new tab, WhatsApp floating button intact.

## Technical notes
- Class tokens `learntech-blue` etc. remain (rename would touch dozens of files); only their HSL values change.
- Cookie consent, gtag, Floating WhatsApp, Loader behaviour unchanged.
- No backend changes needed.
