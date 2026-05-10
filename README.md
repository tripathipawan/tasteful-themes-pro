# 🍽️ Bella Vista — Restaurant Website

A fully featured, multi-page restaurant website for a fine-dining establishment called **Bella Vista** — built with React, TypeScript, Tailwind CSS, and shadcn/ui. It includes a hero carousel, full menu, filterable gallery with a lightbox, a searchable blog, an about page, a contact form, dark/light theme, and much more.

🔗 **Live Site:** [tasteful-themes-pro.lovable.app](https://tasteful-themes-pro.lovable.app)

---

## 📌 Overview

Bella Vista is a polished, production-ready restaurant website that covers everything a real dining establishment needs on the web — from showcasing the menu and ambiance to letting customers get in touch or read the chef's blog. The site is built as a React SPA with 7 routes, a persistent dark/light theme, a branded preloader on first load, and a "back to top" button that appears as users scroll. Every page uses real local image assets and is fully responsive across all screen sizes.

---

## ✨ Features

### 🏠 Home Page
- **Auto-Advancing Hero Carousel** — 3 full-viewport slides (Experience Fine Dining / Exquisite Flavors / Unforgettable Moments) auto-advance every 5 seconds. Each slide has a title, subtitle, and a "Book a Table" CTA button that links to the Contact page.
- **Manual Carousel Controls** — Previous and next arrow buttons let users navigate slides manually. Clicking a dot indicator jumps to a specific slide.
- **3 Feature Highlight Cards** — Premium Quality, Fast Service, and Award Winning — each with a Lucide icon, heading, and description, rendered in a 3-column grid.
- **CTA Section** — Dual action buttons at the bottom: "View Menu" and "Reserve Now" — linking to the Menu and Contact pages respectively.

### 🍴 Menu Page (`/menu`)
- **4 Menu Categories** — Starters, Main Course, Desserts, and Drinks, each with its own section image and item grid.
- **Starters (4 items)** — Bruschetta Trio ($12), Calamari Fritti ($15), Beef Carpaccio ($18), Burrata Caprese ($14).
- **Main Course (4 items)** — Grilled Ribeye ($42), Pan-Seared Salmon ($32), Lobster Risotto ($38), Chicken Piccata ($28).
- **Desserts (4 items)** — Tiramisu ($10), Chocolate Lava Cake ($12), Crème Brûlée ($9), Panna Cotta ($10).
- **Drinks (4 items)** — House Wine ($8/glass), Craft Cocktails ($14), Fresh Juices ($6), Espresso ($4).
- Each item is displayed in a `Card` component showing the dish name, description, and price — with hover lift animation.

### 🖼️ Gallery Page (`/gallery`)
- **10 Total Images** across 3 categories — Ambiance (3), Dishes (4), Events (3).
- **Category Filter Buttons** — All, Ambiance, Dishes, Events. Each button shows the image count in a `Badge`. Clicking a filter instantly updates the visible grid.
- **Hover Overlay** — Each gallery card shows a gradient overlay on hover with the image name and its category badge.
- **Image Zoom on Hover** — CSS `scale-110` transition animates the image on hover for a premium feel.
- **Lightbox Component** — Clicking any image opens a full-screen `Lightbox` overlay with the image centered, a caption, and an image counter (e.g., `3 / 10`).
- **Lightbox Navigation** — Previous/next arrow buttons navigate between images in the current filtered set. Keyboard shortcuts also work: `←` and `→` for navigation, `Escape` to close.
- **Click Outside to Close** — Clicking the dark backdrop behind the lightbox image dismisses it.
- **Body Scroll Lock** — When the lightbox is open, `document.body.style.overflow` is set to `hidden` to prevent background scrolling.

### 📝 Blog Page (`/blog`)
- **Search Bar** — A full-width search input with a search icon filters blog posts in real time by title, excerpt, or author name. Filtering is memoized with `useMemo` for performance.
- **Category Filter** — Button group to filter posts by category. Combined with the search bar for refined results.
- **Tag Filter** — Individual tag badges that users can toggle on/off. Multiple tags can be active simultaneously; posts matching any selected tag are shown.
- **Post Cards** — Each card shows the post thumbnail, category badge, title, excerpt, author name, publish date, and estimated read time.
- **Individual Blog Post Page (`/blog/:id`)** — Clicking a card navigates to a full-page article view with the complete post content.

### 👨‍🍳 About Page (`/about`)
- **Restaurant Story Section** — A 2-column layout with a restaurant photo and 3 paragraphs detailing Bella Vista's history since 2010.
- **Chef Section** — Introduces Chef Marco Rossi with his portrait image and background — 20+ years of experience across Europe and North America, trained in Italy and France.
- **Values Section** — Highlights the restaurant's core principles.

### 📬 Contact Page (`/contact`)
- **Contact Form** — 3 fields: Your Name, Email Address, and Message (textarea). All fields are controlled React state. The form is submitted with `onSubmit` and shows a success toast notification on submission, then resets all fields.
- **Contact Info Cards** — 4 info cards displayed alongside the form, each with a Lucide icon: Address (MapPin), Phone (Phone), Email (Mail), and Hours (Clock).

### 🗺️ Navigation
- **Fixed Navbar** — Sticks to the top with a `bg-background/95 backdrop-blur-sm` frosted glass effect so content shows through while scrolling.
- **6 Nav Links** — Home, Menu, Gallery, Blog, About, Contact. Active link is highlighted with the primary color.
- **Dark / Light Theme Toggle** — Sun/Moon icon in the navbar. Reads system preference (`prefers-color-scheme`) on first load and falls back to `localStorage` on subsequent visits. Theme is applied via `document.documentElement.classList.toggle("dark")`.
- **Mobile Hamburger Menu** — On small screens, the nav links collapse into a drawer triggered by a hamburger (Menu/X) icon. Clicking a link closes the drawer automatically.

### ⚙️ Global Components
- **Preloader** — A branded splash screen showing the "Bella Vista" name with a Playfair Display font and 3 staggered bouncing dots. Stays visible for 1.5 seconds on first load, then fades out completely.
- **Back to Top Button** — A floating circular button (ArrowUp icon) appears when the user has scrolled more than 300px. Clicking it smoothly scrolls the page back to the top. Disappears again when at the top.
- **Footer** — Full site footer with links, contact details, and branding.
- **404 Page** — A `NotFound` component handles any unmatched routes.
- **Toast Notifications** — Two toast providers (`Toaster` + `Sonner`) handle in-app notifications like the contact form success message.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | Core framework with full type safety |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling with dark mode support |
| shadcn/ui | Pre-built accessible component library (Badge, Button, Card, Input, Textarea, etc.) |
| Radix UI | Headless accessible primitives powering shadcn components |
| React Router DOM | Client-side routing — 7 pages + dynamic blog post route |
| TanStack Query (React Query) | Server state management setup |
| Lucide React | Icon library used across all pages and components |
| next-themes | Theme management infrastructure |
| Embla Carousel | Carousel base used in the hero section |
| Sonner | Toast notification library |
| Zod + React Hook Form | Form validation infrastructure |
| Lovable | Deployment platform |

---

## 📁 Project Structure

```
tasteful-themes-pro/
├── src/
│   ├── assets/
│   │   ├── hero-1.jpg / hero-2.jpg / hero-3.jpg   # Hero carousel images
│   │   ├── menu-starters.jpg / menu-main.jpg        # Menu category images
│   │   ├── menu-desserts.jpg / menu-drinks.jpg
│   │   ├── about-restaurant.jpg / chef.jpg          # About page images
│   │   ├── gallery/                                 # 10 gallery images
│   │   │   ├── ambiance-1/2/3.jpg
│   │   │   ├── dish-1/2/3/4.jpg
│   │   │   └── event-1/2/3.jpg
│   │   └── blog/                                    # 6 blog post thumbnail images
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navbar — links, theme toggle, mobile menu
│   │   ├── Footer.tsx          # Site-wide footer
│   │   ├── Lightbox.tsx        # Full-screen image viewer with keyboard navigation
│   │   ├── Preloader.tsx       # Branded 1.5s splash screen
│   │   ├── BackToTop.tsx       # Scroll-to-top floating button (appears after 300px scroll)
│   │   ├── NavLink.tsx         # Individual nav link with active state
│   │   └── ui/                 # Full shadcn/ui component library
│   ├── pages/
│   │   ├── Home.tsx            # Hero carousel, features, CTA
│   │   ├── Menu.tsx            # 4 menu categories × 4 items each
│   │   ├── Gallery.tsx         # 10 images, 3 category filters, lightbox
│   │   ├── Blog.tsx            # Search + category + tag filters, post cards
│   │   ├── BlogPost.tsx        # Individual full-article view (/blog/:id)
│   │   ├── About.tsx           # Restaurant story + Chef Marco Rossi section
│   │   ├── Contact.tsx         # Contact form + 4 info cards
│   │   └── NotFound.tsx        # 404 fallback
│   ├── App.tsx                 # Root — QueryClientProvider, Routes, Navbar, Footer, global components
│   └── main.tsx                # Entry point
├── public/
│   ├── favicon.ico
│   └── placeholder.svg
├── index.html
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/tripathipawan/tasteful-themes-pro.git
cd tasteful-themes-pro
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the dev server**
```bash
npm run dev
```

**4. Build for production**
```bash
npm run build
```

---

## 🌱 What I Learned

- Building a multi-page SPA with React Router DOM and organizing components by responsibility across a real project structure
- Implementing a hero image carousel with both auto-advance (`setInterval`) and manual controls in a clean, stateful way
- Creating a gallery filtering system with category counts and combining it with a custom full-screen lightbox that supports keyboard navigation and body scroll locking
- Implementing a multi-filter blog search with simultaneous search text, category, and tag filters using `useMemo` for performance
- Handling dark/light theme with system preference detection, localStorage persistence, and applying it via class toggling on `document.documentElement`
- Building a branded preloader that displays for a fixed duration and then removes itself cleanly using a `setTimeout` + state flag
- Working with shadcn/ui's component library and customizing Radix UI primitives for real production use cases

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Pawan Tripathi**
- GitHub: [@tripathipawan](https://github.com/tripathipawan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
