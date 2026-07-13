import React from "react";
import { marketplaceItems } from "../Utilities/AuctionData";

export default function NewMarketplace() {
  return (
    <>
      <section className="w-full bg-white pt-16 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight">
              Sales From Auction Houses New To Our Marketplace
            </h2>
            <hr className="mt-1" />
          </div>

          {/* THREE-COLUMN ITEM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col justify-between bg-white border border-neutral-200/70 overflow-hidden rounded-sm p-4"
              >
                {/* Square Product Frame */}
                <div className="w-full aspect-square bg-neutral-50 overflow-hidden mb-5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Metadata & Context Content */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-sans text-sm font-semibold text-neutral-900 group-hover:text-[#8B1E2F] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 font-light">
                      by <span className="text-neutral-700 font-normal underline cursor-pointer">{item.house}</span>
                    </p>
                  </div>

                  {/* Logistics Stamp & Button Row */}
                  <div className="pt-3 border-t border-neutral-100 flex flex-col justify-end space-y-3">
                    <div className="font-sans text-[11px] text-neutral-600 tracking-wide space-y-0.5">
                      <p className="font-medium text-neutral-800">{item.date}</p>
                      <p className="text-neutral-400 font-light">{item.location}</p>
                    </div>
                    
                    <button className="w-full bg-[#8B1E2F] hover:bg-neutral-950 text-white font-sans text-[11px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-sm transition-colors duration-300">
                      View Items
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE CRISP EDITORIAL DIVIDER LINE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <hr className="border-neutral-500/60" />
      </div>
    </>
  );
}