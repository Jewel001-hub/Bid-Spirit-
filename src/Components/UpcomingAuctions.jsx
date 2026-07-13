import React, { useState } from "react";
import BidModal from "./BidModal";

// Expanded to 8 distinct premium rows matching the structural design perfectly
const localUpcomingAuctions = [
  {
    id: "u1",
    title: "Exclusive Jewellery Rare Gemstones & Antiques 2",
    house: "Simrit Collection",
    rating: 4.9,
    reviewsCount: 18,
    date: "July 12, 10:00 PM GMT+1",
    location: "BOISE, ID, US",
    isTimed: true,
    tagType: null, // Clean row
    featuredItems: [
      { id: "f1", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f2", aspect: "aspect-[3/4]", type: "tall" },
      { id: "f3", aspect: "aspect-square", type: "square" },
      { id: "f4", aspect: "aspect-[16/9]", type: "wide" },
    ]
  },
  {
    id: "u2",
    title: "Universal Masters: Eastern-Western Paintings & Fine Asian Decorative Arts",
    house: "Hotspot Auctions",
    rating: 4.7,
    reviewsCount: 72,
    date: "July 12, 11:00 PM GMT+1",
    location: "Amherst, NY, US",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f5", aspect: "aspect-square", type: "square" },
      { id: "f6", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f7", aspect: "aspect-[3/5]", type: "tall" },
    ]
  },
  {
    id: "u3",
    title: "Fine Asian Art I & Imperial Porcelain Masterpieces",
    house: "Nagel Auction",
    rating: 4.8,
    reviewsCount: 94,
    date: "July 13, 8:30 AM GMT+1",
    location: "Stuttgart, Germany",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f8", aspect: "aspect-[3/4]", type: "tall" },
      { id: "f9", aspect: "aspect-square", type: "square" },
      { id: "f10", aspect: "aspect-[4/3]", type: "wide" },
    ]
  },
  {
    id: "u4",
    title: "Decorative Arts, Mid-Century Modern Design & Sculptures",
    house: "Leonard Joel",
    rating: 4.6,
    reviewsCount: 144,
    date: "July 13, 9:00 AM GMT+1",
    location: "Hawthorn, Australia",
    isTimed: false,
    tagType: "lively-featured", // MIDDLE ROW: Gets the active animated coily tag
    featuredItems: [
      { id: "f11", aspect: "aspect-square", type: "square" },
      { id: "f12", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f13", aspect: "aspect-[3/4]", type: "tall" },
      { id: "f14", aspect: "aspect-[16/9]", type: "wide" },
    ]
  },
  {
    id: "u5",
    title: "Ethical Diamonds, Rare Emeralds & High Luxury Gemstones",
    house: "Ozbid Auctions",
    rating: 4.4,
    reviewsCount: 26,
    date: "July 13, 11:00 AM GMT+1",
    location: "Sydney, Australia",
    isTimed: true,
    tagType: null,
    featuredItems: [
      { id: "f15", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f16", aspect: "aspect-square", type: "square" },
      { id: "f17", aspect: "aspect-[3/4]", type: "tall" },
    ]
  },
  {
    id: "u6",
    title: "Summer Jewels & Midsummer Prestige Collection",
    house: "Finarte",
    rating: 4.3,
    reviewsCount: 47,
    date: "July 13, 2:00 PM GMT+1",
    location: "Milano, Italy",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f18", aspect: "aspect-square", type: "square" },
      { id: "f19", aspect: "aspect-[16/9]", type: "wide" },
      { id: "f20", aspect: "aspect-[3/4]", type: "tall" },
    ]
  },
  {
    id: "u7",
    title: "Persian & Oriental Carpets, Fine Art & Antique Estates",
    house: "5th Avenue Auctioneers",
    rating: 4.5,
    reviewsCount: 8,
    date: "July 13, 6:00 PM GMT+1",
    location: "Johannesburg, South Africa",
    isTimed: true,
    tagType: null,
    featuredItems: [
      { id: "f21", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f22", aspect: "aspect-[3/4]", type: "tall" },
      { id: "f23", aspect: "aspect-square", type: "square" },
    ]
  },
  {
    id: "u8",
    title: "Historical Collectibles, Rare Comics & Sports Trading Cards",
    house: "Saco River Auction",
    rating: 4.7,
    reviewsCount: 89,
    date: "July 13, 7:00 PM GMT+1",
    location: "Scarborough, ME, US",
    isTimed: false,
    tagType: "lively-premium", // LAST ROW: Gets a distinct glowing premium style
    featuredItems: [
      { id: "f24", aspect: "aspect-[3/4]", type: "tall" },
      { id: "f25", aspect: "aspect-square", type: "square" },
      { id: "f26", aspect: "aspect-[4/3]", type: "wide" },
      { id: "f27", aspect: "aspect-[3/5]", type: "tall" },
    ]
  }
];

export default function UpcomingAuctions() {
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerBidModal = (auction) => {
    setSelectedAuction(auction);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-white pt-6 pb-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="border-b border-neutral-200 pb-3 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-800 tracking-tight">
            Upcoming Online Auctions
          </h2>
        </div>

        {/* CONTAINER STACK (8 Full Rows) */}
        <div className="space-y-14">
          {localUpcomingAuctions.map((auction) => (
            <div 
              key={auction.id} 
              className="border-b border-neutral-200/60 pb-10 last:border-0 flex flex-col md:grid md:grid-cols-[210px_1fr_220px] gap-x-8 gap-y-2"
            >
              
              {/* 1. TEXT INFO BLOCK */}
              <div className="order-1 md:order-0 md:col-start-2 md:row-start-1 min-w-0 space-y-1.5">
                <h3 className="font-sans text-lg md:text-xl font-normal text-neutral-900 tracking-tight leading-snug hover:text-[#8B1E2F] cursor-pointer">
                  {auction.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-500">
                  by <span className="text-neutral-700 underline cursor-pointer font-light">{auction.house}</span>
                </p>
                
                <div className="flex items-center gap-1 py-0.5">
                  <span className="text-amber-500 text-xs">★★★★★</span>
                  <span className="font-sans text-[11px] text-neutral-400">
                    {auction.rating} ({auction.reviewsCount} Reviews)
                  </span>
                </div>

                <div className="font-sans text-xs md:text-sm text-neutral-600 space-y-0.5 pt-1">
                  <p className="font-medium text-neutral-800">{auction.date}</p>
                  <p className="uppercase text-neutral-400 tracking-wide text-[11px] font-light">{auction.location}</p>
                </div>
              </div>

              {/* 2. MAIN COVER IMAGE CONTAINER */}
              <div className="order-2 md:order-0 md:col-start-1 md:row-start-1 md:row-span-2 w-full shrink-0">
                <div className="w-full h-37.5 md:h-40 bg-neutral-100 border border-neutral-200 rounded-sm flex items-center justify-center relative overflow-hidden group">
                  <span className="text-neutral-400 font-serif text-xs italic tracking-wider">Catalog Cover</span>
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/5 transition-colors" />
                </div>
              </div>

              {/* 3. ACTION CONTROLS PANEL */}
              <div className="order-4 md:order-0 md:col-start-3 md:row-start-1 w-full shrink-0 flex flex-col items-start md:items-end gap-2 pt-2 md:pt-0">
                <div className="flex items-center gap-1.5 text-xs font-sans text-neutral-700 font-medium">
                  {auction.isTimed ? (
                    <div className="flex items-center gap-1">
                      <span className="inline-block animate-pulse text-red-500"></span> Timed Auction
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-0.5" /> Live Auction
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => triggerBidModal(auction)}
                  className="w-full bg-[#E3002A] hover:bg-neutral-900 text-white font-sans text-xs md:text-sm font-semibold py-3 px-4 rounded-sm transition-colors duration-200 text-center shadow-xs"
                >
                  {auction.isTimed ? "View Items" : "Enter Live Auction"}
                </button>

                <button 
                  onClick={() => triggerBidModal(auction)}
                  className="font-sans text-xs md:text-sm text-blue-600 hover:text-blue-800 hover:underline pt-0.5 self-start md:self-auto"
                >
                  Register to bid
                </button>
              </div>

              {/* 4. THE ASSETS THUMBNAIL TRACK (Shifts right on desktop under text column) */}
              <div className="order-3 md:order-0 md:col-start-2 md:col-span-2 md:row-start-2 mt-4 relative w-full">
                <div className="flex items-end gap-3.5 overflow-x-auto pb-3 pt-2 scrollbar-none snap-x">
                  {auction.featuredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex flex-col items-start shrink-0 relative group snap-start"
                    >
                      {/* RENDER DYNAMIC ANIMATED TAGS ONLY ON SPECIFIC DESIGNATED ROWS */}
                      {auction.tagType === "lively-featured" && (
                        <span className="bg-[#B37D14] text-white text-[9px] font-serif italic font-semibold px-2 py-0.5 rounded-t-xs tracking-wide select-none shadow-xs relative overflow-hidden animate-pulse">
                          Featured Lot 
                        </span>
                      )}

                      {auction.tagType === "lively-premium" && (
                        <span className="bg-linear-to-r from-[#8B1E2F] to-neutral-950 text-white text-[9px] font-serif italic font-semibold px-2 py-0.5 rounded-t-xs tracking-wider select-none shadow-xs border-b border-amber-500/30">
                          Premium Choice
                        </span>
                      )}

                      {/* If row doesn't have a tag, it stays completely plain and clean as requested */}
                      {!auction.tagType && <div className="h-4" />}

                      {/* Dynamic Sizing Shape Box Base */}
                      <div className={`h-16.25 md:h-18.75 ${item.aspect} bg-neutral-50 border border-neutral-200 p-1 flex items-center justify-center hover:border-neutral-800 transition-colors shadow-2xs cursor-pointer`}>
                        <div className="w-full h-full bg-neutral-200/60 rounded-xs flex items-center justify-center text-[9px] font-sans font-light text-neutral-400 capitalize px-2 text-center">
                          {item.type}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Mobile swipe indicator */}
                  <div className="md:hidden sticky right-2 bottom-4 self-center z-10">
                    <button className="w-8 h-8 rounded-full bg-white/90 shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 font-bold active:scale-95 transition-transform">
                      ➔
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <BidModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        auctionItem={selectedAuction} 
      />
    </section>
  );
}