import React from "react";
import logo from "../assets/ceflogo.png";

export default function Footer() {
  return (
    <footer
      data-site-footer="true"
      className="relative overflow-hidden bg-inverse text-inverse-foreground"
    >
      <div className="relative mx-auto max-w-[96rem] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid gap-14 pb-16 lg:grid-cols-[1.3fr_2fr] lg:pb-20">
          {/* Main Statement */}
          <div className="max-w-xl text-left">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-club-gold">
              Civil Engineering Forum — IIT Delhi
            </p>
            <h2 className="mega-display mt-6 text-balance text-4xl sm:text-5xl">
              The campus is full of ideas. Let&apos;s engineer the right ones into reality.
            </h2>
            <a className="pill-cta pill-cta-inverse mt-10" href="#contact-us">
              Join the forum
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>

          {/* Links Columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:justify-items-end text-left">
            <div>
              <h3 className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-inverse-muted">
                Discover
              </h3>
              <ul className="flex flex-col gap-3 p-0 list-none text-sm">
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/events">Events</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/events#competitions">Competitions</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/magazine">Magazine</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-inverse-muted">
                Participate
              </h3>
              <ul className="flex flex-col gap-3 p-0 list-none text-sm">
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/#flagship">Aakaar Conclave</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/study-material">Study Material</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/events#guest-sessions">Guest Lectures</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-inverse-muted">
                CEF
              </h3>
              <ul className="flex flex-col gap-3 p-0 list-none text-sm">
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/#about">About</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/team">Team</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/#alumni">Alumni</a></li>
                <li><a className="text-inverse-foreground/90 hover:text-white transition-colors no-underline" href="/#contact-us">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact details row */}
        <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-2 text-left">
          <a
            href="mailto:cef@civil.iitd.ac.in"
            className="group flex items-start gap-3 text-sm text-inverse-muted hover:text-white transition-colors no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-club-gold">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-inverse-muted">Write to us</span>
              <span className="text-inverse-foreground">cef@civil.iitd.ac.in</span>
            </div>
          </a>

          <div className="flex items-start gap-3 text-sm text-inverse-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-club-gold">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-inverse-muted">Find us</span>
              <span className="text-inverse-foreground">Block IV, Civil Engineering Dept., IIT Delhi Campus, Hauz Khas, New Delhi – 110016</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CEF" width={28} height={28} className="rounded-md" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-inverse-muted m-0">
              © {new Date().getFullYear()} Civil Engineering Forum, IIT Delhi
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/company/cef-iit-delhi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-inverse-foreground hover:bg-white/10 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/civilengineeringforumiitd"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-inverse-foreground hover:bg-white/10 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mega Watermark */}
        <div className="relative -mb-4 overflow-hidden pt-6 lg:-mb-6 pointer-events-none select-none" aria-hidden="true">
          <p className="mega-display whitespace-nowrap text-center text-[19vw] uppercase leading-[0.78] tracking-[-0.02em] lg:text-[15.5rem] text-white/[0.04]">
            cef iitd
          </p>
        </div>
      </div>
    </footer>
  );
}
