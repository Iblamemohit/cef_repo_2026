# Project Context & Session Handover Summary

## 1. Project Overview & Working Directory
- **Project Name / Path**: `C:\Users\rudra\Downloads\cef_repo_2026-master (4)\cef_repo_2026-master`
- **Tech Stack**: React 18, Vite, Tailwind CSS, React Router v6.
- **Application Context**: Official website of the Civil Engineering Forum (CEF), Department of Civil Engineering, IIT Delhi.

---

## 2. Work Done in This Session

### A. Dynamic Events Page Implementation
- Created: `src/pages/Events.jsx`
- Integrated into `src/App.jsx` with route `/events`.
- Updated `src/components/Navbar.jsx` so "Events" links directly to `/events` as a full page.
- **Features added to Events Page**:
  - **Live Search**: Search by title, description, or category.
  - **Filters**: By Year (`2026`, `2027`, `All`), Type (`Social`, `Guest Session`, `Competition`, `Technical`, `Flagship`, `Conference`, `Guidance`), and Status (`Upcoming`, `Past`, `All`).
  - **RSVP / Attendance Counter**: Interactive client-side RSVP toggle on upcoming events (increments/decrements counter and changes state/color), and attendance counters for past events.
  - **Stats overview**: Total, Upcoming, and Past event counters.

### B. Updated Events Data with Real Schedule
- File: `src/data/eventCarousel.js`
- Populated with all **29 events** matching the official department schedule (from June 2026 to April 2027), including:
  - Exact event names and descriptions.
  - Timeline markers (`16-Jun`, `10-14 July`, `Aug end`, `TBD`, `Nov wk 1`, `Feb (last wk)`, etc.).
  - Proper categorization (`Guidance`, `Social`, `Guest Session`, `Competition`, `Technical`, `Flagship`, `Conference`).

### C. Magazine Section Simplification
- File: `src/components/Magazine.jsx` & `src/pages/Magazine.jsx`
- Removed the old multi-volume archive list.
- Designed a minimal single-card layout highlighting the **current 2026–27 edition**.
- Clean presentation with cover thumbnail, edition badge, description, and download CTA.

---

## 3. Pending / Current User Request
- **Issue**: The Magazine download button currently points to `magCover` (`magimg.jpg`), which downloads the cover photo rather than the actual CEF 2026–27 Magazine PDF document.
- **Next Step Required**:
  1. Add/place the real PDF file (e.g. `CEF_Magazine_2026_27.pdf`) inside `public/` (or provide a valid URL/Google Drive link/asset).
  2. Update `src/components/Magazine.jsx` to link the download button directly to `/CEF_Magazine_2026_27.pdf` or the public URL so users can download the actual magazine file.

---

## 4. How to Run the Website
To run the website in the terminal:
```bash
cd "C:\Users\rudra\Downloads\cef_repo_2026-master (4)\cef_repo_2026-master"
npm run dev
```
(If PowerShell script execution restrictions apply on Windows, use `cmd /c "npm run dev"`).
- Local URL: `http://localhost:5173`
- Events URL: `http://localhost:5173/events`
- Magazine URL: `http://localhost:5173/magazine`
