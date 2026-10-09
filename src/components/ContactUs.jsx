import React from "react";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedIN.svg";

function ContactUs() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <div className="relative rounded-2xl p-6 sm:p-10 bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark text-left">
        {/* Corner Accents */}
        <span className="absolute top-3 right-3 font-mono text-xs text-civil-amber/40 select-none">
          LOC // IITD-BLK4
        </span>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          {/* Department Location & Address */}
          <div className="md:w-1/2 flex flex-col gap-3">
            <span className="text-xs font-mono font-medium text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Department Headquarters
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Civil Engineering Forum
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Department of Civil Engineering, Block IV<br />
              Indian Institute of Technology Delhi<br />
              Hauz Khas, New Delhi — 110016, India
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Coordinates: 28.5450° N, 77.1926° E
              </span>
            </div>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:w-1/2 flex flex-col gap-3 w-full">
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Direct Inquiries & Outreach
            </span>

            <div className="flex flex-col gap-2.5">
              {/* Email */}
              <a
                href="mailto:cef@civil.iitd.ac.in"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] hover:border-civil-amber/50 dark:hover:border-civil-amber/50 transition-colors group no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-civil-amber/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <img src={mail} alt="Email" width={16} height={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-900 dark:text-white">
                      Official Email
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      cef@civil.iitd.ac.in
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-civil-amber group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cef-iit-delhi/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] hover:border-civil-amber/50 dark:hover:border-civil-amber/50 transition-colors group no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <img src={linkedin} alt="LinkedIn" width={16} height={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-900 dark:text-white">
                      LinkedIn Network
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      company/cef-iit-delhi
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-civil-amber group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/civilengineeringforumiitd"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] hover:border-civil-amber/50 dark:hover:border-civil-amber/50 transition-colors group no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500">
                    <img src={instagram} alt="Instagram" width={16} height={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-900 dark:text-white">
                      Instagram Updates
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      @civilengineeringforumiitd
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-civil-amber group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright and accreditation */}
      <div className="text-center text-xs text-slate-500 dark:text-slate-500 font-mono py-4">
        Civil Engineering Forum &bull; Department of Civil Engineering &bull; IIT Delhi &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default ContactUs;
