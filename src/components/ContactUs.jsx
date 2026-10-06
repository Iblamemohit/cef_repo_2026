import React from "react";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedIN.svg";

function ContactUs() {
  const linkBase =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors";
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-3xl mx-auto rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80">
            We'd love to hear from you. Reach out on any platform:
          </p>
          <div className="flex items-center gap-3">
            <a
              className={linkBase}
              target="_blank"
              rel="noreferrer"
              href="mailto:cef@civil.iitd.ac.in"
              aria-label="Email"
            >
              <img src={mail} alt="Email" width={18} />
              <span className="hidden sm:inline text-sm">Email</span>
            </a>
            <a
              className={linkBase}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/civilengineeringforumiitd"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" width={18} />
              <span className="hidden sm:inline text-sm">Instagram</span>
            </a>
            <a
              className={linkBase}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/cef-iit-delhi/"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn" width={18} />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
