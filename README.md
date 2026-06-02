# Tiger365 Landing Page Clone

A premium, pixel-perfect, and fully responsive clone of the live guest landing page for `https://www.tiger365.in/home`. Built from the ground up using **Next.js (App Router) + TypeScript + Tailwind CSS** (Tailwind CSS v4).

All page layouts, component structures, dynamic modal links, operator text data, and legal guidelines have been successfully mapped and copied directly from the reference website's compiled bundles.

---

## ⚡ Tech Stack & Features

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styles**: Tailwind CSS v4 (with PostCSS configuration)
- **Fonts**: Outfit (from Google Fonts)
- **Responsive Layout**: Designed specifically for mobile screens, tablets, and desktops matching the mobile drawer navigation of the reference site.
- **Glassmorphic UI**: Premium translucent panels, glowing border highlights, and automated gold-orange gradients.
- **Modular Architecture**: Component-based files with clear single responsibilities.

---

## 📂 Project Structure

```
tiger365/
  ├── app/
  │   ├── globals.css        # Global CSS, Tailwind v4 imports, scrollbars and gradients
  │   ├── layout.tsx         # HTML shell, page metadata and Outfit typography
  │   └── page.tsx           # Page assembler, modal states and layout bindings
  ├── components/
  │   ├── Header.tsx         # Desktop navbar, mobile burger menu & drawer overlay
  │   ├── Banner.tsx         # Auto-play responsive fading slides hero slider
  │   ├── Legal.tsx          # Live dealer divider odds banner
  │   ├── OnlineGames.tsx    # Responsive grid of sports and live dealer game tiles
  │   ├── Footer.tsx         # Notices, legal page triggers & compliance badges
  │   ├── Modal.tsx          # Reusable glassmorphic modal box wrapper
  │   ├── LoginModal.tsx     # Username/password form with eye toggle visibility
  │   ├── RegisterModal.tsx  # Mobile signup form with field verification
  │   ├── ForgetPasswordModal.tsx # Forgot password contact notice
  │   └── InfoModals.tsx     # Terms, About Us, Privacy, Rules & Responsible Gaming modals
  ├── public/
  │   └── assets/            # Glowing custom vector graphics and logo assets
  ├── types/
  │   └── index.ts           # Shared custom TypeScript definitions
  └── package.json           # Scripts and dependencies
```

---

## 🚀 Setup & Installation

### 1. Prerequisite
Ensure that you have [Node.js (v18.0.0 or higher)](https://nodejs.org) installed on your system.

### 2. Install Dependencies
Run the following command inside the project root folder to install packages:
```bash
npm install
```

### 3. Run Development Server
Start the local server for visual validation and testing:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 4. Build Production Bundle
Compile the Next.js bundle for optimized, clean static production files:
```bash
npm run build
```

---

## 🎨 Design Systems & Visual Accents
* **Background Primary**: Dark deep slate `#080c12`
* **Card Panels**: Translucent glassmorphism `#111823` with glowing border outlines
* **Gold Gradient Accent**: Gold `#ffc558` to deep orange-gold `#ff7300`
* **Text Compliance Colors**: Sleek light gray `#8b9aae` for descriptions, bold gold for links
