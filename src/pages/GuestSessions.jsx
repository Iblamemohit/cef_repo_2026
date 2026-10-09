import React from "react";
import SectionHeading from "../components/SectionHeading";
import GuestSessions from "../components/GuestSessions";

export default function GuestSessionsPage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="DISTINGUISHED LECTURES // COLLOQUIUM"
        title="Guest Sessions & Expert Lectures"
        subtitle="Invited keynotes and masterclasses by eminent researchers, chief engineers, and infrastructure consultants from across the globe."
      />
      <GuestSessions />
    </div>
  );
}
