import React, { useState, useEffect } from "react";

export default function ScrollingTicker() {
  const [location, setLocation] = useState("Fetching location...");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1. Get Live Dynamic Time Updates
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Get Geolocation Data using HTML5 API
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Simple string conversion for presentation
          setLocation(`Lat: ${latitude.toFixed(2)}°, Lon: ${longitude.toFixed(2)}°`);
        },
        (error) => {
          setLocation("Location Access Denied (Bidding Worldwide)");
        }
      );
    } else {
      setLocation("Geolocation Not Supported");
    }
  }, []);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 border-t border-amber-500/20 text-neutral-300 font-sans text-xs py-2 z-50 overflow-hidden select-none shadow-xl">
      <div className="w-full flex whitespace-nowrap overflow-hidden">
        {/* Simple infinite scroll effect */}
        <div className="animate-marquee flex gap-12 shrink-0">
          <span> BIDSPIRIT LIVE DATA FEED</span>
          <span> DATE: {currentDate}</span>
          <span> CURRENT TIME: {time}</span>
          <span> BIDDER LOCATION: {location}</span>
          <span className="text-[#8B1E2F]">● PORTAL ONLINE SECURE CONNECTION ENABLED</span>
        </div>
        
        <div className="animate-marquee flex gap-12 shrink-0" aria-hidden="true">
          <span> BIDSPIRIT LIVE DATA FEED</span>
          <span> DATE: {currentDate}</span>
          <span> CURRENT TIME: {time}</span>
          <span> BIDDER LOCATION: {location}</span>
          <span className="text-amber-400">● PORTAL ONLINE SECURE CONNECTION ENABLED</span>
        </div>
      </div>

      {/* Tailwind Marquee Custom Keyframe Styling injected directly */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}