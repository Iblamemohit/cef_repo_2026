# 🏗️ CEF Website Redesign — Implementation Checklist

Full architectural specification in artifact:
[`cef_website_redesign_plan.md`](file:///Users/mohit/.gemini/antigravity-ide/brain/4988f8be-16b2-456a-ae98-fdf5f4556da7/cef_website_redesign_plan.md)

---

## 🏛️ Authentic Civil Engineering Motif: Dual-Theme Architecture
- **Light Mode ("Drafting Table")**:
  - Background: `#F8FAFC` (Architectural Vellum/Drafting Paper)
  - Grid: `#E2E8F0` (Blueprint hairline grid)
  - Ink: `#0F172A` (Drafting Carbon)
  - Accent: `#D97706` (Surveyor Amber) / `#0284C7` (Blueprint Blue)
- **Dark Mode ("Tectonic Steel")**:
  - Background: `#080C14` (Deep Structural Slate)
  - Grid: `rgba(255, 255, 255, 0.035)` (Hairline Grid with `+` Crosshairs)
  - Ink: `#F8FAFC` (Crisp Contrast)
  - Accent: `#F59E0B` (Safety Amber)
- **Civil Engineering Details**:
  - Technical metadata chips (`[ DEPT // IIT DELHI ]`, `[ LAT 28.5450° N // LONG 77.1926° E ]`)
  - Course code chips in JetBrains Mono (`CVL100`, `CVL243`, `CVL341`, `CVL245`)
  - 5 Department Pillars: Structures, Geotech, Water Resources, Transportation, BIM/ConTech
  - Emil Kowalski craft: `:active` button depression, spring damping, no `transition: all`

---

## 📋 Execution Roadmap

### Phase 1: Dual Theme System & Tokens
- [x] Enable `darkMode: 'class'` in `tailwind.config.js` with light/dark semantic tokens
- [x] Implement `src/theme.jsx` (ThemeProvider, `useTheme()` hook, localStorage + system preference)
- [x] Clean `src/index.css`: replace image overlay with responsive blueprint grid (light & dark)
- [x] Update `index.html`: embed Inter & JetBrains Mono, wrap `App.jsx` in `ThemeProvider`

### Phase 2: Header, Theme Toggle & Typography
- [x] Modernize `Navbar.jsx`: frosted glass, active spring tab indicator, Sun/Moon theme toggle switch
- [x] Overhaul `SectionHeading.jsx`: high-contrast typography, department chips, section index tags

### Phase 3: Core Home Page Sections
- [x] `SpecialCarousel.jsx`: architectural framing with corner crosshairs `+`, spring pagination pills
- [x] `About.jsx`: bento grid + legacy metrics (60+ Years, 500+ Students, 35+ Faculty)
- [x] `Team.jsx` & `MemberCard.jsx`: responsive grid, crisp image aspect ratios, designation badges, tactile press feedback
- [x] `Flagship.jsx`: build out actual annual flagship event showcase (Aakaar Conclave & Symposium)
- [x] `Alumni.jsx` & `ContactUs.jsx`: alumni cards with batch chips and official Block IV IIT Delhi contact panel

### Phase 4: Sub-Pages Refactoring
- [x] `StudyMaterial.jsx`: native course explorer (Sem 1-8 tabs, course chips `CVL100`-`CVL341`, PYQs + launch button)
- [x] `Competitions.jsx`: engineering challenge cards with status tags & rules drawer
- [x] `Magazine.jsx`: fix copy error, feature latest volume cover & download CTA
- [x] `GuestSessions.jsx`: speaker cards with topic tags & session video replay links

### Phase 5: Verification & Polish
- [x] WCAG AA/AAA contrast check across both Light and Dark modes
- [x] Emil Kowalski motion review (active scales, zero `transition: all`, layout stability)
- [x] `npm run build` production check (Verified: built in 1.46s, 0 errors)
