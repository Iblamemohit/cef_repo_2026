import React from "react";
import SectionHeading from "../components/SectionHeading";
import Magazine from "../components/Magazine";

export default function MagazinePage() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="DEPARTMENT PUBLICATIONS // JOURNAL"
        title="CEF Annual Magazine"
        subtitle="Curating breakthrough student research, interviews with leading civil engineers, and reflections on sustainable infrastructure."
      />
      <Magazine />
    </div>
  );
}
