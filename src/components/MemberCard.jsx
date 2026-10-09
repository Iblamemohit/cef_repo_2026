import React, { useState } from "react";
import demoPerson from "../assets/demo-person.jpg";
import linkIcon from "../assets/link.svg";

function MemberCard({
  name = "Not Available",
  designation = "Not Available",
  image = demoPerson,
  linkedIn = "#",
  year = "",
  position = "center center",
}) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="group relative w-[200px] sm:w-[210px] rounded-xl overflow-hidden bg-white dark:bg-[#0E1424] border border-slate-200 dark:border-white/[0.08] shadow-sm hover:shadow-md hover:border-civil-amber/40 dark:hover:border-civil-amber/40 transition-all duration-200 flex flex-col text-left active:scale-[0.98]">
      {/* Image Container with Structural Hairline Border */}
      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img
          src={imgSrc || demoPerson}
          onError={() => setImgSrc(demoPerson)}
          alt={name}
          style={{ objectPosition: position }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Gradient shadow towards bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Year Chip (Top-Left) */}
        {year && (
          <div className="absolute top-2 left-2 font-mono text-[10px] font-medium bg-black/60 text-white/90 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
            {year}
          </div>
        )}

        {/* LinkedIn Quick Action (Top-Right) */}
        {linkedIn && linkedIn !== "#" && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${name}'s LinkedIn Profile`}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-civil-amber hover:text-black text-white/90 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}
      </div>

      {/* Profile Details Container */}
      <div className="p-3.5 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 tracking-tight font-sans truncate" title={name}>
            {name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5 line-clamp-2 leading-snug" title={designation}>
            {designation}
          </p>
        </div>

        <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-medium">
            CEF // IITD
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-civil-amber/70" />
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
