import React from "react";
import magCover from "../assets/magimg.jpg";

const ISSUES = [
  {
    title: "Volume V — Monsoon 2025",
    theme: "AI in Megastructures & High-Speed Rail",
    pages: "48 Pages",
    tag: "Current Edition",
    url: "#",
  },
  {
    title: "Volume IV — Spring 2025",
    theme: "Sustainable Concrete & Decarbonized Cements",
    pages: "42 Pages",
    tag: "Archived",
    url: "#",
  },
  {
    title: "Volume III — Winter 2024",
    theme: "Urban Hydrology & Flood Modeling in NCR",
    pages: "36 Pages",
    tag: "Archived",
    url: "#",
  },
  {
    title: "Volume II — Monsoon 2024",
    theme: "Seismic Retrofitting of Historic Indian Bridges",
    pages: "40 Pages",
    tag: "Archived",
    url: "#",
  },
];

export default function Magazine() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start text-left">
      {/* Featured Current Edition Card */}
      <div className="w-full lg:w-3/5 rounded-2xl p-6 sm:p-10 bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06]">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-civil-amber" />
            <span className="text-xs font-mono font-medium text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              ANNUAL DEPARTMENT PUBLICATION
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">ISSN // 2025-26</span>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
          {/* Magazine Cover Thumbnail */}
          <div className="w-48 sm:w-56 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 group">
            <img
              src={magCover}
              alt="CEF Magazine Cover"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Editorial Summary */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
              CEF Magazine: Volume V
            </h3>

            <p className="text-sm font-mono text-amber-700 dark:text-amber-400">
              FOCUS // "Next-Gen Infrastructure: Digital Twins, Carbon Capture & Metro Rail Dynamics"
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              The official annual publication of the <strong>Civil Engineering Forum, IIT Delhi</strong>. Featuring student research spotlights, faculty interviews, industry case studies on Indian megaprojects, and creative technical essays from civil engineering scholars.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={magCover}
                download="CEF_Magazine_2025-26.jpg"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm active:scale-95 transition-transform no-underline"
              >
                <span>Download Latest Edition</span>
                <span>&darr;</span>
              </a>
              <span className="text-xs font-mono text-slate-400">PDF • 18.4 MB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Archives List */}
      <div className="w-full lg:w-2/5 flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            Publication Archive
          </span>
          <span className="text-xs font-mono text-civil-amber">
            [ PAST EDITIONS ]
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {ISSUES.map((issue, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-civil-amber/40 transition-colors flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">
                  {issue.title}
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    issue.tag === "Current Edition"
                      ? "bg-civil-amber/15 text-amber-700 dark:text-amber-400 border border-civil-amber/30"
                      : "bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {issue.tag}
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 font-sans">
                {issue.theme}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/[0.04] mt-1">
                <span className="text-[11px] font-mono text-slate-400">
                  {issue.pages}
                </span>
                <a
                  href={magCover}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-amber-700 dark:text-amber-400 hover:underline underline-offset-4"
                >
                  Read Issue &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
