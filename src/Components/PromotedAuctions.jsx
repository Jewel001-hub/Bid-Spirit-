import React from "react";
import { promotedAuctions } from "../Utilities/AuctionData";

export default function PromotedAuctions() {
  return (
    <>
      <section className="w-full bg-white pt-16 pb-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight">
              Promoted Auctions
            </h2>
            <hr className="border-neutral-500/70" />
          </div>
        

          {/* PROMOTED CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotedAuctions.map((auction) => (
              <div 
                key={auction.id} 
                className="flex flex-col sm:flex-row bg-white border border-neutral-400/80 overflow-hidden hover:shadow-md transition-shadow duration-300 "
              >
                {/* Left Image Frame */}
                <div className="sm:w-2/5 aspect-4/3 sm:aspect-auto bg-neutral-50 overflow-hidden">
                  <img 
                    src={auction.image} 
                    alt={auction.title} 
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Right Content Column */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg text-neutral-950 hover:text-[#8B1E2F] cursor-pointer transition-colors line-clamp-2">
                      {auction.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 font-light">
                      by <span className="text-neutral-700 font-normal underline cursor-pointer">{auction.house}</span>
                    </p>
                  </div>

                  <div className="w-full mt-6 pt-4 border-t border-neutral-500/70 flex flex-col gap-3">
                    <span className="font-sans text-[11px] tracking-wide text-neutral-600">
                      {auction.date}
                    </span>
                    <button className="w-full sm:w-auto bg-[#8B1E2F] hover:bg-neutral-950 text-white font-sans text-[11px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-sm transition-colors duration-300">
                      View Items
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}