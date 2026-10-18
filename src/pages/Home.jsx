import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AsciiStructureCanvas from "../components/AsciiStructureCanvas";
import MarqueeTicker from "../components/MarqueeTicker";
import cefAboutImg from "../assets/cefaboutus.jpg";
import { TeamData } from "../data/team";

export default function Home() {
  const coreMembers = [
    ...(TeamData.Faculty?.Tier2 || []),
    ...(TeamData.Core?.Tier1 || []),
    ...(TeamData.Coordinators || []),
  ].slice(0, 14);

  return (
    <div className="flex-1 min-h-screen bg-background text-foreground">
      {/* ── 1. SInC Hero Section ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background" aria-label="Hero">
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-border" />
        <div className="relative z-10 mx-auto max-w-[96rem] px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-32 text-left">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8 xl:gap-12">
            
            {/* Left Content */}
            <div className="relative z-10 max-w-2xl">
              {/* Eyebrow */}
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Department of Civil Engineering · IIT Delhi
              </p>

              {/* SInC Live Announcement Ticker Pill */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-0 overflow-hidden rounded-none border border-border-ink bg-card pr-1 text-sm shadow-sm">
                  <span className="flex shrink-0 items-center gap-1.5 bg-accent-lime px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-on-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                    Live
                  </span>
                  <div className="relative overflow-hidden h-7 flex items-center px-3 min-w-0 flex-1">
                    <span className="whitespace-nowrap text-xs font-medium text-foreground">
                      CEF 2026–27 Schedule & Annual Magazine Released
                    </span>
                  </div>
                  <Link
                    to="/events"
                    className="flex h-6 w-6 shrink-0 items-center justify-center bg-foreground text-background transition-colors hover:bg-accent-lime hover:text-on-accent no-underline"
                    aria-label="View announcement"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Mega Headline */}
              <h1 className="mega-display text-[12vw] leading-[0.96] text-foreground sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem] tracking-tight">
                <span className="block">Engineering Ground.</span>
                <span className="block text-brand-teal">Into Megastructures.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
                The Civil Engineering Forum (CEF) connects IIT Delhi student scholars, researchers, and global infrastructure pioneers: bridging rigorous mechanics with real-world megaprojects.
              </p>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link to="/events" className="pill-cta">
                  Explore 2026–27 Schedule
                </Link>
                <a
                  href="#manifesto"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-blue no-underline"
                >
                  Discover more
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Media: Interactive 3D Structural ASCII Canvas */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <AsciiStructureCanvas />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SInC Manifesto Section ────────────────────────────────── */}
      <section id="manifesto" className="relative scroll-mt-20 overflow-hidden bg-inverse text-left">
        <div className="relative mx-auto max-w-[96rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <blockquote className="relative z-10 max-w-3xl">
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-club-gold">
              10,000 engineers · 60+ years of infrastructure mastery
            </p>
            <p className="headline-tight text-balance text-3xl leading-[1.15] text-inverse-foreground sm:text-5xl lg:text-[3.2rem]">
              &ldquo;A premier campus with 10,000 engineers doesn&apos;t just calculate bending moments. It engineers the <span className="text-brand-cardinal underline decoration-brand-cardinal/40 decoration-4 underline-offset-8">physical foundation</span> of modern civilization — and mastery begins where theory meets real-world execution.&rdquo;
            </p>
            <footer className="mt-8 text-base text-inverse-foreground">
              Civil Engineering Forum
              <span className="block text-inverse-muted">Department of Civil Engineering, IIT Delhi</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 3. Technical Network Signal Section ──────────────────────── */}
      <section id="network-signal" className="relative scroll-mt-20 border-b border-border bg-background text-left">
        <div className="relative mx-auto max-w-[96rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
            <div className="space-y-8">
              <div className="max-w-sm">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Student Builders & Researchers
                </p>
                <p className="mt-3 text-lg leading-snug tracking-[-0.015em] text-foreground sm:text-xl">
                  Undergraduates and scholars mastering non-linear FEM, soil dynamics, smart hydrology, and 4D BIM modeling.
                </p>
              </div>

              <div className="max-w-sm">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Faculty Mentors & Industry Leaders
                </p>
                <p className="mt-3 text-lg leading-snug tracking-[-0.015em] text-foreground sm:text-xl">
                  Project directors from L&T, DMRC, and premier global infrastructure consultancies providing real technical feedback and mentorship.
                </p>
              </div>
            </div>

            {/* Overview Visual Card */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  CEF // Department Overview
                </span>
                <span className="font-mono text-xs text-brand-teal">
                  Est. 1961
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { val: "60+ Yrs", label: "Legacy" },
                  { val: "500+", label: "Students" },
                  { val: "35+", label: "Faculty" },
                  { val: "29", label: "Events '26–27" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">
                      {stat.val}
                    </span>
                    <span className="text-xs text-muted font-mono mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted leading-relaxed">
                Hosting annual national conclaves, guest masterclasses, laboratory build sprints, and hands-on site visits across national capital megaprojects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SInC "Ways In" Pathways Section ───────────────────────── */}
      <section className="border-b border-border bg-background text-left">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Department Pathways
          </p>
          <h2 className="mt-3 max-w-xl text-3xl tracking-tight text-foreground sm:text-4xl font-display font-bold">
            Pick a door. Start moving.
          </h2>

          <ol className="mt-10 divide-y divide-border border-y border-border list-none p-0">
            <li>
              <Link
                to="/events"
                className="group grid gap-3 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8 no-underline"
              >
                <span className="font-mono text-sm text-muted">01</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-brand-cardinal sm:text-2xl font-display">
                    Annual Events & Dynamic Calendar
                  </h3>
                  <p className="mt-2 max-w-2xl text-base text-muted">
                    Explore all 29 official department events scheduled from June 2026 to April 2027. Real-time search, filters, and one-click RSVP counters.
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    Students · Faculty · Event Attendees
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-cardinal">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                to="/events#competitions"
                className="group grid gap-3 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8 no-underline"
              >
                <span className="font-mono text-sm text-muted">02</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-brand-cardinal sm:text-2xl font-display">
                    Technical Competitions & Challenges
                  </h3>
                  <p className="mt-2 max-w-2xl text-base text-muted">
                    Truss hydraulic load testing, 4D BIM clash sprints, deep excavation shoring case studies, and green concrete mix-offs.
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    Student Engineering Teams
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-cardinal">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                to="/study-material"
                className="group grid gap-3 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8 no-underline"
              >
                <span className="font-mono text-sm text-muted">03</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-brand-cardinal sm:text-2xl font-display">
                    Curriculum Explorer & Study Material
                  </h3>
                  <p className="mt-2 max-w-2xl text-base text-muted">
                    Direct access to official lecture slides, tutorial problem sheets, and Previous Year Questions (PYQs) across Semesters 1 through 8.
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    Undergraduate & Postgraduate Scholars
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-cardinal">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                to="/magazine"
                className="group grid gap-3 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8 no-underline"
              >
                <span className="font-mono text-sm text-muted">04</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-brand-cardinal sm:text-2xl font-display">
                    CEF Annual Magazine: Edition 2026–27
                  </h3>
                  <p className="mt-2 max-w-2xl text-base text-muted">
                    The flagship department publication: student research spotlights, faculty interviews, megaproject case studies, and engineering essays.
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    Readers · Researchers · Alumni
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-cardinal">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* ── 5. SInC Highlight Accent Quote ───────────────────────────── */}
      <section className="bg-accent-tint border-b border-border text-left">
        <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="headline-tight max-w-3xl text-balance text-3xl leading-[1.16] text-foreground sm:text-4xl lg:text-[2.6rem]">
            Great civil engineering is not an accident. It comes from{" "}
            <span className="text-brand-cardinal font-bold">laboratories full of builders</span>,
            rigorous mathematical modeling, honest experiments, and a department community that treats every infrastructure challenge seriously.
          </p>
        </div>
      </section>

      {/* ── 6. SInC Continuous Dual Marquee Ticker ────────────────────── */}
      <MarqueeTicker />

      {/* ── 7. SInC People / Team Grid Section ──────────────────────── */}
      <section className="border-b border-border bg-card text-left">
        <div className="mx-auto max-w-[96rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                People
              </p>
              <p className="mt-2 max-w-lg text-2xl tracking-tight text-foreground sm:text-3xl font-display font-bold">
                Run by students at IIT Delhi.
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Advisors, coordinators, and executives — the same people you will actually meet in Block IV.
              </p>
            </div>

            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-cardinal no-underline"
            >
              Meet the council
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-7 sm:gap-4 list-none p-0">
            {coreMembers.map((member, i) => (
              <li key={i}>
                <Link to="/team" className="group block h-full no-underline">
                  <span className="block aspect-[3/4] overflow-hidden border border-border bg-background rounded-lg">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </span>
                  <span className="mt-2 block text-[12px] font-semibold leading-snug tracking-tight text-foreground sm:text-[13px] truncate">
                    {member.name}
                  </span>
                  <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px]">
                    {member.position || member.desg}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8. Flagship Sprints & Initiatives Portfolio ─────────────── */}
      <section id="flagship" className="border-b border-border bg-background py-16 lg:py-20 text-left">
        <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Department Initiatives
              </span>
              <h2 className="editorial-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
                Flagship Conclaves & Sprints
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                From full-scale truss load testing to annual research symposiums across IIT Delhi.
              </p>
            </div>

            <Link to="/events#competitions">
              <button className="group/btn inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-semibold transition-[transform,box-shadow,background-color,color] duration-150 ease-out brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-foreground text-foreground hover:bg-brand-cardinal hover:text-white h-11 px-6 py-2 gap-2 bg-card">
                All Competitions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group block h-full p-6 transition-colors border border-border bg-card rounded-xl hover:border-brand-cardinal/50 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-foreground font-mono text-base font-bold text-background">
                  A
                </div>
                <span className="rounded-md border border-border bg-accent-lime/15 text-brand-cardinal px-2 py-0.5 font-mono text-[10px] font-semibold uppercase">
                  Annual Conclave
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground font-display">
                AAKAAR 2026: Civil Conclave
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/90 line-clamp-2">
                Resilient Infrastructure: AI, Net-Zero Materials & Megaprojects.
              </p>
              <p className="mt-3 text-sm text-muted line-clamp-2">
                National symposium bringing 1,000+ student delegates, structural researchers, and keynote directors together at IIT Delhi.
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">Category</span>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Flagship Symposium</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group block h-full p-6 transition-colors border border-border bg-card rounded-xl hover:border-brand-cardinal/50 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-foreground font-mono text-base font-bold text-background">
                  T
                </div>
                <span className="rounded-md border border-border bg-brand-palo-alto/15 text-brand-palo-alto px-2 py-0.5 font-mono text-[10px] font-semibold uppercase">
                  Build Sprint
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground font-display">
                Truss Bridge Destructive Load Test
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/90 line-clamp-2">
                Scale structural efficiency sprint in the Heavy Structures Laboratory.
              </p>
              <p className="mt-3 text-sm text-muted line-clamp-2">
                Timed fabrication under strict material weight constraints, followed by live hydraulic jack destructive loading to evaluate failure modes.
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">Lab Venue</span>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Heavy Structures Lab</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group block h-full p-6 transition-colors border border-border bg-card rounded-xl hover:border-brand-cardinal/50 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-foreground font-mono text-base font-bold text-background">
                  B
                </div>
                <span className="rounded-md border border-border bg-accent-lime/15 text-brand-cardinal px-2 py-0.5 font-mono text-[10px] font-semibold uppercase">
                  Design Challenge
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground font-display">
                BIM & 4D Digital Twin Hackathon
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/90 line-clamp-2">
                Collaborative clash detection, 4D timelines, and lifecycle carbon audit.
              </p>
              <p className="mt-3 text-sm text-muted line-clamp-2">
                Multi-discipline architectural and structural Revit modeling solving clashes, sequencing construction schedules, and auditing BOQ.
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">Technology</span>
                <p className="mt-0.5 text-sm font-semibold text-foreground">openBIM / Revit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SInC Landmark Atmosphere Banner ──────────────────────── */}
      <section className="relative overflow-hidden bg-background border-b border-border text-center py-20 lg:py-24">
        <div className="relative mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
          <p className="headline-tight max-w-4xl mx-auto text-balance text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.8rem]">
            Built on campus.
            <span className="mt-2 block text-brand-cardinal">Aimed at the world.</span>
          </p>
          <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Department of Civil Engineering · Block IV · IIT Delhi
          </p>
        </div>
      </section>

      {/* ── 10. SInC CTA Section ("Ready to build something real?") ─── */}
      <section id="contact-us" className="relative overflow-hidden bg-card py-16 lg:py-24 text-center border-b border-border">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="mb-5 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Get Involved
          </span>
          <h2 className="editorial-display text-4xl text-foreground sm:text-5xl lg:text-[4.25rem]">
            Ready to build <span className="lime-mark">something real?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Connect with the council, participate in technical design sprints, or attend upcoming distinguished guest lectures.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Heavy Structures Lab",
              "BIM Sprints",
              "Alumni Mentorship",
              "Hydraulics Flumes",
              "Aakaar Conclave",
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/events" className="pill-cta h-12 px-10 text-sm">
              Explore All Events
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="mailto:cef@civil.iitd.ac.in"
              className="pill-cta pill-cta-outline h-12 px-10 text-sm"
            >
              Contact Council
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
