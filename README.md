# 🚀 Najimul Portfolio

> "I'm Najimul, a full-stack developer from a non-CSE background, self-taught and passionate about building real-world products with the MERN stack and Next.js."

A modern, high-performance portfolio website built with **Next.js**, featuring buttery-smooth scrolling via **Lenis**, stunning animations powered by **GSAP** and **Framer Motion**, and a sleek dark UI crafted with **Tailwind CSS**.

---

## ✨ Live Demo

🔗 **[View Live Portfolio](https://your-portfolio-url.vercel.app)**

---

## 🛠️ Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)
![Lenis](https://img.shields.io/badge/Lenis-1.x-FF6B6B?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)


| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router for SSR & SSG |
| **React 19** | UI library with latest features |
| **Tailwind CSS 4** | Utility-first CSS framework for rapid styling |
| **Lenis** | Buttery smooth scroll with 60fps performance |
| **GSAP** | Advanced timeline animations & scroll-triggered effects |
| **Framer Motion** | React-native animations, gestures & layout transitions |
| **React Icons** | Beautiful icon library |

---

## 🎨 Features

### Smooth Scrolling
- **Lenis** integration for buttery smooth scroll experience
- Custom scroll progress bar (linear + circular)
- Smooth anchor navigation with offset support
- Back-to-top button with animated reveal

### Animations & Interactions
- **GSAP** text reveal animations on hero section
- **Framer Motion** scroll-triggered section reveals
- 3D card tilt effect on project cards (mouse-follow)
- Image reveal with clip-path animation on scroll
- Staggered entrance animations for grid items
- Magnetic hover effects on buttons
- Glow & gradient transitions on hover

### UI/UX
- Dark theme with cyan-purple gradient accents
- Fully responsive design (mobile → desktop)
- Custom scrollbar styling
- Filterable project grid with animated transitions
- Glassmorphism effects with backdrop blur
- Loading states & empty state handling

### Performance
- Optimized images with Next.js Image component
- Smooth 60fps animations via `requestAnimationFrame`
- Efficient re-renders with React best practices
- SEO-friendly with Next.js metadata API

---

## 📁 Project Structure

```
app/
├── components/
│   ├── animations/          # Reusable animation components
│   ├── providers/           # Context providers (Lenis, etc.)
│   ├── sections/            # Page sections (Hero, Projects, etc.)
│   └── ui/                  # Reusable UI components
├── data/
│   └── projectsData.js      # Projects data
├── hooks/
│   └── useLenis.js          # Custom Lenis hook
├── globals.css              # Global styles & Tailwind directives
├── layout.jsx               # Root layout with providers
└── page.jsx                 # Main page

public/
├── images/                  # Project screenshots & assets
└── favicon.ico
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **Yarn** package manager
- **macOS** (development environment)

### Installation

```bash
# Clone the repository
git clone https://github.com/najimhaq/najimul-portfolio-cyan.git

# Navigate to project directory
cd najimul-portfolio

# Install dependencies with Yarn
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
yarn build

# Start production server
yarn start
```

---

## 📦 Dependencies

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "tailwindcss": "^4.x",
  "lenis": "^1.x",
  "gsap": "^3.x",
  "framer-motion": "^11.x",
  "react-icons": "^5.x"
}
```

---

## 🎯 Key Components

### SmoothScrollProvider
Global Lenis instance wrapped in React Context. Provides smooth scrolling across the entire application and integrates with GSAP ScrollTrigger.

### ScrollProgressBar
Real-time scroll progress indicator with:
- Top linear progress bar (gradient animated)
- Circular progress indicator (desktop only)
- Spring physics for natural motion

### ProjectCard
Interactive project card featuring:
- 3D tilt effect on mouse move
- Image reveal animation on scroll
- Hover overlay with live/GitHub links
- Tech stack tags with gradient borders
- Glow effects and gradient underline

### Section
Reusable section wrapper with:
- Scroll-triggered entrance animations
- Decorative gradient orbs
- Animated section labels
- Consistent spacing & typography

---

## 🎨 Customization

### Changing Colors
Edit the gradient colors in `tailwind.config.js` or directly in component classes:

```css
/* From cyan to purple (default) */
bg-gradient-to-r from-cyan-500 to-purple-600

/* Change to your preferred palette */
bg-gradient-to-r from-emerald-500 to-blue-600
```

### Adding New Projects
Update `app/data/projectsData.js`:

```javascript
{
  id: 6,
  title: 'Your New Project',
  description: 'Project description here.',
  techs: ['Next.js', 'Tailwind', 'MongoDB'],
  image: '/your-image.png',
  liveLink: 'https://your-project.vercel.app',
  githubLink: 'https://github.com/yourusername/project',
  category: 'webapp',
}
```

### Adjusting Scroll Speed
Modify Lenis configuration in `SmoothScrollProvider.jsx`:

```javascript
const lenis = new Lenis({
  duration: 1.2,        // Higher = slower scroll
  wheelMultiplier: 1,   // Mouse scroll speed
  touchMultiplier: 2,   // Touch scroll speed
});
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
yarn global add vercel

# Deploy
vercel --prod
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🤝 Connect With Me

- 🌐 **Portfolio**: [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)
- 💻 **GitHub**: [@najimhaq](https://github.com/najimhaq)
- 💼 **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 📧 **Email**: your.email@example.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Lenis](https://github.com/darkroomengineering/lenis) by Darkroom Engineering
- [GSAP](https://greensock.com/gsap/) by GreenSock
- [Framer Motion](https://www.framer.com/motion/) by Framer
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs
- [Next.js](https://nextjs.org/) by Vercel

---
##  🤝 Contributing
- Contributions, issues and feature requests are welcome!
- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📧 Contact
For questions or support, please open an issue on GitHub.

<p align="center">
  Built with ❤️ by <strong>Najimul</strong>
</p>
