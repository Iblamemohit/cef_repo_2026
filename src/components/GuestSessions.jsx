import React from "react";

const SESSIONS = [
  {
    topic: "Smart Infrastructure & Digital Twins in Indian Megacities",
    speaker: "Dr. A. Sharma",
    designation: "Principal Scientist, Urban Systems & Smart Mobility Lab",
    date: "14 October 2025",
    venue: "Seminar Hall, Block IV IITD",
    desc: "Deploying IoT sensor arrays, LiDAR scans, and BIM digital twins to monitor structural health and real-time transit congestion in NCR.",
    tags: ["Digital Twins", "Smart Transit", "Sensor Arrays"],
    replayUrl: "https://www.youtube.com/@iitdelhi",
  },
  {
    topic: "Seismic Design of Cable-Stayed & Suspension Bridges",
    speaker: "Er. N. Menon",
    designation: "Chief Bridge Engineer, Global InfraWorks Consultants",
    date: "28 November 2025",
    venue: "Virtual Lecture Series",
    desc: "Lessons from long-span railway and highway river crossings: aerodynamic wind-tunnel testing, tuned mass dampers, and seismic isolation bearings.",
    tags: ["Bridge Dynamics", "Tuned Dampers", "Wind Engineering"],
    replayUrl: "https://www.youtube.com/@iitdelhi",
  },
  {
    topic: "Coastal Resilience, Tsunami Barriers & Hydraulic Modeling",
    speaker: "Dr. P. Rao",
    designation: "Advisor, National Coastal Research & Hydraulics Division",
    date: "12 January 2026",
    venue: "Civil Dept. Lecture Theater",
    desc: "Wave-structure interactions, breakwater armour units (Accropode/Xbloc), and CFD simulation of storm surges along vulnerable shorelines.",
    tags: ["Coastal Defense", "CFD Hydraulics", "Breakwaters"],
    replayUrl: "https://www.youtube.com/@iitdelhi",
  },
  {
    topic: "Low-Carbon Geopolymer Concrete & Supplementary Cementitious Materials",
    speaker: "Dr. S. Verma",
    designation: "Chair Professor, Sustainable Construction Materials",
    date: "22 February 2026",
    venue: "Heavy Structures Seminar Hall",
    desc: "Eliminating clinker emissions: alkali-activated slag and fly ash binders, microstructural SEM characterization, and durable structural performance.",
    tags: ["Green Concrete", "Decarbonization", "IS 10262"],
    replayUrl: "https://www.youtube.com/@iitdelhi",
  },
];

export default function GuestSessions() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {SESSIONS.map((s, i) => (
        <div
          key={i}
          className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark hover:border-civil-amber/50 dark:hover:border-civil-amber/40 transition-colors flex flex-col justify-between"
        >
          <div>
            {/* Header: Date & Venue */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
              <span className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400">
                {s.date}
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                {s.venue}
              </span>
            </div>

            {/* Topic & Speaker */}
            <div className="mt-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans leading-snug">
                {s.topic}
              </h3>

              <div className="mt-2 flex flex-col">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans">
                  {s.speaker}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {s.designation}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-sans">
              {s.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {s.tags.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.05]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Session Archive
            </span>

            <a
              href={s.replayUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm active:scale-95 transition-transform no-underline"
            >
              <span>Watch Replay</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
