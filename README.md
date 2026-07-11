# 🚀 Lenis Smooth Scroll — Complete Feature Guide

> **Lenis** Modern Smooth Scrolling, Progress Bar, Back to Top, Parallax, Horizontal Scroll.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)
![Lenis](https://img.shields.io/badge/Lenis-1.x-FF6B6B?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)

---

## 📋 Table of Contents

- [Features Overview](#-features-overview)
- [Installation](#-installation)
- [Folder Structure](#-folder-structure)
- [Core Setup](#-core-setup)
- [Feature-by-Feature Guide](#-feature-by-feature-guide)
  - [1. Smooth Scroll](#1-smooth-scroll-base-feature)
  - [2. Progress Bar](#2-progress-bar-top-scroll-indicator)
  - [3. Back to Top](#3-back-to-top-button)
  - [4. Parallax Effects](#4-parallax-effects)
  - [5. Scroll-Triggered Animations](#5-scroll-triggered-animations)
  - [6. Horizontal Scroll](#6-horizontal-scroll)
  - [7. Stagger Animations](#7-stagger-animations)
  - [8. Form Reveal](#8-form-reveal-animation)
  - [9. Multi-Step Progress](#9-progress-indicators-multi-step-forms)
  - [10. Anchor Links](#10-anchor-link-integration)
  - [11. Route Reset](#11-route-change-reset)
  - [12. Modal Lock](#12-modal-scroll-lock)
- [Tips & Best Practices](#-tips--best-practices)
- [Precautions](#-precautions)
- [Quick Reference Table](#-quick-reference-table)
- [License](#-license)

---

## 🎯 Features Overview

| # | Feature | Description | Use Case |
|---|---|---|---|
| 1 | **Smooth Scroll** | Base smooth scrolling | সব page এ |
| 2 | **Progress Bar** | Top scroll indicator | Long pages |
| 3 | **Back to Top** | Floating button | 1000px+ scroll |
| 4 | **Parallax** | Background movement | Hero sections |
| 5 | **Scroll Animations** | Element reveal on scroll | Card grids |
| 6 | **Horizontal Scroll** | Vertical → Horizontal | Galleries |
| 7 | **Stagger** | Sequential reveal | Lists |
| 8 | **Form Reveal** | Smooth form appearance | Booking forms |
| 9 | **Progress Indicator** | Multi-step progress | Checkout forms |
| 10 | **Anchor Links** | Smooth same-page nav | Navigation menus |
| 11 | **Route Reset** | Scroll reset on navigation | Multi-page apps |
| 12 | **Modal Lock** | Background scroll prevent | Modals/Dialogs |

---

## 📦 Installation

```bash
# Project create
yarn create next-app@latest smooth-scroll-app --js --tailwind --eslint --app --src-dir --import-alias "@/*"

cd smooth-scroll-app

# Dependencies install
yarn add lenis framer-motion

smooth-scroll-app/
│
├── src/
│   ├── app/
│   │   ├── layout.js              ← Root layout (Lenis wrap)
│   │   ├── page.js                ← Home page
│   │   └── globals.css            ← Global styles
│   │
│   ├── components/
│   │   ├── ui/                    ← Reusable UI
│   │   │   ├── SmoothScroll.js
│   │   │   ├── ScrollProgress.js
│   │   │   ├── BackToTop.js
│   │   │   ├── ScrollReset.js
│   │   │   ├── SmoothLink.js
│   │   │   └── Modal.js
│   │   │
│   │   ├── layout/                ← Layout components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   │
│   │   └── sections/              ← Page sections
│   │       ├── HeroParallax.js
│   │       ├── FeatureCards.js
│   │       ├── HorizontalGallery.js
│   │       └── BookingForm.js
│   │
│   ├── hooks/                     ← Custom hooks
│   │   ├── useLenisScroll.js
│   │   └── useScrollDirection.js
│   │
│   └── lib/                       ← Configs
│       └── lenis-config.js
│
├── tailwind.config.js
└── package.json


📝 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions, issues and feature requests are welcome!
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📧 Contact
For questions or support, please open an issue on GitHub.
<div align="center">

Made with ❤️ using Lenis + Next.js + Framer Motion
⭐ Star this repo if you found it helpful!
</div>
```
