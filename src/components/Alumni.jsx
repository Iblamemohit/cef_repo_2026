import React from "react";
import MemberCard from "./MemberCard";
import { AlumniData } from "../data/alumni";

function Alumni() {
  if (!AlumniData || AlumniData.length === 0) {
    return (
      <div className="w-full py-12 text-center text-slate-500 dark:text-sinc-text-tertiary font-mono text-sm">
        No alumni records currently published.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-1">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-token-sm bg-slate-100 dark:bg-sinc-surface-muted border border-slate-200 dark:border-sinc-border-muted">
          <span className="w-1.5 h-1.5 rounded-token-sm bg-civil-amber" />
          <span className="text-xs font-mono font-medium text-slate-700 dark:text-sinc-text-secondary uppercase tracking-wider">
            Distinguished Alumni Network ({AlumniData.length})
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-sinc-text-tertiary font-sans">
          Civil engineering graduates leading global infrastructure, research, and enterprise
        </p>
      </div>

      <div className="flex gap-5 sm:gap-6 justify-center items-stretch flex-wrap max-w-6xl">
        {AlumniData.map((item, key) => (
          <MemberCard
            key={key}
            designation={item.desg}
            name={item.name}
            image={item.img}
            year={item.year ? `Class of '${item.year.slice(-2)}` : ""}
            linkedIn={item.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default Alumni;
