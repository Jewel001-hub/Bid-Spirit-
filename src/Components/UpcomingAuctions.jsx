import React, { useState } from "react";
import BidModal from "./BidModal";
import lionArt from "../assets/Ban.jpg";
import watchAsset from "../assets/pocket.avif";
import antiqueAsset from "../assets/mab2.jpg";
import Watch from "../assets/rolex.jpg";
import Pearl from "../assets/pearl.jpg";
import Pendant from "../assets/pendant.jpg";
import Brace from "../assets/Brace.jpg";
import Necklace from "../assets/neck.jpg";
import Telescope from "../assets/tele.jpg";
import Coin from "../assets/image.png";
import Diamonds from "../assets/Diamonds.png";
import Perfume from "../assets/Perf.png";
import Jug from "../assets/jug.png";
import Asian from "../assets/asian.jpg";
import Gold from "../assets/Gold.jpg";
import Calli from "../assets/cal.avif";
import Bud from "../assets/Bud.avif";
import Japan from "../assets/japan.avif";
import Chinese from "../assets/chinese.avif";
import Modern from "../assets/modern.avif";
import Teletop from "../assets/teletop.avif";
import Brass from "../assets/brass.avif";
import Abs from "../assets/abstract.avif";
import Pot from "../assets/pot.jpg";
import Dragon from "../assets/dragon.jpg";
import Rings from "../assets/Ring2.jpg";
import Persian from "../assets/persian.jpg";
import Rug from "../assets/rug2.jpg";
import Neck from "../assets/necklace.jpg";
import Oil from "../assets/oil.jpg";
import Vintage from "../assets/vintage.jpg";
import Comic2 from "../assets/comic2.jpg";
import Coin2 from "../assets/coin2.jpg";
import Maps from "../assets/map.jpg";
import Gloves from "../assets/gloves.jpg";
import Sports from "../assets/sports.jpg";
import Jade from "../assets/jade.png";
import { Diamond } from "lucide-react";

const localUpcomingAuctions = [
  {
    id: "u1",
    coverImage: Jug,
    title: "Exclusive Jewellery Rare Gemstones & Antiques 2",
    house: "Simrit Collection",
    rating: 4.9,
    reviewsCount: 18,
    date: "July 12, 10:00 PM GMT+1",
    location: "BOISE, ID, US",
    isTimed: true,
    tagType: null, 
    featuredItems: [
      { id: "f1", aspect: "aspect-[4/3]", type: "wide", itemImage: Necklace },
      { id: "f2", aspect: "aspect-[3/4]", type: "tall", itemImage: Telescope },
      { id: "f3", aspect: "aspect-square", type: "square", itemImage: Coin },
      { id: "f4", aspect: "aspect-[16/9]", type: "wide", itemImage: Perfume },
    ]
  },
  {
    id: "u2",
    coverImage: Bud,
    title: "Universal Masters: Eastern-Western Paintings & Fine Asian Decorative Arts",
    house: "Hotspot Auctions",
    rating: 4.7,
    reviewsCount: 72,
    date: "July 12, 11:00 PM GMT+1",
    location: "Amherst, NY, US",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f5", aspect: "aspect-square", type: "square", itemImage: Calli },
      { id: "f6", aspect: "aspect-[4/3]", type: "wide", itemImage: Pot },
      { id: "f7", aspect: "aspect-[3/5]", type: "tall", itemImage: Asian },
    ]
  },
  {
    id: "u3",
    coverImage: Chinese,
    title: "Fine Asian Art I & Imperial Porcelain Masterpieces",
    house: "Nagel Auction",
    rating: 4.8,
    reviewsCount: 94,
    date: "July 13, 8:30 AM GMT+1",
    location: "Stuttgart, Germany",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f8", aspect: "aspect-[3/4]", type: "tall", itemImage: Dragon},
      { id: "f9", aspect: "aspect-square", type: "square", itemImage: Jade },
      { id: "f10", aspect: "aspect-[4/3]", type: "wide", itemImage: Japan },
    ]
  },
  {
    id: "u4",
    coverImage: Modern,
    title: "Decorative Arts, Mid-Century Modern Design & Sculptures",
    house: "Leonard Joel",
    rating: 4.6,
    reviewsCount: 144,
    date: "July 13, 9:00 AM GMT+1",
    location: "Hawthorn, Australia",
    isTimed: false,
    tagType: "lively-featured", 
    featuredItems: [
      { id: "f11", aspect: "aspect-square", type: "square", itemImage: lionArt },
      { id: "f12", aspect: "aspect-[4/3]", type: "wide", itemImage: Abs },
      { id: "f13", aspect: "aspect-[3/4]", type: "tall", itemImage: Teletop },
      { id: "f14", aspect: "aspect-[16/9]", type: "wide", itemImage:Brass },
    ]
  },
  {
    id: "u5",
    coverImage: Neck,
    title: "Ethical Diamonds, Rare Emeralds & High Luxury Gemstones",
    house: "Ozbid Auctions",
    rating: 4.4,
    reviewsCount: 26,
    date: "July 13, 11:00 AM GMT+1",
    location: "Sydney, Australia",
    isTimed: true,
    tagType: null,
    featuredItems: [
      { id: "f15", aspect: "aspect-[4/3]", type: "wide", itemImage: Diamonds },
      { id: "f16", aspect: "aspect-square", type: "square", itemImage: Gold },
      { id: "f17", aspect: "aspect-[3/4]", type: "tall", itemImage: Rings },
    ]
  },
  {
    id: "u6",
    coverImage: Watch,
    title: "Summer Jewels & Midsummer Prestige Collection",
    house: "Finarte",
    rating: 4.3,
    reviewsCount: 47,
    date: "July 13, 2:00 PM GMT+1",
    location: "Milano, Italy",
    isTimed: false,
    tagType: null,
    featuredItems: [
      { id: "f18", aspect: "aspect-square", type: "square", itemImage: Pearl },
      { id: "f19", aspect: "aspect-[16/9]", type: "wide", itemImage: Brace },
      { id: "f20", aspect: "aspect-[3/4]", type: "tall", itemImage: Pendant },
    ]
  },
  {
    id: "u7",
    coverImage: Persian,
    title: "Persian & Oriental Carpets, Fine Art & Antique Estates",
    house: "5th Avenue Auctioneers",
    rating: 4.5,
    reviewsCount: 8,
    date: "July 13, 6:00 PM GMT+1",
    location: "Johannesburg, South Africa",
    isTimed: true,
    tagType: null,
    featuredItems: [
      { id: "f21", aspect: "aspect-[4/3]", type: "wide", itemImage: Vintage },
      { id: "f22", aspect: "aspect-[3/4]", type: "tall", itemImage: Oil },
      { id: "f23", aspect: "aspect-square", type: "square", itemImage: Rug },
    ]
  },
  {
    id: "u8",
    coverImage: Sports,
    title: "Historical Collectibles, Rare Comics & Sports Trading Cards",
    house: "Saco River Auction",
    rating: 4.7,
    reviewsCount: 89,
    date: "July 13, 7:00 PM GMT+1",
    location: "Scarborough, ME, US",
    isTimed: false,
    tagType: "lively-premium", 
    featuredItems: [
      { id: "f24", aspect: "aspect-[3/4]", type: "tall", itemImage: Comic2 },
      { id: "f25", aspect: "aspect-square", type: "square", itemImage: Coin2},
      { id: "f26", aspect: "aspect-[4/3]", type: "wide", itemImage: Gloves },
      { id: "f27", aspect: "aspect-[3/5]", type: "tall", itemImage:  Maps},
    ]
  }
];

