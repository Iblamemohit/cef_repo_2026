import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const COURSE_CATALOG = {
  3: [
    {
      code: "CVL242",
      title: "Structural Analysis I",
      credits: "3-0-0",
      topics: "Determinacy, Flexibility Method, Influence Lines, Strain Energy",
      links: [
        { label: "Lecture Notes", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Tutorial Sheets", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Past Minor/Major Papers", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL243",
      title: "Design of RC Structures",
      credits: "3-0-0",
      topics: "IS 456:2000, Limit State of Collapse & Serviceability, Shear & Torsion, RC Columns & Footings",
      links: [
        { label: "IS 456 Code Tables", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Solved Stress Blocks", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Design PYQs", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL245",
      title: "Construction Project Management",
      credits: "2-0-0",
      topics: "AON/AOA Networks, Critical Path Method (CPM), PERT Variance, Project Crashing & Resource Leveling",
      links: [
        { label: "Network Solvers & Slides", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Float Calculations", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL281",
      title: "Hydraulics & Fluid Mechanics",
      credits: "3-1-0",
      topics: "Pipe Flow, Open Channel Hydraulics, Boundary Layer Theory, Hydraulic Jump",
      links: [
        { label: "Formula Sheet", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Tutorial Problems", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
  ],
  4: [
    {
      code: "CVL341",
      title: "Structural Analysis II",
      credits: "3-0-0",
      topics: "Slope-Deflection Method, Moment Distribution, Matrix Stiffness Formulation, Portal Frames",
      links: [
        { label: "Frame Solutions", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Past Exam Papers", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL382",
      title: "Geotechnical Engineering I",
      credits: "3-0-2",
      topics: "Phase Relations, Soil Classification, Terzaghi Effective Stress, 1D Consolidation & Settlement",
      links: [
        { label: "Soil Mechanics Notes", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Lab Manuals", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL261",
      title: "Transportation Engineering I",
      credits: "3-0-0",
      topics: "Geometric Design of Highways, Sight Distances, Traffic Flow Theory, Pavement Design",
      links: [
        { label: "IRC Standards Summary", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Tutorial Sets", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
  ],
  "1-2": [
    {
      code: "CVL100",
      title: "Environmental Science & Engineering",
      credits: "2-0-0",
      topics: "Ecosystems, Water Quality Standards, Air Pollution Control, Municipal Solid Waste",
      links: [
        { label: "Course Slides", url: "https://rahuliitd05.github.io/Semester3/" },
        { label: "Past Minors", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "APL100",
      title: "Engineering Mechanics",
      credits: "3-1-0",
      topics: "Free Body Diagrams, Equilibrium of Rigid Bodies, Friction, Trusses & Virtual Work",
      links: [
        { label: "Tutorial Problem Sets", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
  ],
  "5-8": [
    {
      code: "CVL342",
      title: "Design of Steel Structures",
      credits: "3-0-0",
      topics: "IS 800:2007, Tension & Compression Members, Welded/Bolted Connections, Plate Girders",
      links: [
        { label: "IS 800 Handouts", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
    {
      code: "CVL481",
      title: "Foundation Engineering",
      credits: "3-0-0",
      topics: "Shallow & Deep Foundations, Pile Capacity, Lateral Earth Pressures, Retaining Walls",
      links: [
        { label: "Bearing Capacity Formulas", url: "https://rahuliitd05.github.io/Semester3/" },
      ],
    },
  ],
};

export default function StudyMaterialPage() {
  const [activeSem, setActiveSem] = useState(3);
  const [showEmbed, setShowEmbed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const courses = COURSE_CATALOG[activeSem] || [];
  const filteredCourses = courses.filter((c) =>
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.topics.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SectionHeading
        badge="ACADEMIC PORTAL // ARCHIVE"
        title="Curated Study Materials & Course Repository"
        subtitle="Lecture notes, tutorial sheets, and past examination papers organized by semester for IIT Delhi civil engineering students."
      />

      {/* Control Strip & Notice */}
      <div className="p-4 rounded-xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-civil-amber animate-pulse" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <strong className="text-slate-900 dark:text-white font-semibold">Note:</strong> All links open official student archive resources. Use (Ctrl/Cmd + Click) to open in new tab.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors active:scale-95"
          >
            {showEmbed ? "Hide Raw Mirror" : "Toggle Raw Web Mirror"}
          </button>
          <a
            href="https://rahuliitd05.github.io/Semester3/"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm transition-transform active:scale-95 no-underline"
          >
            Open External Portal &rarr;
          </a>
        </div>
      </div>

      {/* Embedded Raw Viewer (Optional Drawer) */}
      {showEmbed && (
        <div className="mb-8 p-3 rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-lg">
          <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-200 dark:border-white/[0.08]">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              MIRROR SOURCE: rahuliitd05.github.io/Semester3/
            </span>
            <button
              onClick={() => setShowEmbed(false)}
              className="text-xs font-mono text-red-500 hover:underline"
            >
              Close Mirror
            </button>
          </div>
          <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden mt-3 border border-slate-200 dark:border-white/10">
            <iframe
              src="https://rahuliitd05.github.io/Semester3/"
              className="absolute inset-0 w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-forms"
              loading="lazy"
              title="IIT Delhi Semester 3 Study Material"
            />
          </div>
        </div>
      )}

      {/* Semester Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* Semester Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/[0.04] p-1 rounded-xl border border-slate-200 dark:border-white/[0.06] overflow-x-auto">
          {[
            { id: "1-2", label: "Year 1 (Sem 1-2)" },
            { id: 3, label: "Semester 3" },
            { id: 4, label: "Semester 4" },
            { id: "5-8", label: "Year 3 & 4 (Sem 5-8)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSem(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all ${
                activeSem === tab.id
                  ? "bg-white dark:bg-[#162035] text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-white/[0.12] font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search course code or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-civil-amber"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCourses.map((course) => (
          <div
            key={course.code}
            className="p-6 rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-civil-amber/50 dark:hover:border-civil-amber/40 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Header: Code & Credits */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-amber-700 dark:text-amber-400 bg-civil-amber/10 px-2 py-0.5 rounded border border-civil-amber/20">
                    {course.code}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    Credits: {course.credits}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  VERIFIED SYLLABUS
                </span>
              </div>

              {/* Title & Core Topics */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mt-3 font-sans">
                {course.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">Key Focus:</strong> {course.topics}
              </p>
            </div>

            {/* Direct Document Action Links */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Available Resources:
              </span>
              <div className="flex flex-wrap gap-2">
                {course.links.map((linkItem, idx) => (
                  <a
                    key={idx}
                    href={linkItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 active:scale-95 transition-all no-underline"
                  >
                    <span>{linkItem.label}</span>
                    <span className="text-civil-amber">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] text-slate-500 font-mono text-sm">
          No courses matching "{searchQuery}" in this semester filter.
        </div>
      )}
    </div>
  );
}