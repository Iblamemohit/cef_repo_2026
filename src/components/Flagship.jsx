import React from "react";
import { NavLink } from "react-router-dom";

const FLAGSHIP_TRACKS = [
  {
    title: "Bridge Load Testing",
    code: "STR // 01",
    desc: "Scale truss bridge fabrication and destructive static hydraulic jack testing in the Heavy Structures Laboratory.",
    tag: "Hardware Sprint",
  },
  {
    title: "BIM & Digital Twin Sprint",
    code: "BIM // 02",
    desc: "48-hour collaborative BIM clash detection, 4D scheduling, and lifecycle carbon analysis on modern campus structures.",
    tag: "Design Challenge",
  },
  {
    title: "Industry Leadership Panel",
    code: "IND // 03",
    desc: "Keynotes and fireside discussions with chief project directors from L&T, DMRC, NHAI, and premier global consultancy firms.",
    tag: "Symposium",
  },
  {
    title: "Department Conclave Gala",
    code: "EVT // 04",
    desc: "The premier department dinner, annual CEF excellence awards, and faculty-student celebration.",
    tag: "Celebration",
  },
];

function Flagship() {
  return (
    <div className="relative w-full rounded-token-xs overflow-hidden p-6 sm:p-10 bg-white dark:bg-sinc-surface-strong border border-slate-200 dark:border-sinc-border-muted shadow-elevation-light dark:shadow-elevation-dark text-left">
      {/* Corner Crosshairs */}
      <span className="absolute top-3 left-3 font-mono text-xs text-sinc-text-tertiary select-none">+</span>
      <span className="absolute top-3 right-3 font-mono text-xs text-sinc-text-tertiary select-none">+</span>
      <span className="absolute bottom-3 left-3 font-mono text-xs text-sinc-text-tertiary select-none">+</span>
      <span className="absolute bottom-3 right-3 font-mono text-xs text-sinc-text-tertiary select-none">+</span>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
        {/* Left Side: Overview & Theme */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-token-sm bg-slate-100 dark:bg-sinc-surface-muted border border-slate-200 dark:border-sinc-border-muted text-amber-700 dark:text-sinc-text-secondary text-xs font-mono font-medium tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-civil-amber animate-pulse" />
            <span>ANNUAL FLAGSHIP SYMPOSIUM</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-sinc-text-secondary tracking-tight font-sans">
            AAKAAR 2026: The Civil Conclave
          </h3>

          <p className="text-sm font-mono text-amber-700 dark:text-sinc-text-secondary">
            THEME // &ldquo;Resilient Infrastructure: AI, Net-Zero Materials & Megaprojects&rdquo;
          </p>

          <p className="text-slate-600 dark:text-sinc-text-primary text-sm sm:text-base leading-relaxed font-sans">
            The annual flagship festival organized by the Civil Engineering Forum at IIT Delhi. Bringing together over 1,000+ students, researchers, faculty, and industry visionaries from across India for high-stakes engineering competitions, tech showcases, and networking.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <NavLink
              to="/events#competitions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-token-xs text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-token-1 active:scale-95 transition-transform no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary"
            >
              Explore Competitions
            </NavLink>
            <NavLink
              to="/events#guest-sessions"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-token-xs text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-sinc-surface-raised dark:hover:bg-sinc-surface-muted border border-slate-200 dark:border-sinc-border-muted text-slate-900 dark:text-sinc-text-secondary active:scale-95 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary"
            >
              Guest Speakers
            </NavLink>
          </div>
        </div>

        {/* Right Side: Track Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {FLAGSHIP_TRACKS.map((t, idx) => (
            <div
              key={idx}
              className="p-4 rounded-token-xs bg-slate-50 dark:bg-sinc-surface-base border border-slate-200 dark:border-sinc-border-muted flex flex-col justify-between hover:border-civil-amber/40 hover:bg-sinc-surface-raised transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-sinc-text-secondary font-semibold">
                    {t.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-sinc-text-tertiary px-2 py-0.5 rounded bg-slate-200 dark:bg-sinc-surface-raised">
                    {t.tag}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-sinc-text-secondary font-sans">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-sinc-text-primary mt-1 leading-relaxed font-sans">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flagship;
