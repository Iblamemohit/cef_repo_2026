# 🏗️ Civil Engineering Forum (IIT Delhi) — Website Redesign Plan (v2)

An authoritative implementation plan to transform the **Civil Engineering Forum (CEF)** website into a world-class, official departmental portal built with authentic **Civil Engineering craft** and **full Light / Dark theme support**.

This architecture directly applies our three installed design toolkits:
1. **`awesome-design-md`**: Linear & Raycast-grade tokens, hairline borders, and typography density.
2. **`ui-ux-pro-max`**: Architectural reasoning profiles, Construction/Architecture color palettes, and accessible contrasts.
3. **`emilkowalski/skills`**: Tactile spring physics, responsive `:active` press depth, zero latency, and anti-slop review tables.

---

## 🏛️ Authentic Civil Engineering Taste: What Makes It Real

Civil engineering is not a generic SaaS landing page. It is defined by **structural honesty, load-bearing geometry, architectural drafting precision, and material permanence**.

```
                           CIVIL ENGINEERING DESIGN MOTIF
       [ DRAFTING TABLE LIGHT MODE ]           [ TECTONIC STEEL DARK MODE ]
    ┌──────────────────────────────────┐    ┌──────────────────────────────────┐
    │ Background: #F8FAFC (Paper/Vellum)│    │ Background: #080C14 (Deep Steel) │
    │ Grid: #E2E8F0 (Blueprint Lines)  │    │ Grid: #1E293B/[0.6] (Hairlines)  │
    │ Ink: #0F172A (Carbon Drafting)   │    │ Ink: #F8FAFC (High Contrast)     │
    │ Accent: #D97706 (Surveyor Amber) │    │ Accent: #F59E0B (Safety Amber)   │
    │ Blueprint Blue: #0284C7          │    │ Structural Glow: #F59E0B/[0.15]  │
    └──────────────────────────────────┘    └──────────────────────────────────┘
```

### 1. Architectural & Civil Engineering Elements
- **Blueprint Drafting Grid**: Clean, mathematically subtle gridlines (24px interval) with micro `+` crosshairs at key section intersections, mirroring AutoCAD/Revit drafting canvas.
- **Structural Node Metadata**: Technical coordinate tags and department chips:
  - `[ DEPT OF CIVIL ENGINEERING // IIT DELHI ]`
  - `[ LAT 28.5450° N • LONG 77.1926° E • ELEV 216M ]`
  - Course identifiers in clean monospace chips (`CVL100`, `CVL243`, `CVL341`, `CVL245`).
- **5 Core Departmental Pillars Highlighted**:
  1. **Structural Engineering & Seismic Resilience** (IS 456, FEM, dynamic dampers)
  2. **Geotechnical & Foundation Engineering** (Borehole logs, soil mechanics)
  3. **Water Resources & Environmental Systems** (Hydraulics, CFD, wastewater treatment)
  4. **Transportation & Urban Mobility Systems** (Pavement design, traffic simulation)
  5. **Construction Technology, BIM & Digital Twins** (Revit, 4D scheduling, lifecycle analysis)
- **Tectonic Depth**: Clean hairline borders (`border-slate-200 dark:border-white/[0.08]`), layered elevations without fuzzy glowing blobs.

---

## 🌓 Full Light & Dark Mode Architecture

