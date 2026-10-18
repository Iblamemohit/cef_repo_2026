import React from "react";
import SectionHeading from "../components/SectionHeading";
import Magazine from "../components/Magazine";

export default function MagazinePage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="PUBLICATIONS // 2026–27"
        title="CEF Magazine"
        subtitle="The official annual publication of the Civil Engineering Forum, IIT Delhi."
      />
      <Magazine />
    </div>
  );
}