export default function UpcomingAuctions() {
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for image popup light-box
  const [popupImage, setPopupImage] = useState(null);

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
                <div className="w-full h-37.5 md:h-40 bg-neutral-100 border border-neutral-200 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {auction.coverImage ? (
                    <img 
                      src={auction.coverImage} 
                      alt={`${auction.title} catalog cover`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-neutral-400 font-serif text-xs italic tracking-wider">Catalog Cover</span>
                  )}
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
                  className="w-full bg-[#8B1E2F] hover:bg-neutral-900 text-white font-sans text-xs md:text-sm font-semibold py-3 px-4 rounded-sm transition-colors duration-200 text-center shadow-xs cursor-pointer"
                >
                  {auction.isTimed ? "View Items" : "Enter Live Auction"}
                </button>

                <button 
                  onClick={() => triggerBidModal(auction)}
                  className="font-sans text-xs md:text-sm text-blue-600 hover:text-blue-800 hover:underline pt-0.5 self-start md:self-auto cursor-pointer"
                >
                  Register to bid
                </button>
              </div>

              {/* 4. THE ASSETS THUMBNAIL TRACK (INCREASED SIZES & CLICK EVENT ADDED) */}
              <div className="order-3 md:order-0 md:col-start-2 md:col-span-2 md:row-start-2 mt-4 relative w-full">
                <div className="flex items-end gap-6 overflow-x-auto pb-3 pt-2 scrollbar-none snap-x">
                  {auction.featuredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex flex-col items-start shrink-0 relative group snap-start"
                    >
                      {/* RENDER DYNAMIC ANIMATED TAGS */}
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

                      {!auction.tagType && <div className="h-4" />}

                      {/* Dynamic Sizing Shape Box Base - SIZED UP to h-24 / md:h-28 */}
                      <div 
                        onClick={() => setPopupImage(item.itemImage)}
                        className={`h-24 md:h-28 ${item.aspect} bg-neutral-50 border border-neutral-200 p-1 flex items-center justify-center hover:border-[#8B1E2F] transition-colors shadow-xs cursor-pointer overflow-hidden rounded-xs`}
                      >
                        {item.itemImage ? (
                          <img 
                            src={item.itemImage} 
                            alt="Featured item lot thumbnail" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <div className="w-full h-full bg-neutral-200/60 rounded-xs flex items-center justify-center text-[10px] font-sans font-light text-neutral-400 capitalize px-2 text-center">
                            {item.type}
                          </div>
                        )}
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

      {/* RENDER DYNAMIC IMAGE POPUP LIGHTBOX */}
      {popupImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 transition-opacity duration-300"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative max-w-3xl max-h-[85vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 text-3xl font-sans focus:outline-none transition-colors"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>
            <img 
              src={popupImage} 
              alt="Expanded lot view" 
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()} // Prevents clicking the image itself from closing modal
            />
          </div>
        </div>
      )}

      <BidModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        auctionItem={selectedAuction} 
      />
    </section>
  );
}