Currently, the site has no light mode and [`src/theme.jsx`](file:///Users/mohit/Documents/CEF_website/src/theme.jsx) is completely empty. We will build a native dual-theme engine:

### 1. Dual-Theme Specifications

| Mode | Theme Name | Background | Primary Surface | Hairline Border | Ink (Text) | Accent |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Light Mode** | *Drafting Table (Architectural Paper)* | `#F8FAFC` | `#FFFFFF` | `#E2E8F0` | `#0F172A` | `#D97706` (Surveyor Amber) |
| **Dark Mode** | *Tectonic Steel (Night Terminal)* | `#080C14` | `#0E1424` | `rgba(255,255,255,0.08)` | `#F8FAFC` | `#F59E0B` (Safety Amber) |

### 2. Implementation Mechanics
- **Tailwind Config**: Enable `darkMode: 'class'` in [`tailwind.config.js`](file:///Users/mohit/Documents/CEF_website/tailwind.config.js).
- **Theme Provider**: Build [`src/theme.jsx`](file:///Users/mohit/Documents/CEF_website/src/theme.jsx) with `ThemeContext`, persisting the preference in `localStorage('cef-theme')` with automatic system `prefers-color-scheme` detection.
- **Navbar Toggle**: Add a tactile sun/moon switch in [`src/components/Navbar.jsx`](file:///Users/mohit/Documents/CEF_website/src/components/Navbar.jsx) with an Emil Kowalski spring rotation transition.

---

## 🛠️ Step-by-Step Implementation Roadmap

### Phase 1: Dual Theme System & Design Tokens
- [ ] **1.1 Configure `tailwind.config.js`**:
  - Add `darkMode: 'class'`.
  - Define semantic tokens for both light and dark modes:
    - `canvas`, `surface-1`, `surface-2`, `surface-3`, `hairline`, `amber-accent`.
  - Add typography: `sans: ['Inter', ...]` and `mono: ['JetBrains Mono', ...]`.
- [ ] **1.2 Build `src/theme.jsx`**:
  - Implement `ThemeProvider` and `useTheme()` hook with local storage persistence and system preference listener.
- [ ] **1.3 Clean `src/index.css` & `index.html`**:
  - Remove noisy full-viewport background image overlay.
  - Implement responsive blueprint grid background:
    - Light: `#F8FAFC` with `#E2E8F0` drafting lines.
    - Dark: `#080C14` with `#1E293B/[0.5]` lines.
  - Load `Inter` and `JetBrains Mono` from Google Fonts.
  - Wrap [`src/App.jsx`](file:///Users/mohit/Documents/CEF_website/src/App.jsx) in `ThemeProvider`.

---

### Phase 2: Navigation & Section Heading Overhaul
- [ ] **2.1 Modernize `Navbar.jsx`**:
  - Add theme toggle switch (Sun/Moon) with tactile spring transition.
  - Frosted glass container (`bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08]`).
  - Active tab spring indicator.
  - Mobile slide-over drawer with theme toggle.
- [ ] **2.2 Refactor `SectionHeading.jsx`**:
  - Replace yellow-red gradient text with high-contrast typography (`text-slate-900 dark:text-slate-50`).
  - Add technical architectural chip: `[ CIVIL ENGINEERING FORUM // IIT DELHI ]`.
  - Include optional coordinate tags or section indices (`SEC 01 // OVERVIEW`).

---

### Phase 3: Core Home Page Redesign
- [ ] **3.1 Hero & Landing Carousel (`SpecialCarousel.jsx` & `Home.jsx`)**:
  - Structural container with hairline framing and corner crosshairs (`+`).
  - High-impact department headline: *"Constructing Resilient Futures — Civil Engineering Forum, IIT Delhi"*.
  - Department pillar tags: `[Structures]`, `[Geotech]`, `[Hydraulics]`, `[Transportation]`, `[BIM & ConTech]`.
- [ ] **3.2 About Section (`About.jsx`)**:
  - Architectural 2-column bento grid.
  - Department stats: **60+ Years of Legacy**, **500+ Students**, **35+ Faculty**, **10+ Annual Conclaves**.
  - Direct verified link to IIT Delhi Department of Civil Engineering.
- [ ] **3.3 Team Section (`Team.jsx` & `MemberCard.jsx`)**:
  - Eliminate fixed `180px` dimensions; implement responsive grid cards with 1:1 image frame.
  - Clear visual tiers: Faculty Advisors (Prof. Vasant Matsagar, Prof. Sovik Das, Prof. Allan Marbaniang), General Secretary (Mehul), Panel Member (Parv), Coordinators, and Executives.
  - Tactile `:active:scale-[0.98]` on click, LinkedIn button with hover & active states.
- [ ] **3.4 Flagship Section (`Flagship.jsx`)**:
  - Replace placeholder with an authentic feature card for **"Aakaar" / Annual Civil Conclave** with theme, schedule, and guest lectures.
- [ ] **3.5 Events & Alumni Sections (`Alumni.jsx`)**:
  - Clean cards with graduation batch chips (`Class of '23`), current corporate/research affiliations, and direct connect actions.
- [ ] **3.6 Contact Section (`ContactUs.jsx`)**:
  - Formal department contact card: Civil Engineering Department, Block IV, IIT Delhi, Hauz Khas, New Delhi 110016.

---

### Phase 4: Sub-Pages Refactoring
- [ ] **4.1 Study Material Portal (`pages/StudyMaterial.jsx`)**:
  - Replace raw 16:9 iframe with a native interactive semester & course explorer:
    - Semesters 1 to 8 tabs.
    - Course code badges (`CVL100`, `CVL242`, `CVL243`, `CVL341`, `CVL245`).
    - Quick actions: Lecture Slides, Tutorial Sheets, PYQs, and direct launch to the external GitHub Pages repository.
- [ ] **4.2 Competitions Page (`pages/Competitions.jsx` & `components/Competitions.jsx`)**:
  - Engineering challenge cards (Bridge Design Sprint, GeoTech Case Study, Concrete Mix-Off, BIM Sprint) with difficulty chips and expandable rules drawer.
- [ ] **4.3 Magazine Page (`pages/Magazine.jsx` & `components/Magazine.jsx`)**:
  - Correct copied placeholder copy: set official name to **Civil Engineering Forum, IIT Delhi**.
  - Feature latest volume cover, editorial note, table of contents, and PDF download button.
- [ ] **4.4 Guest Sessions Page (`pages/GuestSessions.jsx` & `components/GuestSessions.jsx`)**:
  - Speaker cards with research topics, university/industry affiliations, and video replay links.

---

### Phase 5: Emil Kowalski Craft & Build Audit
- [ ] Run automated contrast verification against WCAG AA standards (4.5:1 minimum) in both Light and Dark modes.
- [ ] Audit motion: zero `transition: all`, all buttons have `:active:scale-[0.98]`, spring curves on modals/menus.
- [ ] Run `npm run build` production check to ensure zero build errors or broken styles.
