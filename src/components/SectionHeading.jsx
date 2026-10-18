import React from "react";

export default function SectionHeading({
  title,
  subtitle = "",
  badge = "CEF // IIT DELHI",
  align = "center",
}) {
  const alignment =
    {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }[align] || "items-center text-center";

  return (
    <div className={`w-full flex flex-col ${alignment} gap-3 mb-10`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-token-sm bg-slate-100 dark:bg-sinc-surface-muted border border-slate-200 dark:border-sinc-border-muted text-amber-800 dark:text-sinc-text-secondary text-xs font-mono font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-civil-amber animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-sinc-text-secondary font-sans">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 dark:text-sinc-text-tertiary max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}

      {/* Structural indicator line */}
      <div className={`flex items-center gap-1.5 pt-1 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
        <span className="h-0.5 w-8 rounded-full bg-civil-amber" />
        <span className="h-0.5 w-2 rounded-full bg-slate-300 dark:bg-sinc-border-muted" />
        <span className="h-0.5 w-1 rounded-full bg-slate-300 dark:bg-sinc-border-muted" />
      </div>
    </div>
  );
}
