import React from "react";
import { marketplaceItems } from "../Utilities/AuctionData";

export default function NewMarketPlace() {
  return (
    <section className="w-full bg-white pt-12 pb-12 px-4 md:px-12 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE HEADER */}
        <div className="mb-6">
          <h2 className="font-serif text-lg md:text-3xl text-neutral-800 tracking-tight">
            Sales From Auction Houses New To Our Marketplace
          </h2>
          <hr className="border-neutral-200 mt-2" />
        </div>

        {/* 3-COLUMN ROW GRID (Desktop) / STACKED LIST (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {marketplaceItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-start gap-4 w-full"
            >
              
              {/* LEFT SIDE: SQUARE IMAGE BOX */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* RIGHT SIDE: TEXT METADATA & BUTTON */}
              <div className="flex flex-col justify-between min-w-0 h-full flex-grow">
                
                {/* Meta Details Text Stack */}
                <div className="space-y-1">
                  <h3 className="font-sans text-sm md:text-base font-normal text-neutral-900 line-clamp-2 leading-snug cursor-pointer hover:underline">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500">
                    by <span className="text-neutral-700 font-medium">{item.house}</span>
                  </p>
                  <p className="font-sans text-xs text-neutral-500">
                    {item.date}
                  </p>
                  <p className="font-sans text-xs text-neutral-400 font-light pt-0.5 truncate">
                    {item.location}
                  </p>
                </div>

                {/* Left-Aligned View Items Action Button */}
                <button className="mt-3 w-32 bg-[#222222] hover:bg-[#8B1E2F] text-white font-sans text-xs font-normal py-2 px-4 rounded-xs transition-colors duration-200 cursor-pointer text-center whitespace-nowrap">
                  View Items
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}