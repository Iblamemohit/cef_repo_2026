import React from "react";
import magCover from "../assets/magimg.jpg";

export default function Magazine() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Single card — minimal, centred */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1424] shadow-elevation-light dark:shadow-elevation-dark">

        {/* Top label bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Annual Publication
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            2026–27
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start p-8">

          {/* Cover image */}
          <div className="w-40 sm:w-44 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
            <img
              src={magCover}
              alt="CEF Magazine 2026–27"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                CEF Magazine
              </h3>
              <p className="mt-0.5 text-sm font-mono text-amber-700 dark:text-amber-400">
                Edition 2026–27
              </p>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The official annual publication of the{" "}
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                Civil Engineering Forum, IIT Delhi
              </span>
              . Featuring student research, faculty insights, and highlights from
              the year's events and activities.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="/CEF_Magazine_2026-27.pdf"
                download="CEF_Magazine_2026-27.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm active:scale-95 transition-transform no-underline"
              >
                Download
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="/CEF_Magazine_2026-27.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-amber-700 dark:text-amber-400 hover:underline underline-offset-4 no-underline"
              >
                Read Online →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
