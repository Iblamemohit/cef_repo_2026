import React from "react";

const TRACK_1 = [
  "Pitch Nights & Keynotes",
  "Scale Bridge Load Tests",
  "4D BIM Digital Twins",
  "Hydraulic Flume Testing",
  "Aakaar Annual Conclave",
  "Distinguished Colloquiums",
  "Terzaghi Soil Mechanics",
  "Structural Health Sensors",
  "Decarbonized Concrete",
];

const TRACK_2 = [
  "Heavy Structures Laboratory",
  "Urban Transit Simulators",
  "IS 456 RC Design Sprints",
  "Alumni Mentorship Hours",
  "Green Infrastructure",
  "Borehole Log Analysis",
  "CFD Coastal Breakwaters",
  "Seismic Vibration Control",
  "IIT Delhi Civil Forum",
];

export default function MarqueeTicker() {
  return (
    <section className="border-y border-border bg-background py-6 overflow-hidden">
      <div className="relative space-y-3">
        {/* Track 1: Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-3 whitespace-nowrap animate-marquee">
            {[...TRACK_1, ...TRACK_1].map((item, idx) => (
              <span
                key={idx}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-brand-cardinal/10 hover:border-brand-cardinal/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cardinal" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-3 whitespace-nowrap animate-marquee-reverse">
            {[...TRACK_2, ...TRACK_2].map((item, idx) => (
              <span
                key={idx}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-brand-paloalto/10 hover:border-brand-paloalto/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-paloalto" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
