# VixeoTV — Premium Ultra HD IPTV Website

Production Domain: [https://www.vixeotv.net/](https://www.vixeotv.net/)  
Support WhatsApp: [https://wa.me/447882781998](https://wa.me/447882781998)

A complete, high-performance, original IPTV web application built from scratch with Next.js 16.3.0, React 19, Tailwind CSS, and pure JavaScript / JSX (`.js`, `.jsx` only).

---

## 🚀 Key Features & Architecture

- **Dark Premium Aesthetic**: Custom VixeoTV design system with deep obsidian void backgrounds (`#080B11`, `#0E131F`), vibrant electric cyan highlights (`#00D4FF`), and ultraviolet gradients (`#7928CA`).
- **Complete Page Ecosystem**:
  - `/` — High-converting homepage with live broadcast preview, trust pills, features, pricing, channels, devices, setup guides, and FAQ.
  - `/pricing` — Interactive duration tabs (1, 3, 6, 12, 24 months), multi-device connection selector, and direct WhatsApp order links.
  - `/features` — Streaming quality, Anti-Freeze v2.0 load-balancing, and side-by-side cable comparison.
  - `/channels` — Channel lineups across Sports, USA/Canada, UK/Ireland, Europe, Latin America, Arabic, and VOD cinema.
  - `/devices` — Platform compatibility breakdown for Firestick, Android TV, Apple TV, Smart TVs, and PCs.
  - `/setup` — Central setup hub with prerequisites checklist and device directory.
  - `/setup/[device]` — Dedicated step-by-step guides for Firestick, Android TV, Apple TV, Samsung Smart TV, LG Smart TV, Windows, and MAG boxes with `HowTo` schema.
  - `/faq` — Filterable & searchable accordion with `FAQPage` JSON-LD schema.
  - `/about` — Service philosophy, values, and streaming standards.
  - `/contact` — Interactive message composer with direct WhatsApp pre-fill and email information.
  - `/support` — 24/7 dedicated support portal with WhatsApp quick links and troubleshooting steps.
  - `/blog` & `/blog/[slug]` — SEO-optimized technical guides with `Article` schema, reading time, and internal linking.
  - `/legal/privacy`, `/legal/terms`, `/legal/refund-policy`, `/legal/cookies` — Comprehensive legal terms with configurable placeholders.
- **Strict SEO Architecture**:
  - Exactly one `<h1>` per page.
  - Unique meta title and description per page.
  - Self-referencing canonicals using `https://www.vixeotv.net/`.
  - Dynamic `sitemap.xml` generated automatically via Next.js metadata API.
  - Clean `robots.txt` pointing to sitemap.
  - Structured data (`Organization`, `WebSite`, `BreadcrumbList`, `Product`, `HowTo`, `FAQPage`, `Article`).
- **Zero Reference Brand Leaks**: Absolutely zero mentions of `Strimo` / `StrimoIPTV` / `strimoiptv.com`.
- **Pure JavaScript**: Zero `.ts` or `.tsx` files; strictly `.js` and `.jsx`.

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
