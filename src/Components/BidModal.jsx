import React, { useState } from "react";

export default function BidModal({ isOpen, onClose, auctionItem }) {
  if (!isOpen || !auctionItem) return null;

  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bidAmount || parseFloat(bidAmount) <= 0) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setBidAmount("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* SEMI-TRANSPARENT BACKGROUND BLUR OVERLAY */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs" 
        onClick={onClose}
      />

      {/* THE MODAL BOX CANVAS */}
      <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-4 z-20 text-neutral-400 hover:text-neutral-900 font-sans text-lg"
        >
          ✕
        </button>

        {/* LEFT COLUMN: THE SPECIFIC ITEM DETAIL FRAME */}
        <div className="bg-neutral-50 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-neutral-100">
          <div className="w-full aspect-square bg-neutral-200 overflow-hidden rounded-xs mb-4">
            <img 
              src={auctionItem.coverImage || auctionItem.image} 
              alt={auctionItem.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full text-left space-y-1">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8B1E2F]">
              Current Live Lot
            </span>
            <h4 className="font-serif text-base text-neutral-900 line-clamp-1">
              {auctionItem.title}
            </h4>
            <p className="font-sans text-xs text-neutral-400 font-light">
              Hosted by {auctionItem.house}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE BID TRANSACTION FORM */}
        <div className="p-8 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-2 animate-fade-in">
              <span className="text-2xl">✓</span>
              <h4 className="font-serif text-lg text-neutral-900">Bid Successfully Placed</h4>
              <p className="font-sans text-xs text-neutral-400 font-light">Your premium offer has been logged into the ledger.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-neutral-950">Place Live Bid</h3>
                <p className="font-sans text-xs text-neutral-400 font-light">
                  Set your maximum manual amount to enter the live marketplace queue.
                </p>
              </div>

              {/* LIVE TRACKER BLOCK */}
              <div className="bg-neutral-50 p-3 rounded-xs border border-neutral-100 flex justify-between items-center">
                <span className="font-sans text-xs text-neutral-500">Opening Estimate:</span>
                <span className="font-sans text-xs font-bold text-neutral-900">$12,500 USD</span>
              </div>

              {/* PREMIUM INPUT STYLE */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Your Bid Amount ($ USD)
                </label>
                <input 
                  type="number" 
                  required
                  placeholder="Enter custom amount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full font-sans text-sm bg-transparent border border-neutral-200 focus:border-neutral-950 px-4 py-3 outline-none rounded-sm transition-colors"
                />
              </div>

              {/* TRANSACTION STRAP BUTTON */}
              <button 
                type="submit"
                className="w-full bg-[#8B1E2F] hover:bg-neutral-950 text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-sm transition-colors duration-300"
              >
                Submit Premium Bid
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}