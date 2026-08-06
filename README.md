# Najimul — Developer Portfolio

<p align="center">
  <a href="https://www.najimul.com/">Live site</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/najimhaq">GitHub</a>
  &nbsp;·&nbsp;
  <a href="mailto:mdnajimulhaque@gmail.com">Email</a>
</p>

<p align="center">
  A fast, interactive portfolio for <strong>Najimul Haque</strong> — a self-taught full-stack developer building polished, accessible web experiences with Next.js, React, and modern frontend tooling.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Deployed on Vercel" />
</p>

---

## Overview

This is not a static résumé page. It is a responsive, motion-led portfolio designed to demonstrate frontend craft: smooth scrolling, deliberate micro-interactions, keyboard-first navigation, project storytelling, and an accessible dark interface.

> **Live:** [www.najimul.com](https://www.najimul.com/)

## Highlights

- **Command palette** — press `⌘ K` on macOS or `Ctrl K` on Windows/Linux to quickly navigate projects, skills, contact details, social links, and résumé.
- **Interactive terminal easter egg** — run `sudo hire me` from the command palette for a small terminal boot sequence.
- **Smooth, intentional motion** — Lenis scrolling, GSAP timelines, and Framer Motion scroll reveals.
- **Responsive by design** — layouts and interaction details adapted from mobile to wide desktop displays.
- **Developer-focused projects** — filterable project work with live demos, source links, technology tags, and case-study-ready structure.
- **Quality tooling** — metadata, Open Graph previews, Vercel Analytics, scroll progress, back-to-top navigation, and reduced-motion-friendly UI patterns.

## Stack

| Technology | Role |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, routing, metadata, optimized production builds |
| [React 19](https://react.dev/) | Component-based interface development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Responsive styling and design tokens |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling experience |
| [GSAP](https://gsap.com/) | Timeline and scroll-driven animation |
| [Framer Motion](https://www.framer.com/motion/) | Declarative motion, layout, and reveal animations |
| [cmdk](https://cmdk.paco.me/) | Keyboard command menu |
| [Lucide](https://lucide.dev/) | Lightweight SVG icon set |
| [Vercel Analytics](https://vercel.com/analytics) | Production visitor analytics |

## Interaction Map

| Feature | What it does |
| --- | --- |
| Navigation | Hides while scrolling down and returns while scrolling up |
| Scroll progress | Gives visitors visual feedback about page position |
| Cursor glow | Desktop-only ambient spotlight; disabled for coarse pointers and reduced-motion preferences |
| Project cards | Motion-led reveals, image treatments, technology tags, live demo, and GitHub links |
| Command menu | Search and navigate the portfolio without touching the mouse |
| Terminal moment | A playful, optional developer-centric interaction — never blocking core navigation |

## Run Locally

### Prerequisites

- Node.js 20.9 or later
- Yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/najimhaq/najimul-portfolio-cyan.git

# Enter the project
cd najimul-portfolio-cyan

# Install dependencies
yarn install

# Start the local development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
yarn build
yarn start
```

## Project Structure

```text
app/
├── about/                  # About route
├── contact/                # Contact route
├── projects/               # Projects route
├── skills/                 # Skills route
├── layout.jsx              # Global metadata, fonts, providers, navigation
├── page.jsx                # Home route
└── globals.css             # Global styles and design primitives

components/
├── cursor/                 # Desktop cursor glow
├── layout/                 # Navbar and footer
├── sections/               # Page-level sections
└── ui/                     # Command palette, terminal, progress, shared UI

public/
├── assets/                 # Résumé and static files
└── images/                 # Portfolio and project visual assets
```

> The exact directory layout may evolve as the portfolio grows; components are grouped by responsibility rather than by a single page.

## Customization

### Portfolio information

Update your personal links and résumé URL in:

- `components/layout/Navbar.jsx`
- `components/ui/CommandPalette.jsx`
- `app/layout.jsx`

### Projects

Add or edit project data in your project data file, then supply:

```js
{
  id: 1,
  title: 'Project Name',
  description: 'A concise explanation of the product and its value.',
  techs: ['Next.js', 'Tailwind CSS', 'MongoDB'],
  image: '/images/project-name.png',
  liveLink: 'https://example.com',
  githubLink: 'https://github.com/username/project-name',
  category: 'webapp',
}
```

For stronger project pages, describe each build using: **problem → decision → result**.

### Motion preferences

Keep decorative motion optional. Desktop-only cursor effects should remain disabled for touch/coarse pointers, and all nonessential motion should respect `prefers-reduced-motion`.

## Environment Variables

Create `.env.local` when you need a public canonical URL or future integrations:

```env
NEXT_PUBLIC_SITE_URL=https://www.najimul.com
```

Do not commit `.env.local` or API secrets.

## Deployment

The portfolio is designed for [Vercel](https://vercel.com/).

```bash
yarn global add vercel
vercel --prod
```

Before deploying, confirm that production metadata, Open Graph assets, contact links, analytics, and the résumé path are correct.

## Connect

- Website: [www.najimul.com](https://www.najimul.com/)
- GitHub: [@najimhaq](https://github.com/najimhaq)
- Email: [mdnajimulhaque@gmail.com](mailto:mdnajimulhaque@gmail.com)
- LinkedIn: add your profile URL here

## License

Distributed under the [MIT License](LICENSE).

---

<p align="center">
  Built with care by <strong>Najimul Haque</strong>.
</p>
