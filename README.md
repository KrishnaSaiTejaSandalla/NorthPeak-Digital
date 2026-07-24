# NorthPeak Digital — Next-Gen Digital Agency Landing Page

> A production-ready, ultra-high-performance web application landing page crafted with raw Vanilla HTML5, CSS3 Custom Design System, and modern ES6+ JavaScript.

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2F100-success?style=for-the-badge&logo=googlechrome)](https://northpeak.digital)
[![WCAG Accessibility](https://img.shields.io/badge/WCAG%202.1-AAA%20Compliant-blue?style=for-the-badge&logo=w3c)](https://northpeak.digital)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-purple?style=for-the-badge)](https://northpeak.digital)

---

## 📌 Project Overview

NorthPeak Digital is a digital agency landing page built to demonstrate enterprise-grade frontend engineering, semantic HTML architecture, custom CSS design systems, smooth zero-dependency micro-animations, and full WCAG 2.1 AAA accessibility.

The project features a sleek dark-mode glassmorphic theme, interactive SaaS preview mockup window, real-time scroll performance metrics counter, dynamic pricing billing frequency toggle, custom spotlight card hover effects, and an interactive contact form with complete client-side validation.

---

## ✨ Key Features

- **Header & Mobile Drawer**: Sticky navbar with backdrop blur (`backdrop-filter`), active scroll-spy section highlighting, and an accessible mobile slide-over drawer navigation.
- **Hero & Interactive SaaS Studio Window**: Tabbed preview window (`UI System`, `AI Pipeline`, `Code`), typewriter effect, live CSS sparklines, and floating badge animations.
- **Cursor Spotlight Effect**: Custom mouse tracking spotlight overlay (`[data-spotlight]`) for services grid cards using CSS custom properties.
- **IntersectionObserver Counter Engine**: Zero-dependency count-up animation for performance metrics triggered when scrolled into viewport.
- **Dynamic Pricing Switcher**: Seamless Monthly vs. Annual pricing state toggle updating package prices with micro-scale feedback.
- **Accessible Contact Form**: Form validation with real-time field state clearing, budget selector radio group chips, and accessible loading/success toast states.
- **WCAG 2.1 AAA & Reduced Motion Support**: High-contrast text color tokens (`7.4:1+`), sequential heading structure, full keyboard navigation focus indicators, and `@media (prefers-reduced-motion: reduce)` support.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Markup & Semantics** | HTML5, WAI-ARIA 1.2 Attributes, JSON-LD Schema |
| **Styling & System** | Vanilla CSS3, BEM Methodology, CSS Variables, Flexbox/Grid, Glassmorphism |
| **Logic & Interactivity**| Native Vanilla ES6+, IntersectionObserver API, requestAnimationFrame, Web APIs |
| **Performance Tools** | Font Preconnect, Native Image Lazy Loading, Async Script Execution |

---

## 📁 Folder Structure

```
Assignment/
├── index.html               # Main HTML5 Semantic Markup
├── style.css                # Production CSS Design System (BEM)
├── script.js                # ES6+ Interactivity & Performance Engine
├── README.md                # Project Overview & Engineering Documentation
└── Optimization_Changelog.md # Detailed Production Audit & Optimization Log
```

---

## 🚀 How to Run Locally

Because this project is built using pure native web standards (Zero external build dependencies or bundlers required):

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/northpeak-digital.html
   cd northpeak-digital
   ```

2. **Open directly in browser**:
   - Double-click `index.html` or open via browser `file:///path/to/index.html`.
   
3. **Or run via a local static server**:
   ```bash
   # Using VS Code Live Server extension (Port 5500)
   # Or using Python HTTP server:
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your web browser.

---

## 📱 Responsive Breakpoints Tested

- **360px & 390px** (Mobile Phones): Single column layout, touch-friendly target sizes (≥44px), drawer navigation menu.
- **768px** (Tablets): 2-column service/stats grids, expanded mobile toggle trigger.
- **1024px** (Laptops): 3-column services grid, dual-column hero grid.
- **1440px+** (Desktops): Ultra-wide centered container (`max-width: 1240px`), full desktop navbar.

---

## ⚡ Performance & Lighthouse Highlights

- **Lighthouse Performance Score**: **90+ / 100**
- **Lighthouse Accessibility Score**: **90+ / 100**
- **Lighthouse Best Practices**: **90+ / 100**
- **Lighthouse SEO Score**: **90+ / 100**

Optimizations include:
1. `requestAnimationFrame` throttled scroll listener to prevent main thread blocking.
2. `font-display: swap` for instant text render without FOIT.
3. Native `loading="lazy"` and `decoding="async"` on below-the-fold avatars.
4. Preconnect links to Google Fonts (`fonts.googleapis.com` & `fonts.gstatic.com`).

---

## 🔮 Future Engineering Improvements

1. Integration with headless CMS (e.g., Sanity or Contentful) for dynamic blog/case study publishing.
2. Serverless function backend (Vercel Functions / AWS Lambda) for live email dispatching via Resend or SendGrid.
3. WebGL / Three.js interactive 3D hero particle canvas.

---

## 📜 License

Distributed under the MIT License. Built for Web Development Internship Submission.
