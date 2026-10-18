import React, { useState, useEffect, useRef, useCallback } from "react";
import { Events as defaultEvents } from "../data/eventCarousel";
import { LandingCarousel } from "../data/landingCarousel";
import { getEvents } from "../services/eventsService";

function SpecialCarousel({ arrows = true, name = "Events" }) {
  const isLanding = name === "Landing";
  const [liveEvents, setLiveEvents] = useState(defaultEvents);

  useEffect(() => {
    if (!isLanding) {
      let active = true;
      getEvents().then((data) => {
        if (active && data && data.length > 0) {
          setLiveEvents(data);
        }
      });
      return () => {
        active = false;
      };
    }
  }, [isLanding]);

  const items = isLanding ? LandingCarousel : liveEvents;
  const length = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  // Autoplay with pause-on-hover
  useEffect(() => {
    if (isPaused || length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, length, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full rounded-token-xs overflow-hidden border border-slate-200 dark:border-sinc-border-muted shadow-elevation-light dark:shadow-elevation-dark group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Corner Accents */}
      <span className="absolute top-2.5 left-2.5 z-20 font-mono text-xs text-sinc-text-tertiary pointer-events-none select-none">+</span>
      <span className="absolute top-2.5 right-2.5 z-20 font-mono text-xs text-sinc-text-tertiary pointer-events-none select-none">+</span>
      <span className="absolute bottom-2.5 left-2.5 z-20 font-mono text-xs text-sinc-text-tertiary pointer-events-none select-none">+</span>
      <span className="absolute bottom-2.5 right-2.5 z-20 font-mono text-xs text-sinc-text-tertiary pointer-events-none select-none">+</span>

      {/* Main Track with Spring Transition */}
      <div
        className={`relative w-full overflow-hidden ${
          isLanding ? "h-[60vh] sm:h-[75vh]" : "h-[360px] sm:h-[480px]"
        }`}
      >
        <div
          className="flex h-full w-full"
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {isLanding
            ? LandingCarousel.map((img, index) => (
                <div key={index} className="relative h-full w-full flex-shrink-0">
                  <img
                    src={img}
                    alt={`CEF Highlight ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  <div className="absolute bottom-16 left-6 sm:left-12 max-w-2xl text-left z-20">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-mono uppercase tracking-widest bg-civil-amber/20 text-sinc-text-secondary border border-civil-amber/40 rounded-token-sm">
                      CEF // CAMPUS HIGHLIGHTS
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                      Civil & Environmental Engineering Forum
                    </h2>
                    <p className="mt-1 text-sm sm:text-base text-sinc-text-primary">
                      Indian Institute of Technology Delhi
                    </p>
                  </div>
                </div>
              ))
            : Events.map((event, index) => (
                <div
                  key={index}
                  className="relative h-full w-full flex-shrink-0 bg-sinc-surface-base overflow-hidden"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden sm:block" />

                  <div className="relative z-10 flex flex-col justify-end p-6 sm:p-12 w-full h-full text-left">
                    {event.month && (
                      <div className="mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-token-sm text-xs font-mono font-medium tracking-wider uppercase bg-civil-amber/20 border border-civil-amber/30 text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />
                          {event.month}
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                      {event.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-sinc-text-primary leading-relaxed font-sans">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Prev / Next Arrows */}
      {arrows && length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute top-2/4 left-4 -translate-y-2/4 z-30 w-10 h-10 rounded-token-sm bg-black/60 hover:bg-black/90 backdrop-blur-sm text-sinc-text-secondary flex items-center justify-center border border-sinc-border-muted active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-2/4 right-4 -translate-y-2/4 z-30 w-10 h-10 rounded-token-sm bg-black/60 hover:bg-black/90 backdrop-blur-sm text-sinc-text-secondary flex items-center justify-center border border-sinc-border-muted active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sinc-text-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {length > 1 && (
        <div className="absolute bottom-5 left-2/4 z-30 flex -translate-x-2/4 gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-token-sm border border-sinc-border-muted">
          {new Array(length).fill("").map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`block h-1.5 cursor-pointer rounded-token-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sinc-text-secondary ${
                currentIndex === i
                  ? "w-7 bg-civil-amber"
                  : "w-2.5 bg-sinc-border-muted hover:bg-sinc-text-tertiary"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SpecialCarousel;
