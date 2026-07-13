import React, { useState, useEffect } from "react";

import lionArt from "../assets/Ban2.jpg";

import watchAsset from "../assets/pocket.avif";

import antiqueAsset from "../assets/mab2.jpg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: lionArt,

      tag: "Masterpiece Fine Art",

      title: "The Shoreline Fishermen Study",

      desc: "An exceptional, fluid impressionist watercolor highlighting coastal legacy, soft maritime light, and peaceful heritage.",
    },

    {
      image: watchAsset,

      tag: "Luxury Collectibles",

      title: "The Sovereign Chronographs",

      desc: "A signature collection of investment-grade mechanical timepieces and authenticated high-value estate assets.",
    },

    {
      image: antiqueAsset,

      tag: "Historic Antiques",

      title: "Classical Antiquities & Structure",

      desc: "Curated artifacts from antiquity to mid-century elite design, preserved meticulously for modern legacy collections.",
    },
  ];

  // Automated 6-second premium slide interval switcher

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-neutral-900 overflow-hidden select-none">
      {/* BACKGROUND IMAGE CONTAINER MATRIX */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          } transition-transform duration-6000ms`}
        >
          {/* Fallback color if image variable isn't assigned yet */}

          <div className="absolute inset-0 " />

          {slide.image && (
            <img
              src={slide.image}
              alt={slide.title}
              // object-cover handles vertical images beautifully, keeping them centered

              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Sophisticated dark editorial overlay for rich text contrast */}

          <div className="absolute inset-0 bg-black/30 backdrop-gradient" />
        </div>
      ))}

      {/* FOREGROUND STATIC EDITORIAL CONTENT LAYER */}

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-3xl text-white">
        {/* Dynamic Keyframe Content Animation triggered by index changes */}

        <div key={currentSlide} className="space-y-4 animate-fade-in-up">
          <span className="font-sans text-4xl font-bold uppercase tracking-[0.3em] text-[#b91931] block">
            {slides[currentSlide].tag}
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight tracking-wide">
            {slides[currentSlide].title}
          </h1>

          <p className="font-sans text-xl md:text-3xl lg:text-base text-neutral-100 font-light max-w-lg leading-relaxed">
            {slides[currentSlide].desc}
          </p>

          <div className="pt-4">
            <button className="group relative px-8 py-3.5 border border-white overflow-hidden rounded-full transition-colors duration-500">
              <span className="relative z-10 font-sans sm:text-xs md:text-lg lg:text-xs font-semibold uppercase tracking-widest text-white group-hover:text-white transition-colors duration-300">
                View Lot Provenance
              </span>

              <div className="absolute inset-0 bg-[#8B1E2F] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SLIDE INDICATORS BUTTONS */}

      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-8 bg-[#8B1E2F]"
                : "w-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
