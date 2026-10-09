import React, { useEffect, useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Events } from "../data/eventCarousel";
import { LandingCarousel } from "../data/landingCarousel";

function SpecialCarousel({ arrows = true, name = "Events" }) {
  const isLanding = name === "Landing";
  const items = isLanding ? LandingCarousel : Events;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-elevation-light dark:shadow-elevation-dark group">
      {/* Blueprint Corner Accents */}
      <div className="absolute top-2 left-2 z-20 font-mono text-xs text-civil-amber/60 pointer-events-none select-none">
        +
      </div>
      <div className="absolute top-2 right-2 z-20 font-mono text-xs text-civil-amber/60 pointer-events-none select-none">
        +
      </div>
      <div className="absolute bottom-2 left-2 z-20 font-mono text-xs text-civil-amber/60 pointer-events-none select-none">
        +
      </div>
      <div className="absolute bottom-2 right-2 z-20 font-mono text-xs text-civil-amber/60 pointer-events-none select-none">
        +
      </div>

      <Carousel
        id={name}
        className={`overflow-hidden ${
          isLanding ? "h-[60vh] sm:h-[75vh]" : "h-[360px] sm:h-[480px]"
        }`}
        autoplay={true}
        loop={true}
        autoplayDelay={5000}
        prevArrow={({ handlePrev }) =>
          arrows ? (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full text-white active:scale-90 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </IconButton>
          ) : null
        }
        nextArrow={({ handleNext }) =>
          arrows ? (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              aria-label="Next slide"
              className="!absolute top-2/4 right-4 -translate-y-2/4 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full text-white active:scale-90 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </IconButton>
          ) : null
        }
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-5 left-2/4 z-30 flex -translate-x-2/4 gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {new Array(length).fill("").map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`block h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-7 bg-civil-amber"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {isLanding
          ? LandingCarousel.map((img, index) => (
              <div key={index} className="relative h-full w-full">
                <img
                  src={img}
                  alt={`CEF Highlight ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                <div className="absolute bottom-16 left-6 sm:left-12 max-w-2xl text-left z-20">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-mono uppercase tracking-widest bg-civil-amber/20 text-amber-300 border border-civil-amber/40 rounded-full">
                    CEF // CAMPUS HIGHLIGHTS
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    Civil & Environmental Engineering Forum
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-slate-200">
                    Indian Institute of Technology Delhi
                  </p>
                </div>
              </div>
            ))
          : Events.map((event, index) => (
              <div
                key={index}
                className="relative h-full w-full bg-slate-900 overflow-hidden"
              >
                <img
                  src={event.img}
                  alt={event.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Structural Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent hidden sm:block" />

                <div className="relative z-10 flex flex-col justify-end p-6 sm:p-12 w-full h-full text-left">
                  {event.month && (
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-civil-amber/20 border border-civil-amber/30 text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />
                        {event.month}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {event.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
      </Carousel>
    </div>
  );
}

export default SpecialCarousel;
