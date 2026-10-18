import React, { useState, useMemo } from "react";
import { Events } from "../data/eventCarousel";
import SectionHeading from "../components/SectionHeading";
import Competitions from "../components/Competitions";
import GuestSessions from "../components/GuestSessions";

/* ─── Icons ──────────────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── Type badge colour map ───────────────────────────────────────────── */
const TYPE_COLOURS = {
  "Social":        "bg-pink-500/15 text-pink-400 border-pink-500/30",
  "Guest Session": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Competition":   "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Technical":     "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Flagship":      "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Conference":    "bg-teal-500/15 text-teal-400 border-teal-500/30",
  "Guidance":      "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

/* ─── RSVP Button ────────────────────────────────────────────────────── */
function RSVPButton({ event }) {
  const [count, setCount] = useState(event.rsvpCount);
  const [rsvped, setRsvped] = useState(false);

  const handleRSVP = (e) => {
    e.stopPropagation();
    if (event.status === "past") return;
    if (rsvped) { setCount((c) => c - 1); setRsvped(false); }
    else { setCount((c) => c + 1); setRsvped(true); }
  };

  if (event.status === "past") {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-token-xs bg-slate-100 dark:bg-sinc-surface-base border border-slate-200 dark:border-sinc-border-muted text-xs text-slate-500 dark:text-sinc-text-tertiary">
        <UsersIcon />
        <span className="font-mono font-semibold text-slate-800 dark:text-sinc-text-secondary">{count}</span>
        <span>attended</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleRSVP}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-token-xs border text-xs font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary ${
        rsvped
          ? "bg-civil-amber text-white border-civil-amber shadow-token-1"
          : "bg-slate-100 dark:bg-sinc-surface-raised border-slate-200 dark:border-sinc-border-muted text-slate-700 dark:text-sinc-text-secondary hover:border-civil-amber/50 hover:text-civil-amber"
      }`}
    >
      {rsvped ? <CheckIcon /> : <UsersIcon />}
      <span className="font-mono">{count}</span>
      <span>{rsvped ? "RSVP'd!" : "RSVP"}</span>
    </button>
  );
}

/* ─── Event Card ──────────────────────────────────────────────────────── */
function EventCard({ event }) {
  const typeCls = TYPE_COLOURS[event.type] ?? "bg-slate-500/15 text-slate-400 border-slate-500/30";
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="group relative flex flex-col rounded-token-xs overflow-hidden border border-slate-200 dark:border-sinc-border-muted bg-white dark:bg-sinc-surface-strong shadow-elevation-light dark:shadow-elevation-dark hover:border-civil-amber/40 hover:bg-sinc-surface-raised transition-all duration-instant hover:-translate-y-0.5">
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img src={event.img} alt={event.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-3 left-3">
          {isUpcoming ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-token-sm text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <span className="w-1.5 h-1.5 rounded-token-sm bg-emerald-400 animate-pulse" />
              Upcoming
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-token-sm text-xs font-semibold bg-slate-500/20 text-slate-300 border border-slate-500/30">Past</span>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-token-sm text-xs font-mono font-medium bg-civil-amber/20 border border-civil-amber/30 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-token-sm bg-civil-amber" />
            {event.month} {event.year}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className={`self-start px-2.5 py-0.5 rounded-token-sm text-[11px] font-semibold font-mono border ${typeCls}`}>{event.type}</span>
        <h3 className="text-base font-bold text-slate-900 dark:text-sinc-text-secondary leading-snug line-clamp-2 group-hover:text-civil-amber transition-colors font-sans">{event.name}</h3>
        <p className="text-sm text-slate-600 dark:text-sinc-text-primary leading-relaxed line-clamp-3 flex-1 font-sans">{event.desc}</p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-sinc-border-muted mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-sinc-text-tertiary">
            <CalendarIcon />
            <span className="font-mono">{event.timeline}</span>
          </div>
          <RSVPButton event={event} />
        </div>
      </div>
    </article>
  );
}

/* ─── Filter Pill ─────────────────────────────────────────────────────── */
function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-token-xs text-xs font-semibold border transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary ${
        active
          ? "bg-civil-amber text-white border-civil-amber shadow-token-1"
          : "bg-slate-100 dark:bg-sinc-surface-base border-slate-200 dark:border-sinc-border-muted text-slate-600 dark:text-sinc-text-tertiary hover:border-civil-amber/50 hover:text-sinc-text-secondary"
      }`}
    >
      {label}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   Events Page — 3 sections: Dynamic Events → Competitions → Guest Sessions
   ═══════════════════════════════════════════════════════════════════════ */
export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const years = useMemo(() => ["All", ...Array.from(new Set(Events.map((e) => e.year))).sort()], []);
  const types = useMemo(() => ["All", ...Array.from(new Set(Events.map((e) => e.type))).sort()], []);

  const filtered = useMemo(() => {
    return Events.filter((e) => {
      const q = search.toLowerCase();
      const matchSearch = !q || e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q) || e.type.toLowerCase().includes(q);
      const matchYear = yearFilter === "All" || e.year === yearFilter;
      const matchType = typeFilter === "All" || e.type === typeFilter;
      const matchStatus = statusFilter === "All" || e.status === statusFilter.toLowerCase();
      return matchSearch && matchYear && matchType && matchStatus;
    });
  }, [search, yearFilter, typeFilter, statusFilter]);

  const upcomingCount = Events.filter((e) => e.status === "upcoming").length;
  const pastCount = Events.filter((e) => e.status === "past").length;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">

      {/* ── Section 1: Dynamic Events & Annual Calendar ────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading badge="CAMPUS LIFE // EVENTS" title="Events & Annual Calendar" subtitle="From hackathons and bridge-building sprints to speaker panels and departmental celebrations — search, filter, and RSVP all in one place." />

        <div className="mt-6 mb-10 flex flex-wrap gap-4">
          {[
            { label: "Total Events", value: Events.length },
            { label: "Upcoming", value: upcomingCount, highlight: true },
            { label: "Past Events", value: pastCount },
          ].map(({ label, value, highlight }) => (
            <div key={label} className={`flex flex-col px-5 py-3 rounded-token-xs border ${highlight ? "bg-civil-amber/10 border-civil-amber/30 text-civil-amber" : "bg-white dark:bg-sinc-surface-strong border-slate-200 dark:border-sinc-border-muted text-slate-900 dark:text-sinc-text-secondary"}`}>
              <span className="text-2xl font-bold font-mono">{value}</span>
              <span className={`text-xs ${highlight ? "text-amber-600 dark:text-amber-400" : "text-slate-500 dark:text-sinc-text-tertiary"}`}>{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div className="relative max-w-lg">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-sinc-text-tertiary"><SearchIcon /></span>
            <input
              type="text"
              placeholder="Search events by name, type…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-token-xs border border-slate-200 dark:border-sinc-border-muted bg-white dark:bg-sinc-surface-strong text-slate-900 dark:text-sinc-text-secondary placeholder-slate-400 dark:placeholder-sinc-text-tertiary text-sm outline-none focus:border-civil-amber/60 focus:ring-2 focus:ring-civil-amber/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary transition"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-slate-400 dark:text-sinc-text-tertiary uppercase tracking-wider">Status:</span>
            {["All", "Upcoming", "Past"].map((s) => (<FilterPill key={s} label={s} active={statusFilter === s} onClick={() => setStatusFilter(s)} />))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-slate-400 dark:text-sinc-text-tertiary uppercase tracking-wider">Year:</span>
            {years.map((y) => (<FilterPill key={y} label={y} active={yearFilter === y} onClick={() => setYearFilter(y)} />))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-slate-400 dark:text-sinc-text-tertiary uppercase tracking-wider">Type:</span>
            {types.map((t) => (<FilterPill key={t} label={t} active={typeFilter === t} onClick={() => setTypeFilter(t)} />))}
          </div>
        </div>

        <p className="text-xs text-slate-400 dark:text-sinc-text-tertiary font-mono mb-6">
          Showing <span className="text-civil-amber font-semibold">{filtered.length}</span> of {Events.length} events
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (<EventCard key={i} event={event} />))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <span className="text-5xl">🔍</span>
            <p className="text-lg font-semibold text-slate-700 dark:text-sinc-text-secondary">No events found</p>
            <p className="text-sm text-slate-400 dark:text-sinc-text-tertiary">Try adjusting your search or filters.</p>
            <button onClick={() => { setSearch(""); setYearFilter("All"); setTypeFilter("All"); setStatusFilter("All"); }} className="mt-2 px-4 py-2 rounded-token-xs bg-civil-amber text-white text-sm font-semibold active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary">Clear Filters</button>
          </div>
        )}
      </div>

      {/* ── Section 2: Competitions ────────────────────────────────── */}
      <div id="competitions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading badge="ENGINEERING CHALLENGES // CONTESTS" title="Technical Competitions & Sprints" subtitle="Put structural theory into physical practice: from scale bridge load tests and borehole analysis to 4D BIM modeling and hydraulics simulations." />
        <Competitions />
      </div>

      {/* ── Section 3: Guest Sessions ─────────────────────────────── */}
      <div id="guest-sessions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading badge="DISTINGUISHED LECTURES // COLLOQUIUM" title="Guest Sessions & Expert Lectures" subtitle="Invited keynotes and masterclasses by eminent researchers, chief engineers, and infrastructure consultants from across the globe." />
        <GuestSessions />
      </div>
    </div>
  );
}
