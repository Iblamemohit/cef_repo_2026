import React from "react";
import magCover from "../assets/magimg.jpg";

export default function Magazine() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Single card — structured, tokenized */}
      <div className="rounded-token-xs overflow-hidden border border-slate-200 dark:border-sinc-border-muted bg-white dark:bg-sinc-surface-strong shadow-elevation-light dark:shadow-elevation-dark">

        {/* Top label bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 dark:border-sinc-border-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-amber-700 dark:text-sinc-text-secondary">
              Annual Publication
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 dark:text-sinc-text-tertiary">
            2026–27
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start p-8">

          {/* Cover image */}
          <div className="w-40 sm:w-44 flex-shrink-0 rounded-token-xs overflow-hidden shadow-token-1 border border-slate-200 dark:border-sinc-border-muted">
            <img
              src={magCover}
              alt="CEF Magazine 2026–27"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-sinc-text-secondary tracking-tight font-sans">
                CEF Magazine
              </h3>
              <p className="mt-0.5 text-sm font-mono text-amber-700 dark:text-sinc-text-secondary">
                Edition 2026–27
              </p>
            </div>

            <p className="text-sm text-slate-600 dark:text-sinc-text-primary leading-relaxed font-sans">
              The official annual publication of the{" "}
              <span className="text-slate-900 dark:text-sinc-text-secondary font-medium">
                Civil Engineering Forum, IIT Delhi
              </span>
              . Featuring student research, faculty insights, and highlights from
              the year&apos;s events and activities.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="/CEF_Magazine_2026-27.pdf"
                download="CEF_Magazine_2026-27.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-token-xs text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-token-1 active:scale-95 transition-transform no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary"
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
                className="text-xs font-mono text-amber-700 dark:text-sinc-text-secondary hover:underline underline-offset-4 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary rounded"
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
