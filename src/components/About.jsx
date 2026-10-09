import React from "react";
import link from "../assets/link.svg";
import cefAboutImg from "../assets/cefaboutus.jpg";

const PILLARS = [
  { name: "Structural & Seismic", tag: "IS 456 // FEM" },
  { name: "Geotechnical Engineering", tag: "Soil Dynamics" },
  { name: "Water & Environmental", tag: "Hydraulics // CFD" },
  { name: "Transportation Systems", tag: "Urban Mobility" },
  { name: "BIM & ConTech", tag: "Digital Twins" },
];

const METRICS = [
  { label: "Department Legacy", val: "60+ Yrs", detail: "Since 1961" },
  { label: "Active Student Body", val: "500+", detail: "B.Tech & PG" },
  { label: "Faculty Mentors", val: "35+", detail: "Global Pioneers" },
  { label: "Annual Conclaves", val: "10+", detail: "Competitions & Talks" },
];

function About() {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Primary Overview Bento Card */}
      <div className="relative rounded-2xl p-6 sm:p-10 bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark transition-colors">
        {/* Subtle Crosshair Stamp */}
        <span className="absolute top-3 right-3 font-mono text-xs text-civil-amber/50 pointer-events-none select-none">
          SEC // 01.ABOUT
        </span>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side: Department Image */}
          <div className="flex-shrink-0 w-full lg:w-2/5 max-w-sm rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
            <img
              src={cefAboutImg}
              alt="Civil Engineering Department IIT Delhi"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side: Mission & Vision */}
          <div className="lg:w-3/5 flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-700 dark:text-amber-400">
              <span>IIT DELHI // CIVIL ENGINEERING FORUM</span>
            </div>

            <p className="leading-relaxed text-base sm:text-lg text-slate-700 dark:text-slate-300">
              The <strong className="text-slate-900 dark:text-white font-semibold">Civil Engineering Forum (CEF)</strong> serves as the heartbeat of the Department of Civil Engineering at the Indian Institute of Technology Delhi.
            </p>

            <p className="leading-relaxed text-sm sm:text-base text-slate-600 dark:text-slate-400">
              As the department's recognized student society, CEF bridges rigorous academic theory with real-world infrastructure leadership. We foster hands-on technical design sprints, national symposiums, faculty lectures, and student mentorship across structural, geotechnical, environmental, and transportation systems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://civil.iitd.ac.in"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/[0.08] text-xs font-medium text-slate-900 dark:text-white transition-colors active:scale-95 no-underline"
              >
                <span>Visit Dept. of Civil Engineering</span>
                <img src={link} alt="External link" width={14} height={14} className="opacity-70" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://home.iitd.ac.in"
                className="inline-flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 hover:underline underline-offset-4"
              >
                <span>IIT Delhi Main Portal</span>
                <img src={link} alt="External link" width={12} height={12} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Metric Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col text-left"
          >
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {m.label}
            </span>
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 font-sans">
              {m.val}
            </span>
            <span className="text-xs text-civil-amber font-mono mt-0.5">
              {m.detail}
            </span>
          </div>
        ))}
      </div>

      {/* Engineering Discipline Pillars */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06] gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Core Academic & Research Disciplines
          </span>
          <span className="text-xs font-mono text-civil-amber">
            [ 5 PILLARS OF INFRASTRUCTURE ]
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4">
          {PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-left flex flex-col justify-between"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-sans">
                {p.name}
              </span>
              <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 mt-2">
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;