import React from "react";
import SectionHeading from "../components/SectionHeading";
import Competitions from "../components/Competitions";

export default function CompetitionsPage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="ENGINEERING CHALLENGES // CONTESTS"
        title="Technical Competitions & Sprints"
        subtitle="Put structural theory into physical practice: from scale bridge load tests and borehole analysis to 4D BIM modeling and hydraulics simulations."
      />
      <Competitions />
    </div>
  );
}
