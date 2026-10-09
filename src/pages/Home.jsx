import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import About from "../components/About";
import Team from "../components/Team";
import SpecialCarousel from "../components/SpecialCarousel";
import Flagship from "../components/Flagship";
import Alumni from "../components/Alumni";
import ContactUs from "../components/ContactUs";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const run = () => {
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    const r = requestAnimationFrame(run);
    return () => cancelAnimationFrame(r);
  }, [location]);

  return (
    <div className="pt-20">
      {/* 1. Hero Landing Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <SpecialCarousel name="Landing" arrows={true} />
      </section>

      {/* 2. About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="ABOUT // CEF IIT DELHI"
          title="Fostering Infrastructure Excellence"
          subtitle="The official society of the Department of Civil Engineering at IIT Delhi — advancing innovation, structural mastery, and engineering leadership."
        />
        <About />
      </section>

      {/* 3. Flagship Conclave Section */}
      <section id="flagship" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="ANNUAL FLAGSHIP // AAKAAR"
          title="The Premier Civil Engineering Conclave"
          subtitle="Bringing together academia, structural consultants, and students across India for competitions, keynotes, and technical challenges."
        />
        <Flagship />
      </section>

      {/* 4. Events Section */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="CAMPUS LIFE // EVENTS"
          title="Events & Annual Calendar"
          subtitle="From hackathons and bridge-building sprints to speaker panels and departmental celebrations."
        />
        <SpecialCarousel name="Events" arrows={true} />
      </section>

      {/* 5. Team Section */}
      <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="LEADERSHIP // TEAM"
          title="Faculty & Student Council"
          subtitle="Meet the faculty advisors, core committee, and student executives steering the forum."
        />
        <Team />
      </section>

      {/* 6. Alumni Section */}
      <section id="alumni" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="LEGACY // ALUMNI"
          title="Distinguished Alumni Network"
          subtitle="Graduates of IIT Delhi Civil Engineering shaping infrastructure, research, and enterprise worldwide."
        />
        <Alumni />
      </section>

      {/* 7. Contact Section */}
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
