import React from "react";
import { promotedAuctions } from "../Utilities/AuctionData";

export default function PromotedAuctions() {
  return (
    <section className="w-full bg-white pt-12 pb-6 px-4 md:px-12 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE HEADER */}
        <div className="mb-6">
          <h2 className="font-serif text-xl md:text-3xl text-neutral-900 tracking-tight">
            Sponsored Auctions
          </h2>
          <hr className="border-neutral-200 mt-2" />
        </div>

        {/* SIDE-BY-SIDE FIXED MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="w-full bg-white border border-neutral-200 p-4 flex flex-col justify-between"
            >
              {/* TOP CARD SPLIT FRAME */}
              <div className="flex gap-4">
                
                {/* FIXED BOXED IMAGE FRAME */}
                <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 bg-neutral-50 border border-neutral-100 overflow-hidden">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* META INFO DETAILS COLUMN */}
                <div className="flex flex-col space-y-1 min-w-0">
                  <h3 className="text-sm md:text-base  text-neutral-900 line-clamp-2 hover:text-[#8B1E2F] cursor-pointer transition-colors leading-snug">
                    {auction.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 font-light truncate">
                    by <span className="text-neutral-600 font-medium hover:underline cursor-pointer">{auction.house}</span>
                  </p>
                  <p className="font-sans text-[11px] text-neutral-400 font-light pt-1 truncate">
                    {auction.date}
                  </p>
                </div>

              </div>

              {/* BOTTOM INTERACTIVE DECK BAR */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                
                {/* Status Indicator Tracking Pill */}
                <div className="shrink-0">
                  {auction.isLive ? (
                    <div className="inline-flex items-center gap-1.5 text-emerald-700 font-sans text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Auction
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-neutral-500 font-sans text-[10px] font-bold uppercase tracking-wider">
                      Timed Auction
                    </div>
                  )}
                </div>

                {/*  VIEW ITEMS CTA BUTTON */}
                <a 
                  href={`/${auction.category}/${auction.id}`}
                  className="bg-[#8B1E2F] hover:bg-neutral-950 text-white font-sans text-[11px]  tracking-widest py-2 px-4 rounded-xs transition-colors duration-300 text-center cursor-pointer whitespace-nowrap shadow-xs"
                >
                  View Items
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}