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
    <div className="relative w-full rounded-2xl overflow-hidden p-6 sm:p-10 bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark text-left">
      {/* Blueprint Corner Crosshairs */}
      <span className="absolute top-3 left-3 font-mono text-xs text-civil-amber/40 select-none">+</span>
      <span className="absolute top-3 right-3 font-mono text-xs text-civil-amber/40 select-none">+</span>
      <span className="absolute bottom-3 left-3 font-mono text-xs text-civil-amber/40 select-none">+</span>
      <span className="absolute bottom-3 right-3 font-mono text-xs text-civil-amber/40 select-none">+</span>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
        {/* Left Side: Overview & Theme */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civil-amber/10 border border-civil-amber/30 text-amber-700 dark:text-amber-400 text-xs font-mono font-medium tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-civil-amber animate-pulse" />
            <span>ANNUAL FLAGSHIP SYMPOSIUM</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">
            AAKAAR 2026: The Civil Conclave
          </h3>

          <p className="text-sm font-mono text-amber-700 dark:text-amber-400">
            THEME // "Resilient Infrastructure: AI, Net-Zero Materials & Megaprojects"
          </p>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            The annual flagship festival organized by the Civil Engineering Forum at IIT Delhi. Bringing together over 1,000+ students, researchers, faculty, and industry visionaries from across India for high-stakes engineering competitions, tech showcases, and networking.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <NavLink
              to="/competitions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm active:scale-95 transition-transform no-underline"
            >
              Explore Competitions
            </NavLink>
            <NavLink
              to="/guest-sessions"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white active:scale-95 transition-colors no-underline"
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
              className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex flex-col justify-between hover:border-civil-amber/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-semibold">
                    {t.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-200 dark:bg-white/[0.05]">
                    {t.tag}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-sans">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
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
