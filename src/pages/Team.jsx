import React from "react";
import SectionHeading from "../components/SectionHeading";
import Team from "../components/Team";
import Alumni from "../components/Alumni";
import ContactUs from "../components/ContactUs";

export default function TeamPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">

      {/* ── Section 1: Team ────────────────────────────────────────── */}
      <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="LEADERSHIP // TEAM"
          title="Faculty & Student Council"
          subtitle="Meet the faculty advisors, core committee, and student executives steering the forum."
        />
        <Team />
      </section>

      {/* ── Section 2: Alumni ──────────────────────────────────────── */}
      <section id="alumni" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="LEGACY // ALUMNI"
          title="Distinguished Alumni Network"
          subtitle="Graduates of IIT Delhi Civil Engineering shaping infrastructure, research, and enterprise worldwide."
        />
        <Alumni />
      </section>

      {/* ── Section 3: Contact ─────────────────────────────────────── */}
      <section id="contact-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="REACH OUT // CONTACT"
          title="Connect with the Forum"
          subtitle="Reach out for partnerships, academic queries, event participation, or departmental collaboration."
        />
        <ContactUs />
      </section>
    </div>
  );
}
