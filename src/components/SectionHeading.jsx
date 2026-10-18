import React from "react";

export default function SectionHeading({
  title,
  subtitle = "",
  badge = "CEF // IIT DELHI",
  align = "left",
}) {
  const alignment =
    {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }[align] || "items-start text-left";

  return (
    <div className={`w-full flex flex-col ${alignment} mb-10`}>
      {badge && (
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          {badge}
        </p>
      )}
      
      <h2 className="editorial-display text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
