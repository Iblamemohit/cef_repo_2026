import React, { useState } from "react";

const COMPETITIONS = [
  {
    title: "Truss & Bridge Design Challenge",
    domain: "Structural Engineering",
    code: "STR // 01",
    status: "Registration Open",
    desc: "Test structural intuition, load transfer paths, and efficiency ratios in a timed build sprint.",
    details:
      "Teams design and construct a scale truss bridge under strict material weight and span constraints. Prototypes undergo live hydraulic jack destructive testing to evaluate strength-to-weight performance ratios.",
    rules: [
      "Span: 600mm clear span, 120mm maximum width",
      "Material allowance: Balsa/Popsicle sticks & standard PVA adhesive",
      "Scoring: Maximum Load Sustained (kN) / Self-Weight (kg)",
    ],
    registerUrl: "#",
  },
  {
    title: "Sustainability & Net-Zero Hackathon",
    domain: "Environmental Engineering",
    code: "ENV // 02",
    status: "Upcoming",
    desc: "Prototype decarbonized water, circular waste, and low-embodied carbon campus infrastructure.",
    details:
      "Tackle real IIT Delhi campus energy, wastewater, or solid waste audit datasets. Propose lifecycle assessments (LCA) and operational cost-benefit models judged by faculty and sustainability consultants.",
    rules: [
      "Team size: 2 to 4 members",
      "Deliverable: 10-slide technical proposal + LCA carbon footprint calculator",
      "Prizes: Cash awards + mentorship incubation",
    ],
    registerUrl: null,
  },
  {
    title: "GeoTech Deep Excavation Case Study",
    domain: "Geotechnical Mechanics",
    code: "GEO // 03",
    status: "Registration Open",
    desc: "Analyze real-world borehole logs, soil profiles, and design safe diaphragm wall shoring.",
    details:
      "Interpret borehole logs from the Delhi Metro Phase IV corridor. Calculate Terzaghi active/passive earth pressures, groundwater pore pressures, and defend a retaining wall support system under budget constraints.",
    rules: [
      "Borehole SPT N-values and soil stratigraphy provided upon registration",
      "Factor of Safety compliance against base heave and piping failure",
    ],
    registerUrl: "#",
  },
  {
    title: "BIM & Digital Twin 48h Sprint",
    domain: "Construction Technology",
    code: "BIM // 04",
    status: "Upcoming",
    desc: "Collaborative 3D building modeling with automated clash detection and 4D schedule sequencing.",
    details:
      "Co-author a multi-discipline model (Architectural, Structural, MEP) in Autodesk Revit/Navisworks. Solve structural clashes, assign construction phases, and extract quantitative Bills of Quantities (BOQ).",
    rules: [
      "Open to Revit, Tekla, or openBIM / IFC compliant tools",
      "Evaluation on clash-free integrity, parametric tidy metadata, and 4D timeline simulation",
    ],
    registerUrl: null,
  },
  {
    title: "Hydraulics & Drainage Simulation Cup",
    domain: "Water Resources",
    code: "HYD // 05",
    status: "Registration Open",
    desc: "Optimize storm sewer distribution networks against extreme flood precipitation hydrographs.",
    details:
      "Simulate urban water distribution networks under peak demand, pump tripping, and flash flood events using EPA-SWMM or EPANET. Design detention ponds and check valves for hydraulic resilience.",
    rules: [
      "Design storm return period: 1-in-50 year event",
      "Energy minimization objective with zero pipe surcharging",
    ],
    registerUrl: "#",
  },
  {
    title: "Green Concrete Mix-Off",
    domain: "Materials Technology",
    code: "MAT // 06",
    status: "Upcoming",
    desc: "Engineer the highest compressive strength concrete utilizing industrial slag and fly ash replacements.",
    details:
      "Batch, compact, and cure 150mm concrete cubes replacing OPC with GGBS and silica fume. Test 7-day and 28-day characteristic compressive strengths against IS 10262:2019 mix design guidelines.",
    rules: [
      "Minimum 40% supplementary cementitious material (SCM) replacement",
      "Slump test workability: 75-100mm",
    ],
    registerUrl: null,
  },
];

export default function Competitions() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
      {COMPETITIONS.map((c, i) => {
        const isExpanded = expandedIndex === i;

        return (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white dark:bg-[#0E1424] border transition-all duration-200 flex flex-col justify-between shadow-sm ${
              isExpanded
                ? "border-civil-amber shadow-md"
                : "border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.16]"
            }`}
          >
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                  {c.code}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    c.status === "Registration Open"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {c.status}
                </span>
              </div>

              {/* Domain & Title */}
              <div className="mt-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {c.domain}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans mt-0.5">
                  {c.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-sans">
                {c.desc}
              </p>

              {/* Expandable Details Section */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-col gap-3">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold mb-1">
                      Problem Statement:
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {c.details}
                    </p>
                  </div>

                  {c.rules && (
                    <div>
                      <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">
                        Specifications & Guidelines:
                      </h4>
                      <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 space-y-1">
                        {c.rules.map((r, rIdx) => (
                          <li key={rIdx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions Footer */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
              <button
                onClick={() => toggleExpand(i)}
                className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                {isExpanded ? "Hide Details ↑" : "View Rules & Specs ↓"}
              </button>

              {c.registerUrl ? (
                <a
                  href={c.registerUrl}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm active:scale-95 transition-transform no-underline"
                >
                  Register
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">
                  Opening Soon
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
